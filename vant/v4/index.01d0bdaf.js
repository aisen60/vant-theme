import{c as f,h as _,q as C,a as S}from"./use-translate.94d81043.js";import{c as g,t as v,n as w,m as p,w as y}from"./with-install.dd5596ee.js";import{A as F,e,x as B,r as V,o as k,a as W,w as c,C as u,d as s,t as E,F as b}from"./vue-libs.84c45047.js";import{S as D}from"./index.c3cce590.js";import"./index.a750e74d.js";const[T,i]=f("skeleton"),A="100%",U="60%",N={row:g(0),title:Boolean,round:Boolean,avatar:Boolean,loading:v,animate:v,avatarSize:w,titleWidth:w,avatarShape:p("round"),rowWidth:{type:[Number,String,Array],default:A}};var x=F({name:T,props:N,setup(t,{slots:a}){const r=()=>{if(t.avatar)return e("div",{class:i("avatar",t.avatarShape),style:C(t.avatarSize)},null)},h=()=>{if(t.title)return e("h3",{class:i("title"),style:{width:_(t.titleWidth)}},null)},d=n=>{const{rowWidth:o}=t;return o===A&&n===+t.row-1?U:Array.isArray(o)?o[n]:o},l=()=>Array(+t.row).fill("").map((n,o)=>e("div",{class:i("row"),style:{width:_(d(o))}},null));return()=>{var n;return t.loading?e("div",{class:i({animate:t.animate,round:t.round})},[r(),e("div",{class:i("content")},[h(),l()])]):(n=a.default)==null?void 0:n.call(a)}}});const m=y(x);const z={class:"demo-preview"},P=s("img",{src:"https://img.yzcdn.cn/vant/logo.png"},null,-1),I={class:"demo-content"},M=F({setup(t){const a=S({"zh-CN":{showAvatar:"\u663E\u793A\u5934\u50CF",showChildren:"\u663E\u793A\u5B50\u7EC4\u4EF6",title:"\u5173\u4E8E Vant",desc:"Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\u3002"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Vant",desc:"Vant is a set of Mobile UI Components built on Vue."}}),r=B(!1);return(h,d)=>{const l=V("demo-block");return k(),W(b,null,[e(l,{title:u(a)("basicUsage")},{default:c(()=>[e(u(m),{title:"",row:3})]),_:1},8,["title"]),e(l,{title:u(a)("showAvatar")},{default:c(()=>[e(u(m),{title:"",avatar:"",row:3})]),_:1},8,["title"]),e(l,{title:u(a)("showChildren")},{default:c(()=>[e(u(D),{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=n=>r.value=n)},null,8,["modelValue"]),e(u(m),{title:"",avatar:"",row:3,loading:!r.value},{default:c(()=>[s("div",z,[P,s("div",I,[s("h3",null,E(u(a)("title")),1),s("p",null,E(u(a)("desc")),1)])])]),_:1},8,["loading"])]),_:1},8,["title"])],64)}}});export{M as default};
