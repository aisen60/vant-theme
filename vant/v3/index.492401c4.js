import{c as u,b as s,E as p,u as V,p as g}from"./use-translate.82d1675a.js";import{n as h,u as f,w as d}from"./with-install.1e1e6f3a.js";import{z as l,x as k,e as c,A as C}from"./vue-libs.d483629c.js";import{c as b,C as P}from"./Checker.95149a12.js";const[i,R]=u("radio-group"),v={disabled:Boolean,iconSize:h,direction:String,modelValue:f,checkedColor:String},m=Symbol(i);var w=l({name:i,props:v,emits:["change","update:modelValue"],setup(e,{emit:r,slots:n}){const{linkChildren:o}=s(m),t=a=>r("update:modelValue",a);return k(()=>e.modelValue,a=>r("change",a)),o({props:e,updateValue:t}),p(()=>e.modelValue),()=>{var a;return c("div",{class:R([e.direction]),role:"radiogroup"},[(a=n.default)==null?void 0:a.call(n)])}}});const N=d(w),[S,G]=u("radio");var _=l({name:S,props:b,emits:["update:modelValue"],setup(e,{emit:r,slots:n}){const{parent:o}=V(m),t=()=>(o?o.props.modelValue:e.modelValue)===e.name,a=()=>{o?o.updateValue(e.name):r("update:modelValue",e.name)};return()=>c(P,C({bem:G,role:"radio",parent:o,checked:t(),onToggle:a},e),g(n,["default","icon"]))}});const $=d(_);export{$ as R,N as a};
