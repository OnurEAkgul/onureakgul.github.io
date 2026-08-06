import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-about',
  template: `
    <section class="page">
      <header class="page-header">
        <h1>{{ ui().about.title }}</h1>
      </header>

      <div class="hero-grid">
        <div class="photo">
          <img
            src="assets/images/kayakfoto.jpg"
            [alt]="cv().name"
            width="900"
            height="1100"
          />
        </div>

        <div class="content">
          <article class="panel">
            <h2>{{ ui().about.summaryTitle }}</h2>
            @for (paragraph of cv().summary; track paragraph) {
              <p>{{ paragraph }}</p>
            }
          </article>

          <div class="stack">
            <article class="panel">
              <h2>{{ ui().about.educationTitle }}</h2>
              @for (edu of cv().education; track edu.degree + edu.school) {
                <div class="edu">
                  <h3>{{ edu.degree }}</h3>
                  <p>{{ edu.school }} · {{ edu.location }}</p>
                  <p class="meta">{{ edu.period }}@if (edu.detail) { · {{ edu.detail }} }</p>
                </div>
              }
            </article>

            <article class="panel">
              <h2>{{ ui().about.languagesTitle }}</h2>
              <ul>
                @for (lang of cv().languages; track lang) {
                  <li>{{ lang }}</li>
                }
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .page-header h1 {
      font-family: var(--font-display);
      font-size: clamp(2rem, 5vw, 3.2rem);
      margin: 0 0 1.5rem;
      letter-spacing: -0.03em;
    }

    .hero-grid {
      display: grid;
      gap: 1.25rem;
    }

    .photo {
      border-radius: 1.25rem;
      overflow: hidden;
      box-shadow: var(--shadow);
      min-height: 18rem;
    }

    .photo img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      min-height: 18rem;
    }

    .content,
    .stack {
      display: grid;
      gap: 1.25rem;
    }

    .panel {
      background: var(--bg-elevated);
      border: 1px solid var(--line);
      border-radius: 1.1rem;
      padding: 1.35rem 1.4rem;
    }

    h2 {
      margin: 0 0 0.8rem;
      font-size: 1.1rem;
      color: var(--accent);
    }

    h3 {
      margin: 0 0 0.25rem;
      font-size: 1.05rem;
    }

    p,
    li {
      color: var(--muted);
      line-height: 1.65;
    }

    .panel > p + p {
      margin-top: 0.9rem;
    }

    .edu + .edu {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--line);
    }

    .meta {
      font-size: 0.92rem;
    }

    ul {
      margin: 0;
      padding-left: 1.1rem;
    }

    @media (min-width: 900px) {
      .hero-grid {
        grid-template-columns: 0.9fr 1.2fr;
        align-items: stretch;
        gap: 1.5rem;
      }

      .photo {
        position: sticky;
        top: 5.5rem;
        max-height: calc(100vh - 7rem);
      }

      .photo img {
        min-height: 100%;
      }
    }
  `,
})
export class AboutComponent implements OnInit {
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly lang = this.language.lang;
  readonly cv = this.language.cv;
  readonly ui = this.language.ui;

  ngOnInit(): void {
    this.seo.update(
      this.ui().about.title,
      this.cv().summary.join(' ').slice(0, 160),
      `/${this.lang()}/about`,
    );
  }
}
