import{c as h,E as C,h as w}from"./use-translate.22943ac9.js";import{n as k,u as t,w as b}from"./with-install.c6b01ca2.js";import{L as S}from"./index.f8de354f.js";import{A as y,e as c}from"./vue-libs.df86f395.js";const[z,l]=h("switch"),L={size:k,loading:Boolean,disabled:Boolean,modelValue:t,activeColor:String,inactiveColor:String,activeValue:{type:t,default:!0},inactiveValue:{type:t,default:!1}};var P=y({name:z,props:L,emits:["change","update:modelValue"],setup(e,{emit:d,slots:n}){const o=()=>e.modelValue===e.activeValue,s=()=>{if(!e.disabled&&!e.loading){const a=o()?e.inactiveValue:e.activeValue;d("update:modelValue",a),d("change",a)}},m=()=>{if(e.loading){const a=o()?e.activeColor:e.inactiveColor;return c(S,{class:l("loading"),color:a},null)}if(n.node)return n.node()};return C(()=>e.modelValue),()=>{var u;const{size:a,loading:v,disabled:r,activeColor:f,inactiveColor:g}=e,i=o(),V={fontSize:w(a),backgroundColor:i?f:g};return c("div",{role:"switch",class:l({on:i,loading:v,disabled:r}),style:V,tabindex:r?void 0:0,"aria-checked":i,onClick:s},[c("div",{class:l("node")},[m()]),(u=n.background)==null?void 0:u.call(n)])}}});const E=b(P);export{E as S};
