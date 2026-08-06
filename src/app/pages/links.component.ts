import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-links',
  template: `
    <section class="page">
      <header class="page-header">
        <h1>{{ ui().links.title }}</h1>
        <p>{{ ui().links.subtitle }}</p>
      </header>

      <div class="grid">
        @for (link of cv().social; track link.url) {
          <a class="item" [href]="link.url" target="_blank" rel="noopener noreferrer">
            <i [class]="link.icon" aria-hidden="true"></i>
            <h2>{{ link.label }}</h2>
            <p>{{ link.description }}</p>
          </a>
        }

        <a class="item" [href]="cv().cvFile" target="_blank" rel="noopener noreferrer">
          <i class="pi pi-file" aria-hidden="true"></i>
          <h2>{{ ui().links.cvTitle }}</h2>
          <p>{{ ui().links.cvDesc }}</p>
        </a>
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

    .grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    .item {
      text-decoration: none;
      color: inherit;
      background: var(--bg-elevated);
      border: 1px solid var(--line);
      border-radius: 1.1rem;
      padding: 1.3rem;
      transition: transform 200ms ease, border-color 200ms ease;
    }

    .item:hover {
      transform: translateY(-3px);
      border-color: color-mix(in srgb, var(--accent) 50%, var(--line));
    }

    i {
      font-size: 1.6rem;
      color: var(--accent);
    }

    h2 {
      margin: 0.8rem 0 0.35rem;
      font-size: 1.1rem;
    }

    p {
      margin: 0;
      color: var(--muted);
      line-height: 1.5;
      font-size: 0.95rem;
    }
  `,
})
export class LinksComponent implements OnInit {
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly lang = this.language.lang;
  readonly cv = this.language.cv;
  readonly ui = this.language.ui;

  ngOnInit(): void {
    this.seo.update(this.ui().links.title, this.ui().links.subtitle, `/${this.lang()}/links`);
  }
}
