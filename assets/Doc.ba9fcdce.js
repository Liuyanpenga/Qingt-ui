import{E as x,a as V,b as k}from"./element-plus.9ebd4d6b.js";import{C as w}from"./CommonHeader.c9c59ab2.js";import{_ as d}from"./index.6d90e9b5.js";import{aI as _,o as a,c as l,a as t,a9 as o,b2 as e,a8 as n,i as y,a2 as A,a3 as C}from"./@vue.dd053216.js";import"./vue-router.baf3ea91.js";/* empty css                            */import"./vuex.52ede835.js";import"./@element-plus.1c138d46.js";import"./@kangc.9cf80c70.js";import"./vue.0b316201.js";import"./highlight.js.7756ad23.js";const B={name:"Aside"},E={class:"aside"},g=n("\u4ECB\u7ECD"),N=n("\u5B89\u88C5"),D=n("\u4F7F\u7528"),I=n("Switch \u7EC4\u4EF6"),T=n("Button \u7EC4\u4EF6"),j=n("Dialog \u7EC4\u4EF6"),H=n("Tabs \u7EC4\u4EF6");function M(i,r,u,c,m,p){const s=_("router-link");return a(),l("div",E,[t("ul",null,[t("li",null,[o(s,{to:"/doc/introduce"},{default:e(()=>[g]),_:1})]),t("li",null,[o(s,{to:"/doc/install"},{default:e(()=>[N]),_:1})]),t("li",null,[o(s,{to:"/doc/started"},{default:e(()=>[D]),_:1})]),t("li",null,[o(s,{to:"/doc/switch"},{default:e(()=>[I]),_:1})]),t("li",null,[o(s,{to:"/doc/button"},{default:e(()=>[T]),_:1})]),t("li",null,[o(s,{to:"/doc/dialog"},{default:e(()=>[j]),_:1})]),t("li",null,[o(s,{to:"/doc/tabs"},{default:e(()=>[H]),_:1})])])])}const S=d(B,[["render",M]]),q={components:{CommonHeader:w,Aside:S},setup(){return{asideVisible:y("asideVisible")}}};const z={class:"common-layout"},F={class:"nav"},G={class:"main"};function J(i,r,u,c,m,p){const s=_("common-header"),f=_("Aside"),h=x,v=_("router-view"),$=V,b=k;return a(),l("div",z,[t("div",F,[o(s)]),o(b,null,{default:e(()=>[c.asideVisible?(a(),A(h,{key:0,width:"160px"},{default:e(()=>[o(f)]),_:1})):C("",!0),o($,null,{default:e(()=>[t("div",G,[o(v)])]),_:1})]),_:1})])}const oo=d(q,[["render",J],["__scopeId","data-v-00db9867"]]);export{oo as default};