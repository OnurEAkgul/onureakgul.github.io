import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly language = inject(LanguageService);
  private readonly document = inject(DOCUMENT);

  private readonly siteUrl = 'https://onureakgul.github.io';

  update(pageTitle: string, description: string, path: string): void {
    const lang = this.language.lang();
    const cv = this.language.cv();
    const fullTitle = `${pageTitle} | ${cv.name}`;
    const url = `${this.siteUrl}${path}`;

    this.title.setTitle(fullTitle);
    this.document.documentElement.lang = lang;

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Onur Eren Akgül, Full Stack Developer, Angular, ASP.NET Core, .NET 8, PostgreSQL, PrimeNG, Ankara',
    });
    this.meta.updateTag({ name: 'author', content: cv.name });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:locale', content: lang === 'tr' ? 'tr_TR' : 'en_US' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    let canonical = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    this.upsertJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: cv.name,
      jobTitle: 'Full Stack Developer',
      url: this.siteUrl,
      email: cv.email,
      telephone: cv.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ankara',
        addressCountry: 'TR',
      },
      sameAs: cv.social.map((s) => s.url),
      knowsAbout: ['Angular', 'ASP.NET Core', '.NET 8', 'PostgreSQL', 'PrimeNG', 'TypeScript'],
    });
  }

  private upsertJsonLd(data: Record<string, unknown>): void {
    const id = 'person-jsonld';
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
