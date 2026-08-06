import {
  SeoService
} from "./chunk-FAHRY56Y.js";
import {
  LanguageService
} from "./chunk-SLO2KBPC.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SCEUT42M.js";

// src/app/pages/links.component.ts
var _forTrack0 = ($index, $item) => $item.url;
function LinksComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 3);
    \u0275\u0275domElement(1, "i", 6);
    \u0275\u0275domElementStart(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275domProperty("href", link_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275classMap(link_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.description);
  }
}
var LinksComponent = class _LinksComponent {
  language = inject(LanguageService);
  seo = inject(SeoService);
  lang = this.language.lang;
  cv = this.language.cv;
  ui = this.language.ui;
  ngOnInit() {
    this.seo.update(this.ui().links.title, this.ui().links.subtitle, `/${this.lang()}/links`);
  }
  static \u0275fac = function LinksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LinksComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LinksComponent, selectors: [["app-links"]], decls: 15, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "grid"], ["target", "_blank", "rel", "noopener noreferrer", 1, "item", 3, "href"], ["download", "", 1, "item", 3, "href"], ["aria-hidden", "true", 1, "pi", "pi-file"], ["aria-hidden", "true"]], template: function LinksComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 2);
      \u0275\u0275repeaterCreate(7, LinksComponent_For_8_Template, 6, 5, "a", 3, _forTrack0);
      \u0275\u0275domElementStart(9, "a", 4);
      \u0275\u0275domElement(10, "i", 5);
      \u0275\u0275domElementStart(11, "h2");
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "p");
      \u0275\u0275text(14);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.ui().links.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.ui().links.subtitle);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.cv().social);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("href", ctx.cv().cvFile, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.ui().links.cvTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.ui().links.cvDesc);
    }
  }, styles: ["\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  margin: 0 0 0.5rem;\n  letter-spacing: -0.03em;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n  margin: 0 0 1.75rem;\n  max-width: 40rem;\n  line-height: 1.6;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n.item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  background: var(--bg-elevated);\n  border: 1px solid var(--line);\n  border-radius: 1.1rem;\n  padding: 1.3rem;\n  transition: transform 200ms ease, border-color 200ms ease;\n}\n.item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: color-mix(in srgb, var(--accent) 50%, var(--line));\n}\ni[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: var(--accent);\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0.8rem 0 0.35rem;\n  font-size: 1.1rem;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted);\n  line-height: 1.5;\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=links.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinksComponent, [{
    type: Component,
    args: [{ selector: "app-links", template: `
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

        <a class="item" [href]="cv().cvFile" download>
          <i class="pi pi-file" aria-hidden="true"></i>
          <h2>{{ ui().links.cvTitle }}</h2>
          <p>{{ ui().links.cvDesc }}</p>
        </a>
      </div>
    </section>
  `, styles: ["/* angular:styles/component:css;0a8c1fd460a84d911cbde5db7aad877ee6e6ac13d7c3a429660117862ce47d5c;C:/Projeler/onureakgul.github.io/src/app/pages/links.component.ts */\n.page-header h1 {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  margin: 0 0 0.5rem;\n  letter-spacing: -0.03em;\n}\n.page-header p {\n  color: var(--muted);\n  margin: 0 0 1.75rem;\n  max-width: 40rem;\n  line-height: 1.6;\n}\n.grid {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n.item {\n  text-decoration: none;\n  color: inherit;\n  background: var(--bg-elevated);\n  border: 1px solid var(--line);\n  border-radius: 1.1rem;\n  padding: 1.3rem;\n  transition: transform 200ms ease, border-color 200ms ease;\n}\n.item:hover {\n  transform: translateY(-3px);\n  border-color: color-mix(in srgb, var(--accent) 50%, var(--line));\n}\ni {\n  font-size: 1.6rem;\n  color: var(--accent);\n}\nh2 {\n  margin: 0.8rem 0 0.35rem;\n  font-size: 1.1rem;\n}\np {\n  margin: 0;\n  color: var(--muted);\n  line-height: 1.5;\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=links.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LinksComponent, { className: "LinksComponent", filePath: "src/app/pages/links.component.ts", lineNumber: 85 });
})();
export {
  LinksComponent
};
//# sourceMappingURL=chunk-PQIBSUYF.js.map
