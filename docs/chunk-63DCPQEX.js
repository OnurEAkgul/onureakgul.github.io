import {
  RouterLink
} from "./chunk-5AXCXRBV.js";
import {
  Button
} from "./chunk-SB6VNPA3.js";
import "./chunk-27565LFG.js";
import "./chunk-O2SGMHU4.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SCEUT42M.js";

// src/app/pages/home.component.ts
var _c0 = (a0) => ["/", a0, "projects"];
var _c1 = (a0) => ["/", a0, "contact"];
var HomeComponent = class _HomeComponent {
  language = inject(LanguageService);
  seo = inject(SeoService);
  lang = this.language.lang;
  cv = this.language.cv;
  ui = this.language.ui;
  ngOnInit() {
    const cv = this.cv();
    const ui = this.ui();
    this.seo.update(ui.nav.home, ui.meta.defaultDescription, `/${this.lang()}`);
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 17, vars: 17, consts: [[1, "hero"], [1, "copy", "reveal"], [1, "eyebrow"], [1, "headline"], [1, "lead"], [1, "cta"], ["icon", "pi pi-briefcase", 3, "label", "routerLink"], ["icon", "pi pi-envelope", 3, "label", "routerLink", "outlined"], ["download", "", 1, "cv-link", 3, "href"], ["icon", "pi pi-download", 3, "label", "text"], [1, "visual", "reveal", "delay"], ["src", "assets/images/venedikfoto.jpg", "width", "720", "height", "900", 3, "alt"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275element(11, "p-button", 6)(12, "p-button", 7);
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275element(14, "p-button", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10);
      \u0275\u0275element(16, "img", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.cv().location);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.cv().name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.cv().headline);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.ui().home.welcome);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", ctx.ui().home.ctaProjects)("routerLink", \u0275\u0275pureFunction1(13, _c0, ctx.lang()));
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.ui().home.ctaContact)("routerLink", \u0275\u0275pureFunction1(15, _c1, ctx.lang()))("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.cv().cvFile, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.ui().home.ctaCv)("text", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("alt", ctx.cv().name);
    }
  }, dependencies: [RouterLink, Button], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n  align-items: center;\n  min-height: calc(100vh - 10rem);\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  margin: 0 0 0.8rem;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.6rem, 7vw, 4.8rem);\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 0 0 0.8rem;\n  color: var(--ink);\n}\n.headline[_ngcontent-%COMP%] {\n  font-size: clamp(1.05rem, 2.2vw, 1.35rem);\n  color: var(--ink-soft);\n  margin: 0 0 1rem;\n  font-weight: 600;\n}\n.lead[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-size: 1.08rem;\n  line-height: 1.65;\n  max-width: 38rem;\n  margin: 0 0 1.6rem;\n}\n.cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  align-items: center;\n}\n.cv-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.visual[_ngcontent-%COMP%] {\n  border-radius: 1.5rem;\n  overflow: hidden;\n  min-height: 22rem;\n  box-shadow: var(--shadow);\n  position: relative;\n}\n.visual[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      160deg,\n      transparent 40%,\n      color-mix(in srgb, var(--accent) 25%, transparent));\n  pointer-events: none;\n}\n.visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  min-height: 22rem;\n  animation: _ngcontent-%COMP%_drift 18s ease-in-out infinite alternate;\n}\n.reveal[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_rise 700ms ease both;\n}\n.delay[_ngcontent-%COMP%] {\n  animation-delay: 120ms;\n}\n@keyframes _ngcontent-%COMP%_rise {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_drift {\n  from {\n    transform: scale(1.02);\n  }\n  to {\n    transform: scale(1.08);\n  }\n}\n@media (min-width: 900px) {\n  .hero[_ngcontent-%COMP%] {\n    grid-template-columns: 1.1fr 0.9fr;\n    gap: 3rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [RouterLink, Button], template: `
    <section class="hero">
      <div class="copy reveal">
        <p class="eyebrow">{{ cv().location }}</p>
        <h1>{{ cv().name }}</h1>
        <p class="headline">{{ cv().headline }}</p>
        <p class="lead">{{ ui().home.welcome }}</p>
        <div class="cta">
          <p-button
            [label]="ui().home.ctaProjects"
            [routerLink]="['/', lang(), 'projects']"
            icon="pi pi-briefcase"
          />
          <p-button
            [label]="ui().home.ctaContact"
            [routerLink]="['/', lang(), 'contact']"
            [outlined]="true"
            icon="pi pi-envelope"
          />
          <a class="cv-link" [href]="cv().cvFile" download>
            <p-button [label]="ui().home.ctaCv" [text]="true" icon="pi pi-download" />
          </a>
        </div>
      </div>
      <div class="visual reveal delay">
        <img src="assets/images/venedikfoto.jpg" [alt]="cv().name" width="720" height="900" />
      </div>
    </section>
  `, styles: ['/* angular:styles/component:css;d9a5c0b5121e01acdec052243d25055f02303e110b327fa0aa4cfc14797acdad;C:/Projeler/onureakgul.github.io/src/app/pages/home.component.ts */\n.hero {\n  display: grid;\n  gap: 2rem;\n  align-items: center;\n  min-height: calc(100vh - 10rem);\n}\n.eyebrow {\n  color: var(--accent);\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  margin: 0 0 0.8rem;\n}\nh1 {\n  font-family: var(--font-display);\n  font-size: clamp(2.6rem, 7vw, 4.8rem);\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n  margin: 0 0 0.8rem;\n  color: var(--ink);\n}\n.headline {\n  font-size: clamp(1.05rem, 2.2vw, 1.35rem);\n  color: var(--ink-soft);\n  margin: 0 0 1rem;\n  font-weight: 600;\n}\n.lead {\n  color: var(--muted);\n  font-size: 1.08rem;\n  line-height: 1.65;\n  max-width: 38rem;\n  margin: 0 0 1.6rem;\n}\n.cta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  align-items: center;\n}\n.cv-link {\n  text-decoration: none;\n}\n.visual {\n  border-radius: 1.5rem;\n  overflow: hidden;\n  min-height: 22rem;\n  box-shadow: var(--shadow);\n  position: relative;\n}\n.visual::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      160deg,\n      transparent 40%,\n      color-mix(in srgb, var(--accent) 25%, transparent));\n  pointer-events: none;\n}\n.visual img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  min-height: 22rem;\n  animation: drift 18s ease-in-out infinite alternate;\n}\n.reveal {\n  animation: rise 700ms ease both;\n}\n.delay {\n  animation-delay: 120ms;\n}\n@keyframes rise {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes drift {\n  from {\n    transform: scale(1.02);\n  }\n  to {\n    transform: scale(1.08);\n  }\n}\n@media (min-width: 900px) {\n  .hero {\n    grid-template-columns: 1.1fr 0.9fr;\n    gap: 3rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home.component.ts", lineNumber: 152 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-63DCPQEX.js.map
