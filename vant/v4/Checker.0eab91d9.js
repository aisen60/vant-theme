import{e as C,h as g}from"./use-translate.2660019b.js";import{d as P,t as S,u as k,m as z,n as x}from"./with-install.87cec8a5.js";import{I as D}from"./index.17b6eda3.js";import{A as y,x as B,D as r,e as t}from"./vue-libs.df86f395.js";const I={name:k,shape:z("round"),disabled:Boolean,iconSize:x,modelValue:k,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var q=y({props:C({},I,{bem:P(Function),role:String,parent:Object,checked:Boolean,bindGroup:S}),emits:["click","toggle"],setup(e,{emit:s,slots:c}){const u=B(),l=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},o=r(()=>l("disabled")||e.disabled),f=r(()=>l("direction")),h=r(()=>{const n=e.checkedColor||l("checkedColor");if(n&&e.checked&&!o.value)return{borderColor:n,backgroundColor:n}}),v=n=>{const{target:i}=n,a=u.value,d=a===i||(a==null?void 0:a.contains(i));!o.value&&(d||!e.labelDisabled)&&s("toggle"),s("click",n)},b=()=>{const{bem:n,shape:i,checked:a}=e,d=e.iconSize||l("iconSize");return t("div",{ref:u,class:n("icon",[i,{disabled:o.value,checked:a}]),style:{fontSize:g(d)}},[c.icon?c.icon({checked:a,disabled:o.value}):t(D,{name:"success",style:h.value},null)])},m=()=>{if(c.default)return t("span",{class:e.bem("label",[e.labelPosition,{disabled:o.value}])},[c.default()])};return()=>{const n=e.labelPosition==="left"?[m(),b()]:[b(),m()];return t("div",{role:e.role,class:e.bem([{disabled:o.value,"label-disabled":e.labelDisabled},f.value]),tabindex:o.value?void 0:0,"aria-checked":e.checked,onClick:v},[n])}}});export{q as C,I as c};
