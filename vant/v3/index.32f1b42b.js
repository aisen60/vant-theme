import{a as d,T as v}from"./index.187ce2d8.js";import{P as c}from"./index.cfe3816a.js";import{a as T}from"./use-translate.fbf36f21.js";import{T as y}from"./function-call.105b6793.js";import{z as _,D as g,C as B,N as V,o as x,c as b,w as o,e as a,B as t,d as n,t as f,g as h}from"./vue-libs.bf80eadf.js";import"./with-install.251697cd.js";import"./use-id.139c5032.js";import"./use-expose.8d47dba2.js";import"./use-route.9fd68ea8.js";import"./index.47538ae0.js";import"./use-touch.9de12470.js";import"./on-popup-reopen.e08ee506.js";import"./constant.80c6de18.js";import"./interceptor.12fa8767.js";import"./use-refs.1bd4ff6f.js";import"./index.1a890101.js";import"./index.f1bbf430.js";import"./index.d99a07cf.js";import"./mount-component.985a4079.js";import"./index.6b877abf.js";import"./use-lazy-render.d79b7d1e.js";import"./index.c2caac4e.js";const z=n("img",{src:"https://b.yzcdn.cn/vant/doge.png",class:"doge"},null,-1),C=n("img",{src:"https://b.yzcdn.cn/vant/doge-fire.jpg",class:"doge"},null,-1),X=_({setup(R){const u=T({"zh-CN":{try:"\u4E0B\u62C9\u8BD5\u8BD5",text:"\u5237\u65B0\u6B21\u6570",success:"\u5237\u65B0\u6210\u529F",successTip:"\u6210\u529F\u63D0\u793A",customTips:"\u81EA\u5B9A\u4E49\u63D0\u793A"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}}),i=g(0),l=g(!1),p=B(()=>i.value?`${u("text")}: ${i.value}`:u("try")),m=r=>{setTimeout(()=>{r&&y(u("success")),l.value=!1,i.value++},1e3)};return V(()=>{const r=new Image,e=new Image;r.src="https://b.yzcdn.cn/vant/doge.png",e.src="https://b.yzcdn.cn/vant/doge-fire.jpg"}),(r,e)=>(x(),b(t(v),null,{default:o(()=>[a(t(d),{title:t(u)("basicUsage")},{default:o(()=>[a(t(c),{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),onRefresh:e[1]||(e[1]=s=>m(!0))},{default:o(()=>[n("p",null,f(t(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(t(d),{title:t(u)("successTip")},{default:o(()=>[a(t(c),{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=s=>l.value=s),"success-text":t(u)("success"),onRefresh:e[3]||(e[3]=s=>m(!1))},{default:o(()=>[n("p",null,f(t(p)),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),a(t(d),{title:t(u)("customTips")},{default:o(()=>[a(t(c),{modelValue:l.value,"onUpdate:modelValue":e[4]||(e[4]=s=>l.value=s),"head-height":"80",onRefresh:e[5]||(e[5]=s=>m(!0))},{pulling:o(({distance:s})=>[n("img",{class:"doge",src:"https://b.yzcdn.cn/vant/doge.png",style:h({transform:`scale(${s/80})`})},null,4)]),loosing:o(()=>[z]),loading:o(()=>[C]),default:o(()=>[n("p",null,f(t(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{X as default};
