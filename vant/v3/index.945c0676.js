import{c as p,a as f}from"./use-translate.8b8ccbb1.js";import{m as _,t as k,w as F}from"./with-install.994557f3.js";import{C as b}from"./index.ff2051f9.js";import{z as C,e as a,C as B,r as E,o as v,a as y,w as r,B as t,F as h}from"./vue-libs.bf80eadf.js";import{T as u}from"./function-call.7212d0ef.js";import"./use-route.9fd68ea8.js";import"./index.bbd0c688.js";import"./mount-component.af79618c.js";import"./use-expose.6f045672.js";import"./index.169d2299.js";import"./constant.80c6de18.js";import"./interceptor.66265d5f.js";import"./use-touch.b6ff7b52.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.199a6ce6.js";import"./index.4ba0b313.js";const[A,s,c]=p("contact-card"),S={tel:String,name:String,type:_("add"),addText:String,editable:k};var g=C({name:A,props:S,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||c("addContact"):[a("div",null,[`${c("name")}\uFF1A${e.name}`]),a("div",null,[`${c("tel")}\uFF1A${e.tel}`])];return()=>a(b,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:s([e.type]),border:!1,isLink:e.editable,valueClass:s("value"),onClick:o},{value:d})}});const m=F(g),O=C({setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=B(()=>({name:n("name"),tel:"13000000000"})),d=()=>u(n("add")),i=()=>u(n("edit"));return(w,x)=>{const l=E("demo-block");return v(),y(h,null,[a(l,{title:t(n)("addContact")},{default:r(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(l,{title:t(n)("editContact")},{default:r(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(l,{title:t(n)("uneditable")},{default:r(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{O as default};
