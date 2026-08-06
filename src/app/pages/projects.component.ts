import { Component, inject, OnInit } from '@angular/core';
import { Tag } from 'primeng/tag';
import { LanguageService } from '../services/language.service';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-projects',
  imports: [Tag],
  template: `
    <section class="page">
      <header class="page-header">
        <h1>{{ ui().projects.title }}</h1>
        <p>{{ ui().projects.subtitle }}</p>
      </header>

      <div class="list">
        @for (project of cv().projects; track project.name) {
          <article class="project">
            <div class="head">
              <h2>{{ project.name }}</h2>
              <p-tag [value]="ui().projects.techLabel" severity="secondary" />
            </div>
            <p class="tech">{{ project.tech }}</p>
            <ul>
              @for (bullet of project.bullets; track bullet) {
                <li>{{ bullet }}</li>
              }
            </ul>
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
      max-width: 42rem;
      line-height: 1.6;
    }

    .list {
      display: grid;
      gap: 1rem;
    }

    .project {
      background: var(--bg-elevated);
      border: 1px solid var(--line);
      border-radius: 1.1rem;
      padding: 1.3rem 1.4rem;
      transition: transform 200ms ease, border-color 200ms ease;
    }

    .project:hover {
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--accent) 45%, var(--line));
    }

    .head {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: start;
      flex-wrap: wrap;
    }

    h2 {
      margin: 0;
      font-size: 1.25rem;
      max-width: 40rem;
    }

    .tech {
      margin: 0.7rem 0 0.9rem;
      color: var(--ink-soft);
      font-size: 0.95rem;
      line-height: 1.5;
    }

    ul {
      margin: 0;
      padding-left: 1.1rem;
      color: var(--muted);
      line-height: 1.6;
      display: grid;
      gap: 0.4rem;
    }
  `,
})
export class ProjectsComponent implements OnInit {
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly lang = this.language.lang;
  readonly cv = this.language.cv;
  readonly ui = this.language.ui;

  ngOnInit(): void {
    this.seo.update(
      this.ui().projects.title,
      this.ui().projects.subtitle,
      this.language.path('projects'),
    );
  }
}
