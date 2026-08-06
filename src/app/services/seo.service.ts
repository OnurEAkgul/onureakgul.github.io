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
  private readonly ogImage = `${this.siteUrl}/assets/images/venedikfoto.jpg`;

  update(
    pageTitle: string,
    description: string,
    path: string,
    options?: { absoluteTitle?: boolean },
  ): void {
    const lang = this.language.lang();
    const cv = this.language.cv();
    const fullTitle = options?.absoluteTitle ? pageTitle : `${pageTitle} | ${cv.name}`;
    const url = `${this.siteUrl}${path === '/' ? '' : path}` || this.siteUrl;
    const locale = lang === 'tr' ? 'tr_TR' : 'en_US';
    const alternateLocale = lang === 'tr' ? 'en_US' : 'tr_TR';

    this.title.setTitle(fullTitle);
    this.document.documentElement.lang = lang;

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Onur Eren Akgül, Onur Eren Akgul, Onur Akgül, Full Stack Developer, Angular, ASP.NET Core, .NET 8, PostgreSQL, Ankara',
    });
    this.meta.updateTag({ name: 'author', content: cv.name });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });

    this.meta.updateTag({ property: 'og:site_name', content: cv.name });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: path === '/' || path === '/tr' ? 'profile' : 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:locale', content: locale });
    this.meta.updateTag({ property: 'og:locale:alternate', content: alternateLocale });
    this.meta.updateTag({ property: 'og:image', content: this.ogImage });
    this.meta.updateTag({ property: 'og:image:alt', content: cv.name });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: this.ogImage });
    this.meta.updateTag({ name: 'twitter:image:alt', content: cv.name });

    this.setLink('canonical', url);
    this.setHreflang(path);

    this.upsertJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${this.siteUrl}/#website`,
          url: this.siteUrl,
          name: cv.name,
          description: this.language.ui().meta.defaultDescription,
          inLanguage: ['en', 'tr'],
          publisher: { '@id': `${this.siteUrl}/#person` },
        },
        {
          '@type': 'Person',
          '@id': `${this.siteUrl}/#person`,
          name: cv.name,
          alternateName: ['Onur Eren Akgul', 'Onur Akgül', 'Onur Akgul'],
          jobTitle: 'Full Stack Developer',
          url: this.siteUrl,
          image: this.ogImage,
          email: `mailto:${cv.email}`,
          telephone: cv.phone,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ankara',
            addressCountry: 'TR',
          },
          sameAs: cv.social.map((s) => s.url),
          knowsAbout: [
            'Angular',
            'ASP.NET Core',
            '.NET 8',
            'PostgreSQL',
            'PrimeNG',
            'TypeScript',
            'Full Stack Development',
          ],
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: fullTitle,
          description,
          isPartOf: { '@id': `${this.siteUrl}/#website` },
          about: { '@id': `${this.siteUrl}/#person` },
          inLanguage: lang,
        },
      ],
    });
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;
    let link = this.document.querySelector(selector) as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      if (hreflang) {
        link.setAttribute('hreflang', hreflang);
      }
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setHreflang(path: string): void {
    const bare = path.replace(/^\/tr(?=\/|$)/, '').replace(/^\//, '');
    const enPath = bare ? `/${bare}` : '/';
    const trPath = bare ? `/tr/${bare}` : '/tr';

    this.setLink('alternate', `${this.siteUrl}${enPath === '/' ? '/' : enPath}`, 'en');
    this.setLink('alternate', `${this.siteUrl}${trPath}`, 'tr');
    this.setLink('alternate', `${this.siteUrl}/`, 'x-default');
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
