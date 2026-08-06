import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-experience',
  template: `
    <section class="page">
      <header class="page-header">
        <h1>{{ ui().experience.title }}</h1>
        <p>{{ ui().experience.subtitle }}</p>
      </header>

      <div class="layout">
        <aside class="rail">
          <article class="panel">
            <h2>{{ ui().experience.educationTitle }}</h2>
            <p class="lead">{{ ui().experience.educationLead }}</p>

            @for (edu of cv().education; track edu.degree + edu.school) {
              <div class="edu">
                <h3>{{ edu.degree }}</h3>
                <p class="school">{{ edu.school }}</p>
                <p class="meta">{{ edu.location }} · {{ edu.period }}</p>
                @if (edu.detail) {
                  <p class="detail">{{ edu.detail }}</p>
                }
              </div>
            }
          </article>

          <article class="panel">
            <h2>{{ ui().experience.highlightsTitle }}</h2>
            <ul>
              @for (item of ui().experience.highlights; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>
        </aside>

        <div class="roles">
          @for (role of cv().experience; track role.title + role.period; let i = $index) {
            <article class="role">
              <div class="role-head">
                <span class="index">{{ i + 1 < 10 ? '0' + (i + 1) : i + 1 }}</span>
                <div>
                  <h2>{{ role.title }}</h2>
                  <p class="company">{{ role.company }}</p>
                  <p class="meta">{{ role.period }} · {{ role.location }}</p>
                </div>
              </div>
              <ul>
                @for (bullet of role.bullets; track bullet) {
                  <li>{{ bullet }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .page-header h1 {
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 3.2rem);
      margin: 0 0 0.5rem;
      letter-spacing: -0.03em;
    }

    .page-header p {
      color: var(--muted);
      margin: 0 0 1.75rem;
      max-width: 40rem;
      line-height: 1.6;
    }

    .layout {
      display: grid;
      gap: 1.25rem;
    }

    .rail,
    .roles {
      display: grid;
      gap: 1rem;
    }

    .panel,
    .role {
      background: var(--bg-elevated);
      border: 1px solid var(--line);
      border-radius: 1.1rem;
      padding: 1.25rem 1.35rem;
    }

    .panel h2 {
      margin: 0 0 0.55rem;
      font-size: 1rem;
      color: var(--accent);
    }

    .lead {
      margin: 0 0 1rem;
      color: var(--muted);
      line-height: 1.55;
      font-size: 0.95rem;
    }

    .edu + .edu {
      margin-top: 0.95rem;
      padding-top: 0.95rem;
      border-top: 1px solid var(--line);
    }

    .edu h3 {
      margin: 0 0 0.2rem;
      font-size: 1.02rem;
      color: var(--ink);
    }

    .school {
      margin: 0;
      font-weight: 600;
      color: var(--ink-soft);
    }

    .detail {
      margin: 0.35rem 0 0;
      color: var(--accent);
      font-size: 0.92rem;
      font-weight: 600;
    }

    .panel ul,
    .role ul {
      margin: 0;
      padding-left: 1.05rem;
      color: var(--muted);
      line-height: 1.55;
      display: grid;
      gap: 0.45rem;
    }

    .role-head {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.9rem;
      margin-bottom: 0.9rem;
    }

    .index {
      font-family: var(--font-display);
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--accent);
      line-height: 1;
      padding-top: 0.15rem;
    }

    .role h2 {
      margin: 0 0 0.25rem;
      font-size: 1.25rem;
    }

    .company {
      margin: 0;
      font-weight: 600;
      color: var(--ink-soft);
    }

    .meta {
      margin: 0.2rem 0 0;
      color: var(--accent);
      font-size: 0.95rem;
    }

    @media (min-width: 960px) {
      .layout {
        grid-template-columns: minmax(240px, 0.9fr) minmax(0, 1.6fr);
        align-items: start;
        gap: 1.5rem;
      }

      .rail {
        position: sticky;
        top: 5.5rem;
      }
    }
  `,
})
export class ExperienceComponent implements OnInit {
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly lang = this.language.lang;
  readonly cv = this.language.cv;
  readonly ui = this.language.ui;

  ngOnInit(): void {
    this.seo.update(
      this.ui().experience.title,
      this.ui().experience.subtitle,
      `/${this.lang()}/experience`,
    );
  }
}
