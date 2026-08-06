import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { LanguageService } from '../services/language.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Button],
  template: `
    <section class="hero">
      <div class="copy reveal">
        <p class="eyebrow">{{ cv().location }}</p>
        <h1>{{ cv().name }}</h1>
        <p class="headline">{{ cv().headline }}</p>
        <p class="lead">{{ ui().home.welcome }}</p>
        <div class="cta">
          <p-button
            [label]="ui().home.ctaProjects"
            [routerLink]="language.link('projects')"
            icon="pi pi-briefcase"
          />
          <p-button
            [label]="ui().home.ctaContact"
            [routerLink]="language.link('contact')"
            [outlined]="true"
            icon="pi pi-envelope"
          />
          <a class="cv-link" [href]="cv().cvFile" target="_blank" rel="noopener noreferrer">
            <p-button [label]="ui().home.ctaCv" [text]="true" icon="pi pi-download" />
          </a>
        </div>
      </div>
      <div class="visual reveal delay">
        <img src="assets/images/venedikfoto.jpg" [alt]="cv().name" width="720" height="900" />
      </div>
    </section>
  `,
  styles: `
    .hero {
      display: grid;
      gap: 2rem;
      align-items: center;
      min-height: calc(100vh - 10rem);
    }

    .eyebrow {
      color: var(--accent);
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.8rem;
      margin: 0 0 0.8rem;
    }

    h1 {
      font-family: var(--font-display);
      font-size: clamp(2.1rem, 4.8vw, 3.4rem);
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: -0.03em;
      margin: 0 0 0.8rem;
      color: var(--ink);
      text-wrap: balance;
    }

    .headline {
      font-size: clamp(1.05rem, 2.2vw, 1.35rem);
      color: var(--ink-soft);
      margin: 0 0 1rem;
      font-weight: 600;
    }

    .lead {
      color: var(--muted);
      font-size: 1.08rem;
      line-height: 1.65;
      max-width: 38rem;
      margin: 0 0 1.6rem;
    }

    .cta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
      align-items: center;
    }

    .cv-link {
      text-decoration: none;
    }

    .visual {
      border-radius: 1.5rem;
      overflow: hidden;
      min-height: 22rem;
      box-shadow: var(--shadow);
      position: relative;
    }

    .visual::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(160deg, transparent 40%, color-mix(in srgb, var(--accent) 25%, transparent));
      pointer-events: none;
    }

    .visual img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      min-height: 22rem;
      animation: drift 18s ease-in-out infinite alternate;
    }

    .reveal {
      animation: rise 700ms ease both;
    }

    .delay {
      animation-delay: 120ms;
    }

    @keyframes rise {
      from {
        opacity: 0;
        transform: translateY(18px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes drift {
      from {
        transform: scale(1.02);
      }
      to {
        transform: scale(1.08);
      }
    }

    @media (min-width: 900px) {
      .hero {
        grid-template-columns: 1.1fr 0.9fr;
        gap: 3rem;
      }
    }
  `,
})
export class HomeComponent implements OnInit {
  readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly lang = this.language.lang;
  readonly cv = this.language.cv;
  readonly ui = this.language.ui;

  ngOnInit(): void {
    const cv = this.cv();
    const ui = this.ui();
    this.seo.update(
      `${cv.name} | Full Stack Developer — Angular & .NET`,
      ui.meta.defaultDescription,
      this.language.path(),
      { absoluteTitle: true },
    );
  }
}
