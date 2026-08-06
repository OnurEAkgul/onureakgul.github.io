import{a as g,s as u,v as y}from"./chunk-33WWVLUM.js";import{Hb as m,Na as a,P as r,Qa as c,U as s,Zb as d,la as o,qb as p,rb as f,zb as l}from"./chunk-AB7LCF2G.js";var v=["*"],b=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,h=(()=>{class e extends u{name="baseicon";css=b;static \u0275fac=(()=>{let t;return function(n){return(t||(t=o(e)))(n||e)}})();static \u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var S=(()=>{class e extends y{spin=!1;_componentStyle=s(h);getClassNames(){return g("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=o(e)))(n||e)}})();static \u0275cmp=a({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(i,n){i&2&&l(n.getClassNames())},inputs:{spin:[2,"spin","spin",d]},features:[m([h]),c],ngContentSelectors:v,decls:1,vars:0,template:function(i,n){i&1&&(p(),f(0))},encapsulation:2,changeDetection:0})}return e})();export{S as a};
