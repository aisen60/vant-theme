import{c as h,e as v,l as I}from"./use-translate.d627ebf3.js";import{m as r,n as R,w as C}from"./with-install.9724bc72.js";import{B as w}from"./constant.80c6de18.js";import{r as D,u as L}from"./use-route.9fd68ea8.js";import{I as N}from"./index.72703c04.js";import{L as q}from"./index.4414d46f.js";import{z as O,e as i}from"./vue-libs.bf80eadf.js";const[U,a]=h("button"),_=v({},D,{tag:r("button"),text:String,icon:String,type:r("default"),size:r("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:r("button"),loadingSize:R,loadingText:String,loadingType:String,iconPosition:r("left")});var E=O({name:U,props:_,emits:["click"],setup(n,{emit:f,slots:o}){const g=L(),m=()=>o.loading?o.loading():i(q,{size:n.loadingSize,type:n.loadingType,class:a("loading")},null),c=()=>{if(n.loading)return m();if(o.icon)return i("div",{class:a("icon")},[o.icon()]);if(n.icon)return i(N,{name:n.icon,class:a("icon"),classPrefix:n.iconPrefix},null)},b=()=>{let e;if(n.loading?e=n.loadingText:e=o.default?o.default():n.text,e)return i("span",{class:a("text")},[e])},x=()=>{const{color:e,plain:l}=n;if(e){const t={color:l?e:"white"};return l||(t.background=e),e.includes("gradient")?t.border=0:t.borderColor=e,t}},B=e=>{n.loading?I(e):n.disabled||(f("click",e),g())};return()=>{const{tag:e,type:l,size:t,block:y,round:S,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:p,iconPosition:u}=n,z=[a([l,t,{plain:P,block:y,round:S,square:k,loading:T,disabled:s,hairline:d}]),{[w]:d}];return i(e,{type:p,class:z,style:x(),disabled:s,onClick:B},{default:()=>[i("div",{class:a("content")},[u==="left"&&c(),b(),u==="right"&&c()])]})}}});const K=C(E);export{K as B};
