import{c as T,t as h,m as k}from"./use-translate.e667ce10.js";import{w}from"./with-install.feb19484.js";import{z as x,e as t,T as S}from"./vue-libs.1dda7261.js";import{I as j}from"./index.472ff4df.js";const[p,s]=T("tag");var y=x({name:p,props:{size:String,mark:Boolean,show:h,type:k("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean},emits:["close"],setup(e,{slots:a,emit:c}){const i=o=>{o.stopPropagation(),c("close",o)},m=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},d=()=>{var r;const{type:o,mark:u,plain:f,round:g,size:n,closeable:b}=e,l={mark:u,plain:f,round:g};n&&(l[n]=n);const C=b&&t(j,{name:"cross",class:s("close"),onClick:i},null);return t("span",{style:m(),class:s([l,o])},[(r=a.default)==null?void 0:r.call(a),C])};return()=>t(S,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?d():null]})}});const v=w(y);export{v as T};
