import{c as p,a as f}from"./use-translate.94d81043.js";import{m as _,t as k,w as F}from"./with-install.dd5596ee.js";import{C as b}from"./index.172b9149.js";import{A as C,e as a,D as B,r as E,o as y,a as A,w as r,C as t,F as h}from"./vue-libs.84c45047.js";import{T as s}from"./function-call.0fe04b1d.js";import"./use-route.7c55373a.js";import"./index.9326a531.js";import"./mount-component.725b707e.js";import"./use-expose.771ababc.js";import"./index.a8744559.js";import"./constant.80c6de18.js";import"./interceptor.e76ee8d4.js";import"./use-touch.109c1035.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9c372815.js";import"./index.a750e74d.js";const[S,u,c]=p("contact-card"),g={tel:String,name:String,type:_("add"),addText:String,editable:k};var w=C({name:S,props:g,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||c("addContact"):[a("div",null,[`${c("name")}\uFF1A${e.name}`]),a("div",null,[`${c("tel")}\uFF1A${e.tel}`])];return()=>a(b,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:u([e.type]),border:!1,isLink:e.editable,titleClass:u("title"),onClick:o},{title:d})}});const m=F(w),O=C({setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=B(()=>({name:n("name"),tel:"13000000000"})),d=()=>s(n("add")),i=()=>s(n("edit"));return(x,T)=>{const l=E("demo-block");return y(),A(h,null,[a(l,{title:t(n)("addContact")},{default:r(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(l,{title:t(n)("editContact")},{default:r(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(l,{title:t(n)("uneditable")},{default:r(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{O as default};
