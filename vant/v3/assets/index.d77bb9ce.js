import{u as D,a as j,T as I}from"./index.b5503e09.js";import{c as A,s as N,m as V,t as _,H as $,a as q}from"./use-translate.e667ce10.js";import{w as z}from"./with-install.feb19484.js";import{u as H}from"./use-expose.9b0dd301.js";import{L as G}from"./index.ae867a8e.js";import{z as F,D as v,x as P,X as M,G as X,e as o,q as J,o as m,c as p,w as f,B as n,a as T,b as C,F as k}from"./vue-libs.1dda7261.js";import{u as K}from"./index.0749451f.js";import{u as O}from"./index.904c4b4d.js";import{u as E}from"./index.eddf1708.js";import{C as B}from"./index.5a14a991.js";import{P as Q}from"./index.41783bba.js";import"./use-route.dfb37f70.js";import"./index.d7333b46.js";import"./use-touch.b0c07ae6.js";import"./on-popup-reopen.1b0dc8ad.js";import"./utils.39620306.js";import"./useChildren.ed284d59.js";import"./useParent.5e3d1dfb.js";import"./constant.4d85ecb9.js";import"./interceptor.b759bdc5.js";import"./use-refs.2bafdad1.js";import"./index.99c6f483.js";import"./index.472ff4df.js";const[W,h,Y]=A("list"),Z={error:Boolean,offset:N(300),loading:Boolean,finished:Boolean,errorText:String,direction:V("down"),loadingText:String,finishedText:String,immediateCheck:_};var ee=F({name:W,props:Z,emits:["load","update:error","update:loading"],setup(i,{emit:a,slots:t}){const l=v(!1),c=v(),u=v(),e=D(),r=K(c),d=()=>{J(()=>{if(l.value||i.finished||i.error||(e==null?void 0:e.value)===!1)return;const{offset:s,direction:x}=i,g=E(r);if(!g.height||$(c))return;let b=!1;const R=E(u);x==="up"?b=g.top-R.top<=s:b=R.bottom-g.bottom<=s,b&&(l.value=!0,a("update:loading",!0),a("load"))})},w=()=>{if(i.finished){const s=t.finished?t.finished():i.finishedText;if(s)return o("div",{class:h("finished-text")},[s])}},U=()=>{a("update:error",!1),d()},S=()=>{if(i.error){const s=t.error?t.error():i.errorText;if(s)return o("div",{class:h("error-text"),onClick:U},[s])}},y=()=>{if(l.value&&!i.finished)return o("div",{class:h("loading")},[t.loading?t.loading():o(G,{class:h("loading-icon")},{default:()=>[i.loadingText||Y("loading")]})])};return P([()=>i.loading,()=>i.finished,()=>i.error],d),e&&P(e,s=>{s&&d()}),M(()=>{l.value=i.loading}),X(()=>{i.immediateCheck&&d()}),H({check:d}),O("scroll",d,{target:r}),()=>{var g;const s=(g=t.default)==null?void 0:g.call(t),x=o("div",{ref:u,class:h("placeholder")},null);return o("div",{ref:c,role:"feed",class:h(),"aria-busy":l.value},[i.direction==="down"?s:x,y(),w(),S(),i.direction==="up"?s:x])}}});const L=z(ee);const Be=F({setup(i){const a=q({"zh-CN":{errorInfo:"\u9519\u8BEF\u63D0\u793A",errorText:"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",pullRefresh:"\u4E0B\u62C9\u5237\u65B0",finishedText:"\u6CA1\u6709\u66F4\u591A\u4E86"},"en-US":{errorInfo:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"PullRefresh",finishedText:"Finished"}}),t=v([{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]),l=u=>{const e=t.value[u];e.loading=!0,setTimeout(()=>{e.refreshing&&(e.items=[],e.refreshing=!1);for(let r=0;r<10;r++){const d=e.items.length+1;e.items.push(d<10?"0"+d:String(d))}e.loading=!1,e.refreshing=!1,u===1&&e.items.length===10&&!e.error?e.error=!0:e.error=!1,e.items.length>=40&&(e.finished=!0)},1e3)},c=u=>{t.value[u].finished=!1,l(u)};return(u,e)=>(m(),p(n(I),null,{default:f(()=>[o(n(j),{title:n(a)("basicUsage")},{default:f(()=>[o(n(L),{loading:t.value[0].loading,"onUpdate:loading":e[0]||(e[0]=r=>t.value[0].loading=r),finished:t.value[0].finished,"finished-text":n(a)("finishedText"),onLoad:e[1]||(e[1]=r=>l(0))},{default:f(()=>[(m(!0),T(k,null,C(t.value[0].items,r=>(m(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["title"]),o(n(j),{title:n(a)("errorInfo")},{default:f(()=>[o(n(L),{loading:t.value[1].loading,"onUpdate:loading":e[2]||(e[2]=r=>t.value[1].loading=r),error:t.value[1].error,"onUpdate:error":e[3]||(e[3]=r=>t.value[1].error=r),finished:t.value[1].finished,"error-text":n(a)("errorText"),onLoad:e[4]||(e[4]=r=>l(1))},{default:f(()=>[(m(!0),T(k,null,C(t.value[1].items,r=>(m(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","error","finished","error-text"])]),_:1},8,["title"]),o(n(j),{title:n(a)("pullRefresh")},{default:f(()=>[o(n(Q),{modelValue:t.value[2].refreshing,"onUpdate:modelValue":e[7]||(e[7]=r=>t.value[2].refreshing=r),onRefresh:e[8]||(e[8]=r=>c(2))},{default:f(()=>[o(n(L),{loading:t.value[2].loading,"onUpdate:loading":e[5]||(e[5]=r=>t.value[2].loading=r),finished:t.value[2].finished,"finished-text":n(a)("finishedText"),onLoad:e[6]||(e[6]=r=>l(2))},{default:f(()=>[(m(!0),T(k,null,C(t.value[2].items,r=>(m(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{Be as default};
