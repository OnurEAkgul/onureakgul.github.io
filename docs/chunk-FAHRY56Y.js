import {
  LanguageService,
  Meta,
  Title
} from "./chunk-SLO2KBPC.js";
import {
  DOCUMENT,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SCEUT42M.js";

// src/app/services/seo.service.ts
var SeoService = class _SeoService {
  title = inject(Title);
  meta = inject(Meta);
  language = inject(LanguageService);
  document = inject(DOCUMENT);
  siteUrl = "https://onureakgul.github.io";
  update(pageTitle, description, path) {
    const lang = this.language.lang();
    const cv = this.language.cv();
    const fullTitle = `${pageTitle} | ${cv.name}`;
    const url = `${this.siteUrl}${path}`;
    this.title.setTitle(fullTitle);
    this.document.documentElement.lang = lang;
    this.meta.updateTag({ name: "description", content: description });
    this.meta.updateTag({
      name: "keywords",
      content: "Onur Eren Akg\xFCl, Full Stack Developer, Angular, ASP.NET Core, .NET 8, PostgreSQL, PrimeNG, Ankara"
    });
    this.meta.updateTag({ name: "author", content: cv.name });
    this.meta.updateTag({ property: "og:title", content: fullTitle });
    this.meta.updateTag({ property: "og:description", content: description });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({ property: "og:url", content: url });
    this.meta.updateTag({ property: "og:locale", content: lang === "tr" ? "tr_TR" : "en_US" });
    this.meta.updateTag({ name: "twitter:card", content: "summary_large_image" });
    this.meta.updateTag({ name: "twitter:title", content: fullTitle });
    this.meta.updateTag({ name: "twitter:description", content: description });
    let canonical = this.document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      this.document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
    this.upsertJsonLd({
      "@context": "https://schema.org",
      "@type": "Person",
      name: cv.name,
      jobTitle: "Full Stack Developer",
      url: this.siteUrl,
      email: cv.email,
      telephone: cv.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ankara",
        addressCountry: "TR"
      },
      sameAs: cv.social.map((s) => s.url),
      knowsAbout: ["Angular", "ASP.NET Core", ".NET 8", "PostgreSQL", "PrimeNG", "TypeScript"]
    });
  }
  upsertJsonLd(data) {
    const id = "person-jsonld";
    let script = this.document.getElementById(id);
    if (!script) {
      script = this.document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
  static \u0275fac = function SeoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeoService, factory: _SeoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SeoService
};
//# sourceMappingURL=chunk-FAHRY56Y.js.map
