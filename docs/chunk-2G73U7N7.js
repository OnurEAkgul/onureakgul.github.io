import {
  BaseComponent,
  BaseStyle,
  Bind,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule
} from "./chunk-O2SGMHU4.js";
import {
  SeoService
} from "./chunk-FAHRY56Y.js";
import {
  CommonModule,
  LanguageService,
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-SLO2KBPC.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SCEUT42M.js";

// node_modules/@primeuix/styles/dist/tag/index.mjs
var style = "\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('tag.primary.background');\n        color: dt('tag.primary.color');\n        font-size: dt('tag.font.size');\n        font-weight: dt('tag.font.weight');\n        padding: dt('tag.padding');\n        border-radius: dt('tag.border.radius');\n        gap: dt('tag.gap');\n    }\n\n    .p-tag-icon {\n        font-size: dt('tag.icon.size');\n        width: dt('tag.icon.size');\n        height: dt('tag.icon.size');\n    }\n\n    .p-tag-rounded {\n        border-radius: dt('tag.rounded.border.radius');\n    }\n\n    .p-tag-success {\n        background: dt('tag.success.background');\n        color: dt('tag.success.color');\n    }\n\n    .p-tag-info {\n        background: dt('tag.info.background');\n        color: dt('tag.info.color');\n    }\n\n    .p-tag-warn {\n        background: dt('tag.warn.background');\n        color: dt('tag.warn.color');\n    }\n\n    .p-tag-danger {\n        background: dt('tag.danger.background');\n        color: dt('tag.danger.color');\n    }\n\n    .p-tag-secondary {\n        background: dt('tag.secondary.background');\n        color: dt('tag.secondary.color');\n    }\n\n    .p-tag-contrast {\n        background: dt('tag.contrast.background');\n        color: dt('tag.contrast.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c0 = ["icon"];
var _c1 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("ngClass", ctx_r0.icon)("pBind", ctx_r0.ptm("icon"));
  }
}
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tag_ng_container_1_span_1_Template, 1, 4, "span", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon);
  }
}
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275template(1, Tag_span_2_1_Template, 1, 0, null, 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-tag p-component", {
    "p-tag-info": instance.severity === "info",
    "p-tag-success": instance.severity === "success",
    "p-tag-warn": instance.severity === "warn",
    "p-tag-danger": instance.severity === "danger",
    "p-tag-secondary": instance.severity === "secondary",
    "p-tag-contrast": instance.severity === "contrast",
    "p-tag-rounded": instance.rounded
  }],
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TagStyle_BaseFactory;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (\u0275TagStyle_BaseFactory || (\u0275TagStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TagStyle,
    factory: _TagStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var TAG_INSTANCE = new InjectionToken("TAG_INSTANCE");
var Tag = class _Tag extends BaseComponent {
  $pcTag = inject(TAG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  iconTemplate;
  templates;
  _iconTemplate;
  _componentStyle = inject(TagStyle);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Tag_BaseFactory;
    return function Tag_Factory(__ngFactoryType__) {
      return (\u0275Tag_BaseFactory || (\u0275Tag_BaseFactory = \u0275\u0275getInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function Tag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([TagStyle, {
      provide: TAG_INSTANCE,
      useExisting: _Tag
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Tag
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 6,
    consts: [[4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], [3, "pBind"], [3, "class", "ngClass", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275template(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 4, "span", 1);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.iconTemplate || ctx._iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("label"));
        \u0275\u0275property("pBind", ctx.ptm("label"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.value);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span [class]="cx('icon')" [ngClass]="icon" [pBind]="ptm('icon')" *ngIf="icon"></span>
        </ng-container>
        <span [class]="cx('icon')" [pBind]="ptm('icon')" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span [class]="cx('label')" [pBind]="ptm('label')">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TagStyle, {
        provide: TAG_INSTANCE,
        useExisting: Tag
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Tag
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TagModule = class _TagModule {
  static \u0275fac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TagModule,
    imports: [Tag, SharedModule],
    exports: [Tag, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/projects.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function ProjectsComponent_For_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bullet_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bullet_r1);
  }
}
function ProjectsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 3)(1, "div", 4)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-tag", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul");
    \u0275\u0275repeaterCreate(8, ProjectsComponent_For_8_For_9_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.ui().projects.techLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.tech);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(project_r2.bullets);
  }
}
var ProjectsComponent = class _ProjectsComponent {
  language = inject(LanguageService);
  seo = inject(SeoService);
  lang = this.language.lang;
  cv = this.language.cv;
  ui = this.language.ui;
  ngOnInit() {
    this.seo.update(this.ui().projects.title, this.ui().projects.subtitle, `/${this.lang()}/projects`);
  }
  static \u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], decls: 9, vars: 2, consts: [[1, "page"], [1, "page-header"], [1, "list"], [1, "project"], [1, "head"], ["severity", "secondary", 3, "value"], [1, "tech"]], template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275repeaterCreate(7, ProjectsComponent_For_8_Template, 10, 3, "article", 3, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.ui().projects.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.ui().projects.subtitle);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.cv().projects);
    }
  }, dependencies: [Tag], styles: ["\n\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  margin: 0 0 0.5rem;\n  letter-spacing: -0.03em;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n  margin: 0 0 1.75rem;\n  max-width: 42rem;\n  line-height: 1.6;\n}\n.list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.project[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  border: 1px solid var(--line);\n  border-radius: 1.1rem;\n  padding: 1.3rem 1.4rem;\n  transition: transform 200ms ease, border-color 200ms ease;\n}\n.project[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: color-mix(in srgb, var(--accent) 45%, var(--line));\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  align-items: start;\n  flex-wrap: wrap;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  max-width: 40rem;\n}\n.tech[_ngcontent-%COMP%] {\n  margin: 0.7rem 0 0.9rem;\n  color: var(--ink-soft);\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\nul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.1rem;\n  color: var(--muted);\n  line-height: 1.6;\n  display: grid;\n  gap: 0.4rem;\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsComponent, [{
    type: Component,
    args: [{ selector: "app-projects", imports: [Tag], template: `
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
  `, styles: ["/* angular:styles/component:css;c80f21aaa546b7e1fab3c20f81efccfe8fd33651bf21adfd9930ce100881deba;C:/Projeler/onureakgul.github.io/src/app/pages/projects.component.ts */\n.page-header h1 {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  margin: 0 0 0.5rem;\n  letter-spacing: -0.03em;\n}\n.page-header p {\n  color: var(--muted);\n  margin: 0 0 1.75rem;\n  max-width: 42rem;\n  line-height: 1.6;\n}\n.list {\n  display: grid;\n  gap: 1rem;\n}\n.project {\n  background: var(--bg-elevated);\n  border: 1px solid var(--line);\n  border-radius: 1.1rem;\n  padding: 1.3rem 1.4rem;\n  transition: transform 200ms ease, border-color 200ms ease;\n}\n.project:hover {\n  transform: translateY(-2px);\n  border-color: color-mix(in srgb, var(--accent) 45%, var(--line));\n}\n.head {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  align-items: start;\n  flex-wrap: wrap;\n}\nh2 {\n  margin: 0;\n  font-size: 1.25rem;\n  max-width: 40rem;\n}\n.tech {\n  margin: 0.7rem 0 0.9rem;\n  color: var(--ink-soft);\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\nul {\n  margin: 0;\n  padding-left: 1.1rem;\n  color: var(--muted);\n  line-height: 1.6;\n  display: grid;\n  gap: 0.4rem;\n}\n/*# sourceMappingURL=projects.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/pages/projects.component.ts", lineNumber: 98 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=chunk-2G73U7N7.js.map
