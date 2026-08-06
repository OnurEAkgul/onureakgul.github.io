import { Component, inject, OnInit } from '@angular/core';
import { Chip } from 'primeng/chip';
import { LanguageService } from '../services/language.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-skills',
  imports: [Chip],
  template: `
    <section class="page">
      <header class="page-header">
        <h1>{{ ui().skills.title }}</h1>
        <p>{{ ui().skills.subtitle }}</p>
      </header>

      <div class="groups">
        @for (group of cv().skills; track group.title) {
          <article class="group">
            <h2>{{ group.title }}</h2>
            <div class="chips">
              @for (item of group.items; track item) {
                <p-chip [label]="item" />
              }
            </div>
          </article>
        }
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

    .groups {
      display: grid;
      gap: 1rem;
    }

    .group {
      background: var(--bg-elevated);
      border: 1px solid var(--line);
      border-radius: 1.1rem;
      padding: 1.2rem 1.3rem;
    }

    h2 {
      margin: 0 0 0.85rem;
      font-size: 1.05rem;
      color: var(--accent);
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }
  `,
})
export class SkillsComponent implements OnInit {
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly lang = this.language.lang;
  readonly cv = this.language.cv;
  readonly ui = this.language.ui;

  ngOnInit(): void {
    this.seo.update(this.ui().skills.title, this.ui().skills.subtitle, this.language.path('skills'));
  }
}
