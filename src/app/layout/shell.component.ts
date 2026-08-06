import { NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { Lang } from '../data/cv.model';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Button, NgClass],
  template: `
    <div class="shell">
      <header class="topbar">
        <a class="brand" [routerLink]="['/', lang()]">{{ cv().name }}</a>

        <nav class="nav" aria-label="Primary">
          @for (item of navItems(); track item.path) {
            <a
              [routerLink]="item.link"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: item.exact }"
              >{{ item.label }}</a
            >
          }
        </nav>

        <div class="actions">
          <p-button
            [label]="'EN'"
            [text]="true"
            size="small"
            [styleClass]="lang() === 'en' ? 'lang-btn active-lang' : 'lang-btn'"
            (onClick)="switchLang('en')"
          />
          <p-button
            [label]="'TR'"
            [text]="true"
            size="small"
            [styleClass]="lang() === 'tr' ? 'lang-btn active-lang' : 'lang-btn'"
            (onClick)="switchLang('tr')"
          />
          <button
            type="button"
            class="menu-toggle"
            [attr.aria-expanded]="menuOpen"
            (click)="menuOpen = !menuOpen"
          >
            <i [ngClass]="menuOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
          </button>
        </div>
      </header>

      @if (menuOpen) {
        <nav class="mobile-nav" aria-label="Mobile">
          @for (item of navItems(); track item.path) {
            <a [routerLink]="item.link" (click)="menuOpen = false">{{ item.label }}</a>
          }
        </nav>
      }

      <main class="main">
        <router-outlet />
      </main>

      <footer class="footer">
        <span>{{ cv().name }}</span>
        <span>{{ ui().footer }}</span>
      </footer>
    </div>
  `,
  styles: `
    .shell {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 20;
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 1rem;
      align-items: center;
      padding: 0.9rem clamp(1rem, 4vw, 2.5rem);
      backdrop-filter: blur(14px);
      background: color-mix(in srgb, var(--bg) 82%, transparent);
      border-bottom: 1px solid var(--line);
    }

    .brand {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 1.2rem;
      letter-spacing: -0.02em;
      color: var(--ink);
      text-decoration: none;
    }

    .nav {
      display: none;
      justify-content: center;
      gap: 0.35rem;
      flex-wrap: wrap;
    }

    .nav a {
      text-decoration: none;
      color: var(--muted);
      font-size: 0.92rem;
      padding: 0.45rem 0.7rem;
      border-radius: 999px;
      transition:
        color 180ms ease,
        background 180ms ease;
    }

    .nav a:hover,
    .nav a.active {
      color: var(--ink);
      background: var(--chip);
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.15rem;
    }

    :host ::ng-deep .lang-btn {
      color: var(--muted) !important;
      font-weight: 600;
    }

    :host ::ng-deep .active-lang {
      color: var(--accent) !important;
    }

    .menu-toggle {
      display: inline-flex;
      border: 0;
      background: transparent;
      color: var(--ink);
      font-size: 1.2rem;
      margin-left: 0.35rem;
      cursor: pointer;
    }

    .mobile-nav {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      padding: 0.75rem 1rem 1rem;
      border-bottom: 1px solid var(--line);
      background: var(--bg-elevated);
    }

    .mobile-nav a {
      text-decoration: none;
      color: var(--ink);
      padding: 0.7rem 0.5rem;
      border-radius: 0.6rem;
    }

    .main {
      flex: 1;
      width: min(1120px, calc(100% - 2rem));
      margin: 0 auto;
      padding: clamp(1.5rem, 4vw, 3rem) 0 3rem;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 1.25rem clamp(1rem, 4vw, 2.5rem);
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 0.9rem;
    }

    @media (min-width: 960px) {
      .nav {
        display: flex;
      }

      .menu-toggle,
      .mobile-nav {
        display: none;
      }
    }
  `,
})
export class ShellComponent {
  private readonly language = inject(LanguageService);
  private readonly router = inject(Router);

  readonly lang = this.language.lang;
  readonly cv = this.language.cv;
  readonly ui = this.language.ui;
  menuOpen = false;

  readonly navItems = computed(() => {
    const lang = this.lang();
    const nav = this.ui().nav;
    return [
      { path: '', label: nav.home, link: ['/', lang], exact: true },
      { path: 'about', label: nav.about, link: ['/', lang, 'about'], exact: false },
      { path: 'experience', label: nav.experience, link: ['/', lang, 'experience'], exact: false },
      { path: 'skills', label: nav.skills, link: ['/', lang, 'skills'], exact: false },
      { path: 'projects', label: nav.projects, link: ['/', lang, 'projects'], exact: false },
      { path: 'links', label: nav.links, link: ['/', lang, 'links'], exact: false },
      { path: 'contact', label: nav.contact, link: ['/', lang, 'contact'], exact: false },
    ];
  });

  switchLang(next: Lang): void {
    const current = this.router.url.split('?')[0].split('#')[0];
    const parts = current.split('/').filter(Boolean);
    if (parts.length === 0) {
      void this.router.navigate(['/', next]);
      return;
    }
    parts[0] = next;
    void this.router.navigateByUrl('/' + parts.join('/'));
  }
}
