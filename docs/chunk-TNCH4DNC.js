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
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-SCEUT42M.js";

// src/app/pages/experience.component.ts
var _forTrack0 = ($index, $item) => $item.degree + $item.school;
var _forTrack1 = ($index, $item) => $item.title + $item.period;
function ExperienceComponent_For_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const edu_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(edu_r1.detail);
  }
}
function ExperienceComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 9);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 10);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(7, ExperienceComponent_For_14_Conditional_7_Template, 2, 1, "p", 11);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const edu_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r1.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(edu_r1.school);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", edu_r1.location, " \xB7 ", edu_r1.period);
    \u0275\u0275advance();
    \u0275\u0275conditional(edu_r1.detail ? 7 : -1);
  }
}
function ExperienceComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
function ExperienceComponent_For_23_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const bullet_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bullet_r3);
  }
}
function ExperienceComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 8)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div")(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 14);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 10);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "ul");
    \u0275\u0275repeaterCreate(12, ExperienceComponent_For_23_For_13_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    const \u0275$index_52_r5 = ctx.$index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275$index_52_r5 + 1 < 10 ? "0" + (\u0275$index_52_r5 + 1) : \u0275$index_52_r5 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r4.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", role_r4.period, " \xB7 ", role_r4.location);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(role_r4.bullets);
  }
}
var ExperienceComponent = class _ExperienceComponent {
  language = inject(LanguageService);
  seo = inject(SeoService);
  lang = this.language.lang;
  cv = this.language.cv;
  ui = this.language.ui;
  ngOnInit() {
    this.seo.update(this.ui().experience.title, this.ui().experience.subtitle, `/${this.lang()}/experience`);
  }
  static \u0275fac = function ExperienceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExperienceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceComponent, selectors: [["app-experience"]], decls: 24, vars: 5, consts: [[1, "page"], [1, "page-header"], [1, "layout"], [1, "rail"], [1, "panel"], [1, "lead"], [1, "edu"], [1, "roles"], [1, "role"], [1, "school"], [1, "meta"], [1, "detail"], [1, "role-head"], [1, "index"], [1, "company"]], template: function ExperienceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 2)(7, "aside", 3)(8, "article", 4)(9, "h2");
      \u0275\u0275text(10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p", 5);
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(13, ExperienceComponent_For_14_Template, 8, 5, "div", 6, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "article", 4)(16, "h2");
      \u0275\u0275text(17);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "ul");
      \u0275\u0275repeaterCreate(19, ExperienceComponent_For_20_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(21, "div", 7);
      \u0275\u0275repeaterCreate(22, ExperienceComponent_For_23_Template, 14, 5, "article", 8, _forTrack1);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.ui().experience.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.ui().experience.subtitle);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.ui().experience.educationTitle);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.ui().experience.educationLead);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.cv().education);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.ui().experience.highlightsTitle);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.ui().experience.highlights);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.cv().experience);
    }
  }, styles: ["\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  margin: 0 0 0.5rem;\n  letter-spacing: -0.03em;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n  margin: 0 0 1.75rem;\n  max-width: 40rem;\n  line-height: 1.6;\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n.rail[_ngcontent-%COMP%], \n.roles[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.panel[_ngcontent-%COMP%], \n.role[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid var(--line);\n  border-radius: 1.1rem;\n  padding: 1.25rem 1.35rem;\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.55rem;\n  font-size: 1rem;\n  color: var(--accent);\n}\n.lead[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: var(--muted);\n  line-height: 1.55;\n  font-size: 0.95rem;\n}\n.edu[_ngcontent-%COMP%]    + .edu[_ngcontent-%COMP%] {\n  margin-top: 0.95rem;\n  padding-top: 0.95rem;\n  border-top: 1px solid var(--line);\n}\n.edu[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.2rem;\n  font-size: 1.02rem;\n  color: var(--ink);\n}\n.school[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: var(--ink-soft);\n}\n.detail[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: var(--accent);\n  font-size: 0.92rem;\n  font-weight: 600;\n}\n.panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.role[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.05rem;\n  color: var(--muted);\n  line-height: 1.55;\n  display: grid;\n  gap: 0.45rem;\n}\n.role-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 0.9rem;\n  margin-bottom: 0.9rem;\n}\n.index[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--accent);\n  line-height: 1;\n  padding-top: 0.15rem;\n}\n.role[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.25rem;\n}\n.company[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: var(--ink-soft);\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: var(--accent);\n  font-size: 0.95rem;\n}\n@media (min-width: 960px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(240px, 0.9fr) minmax(0, 1.6fr);\n    align-items: start;\n    gap: 1.5rem;\n  }\n  .rail[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 5.5rem;\n  }\n}\n/*# sourceMappingURL=experience.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperienceComponent, [{
    type: Component,
    args: [{ selector: "app-experience", template: `
    <section class="page">
      <header class="page-header">
        <h1>{{ ui().experience.title }}</h1>
        <p>{{ ui().experience.subtitle }}</p>
      </header>

      <div class="layout">
        <aside class="rail">
          <article class="panel">
            <h2>{{ ui().experience.educationTitle }}</h2>
            <p class="lead">{{ ui().experience.educationLead }}</p>

            @for (edu of cv().education; track edu.degree + edu.school) {
              <div class="edu">
                <h3>{{ edu.degree }}</h3>
                <p class="school">{{ edu.school }}</p>
                <p class="meta">{{ edu.location }} \xB7 {{ edu.period }}</p>
                @if (edu.detail) {
                  <p class="detail">{{ edu.detail }}</p>
                }
              </div>
            }
          </article>

          <article class="panel">
            <h2>{{ ui().experience.highlightsTitle }}</h2>
            <ul>
              @for (item of ui().experience.highlights; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </article>
        </aside>

        <div class="roles">
          @for (role of cv().experience; track role.title + role.period; let i = $index) {
            <article class="role">
              <div class="role-head">
                <span class="index">{{ i + 1 < 10 ? '0' + (i + 1) : i + 1 }}</span>
                <div>
                  <h2>{{ role.title }}</h2>
                  <p class="company">{{ role.company }}</p>
                  <p class="meta">{{ role.period }} \xB7 {{ role.location }}</p>
                </div>
              </div>
              <ul>
                @for (bullet of role.bullets; track bullet) {
                  <li>{{ bullet }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `, styles: ["/* angular:styles/component:css;3121a48d80fbf7ec6b818bfe86f9efd2035ca7ede0f392e92d62f56b546ebacd;C:/Projeler/onureakgul.github.io/src/app/pages/experience.component.ts */\n.page-header h1 {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  margin: 0 0 0.5rem;\n  letter-spacing: -0.03em;\n}\n.page-header p {\n  color: var(--muted);\n  margin: 0 0 1.75rem;\n  max-width: 40rem;\n  line-height: 1.6;\n}\n.layout {\n  display: grid;\n  gap: 1.25rem;\n}\n.rail,\n.roles {\n  display: grid;\n  gap: 1rem;\n}\n.panel,\n.role {\n  background: var(--bg-elevated);\n  border: 1px solid var(--line);\n  border-radius: 1.1rem;\n  padding: 1.25rem 1.35rem;\n}\n.panel h2 {\n  margin: 0 0 0.55rem;\n  font-size: 1rem;\n  color: var(--accent);\n}\n.lead {\n  margin: 0 0 1rem;\n  color: var(--muted);\n  line-height: 1.55;\n  font-size: 0.95rem;\n}\n.edu + .edu {\n  margin-top: 0.95rem;\n  padding-top: 0.95rem;\n  border-top: 1px solid var(--line);\n}\n.edu h3 {\n  margin: 0 0 0.2rem;\n  font-size: 1.02rem;\n  color: var(--ink);\n}\n.school {\n  margin: 0;\n  font-weight: 600;\n  color: var(--ink-soft);\n}\n.detail {\n  margin: 0.35rem 0 0;\n  color: var(--accent);\n  font-size: 0.92rem;\n  font-weight: 600;\n}\n.panel ul,\n.role ul {\n  margin: 0;\n  padding-left: 1.05rem;\n  color: var(--muted);\n  line-height: 1.55;\n  display: grid;\n  gap: 0.45rem;\n}\n.role-head {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 0.9rem;\n  margin-bottom: 0.9rem;\n}\n.index {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--accent);\n  line-height: 1;\n  padding-top: 0.15rem;\n}\n.role h2 {\n  margin: 0 0 0.25rem;\n  font-size: 1.25rem;\n}\n.company {\n  margin: 0;\n  font-weight: 600;\n  color: var(--ink-soft);\n}\n.meta {\n  margin: 0.2rem 0 0;\n  color: var(--accent);\n  font-size: 0.95rem;\n}\n@media (min-width: 960px) {\n  .layout {\n    grid-template-columns: minmax(240px, 0.9fr) minmax(0, 1.6fr);\n    align-items: start;\n    gap: 1.5rem;\n  }\n  .rail {\n    position: sticky;\n    top: 5.5rem;\n  }\n}\n/*# sourceMappingURL=experience.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceComponent, { className: "ExperienceComponent", filePath: "src/app/pages/experience.component.ts", lineNumber: 193 });
})();
export {
  ExperienceComponent
};
//# sourceMappingURL=chunk-TNCH4DNC.js.map
