import{c as d,n as m,u as p,r as f}from"./use-translate.39547e32.js";import{w as s}from"./with-install.cc9696bc.js";import{z as u,x as h,e as c,I as V}from"./vue-libs.71fdcafc.js";import{u as g}from"./useChildren.edf9a3d1.js";import{u as b}from"./index.a16d08bc.js";import{c as k,C}from"./Checker.a5655ec8.js";import{u as j}from"./useParent.e4fd6deb.js";const[l,v]=d("radio-group"),P={disabled:Boolean,iconSize:m,direction:String,modelValue:p,checkedColor:String},i=Symbol(l);var R=u({name:l,props:P,emits:["change","update:modelValue"],setup(e,{emit:n,slots:r}){const{linkChildren:o}=g(i),t=a=>n("update:modelValue",a);return h(()=>e.modelValue,a=>n("change",a)),o({props:e,updateValue:t}),b(()=>e.modelValue),()=>{var a;return c("div",{class:v([e.direction]),role:"radiogroup"},[(a=r.default)==null?void 0:a.call(r)])}}});const B=s(R),[w,S]=d("radio");var x=u({name:w,props:k,emits:["update:modelValue"],setup(e,{emit:n,slots:r}){const{parent:o}=j(i),t=()=>(o?o.props.modelValue:e.modelValue)===e.name,a=()=>{o?o.updateValue(e.name):n("update:modelValue",e.name)};return()=>c(C,V({bem:S,role:"radio",parent:o,checked:t(),onToggle:a},e),f(r,["default","icon"]))}});const D=s(x);export{D as R,B as a};
