import{c as m,h as i,i as h,j as C,k as V}from"./use-translate.fbf36f21.js";import{n as f,m as u,t as B,w as y}from"./with-install.251697cd.js";import{z as l,C as b,e as s,I as _,E as j,A as w}from"./vue-libs.bf80eadf.js";const[O,p]=m("badge"),k={dot:Boolean,max:f,tag:u("div"),color:String,offset:Array,content:f,showZero:B,position:u("top-right")};var z=l({name:O,props:k,setup(e,{slots:t}){const a=()=>{if(t.content)return!0;const{content:n,showZero:r}=e;return h(n)&&n!==""&&(r||n!==0)},c=()=>{const{dot:n,max:r,content:o}=e;if(!n&&a())return t.content?t.content():h(r)&&C(o)&&+o>r?`${r}+`:o},g=b(()=>{const n={background:e.color};if(e.offset){const[r,o]=e.offset;t.default?(n.top=i(o),typeof r=="number"?n.right=i(-r):n.right=r.startsWith("-")?r.replace("-",""):`-${r}`):(n.marginTop=i(o),n.marginLeft=i(r))}return n}),d=()=>{if(a()||e.dot)return s("div",{class:p([e.position,{dot:e.dot,fixed:!!t.default}]),style:g.value},[c()])};return()=>{if(t.default){const{tag:n}=e;return s(n,{class:p("wrapper")},{default:()=>[t.default(),d()]})}return d()}}});const E=y(z),[I,N]=m("config-provider"),S=Symbol(I),T={tag:u("div"),themeVars:Object,iconPrefix:String};function A(e){const t={};return Object.keys(e).forEach(a=>{t[`--van-${V(a)}`]=e[a]}),t}var U=l({name:I,props:T,setup(e,{slots:t}){const a=b(()=>{if(e.themeVars)return A(e.themeVars)});return _(S,e),()=>s(e.tag,{class:N(),style:a.value},{default:()=>{var c;return[(c=t.default)==null?void 0:c.call(t)]}})}});const[D,x]=m("icon"),R=e=>e==null?void 0:e.includes("/"),Z={dot:Boolean,tag:u("i"),name:String,size:f,badge:f,color:String,badgeProps:Object,classPrefix:String};var F=l({name:D,props:Z,setup(e,{slots:t}){const a=j(S,null),c=b(()=>e.classPrefix||(a==null?void 0:a.iconPrefix)||x());return()=>{const{tag:g,dot:d,name:n,size:r,badge:o,color:$}=e,P=R(n);return s(E,w({dot:d,tag:g,class:[c.value,P?"":`${c.value}-${n}`],style:{color:$,fontSize:i(r)},content:o},e.badgeProps),{default:()=>{var v;return[(v=t.default)==null?void 0:v.call(t),P&&s("img",{class:x("image"),src:n},null)]}})}}});const W=y(F);export{E as B,W as I,U as _};
