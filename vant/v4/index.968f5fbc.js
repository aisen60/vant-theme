import{c as C,h as v,q as S,a as g}from"./use-translate.2660019b.js";import{c as p,t as w,n as E,m as B,w as y}from"./with-install.87cec8a5.js";import{A as f,e,B as V,x as k,r as W,o as b,a as D,w as c,C as a,d as i,t as F,F as U}from"./vue-libs.df86f395.js";import{S as T}from"./index.bc6fa6ce.js";import{c as x}from"./index.00b749b5.js";import"./index.c5042094.js";const[N,s]=C("skeleton"),A="100%",P="60%",R={row:p(0),title:Boolean,round:Boolean,avatar:Boolean,loading:w,animate:w,avatarSize:E,titleWidth:E,avatarShape:B("round"),rowWidth:{type:[Number,String,Array],default:A}};var z=f({name:N,inheritAttrs:!1,props:R,setup(t,{slots:u,attrs:o}){const _=()=>{if(t.avatar)return e("div",{class:s("avatar",t.avatarShape),style:S(t.avatarSize)},null)},d=()=>{if(t.title)return e("h3",{class:s("title"),style:{width:v(t.titleWidth)}},null)},l=n=>{const{rowWidth:r}=t;return r===A&&n===+t.row-1?P:Array.isArray(r)?r[n]:r},m=()=>Array(+t.row).fill("").map((n,r)=>e("div",{class:s("row"),style:{width:v(l(r))}},null));return()=>{var n;return t.loading?e("div",V({class:s({animate:t.animate,round:t.round})},o),[_(),e("div",{class:s("content")},[d(),m()])]):(n=u.default)==null?void 0:n.call(u)}}});const h=y(z);const I={class:"demo-preview"},L=["src"],H={class:"demo-content"},K=f({name:"index",setup(t){const u=g({"zh-CN":{showAvatar:"\u663E\u793A\u5934\u50CF",showChildren:"\u663E\u793A\u5B50\u7EC4\u4EF6",title:"\u5173\u4E8E Vant",desc:"Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\u3002"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Vant",desc:"Vant is a set of Mobile UI Components built on Vue."}}),o=k(!1);return(_,d)=>{const l=W("demo-block");return b(),D(U,null,[e(l,{title:a(u)("basicUsage")},{default:c(()=>[e(a(h),{title:"",row:3})]),_:1},8,["title"]),e(l,{title:a(u)("showAvatar")},{default:c(()=>[e(a(h),{title:"",avatar:"",row:3})]),_:1},8,["title"]),e(l,{title:a(u)("showChildren")},{default:c(()=>[e(a(T),{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=m=>o.value=m)},null,8,["modelValue"]),e(a(h),{title:"",avatar:"",row:3,loading:!o.value},{default:c(()=>[i("div",I,[i("img",{src:a(x)("logo.png")},null,8,L),i("div",H,[i("h3",null,F(a(u)("title")),1),i("p",null,F(a(u)("desc")),1)])])]),_:1},8,["loading"])]),_:1},8,["title"])],64)}}});export{K as default};
