import{t as r,b as o,i as a}from"./use-translate.bf1abf23.js";import{c as e,w as i}from"./with-install.af140ae3.js";import{a as s}from"./unit.36efb2dd.js";import{I as l}from"./index.5afcfd01.js";import{B as n,G as t,M as d,E as u,z as c,Q as f,f as g,l as m,W as v,L as h}from"./vendor.09b5b9a9.js";const[p,S]=e("image");const b=i(n({name:p,props:{src:String,alt:String,fit:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconSize:[Number,String],showError:r,iconPrefix:String,showLoading:r,errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},emits:["load","error"],setup(r,{emit:e,slots:i}){const n=t(!1),p=t(!0),b=t(),{$Lazyload:w}=d().proxy,z=u((()=>{const o={};return a(r.width)&&(o.width=s(r.width)),a(r.height)&&(o.height=s(r.height)),a(r.radius)&&(o.overflow="hidden",o.borderRadius=s(r.radius)),o}));c((()=>r.src),(()=>{n.value=!1,p.value=!0}));const y=r=>{p.value=!1,e("load",r)},x=r=>{n.value=!0,p.value=!1,e("error",r)},L=()=>{if(n.value||!r.src)return;const o={alt:r.alt,class:S("img"),style:{objectFit:r.fit}};return r.lazyLoad?m(g("img",h({ref:b},o),null),[[v("lazy"),r.src]]):g("img",h({src:r.src,onLoad:y,onError:x},o),null)},j=({el:r})=>{r===b.value&&p.value&&y()},I=({el:r})=>{r!==b.value||n.value||x()};return w&&o&&(w.$on("loaded",j),w.$on("error",I),f((()=>{w.$off("loaded",j),w.$off("error",I)}))),()=>{var o;return g("div",{class:S({round:r.round}),style:z.value},[L(),p.value&&r.showLoading?g("div",{class:S("loading")},[i.loading?i.loading():g(l,{size:r.iconSize,name:r.loadingIcon,class:S("loading-icon"),classPrefix:r.iconPrefix},null)]):n.value&&r.showError?g("div",{class:S("error")},[i.error?i.error():g(l,{size:r.iconSize,name:r.errorIcon,class:S("error-icon"),classPrefix:r.iconPrefix},null)]):void 0,null==(o=i.default)?void 0:o.call(i)])}}}));export{b as I};
