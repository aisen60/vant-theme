import{u as e}from"./use-translate.b583725c.js";import{c as a,w as o}from"./with-install.62f47d2f.js";import{a as i}from"./unit.49c29796.js";import{L as l}from"./index.6fa13143.js";import{u as t}from"./index.49199c0d.js";import{A as s,e as n}from"./vendor.ef334a89.js";const[r,c]=a("switch");const d=o(s({name:r,props:{size:[Number,String],loading:Boolean,disabled:Boolean,modelValue:e,activeColor:String,inactiveColor:String,activeValue:{type:e,default:!0},inactiveValue:{type:e,default:!1}},emits:["change","update:modelValue"],setup(e,{emit:a}){const o=()=>e.modelValue===e.activeValue,s=()=>{if(!e.disabled&&!e.loading){const i=o()?e.inactiveValue:e.activeValue;a("update:modelValue",i),a("change",i)}},r=()=>{if(e.loading){const a=o()?e.activeColor:e.inactiveColor;return n(l,{class:c("loading"),color:a},null)}};return t((()=>e.modelValue)),()=>{const{size:a,loading:l,disabled:t,activeColor:d,inactiveColor:u}=e,m=o(),f={fontSize:i(a),backgroundColor:m?d:u};return n("div",{role:"switch",class:c({on:m,loading:l,disabled:t}),style:f,"aria-checked":m,onClick:s},[n("div",{class:c("node")},[r()])])}}}));export{d as S};
