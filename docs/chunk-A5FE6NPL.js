import{a as re}from"./chunk-YHAZJXNS.js";import"./chunk-B2K4CWZD.js";import{p as Y,q as Z,r as ee,s as ne,u as ie,v as oe,w as C}from"./chunk-M565F3EX.js";import{a as ae}from"./chunk-CIULUOGZ.js";import{d as U,f as J,h as W,i as X,u as te}from"./chunk-42ACY4GQ.js";import{$ as N,$a as L,Ab as u,Bb as h,Da as T,Hb as q,Lb as G,Na as I,P as A,Qa as z,Ra as R,S as F,Sa as f,U as g,Ya as v,Z as m,Zb as O,_ as d,ab as E,bb as S,cb as a,db as p,eb as s,fb as w,jb as B,kb as M,la as k,mb as y,ob as b,pb as c,qb as Q,rb as $,sb as P,tb as V,ub as D,vb as K,wa as j,wb as H,ya as l,zb as _}from"./chunk-AB7LCF2G.js";var ce=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var _e=["removeicon"],ge=["*"];function fe(n,o){if(n&1){let e=y();p(0,"img",4),b("error",function(i){m(e);let r=c();return d(r.imageError(i))}),s()}if(n&2){let e=c();_(e.cx("image")),a("pBind",e.ptm("image"))("src",e.image,j)("alt",e.alt)}}function ue(n,o){if(n&1&&w(0,"span",6),n&2){let e=c(2);_(e.icon),a("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function he(n,o){if(n&1&&f(0,ue,1,4,"span",5),n&2){let e=c();a("ngIf",e.icon)}}function ve(n,o){if(n&1&&(p(0,"div",7),u(1),s()),n&2){let e=c();_(e.cx("label")),a("pBind",e.ptm("label")),l(),h(e.label)}}function ye(n,o){if(n&1){let e=y();p(0,"span",11),b("click",function(i){m(e);let r=c(3);return d(r.close(i))})("keydown",function(i){m(e);let r=c(3);return d(r.onKeydown(i))}),s()}if(n&2){let e=c(3);_(e.removeIcon),a("pBind",e.ptm("removeIcon"))("ngClass",e.cx("removeIcon")),v("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function be(n,o){if(n&1){let e=y();N(),p(0,"svg",12),b("click",function(i){m(e);let r=c(3);return d(r.close(i))})("keydown",function(i){m(e);let r=c(3);return d(r.onKeydown(i))}),s()}if(n&2){let e=c(3);_(e.cx("removeIcon")),a("pBind",e.ptm("removeIcon")),v("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel)}}function Ce(n,o){if(n&1&&(B(0),f(1,ye,1,6,"span",9)(2,be,1,5,"svg",10),M()),n&2){let e=c(2);l(),a("ngIf",e.removeIcon),l(),a("ngIf",!e.removeIcon)}}function xe(n,o){}function Ie(n,o){n&1&&f(0,xe,0,0,"ng-template")}function we(n,o){if(n&1){let e=y();p(0,"span",13),b("click",function(i){m(e);let r=c(2);return d(r.close(i))})("keydown",function(i){m(e);let r=c(2);return d(r.onKeydown(i))}),f(1,Ie,1,0,null,14),s()}if(n&2){let e=c(2);_(e.cx("removeIcon")),a("pBind",e.ptm("removeIcon")),v("tabindex",e.disabled?-1:0)("aria-label",e.removeAriaLabel),l(),a("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function ke(n,o){if(n&1&&(B(0),f(1,Ce,3,2,"ng-container",3)(2,we,2,6,"span",8),M()),n&2){let e=c();l(),a("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),l(),a("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Te={root:({instance:n})=>["p-chip p-component",{"p-disabled":n.disabled}],image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},le=(()=>{class n extends ne{name="chip";style=ce;classes=Te;static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(n)))(i||n)}})();static \u0275prov=A({token:n,factory:n.\u0275fac})}return n})();var pe=new F("CHIP_INSTANCE"),se=(()=>{class n extends oe{$pcChip=g(pe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(C,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;alt;styleClass;disabled=!1;removable=!1;removeIcon;onRemove=new T;onImageError=new T;visible=!0;get removeAriaLabel(){return this.config.getTranslation(ee.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([t,i])=>this[`_${t}`]!==i&&(this[`_${t}`]=i))}_chipProps;_componentStyle=g(le);removeIconTemplate;templates;_removeIconTemplate;onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="removeicon"?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}onChanges(e){if(e.chipProps&&e.chipProps.currentValue){let{currentValue:t}=e.chipProps;t.label!==void 0&&(this.label=t.label),t.icon!==void 0&&(this.icon=t.icon),t.image!==void 0&&(this.image=t.image),t.alt!==void 0&&(this.alt=t.alt),t.styleClass!==void 0&&(this.styleClass=t.styleClass),t.removable!==void 0&&(this.removable=t.removable),t.removeIcon!==void 0&&(this.removeIcon=t.removeIcon)}}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=k(n)))(i||n)}})();static \u0275cmp=I({type:n,selectors:[["p-chip"]],contentQueries:function(t,i,r){if(t&1&&(P(r,_e,4),P(r,Y,4)),t&2){let x;V(x=D())&&(i.removeIconTemplate=x.first),V(x=D())&&(i.templates=x)}},hostVars:5,hostBindings:function(t,i){t&2&&(v("aria-label",i.label),_(i.cn(i.cx("root"),i.styleClass)),H("display",!i.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",styleClass:"styleClass",disabled:[2,"disabled","disabled",O],removable:[2,"removable","removable",O],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[q([le,{provide:pe,useExisting:n},{provide:ie,useExisting:n}]),R([C]),z],ngContentSelectors:ge,decls:6,vars:4,consts:[["iconTemplate",""],[3,"pBind","class","src","alt","error",4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"],[4,"ngIf"],[3,"error","pBind","src","alt"],[3,"pBind","class","ngClass",4,"ngIf"],[3,"pBind","ngClass"],[3,"pBind"],["role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"pBind","class","ngClass","click","keydown",4,"ngIf"],["data-p-icon","times-circle","role","button",3,"pBind","class","click","keydown",4,"ngIf"],["role","button",3,"click","keydown","pBind","ngClass"],["data-p-icon","times-circle","role","button",3,"click","keydown","pBind"],["role","button",3,"click","keydown","pBind"],[4,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(Q(),$(0),f(1,fe,1,5,"img",1)(2,he,1,1,"ng-template",null,0,G)(4,ve,2,4,"div",2)(5,ke,3,2,"ng-container",3)),t&2){let r=K(3);l(),a("ngIf",i.image)("ngIfElse",r),l(3),a("ngIf",i.label),l(),a("ngIf",i.removable)}},dependencies:[X,U,J,W,re,Z,C],encapsulation:2,changeDetection:0})}return n})();var Ee=(n,o)=>o.title;function Se(n,o){if(n&1&&w(0,"p-chip",5),n&2){let e=o.$implicit;a("label",e)}}function Be(n,o){if(n&1&&(p(0,"article",3)(1,"h2"),u(2),s(),p(3,"div",4),E(4,Se,1,1,"p-chip",5,L),s()()),n&2){let e=o.$implicit;l(2),h(e.title),l(2),S(e.items)}}var me=class n{language=g(te);seo=g(ae);lang=this.language.lang;cv=this.language.cv;ui=this.language.ui;ngOnInit(){this.seo.update(this.ui().skills.title,this.ui().skills.subtitle,this.language.path("skills"))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["app-skills"]],decls:9,vars:2,consts:[[1,"page"],[1,"page-header"],[1,"groups"],[1,"group"],[1,"chips"],[3,"label"]],template:function(e,t){e&1&&(p(0,"section",0)(1,"header",1)(2,"h1"),u(3),s(),p(4,"p"),u(5),s()(),p(6,"div",2),E(7,Be,6,1,"article",3,Ee),s()()),e&2&&(l(3),h(t.ui().skills.title),l(2),h(t.ui().skills.subtitle),l(2),S(t.cv().skills))},dependencies:[se],styles:[".page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:clamp(2rem,5vw,3.2rem);margin:0 0 .5rem;letter-spacing:-.03em}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--muted);margin:0 0 1.75rem;max-width:40rem;line-height:1.6}.groups[_ngcontent-%COMP%]{display:grid;gap:1rem}.group[_ngcontent-%COMP%]{background:var(--bg-elevated);border:1px solid var(--line);border-radius:1.1rem;padding:1.2rem 1.3rem}h2[_ngcontent-%COMP%]{margin:0 0 .85rem;font-size:1.05rem;color:var(--accent)}.chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.45rem}"]})};export{me as SkillsComponent};
