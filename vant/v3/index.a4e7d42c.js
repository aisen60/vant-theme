import{a as c,T as j}from"./index.19ec33d6.js";import{P as m}from"./index.3250c305.js";import{a as v}from"./use-translate.7145ee20.js";import{T as b}from"./function-call.3d6aa441.js";import{z as x,D as g,C as T,N as y,o as _,c as B,w as o,e as n,B as s,d as l,t as f,g as V}from"./vue-libs.84e059bd.js";import"./with-install.756837d9.js";import"./use-id.28dc46a0.js";import"./use-expose.897feea8.js";import"./use-route.841a0e09.js";import"./index.5da1b63b.js";import"./use-touch.a752672a.js";import"./on-popup-reopen.b9a88023.js";import"./constant.80c6de18.js";import"./interceptor.fa55923e.js";import"./use-refs.a0d96d45.js";import"./index.bd95d4c2.js";import"./index.bea91046.js";import"./index.8397aee6.js";import"./mount-component.f2698375.js";import"./index.bba74b3b.js";import"./use-lazy-render.0b8d6da1.js";import"./index.bd0de4f7.js";const h=l("img",{src:"https://b.yzcdn.cn/vant/doge.png",class:"doge"},null,-1),z=l("img",{src:"https://b.yzcdn.cn/vant/doge-fire.jpg",class:"doge"},null,-1),X=x({setup(C){const u=v({"zh-CN":{try:"\u4E0B\u62C9\u8BD5\u8BD5",text:"\u5237\u65B0\u6B21\u6570",success:"\u5237\u65B0\u6210\u529F",successTip:"\u6210\u529F\u63D0\u793A",customTips:"\u81EA\u5B9A\u4E49\u63D0\u793A"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}}),i=g(0),a=g(!1),d=T(()=>i.value?`${u("text")}: ${i.value}`:u("try")),p=r=>{setTimeout(()=>{r&&b(u("success")),a.value=!1,i.value++},1e3)};return y(()=>{const r=new Image,e=new Image;r.src="https://b.yzcdn.cn/vant/doge.png",e.src="https://b.yzcdn.cn/vant/doge-fire.jpg"}),(r,e)=>(_(),B(s(j),null,{default:o(()=>[n(s(c),{title:s(u)("basicUsage")},{default:o(()=>[n(s(m),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),onRefresh:e[1]||(e[1]=t=>p(!0))},{default:o(()=>[l("p",null,f(s(d)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),n(s(c),{title:s(u)("successTip")},{default:o(()=>[n(s(m),{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),"success-text":s(u)("success"),onRefresh:e[3]||(e[3]=t=>p(!1))},{default:o(()=>[l("p",null,f(s(d)),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),n(s(c),{title:s(u)("customTips")},{default:o(()=>[n(s(m),{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value=t),"head-height":"80",onRefresh:e[5]||(e[5]=t=>p(!0))},{pulling:o(({distance:t})=>[l("img",{class:"doge",src:"https://b.yzcdn.cn/vant/doge.png",style:V({transform:`scale(${t/80})`})},null,4)]),loosing:o(()=>[h]),loading:o(()=>[z]),default:o(()=>[l("p",null,f(s(d)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{X as default};
