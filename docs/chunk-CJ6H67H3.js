import{p as R,q as V,s as q,u as H,v as L,w as f}from"./chunk-33WWVLUM.js";import{a as Y}from"./chunk-K3KDSFAN.js";import{d as A,f as z,h as Q,i as $,u as G}from"./chunk-PUICSZTX.js";import{$a as P,Ab as l,Bb as p,Hb as F,Na as v,P as M,Qa as S,Ra as w,S as k,Sa as m,U as d,Zb as N,ab as C,bb as b,cb as s,db as c,eb as r,fb as _,jb as E,kb as O,la as h,pb as g,qb as B,rb as D,sb as T,tb as x,ub as I,ya as i,zb as u}from"./chunk-AB7LCF2G.js";var J=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var ee=["icon"],te=["*"];function ne(e,o){if(e&1&&_(0,"span",4),e&2){let t=g(2);u(t.cx("icon")),s("ngClass",t.icon)("pBind",t.ptm("icon"))}}function ie(e,o){if(e&1&&(E(0),m(1,ne,1,4,"span",3),O()),e&2){let t=g();i(),s("ngIf",t.icon)}}function ae(e,o){}function oe(e,o){e&1&&m(0,ae,0,0,"ng-template")}function re(e,o){if(e&1&&(c(0,"span",2),m(1,oe,1,0,null,5),r()),e&2){let t=g();u(t.cx("icon")),s("pBind",t.ptm("icon")),i(),s("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var ce={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},K=(()=>{class e extends q{name="tag";style=J;classes=ce;static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var U=new k("TAG_INSTANCE"),W=(()=>{class e extends L{$pcTag=d(U,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=d(K);onAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="icon"&&(this._iconTemplate=t.template)})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["p-tag"]],contentQueries:function(a,n,j){if(a&1&&(T(j,ee,4),T(j,R,4)),a&2){let y;x(y=I())&&(n.iconTemplate=y.first),x(y=I())&&(n.templates=y)}},hostVars:2,hostBindings:function(a,n){a&2&&u(n.cn(n.cx("root"),n.styleClass))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",N]},features:[F([K,{provide:U,useExisting:e},{provide:H,useExisting:e}]),w([f]),S],ngContentSelectors:te,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(B(),D(0),m(1,ie,2,1,"ng-container",0)(2,re,2,4,"span",1),c(3,"span",2),l(4),r()),a&2&&(i(),s("ngIf",!n.iconTemplate&&!n._iconTemplate),i(),s("ngIf",n.iconTemplate||n._iconTemplate),i(),u(n.cx("label")),s("pBind",n.ptm("label")),i(),p(n.value))},dependencies:[$,A,z,Q,V,f],encapsulation:2,changeDetection:0})}return e})();var se=(e,o)=>o.name;function le(e,o){if(e&1&&(c(0,"li"),l(1),r()),e&2){let t=o.$implicit;i(),p(t)}}function pe(e,o){if(e&1&&(c(0,"article",3)(1,"div",4)(2,"h2"),l(3),r(),_(4,"p-tag",5),r(),c(5,"p",6),l(6),r(),c(7,"ul"),C(8,le,2,1,"li",null,P),r()()),e&2){let t=o.$implicit,a=g();i(3),p(t.name),i(),s("value",a.ui().projects.techLabel),i(2),p(t.tech),i(2),b(t.bullets)}}var X=class e{language=d(G);seo=d(Y);lang=this.language.lang;cv=this.language.cv;ui=this.language.ui;ngOnInit(){this.seo.update(this.ui().projects.title,this.ui().projects.subtitle,`/${this.lang()}/projects`)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=v({type:e,selectors:[["app-projects"]],decls:9,vars:2,consts:[[1,"page"],[1,"page-header"],[1,"list"],[1,"project"],[1,"head"],["severity","secondary",3,"value"],[1,"tech"]],template:function(t,a){t&1&&(c(0,"section",0)(1,"header",1)(2,"h1"),l(3),r(),c(4,"p"),l(5),r()(),c(6,"div",2),C(7,pe,10,3,"article",3,se),r()()),t&2&&(i(3),p(a.ui().projects.title),i(2),p(a.ui().projects.subtitle),i(2),b(a.cv().projects))},dependencies:[W],styles:[".page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:var(--font-display);font-size:clamp(2rem,5vw,3.2rem);margin:0 0 .5rem;letter-spacing:-.03em}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--muted);margin:0 0 1.75rem;max-width:42rem;line-height:1.6}.list[_ngcontent-%COMP%]{display:grid;gap:1rem}.project[_ngcontent-%COMP%]{background:var(--bg-elevated);border:1px solid var(--line);border-radius:1.1rem;padding:1.3rem 1.4rem;transition:transform .2s ease,border-color .2s ease}.project[_ngcontent-%COMP%]:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--accent) 45%,var(--line))}.head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;align-items:start;flex-wrap:wrap}h2[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;max-width:40rem}.tech[_ngcontent-%COMP%]{margin:.7rem 0 .9rem;color:var(--ink-soft);font-size:.95rem;line-height:1.5}ul[_ngcontent-%COMP%]{margin:0;padding-left:1.1rem;color:var(--muted);line-height:1.6;display:grid;gap:.4rem}"]})};export{X as ProjectsComponent};
