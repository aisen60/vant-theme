import{c as x,u as j,a as g}from"./use-translate.39547e32.js";import{w as T}from"./with-install.cc9696bc.js";import{T as b}from"./index.23ed3db9.js";import{I as C}from"./index.5e447543.js";import{C as _}from"./index.f7946dd6.js";import{a as k,R as v}from"./index.02d40be1.js";import{B as h}from"./index.64adedce.js";import{z as f,e as a,D as V,r as B,o as E,c as S,w,B as u}from"./vue-libs.71fdcafc.js";import{T as p}from"./function-call.025b6196.js";import"./use-route.913efdd2.js";import"./useChildren.edf9a3d1.js";import"./index.a16d08bc.js";import"./Checker.a5655ec8.js";import"./useParent.e4fd6deb.js";import"./constant.4d85ecb9.js";import"./index.b9a228ca.js";import"./mount-component.a2b5841e.js";import"./use-expose.877c018b.js";import"./index.760aa272.js";import"./interceptor.33314343.js";import"./use-touch.30351383.js";import"./index.92de2fdc.js";import"./utils.39620306.js";import"./index.c1e8d10d.js";import"./use-lazy-render.3dcfda58.js";import"./on-popup-reopen.d7054786.js";import"./index.0ff7945f.js";const[y,s,I]=x("contact-list");var D=f({name:y,props:{list:Array,addText:String,modelValue:j,defaultTagText:String},emits:["add","edit","select","update:modelValue"],setup(o,{emit:e}){const l=(t,i)=>{const c=()=>{e("update:modelValue",t.id),e("select",t,i)},d=()=>a(v,{class:s("radio"),name:t.id,iconSize:16},null),r=()=>a(C,{name:"edit",class:s("edit"),onClick:n=>{n.stopPropagation(),e("edit",t,i)}},null),m=()=>{const n=[`${t.name}\uFF0C${t.tel}`];return t.isDefault&&o.defaultTagText&&n.push(a(b,{type:"danger",round:!0,class:s("item-tag")},{default:()=>[o.defaultTagText]})),n};return a(_,{key:t.id,isLink:!0,center:!0,class:s("item"),valueClass:s("item-value"),onClick:c},{icon:r,value:m,"right-icon":d})};return()=>a("div",{class:s()},[a(k,{modelValue:o.modelValue,class:s("group")},{default:()=>[o.list&&o.list.map(l)]}),a("div",{class:[s("bottom"),"van-safe-area-bottom"]},[a(h,{round:!0,block:!0,type:"danger",class:s("add"),text:o.addText||I("addText"),onClick:()=>e("add")},null)])])}});const z=T(D);const le=f({setup(o){const e=g({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000"}],select:"\u9009\u62E9",defaultTagText:"\u9ED8\u8BA4"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),l=V("1"),t=()=>{p(e("add"))},i=d=>{p(e("edit")+d.id)},c=d=>{p(e("select")+d.id)};return(d,r)=>{const m=B("demo-block");return E(),S(m,{title:u(e)("basicUsage")},{default:w(()=>[a(u(z),{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=n=>l.value=n),list:u(e)("list"),"default-tag-text":u(e)("defaultTagText"),onAdd:t,onEdit:i,onSelect:c},null,8,["modelValue","list","default-tag-text"])]),_:1},8,["title"])}}});export{le as default};
