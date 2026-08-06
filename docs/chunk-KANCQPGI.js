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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SCEUT42M.js";

// src/app/pages/about.component.ts
var _forTrack0 = ($index, $item) => $item.degree + $item.school;
function AboutComponent_For_18_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const edu_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", edu_r1.detail, " ");
  }
}
function AboutComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 9);
    \u0275\u0275text(6);
    \u0275\u0275conditionalCreate(7, AboutComponent_For_18_Conditional_7_Template, 1, 1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const edu_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r1.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", edu_r1.school, " \xB7 ", edu_r1.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r1.period);
    \u0275\u0275advance();
    \u0275\u0275conditional(edu_r1.detail ? 7 : -1);
  }
}
function AboutComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lang_r2);
  }
}
var AboutComponent = class _AboutComponent {
  language = inject(LanguageService);
  seo = inject(SeoService);
  lang = this.language.lang;
  cv = this.language.cv;
  ui = this.language.ui;
  ngOnInit() {
    this.seo.update(this.ui().about.title, this.cv().summary.slice(0, 160), `/${this.lang()}/about`);
  }
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 25, vars: 6, consts: [[1, "page"], [1, "page-header"], [1, "hero-grid"], [1, "photo"], ["src", "assets/images/kayakfoto.jpg", "width", "900", "height", "1100", 3, "alt"], [1, "content"], [1, "panel"], [1, "stack"], [1, "edu"], [1, "meta"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(4, "div", 2)(5, "div", 3);
      \u0275\u0275domElement(6, "img", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "div", 5)(8, "article", 6)(9, "h2");
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p");
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div", 7)(14, "article", 6)(15, "h2");
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(17, AboutComponent_For_18_Template, 8, 5, "div", 8, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "article", 6)(20, "h2");
      \u0275\u0275text(21);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "ul");
      \u0275\u0275repeaterCreate(23, AboutComponent_For_24_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.ui().about.title);
      \u0275\u0275advance(3);
      \u0275\u0275domProperty("alt", ctx.cv().name);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.ui().about.summaryTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.cv().summary);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.ui().about.educationTitle);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.cv().education);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.ui().about.languagesTitle);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.cv().languages);
    }
  }, styles: ["\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  margin: 0 0 1.5rem;\n  letter-spacing: -0.03em;\n}\n.hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n.photo[_ngcontent-%COMP%] {\n  border-radius: 1.25rem;\n  overflow: hidden;\n  box-shadow: var(--shadow);\n  min-height: 18rem;\n}\n.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n  min-height: 18rem;\n}\n.content[_ngcontent-%COMP%], \n.stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n.panel[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid var(--line);\n  border-radius: 1.1rem;\n  padding: 1.35rem 1.4rem;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  font-size: 1.1rem;\n  color: var(--accent);\n}\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.05rem;\n}\np[_ngcontent-%COMP%], \nli[_ngcontent-%COMP%] {\n  color: var(--muted);\n  line-height: 1.65;\n}\n.edu[_ngcontent-%COMP%]    + .edu[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--line);\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\nul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.1rem;\n}\n@media (min-width: 900px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 0.9fr 1.2fr;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .photo[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 5.5rem;\n    max-height: calc(100vh - 7rem);\n  }\n  .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-height: 100%;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", template: `
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
            <p>{{ cv().summary }}</p>
          </article>

          <div class="stack">
            <article class="panel">
              <h2>{{ ui().about.educationTitle }}</h2>
              @for (edu of cv().education; track edu.degree + edu.school) {
                <div class="edu">
                  <h3>{{ edu.degree }}</h3>
                  <p>{{ edu.school }} \xB7 {{ edu.location }}</p>
                  <p class="meta">{{ edu.period }}@if (edu.detail) { \xB7 {{ edu.detail }} }</p>
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
  `, styles: ["/* angular:styles/component:css;955fc6dba8f0749f4d5e05a49f181d2325055e564d68609888049e3a39234446;C:/Projeler/onureakgul.github.io/src/app/pages/about.component.ts */\n.page-header h1 {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  margin: 0 0 1.5rem;\n  letter-spacing: -0.03em;\n}\n.hero-grid {\n  display: grid;\n  gap: 1.25rem;\n}\n.photo {\n  border-radius: 1.25rem;\n  overflow: hidden;\n  box-shadow: var(--shadow);\n  min-height: 18rem;\n}\n.photo img {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n  min-height: 18rem;\n}\n.content,\n.stack {\n  display: grid;\n  gap: 1.25rem;\n}\n.panel {\n  background: var(--bg-elevated);\n  border: 1px solid var(--line);\n  border-radius: 1.1rem;\n  padding: 1.35rem 1.4rem;\n}\nh2 {\n  margin: 0 0 0.8rem;\n  font-size: 1.1rem;\n  color: var(--accent);\n}\nh3 {\n  margin: 0 0 0.25rem;\n  font-size: 1.05rem;\n}\np,\nli {\n  color: var(--muted);\n  line-height: 1.65;\n}\n.edu + .edu {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--line);\n}\n.meta {\n  font-size: 0.92rem;\n}\nul {\n  margin: 0;\n  padding-left: 1.1rem;\n}\n@media (min-width: 900px) {\n  .hero-grid {\n    grid-template-columns: 0.9fr 1.2fr;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .photo {\n    position: sticky;\n    top: 5.5rem;\n    max-height: calc(100vh - 7rem);\n  }\n  .photo img {\n    min-height: 100%;\n  }\n}\n/*# sourceMappingURL=about.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/pages/about.component.ts", lineNumber: 146 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-KANCQPGI.js.map
