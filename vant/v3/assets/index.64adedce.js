import{c as v,e as z,m as l,n as p}from"./use-translate.39547e32.js";import{w as I}from"./with-install.cc9696bc.js";import{B as R}from"./constant.4d85ecb9.js";import{r as w,u as C}from"./use-route.913efdd2.js";import{I as D}from"./index.5e447543.js";import{L}from"./index.b9a228ca.js";import{z as N,e as o}from"./vue-libs.71fdcafc.js";const[q,a]=v("button");var O=N({name:q,props:z({},w,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:p,loadingText:String,loadingType:String,iconPosition:l("left")}),emits:["click"],setup(n,{emit:f,slots:t}){const g=C(),m=()=>t.loading?t.loading():o(L,{size:n.loadingSize,type:n.loadingType,class:a("loading")},null),c=()=>{if(n.loading)return m();if(t.icon)return o("div",{class:a("icon")},[t.icon()]);if(n.icon)return o(D,{name:n.icon,class:a("icon"),classPrefix:n.iconPrefix},null)},b=()=>{let e;if(n.loading?e=n.loadingText:e=t.default?t.default():n.text,e)return o("span",{class:a("text")},[e])},x=()=>{const{color:e,plain:r}=n;if(e){const i={color:r?e:"white"};return r||(i.background=e),e.includes("gradient")?i.border=0:i.borderColor=e,i}},B=e=>{n.loading?e.preventDefault():n.disabled||(f("click",e),g())};return()=>{const{tag:e,type:r,size:i,block:y,round:S,plain:k,square:P,loading:j,disabled:s,hairline:d,nativeType:T,iconPosition:u}=n,h=[a([r,i,{plain:k,block:y,round:S,square:P,loading:j,disabled:s,hairline:d}]),{[R]:d}];return o(e,{type:T,class:h,style:x(),disabled:s,onClick:B},{default:()=>[o("div",{class:a("content")},[u==="left"&&c(),b(),u==="right"&&c()])]})}}});const H=I(O);export{H as B};
