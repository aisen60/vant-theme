import{a as d,T as v}from"./index.a433a617.js";import{P as c}from"./index.38eaed68.js";import{a as T}from"./use-translate.d5447508.js";import{T as _}from"./function-call.3571e804.js";import{A as x,x as g,D as V,N as B,o as y,c as h,w as o,e as a,C as t,d as n,t as f,g as j}from"./vue-libs.84c45047.js";import"./with-install.cb9a7594.js";import"./use-id.e5fd672f.js";import"./use-expose.fb587d91.js";import"./use-route.7c55373a.js";import"./index.15037ee5.js";import"./use-touch.c1d7ebd1.js";import"./on-popup-reopen.e7b96e14.js";import"./constant.80c6de18.js";import"./interceptor.3a2c1bf0.js";import"./use-refs.e65104ff.js";import"./index.0190c2f2.js";import"./index.62b8e91e.js";import"./index.57f45cfb.js";import"./mount-component.594597b7.js";import"./index.5997f785.js";import"./use-lazy-render.20e241a7.js";import"./index.df814d0e.js";const C=n("img",{src:"https://cdn.jsdelivr.net/npm/@vant/assets/doge.png",class:"doge"},null,-1),R=n("img",{src:"https://cdn.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg",class:"doge"},null,-1),X=x({setup(D){const u=T({"zh-CN":{try:"\u4E0B\u62C9\u8BD5\u8BD5",text:"\u5237\u65B0\u6B21\u6570",success:"\u5237\u65B0\u6210\u529F",successTip:"\u6210\u529F\u63D0\u793A",customTips:"\u81EA\u5B9A\u4E49\u63D0\u793A"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}}),i=g(0),l=g(!1),p=V(()=>i.value?`${u("text")}: ${i.value}`:u("try")),m=r=>{setTimeout(()=>{r&&_(u("success")),l.value=!1,i.value++},1e3)};return B(()=>{const r=new Image,e=new Image;r.src="https://cdn.jsdelivr.net/npm/@vant/assets/doge.png",e.src="https://cdn.jsdelivr.net/npm/@vant/assets/doge-fire.jpeg"}),(r,e)=>(y(),h(t(v),null,{default:o(()=>[a(t(d),{title:t(u)("basicUsage")},{default:o(()=>[a(t(c),{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),onRefresh:e[1]||(e[1]=s=>m(!0))},{default:o(()=>[n("p",null,f(t(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(t(d),{title:t(u)("successTip")},{default:o(()=>[a(t(c),{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=s=>l.value=s),"success-text":t(u)("success"),onRefresh:e[3]||(e[3]=s=>m(!1))},{default:o(()=>[n("p",null,f(t(p)),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),a(t(d),{title:t(u)("customTips")},{default:o(()=>[a(t(c),{modelValue:l.value,"onUpdate:modelValue":e[4]||(e[4]=s=>l.value=s),"head-height":"80",onRefresh:e[5]||(e[5]=s=>m(!0))},{pulling:o(({distance:s})=>[n("img",{class:"doge",src:"https://cdn.jsdelivr.net/npm/@vant/assets/doge.png",style:j({transform:`scale(${s/80})`})},null,4)]),loosing:o(()=>[C]),loading:o(()=>[R]),default:o(()=>[n("p",null,f(t(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{X as default};
