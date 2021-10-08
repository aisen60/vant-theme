import{c as x,e as D,n as C,t as h,a as k}from"./use-translate.e667ce10.js";import{w as v}from"./with-install.feb19484.js";import{B as A}from"./index.d91601ec.js";import{R as B,a as F}from"./index.e32d5673.js";import{T as _}from"./index.3b581d78.js";import{I as w}from"./index.472ff4df.js";import{C as S}from"./index.5a14a991.js";import{z as p,e as i,A as T,D as y,r as L,o as V,c as I,w as $,B as l}from"./vue-libs.1dda7261.js";import{T as j}from"./function-call.deede8ba.js";import"./constant.4d85ecb9.js";import"./use-route.dfb37f70.js";import"./index.ae867a8e.js";import"./useChildren.ed284d59.js";import"./index.5b10c1d9.js";import"./Checker.5cbf3be7.js";import"./useParent.5e3d1dfb.js";import"./mount-component.553013ae.js";import"./use-expose.9b0dd301.js";import"./index.13873f42.js";import"./interceptor.b759bdc5.js";import"./use-touch.b0c07ae6.js";import"./index.904c4b4d.js";import"./utils.39620306.js";import"./index.0749451f.js";import"./use-lazy-render.e44d61c0.js";import"./on-popup-reopen.1b0dc8ad.js";import"./index.57f9d610.js";function N(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!T(e)}const[O,c]=x("address-item");var z=p({name:O,props:{disabled:Boolean,switchable:Boolean,defaultTagText:String,address:{type:Object,required:!0}},emits:["edit","click","select"],setup(e,{slots:t,emit:u}){const m=()=>{e.switchable&&u("select"),u("click")},r=()=>i(w,{name:"edit",class:c("edit"),onClick:a=>{a.stopPropagation(),u("edit"),u("click")}},null),f=()=>{if(t.tag)return t.tag(e.address);if(e.address.isDefault&&e.defaultTagText)return i(_,{type:"danger",round:!0,class:c("tag")},{default:()=>[e.defaultTagText]})},d=()=>{const{address:a,disabled:s,switchable:o}=e,n=[i("div",{class:c("name")},[`${a.name} ${a.tel}`,f()]),i("div",{class:c("address")},[a.address])];return o&&!s?i(B,{name:a.id,iconSize:18},N(n)?n:{default:()=>[n]}):n};return()=>{var s;const{disabled:a}=e;return i("div",{class:c({disabled:a}),onClick:m},[i(S,{border:!1,valueClass:c("value")},{value:d,"right-icon":r}),(s=t.bottom)==null?void 0:s.call(t,D({},e.address,{disabled:a}))])}}});function P(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!T(e)}const[R,b,U]=x("address-list");var q=p({name:R,props:{modelValue:C,switchable:h,disabledText:String,addButtonText:String,defaultTagText:String,list:{type:Array,default:()=>[]},disabledList:{type:Array,default:()=>[]}},emits:["add","edit","select","click-item","edit-disabled","select-disabled","update:modelValue"],setup(e,{slots:t,emit:u}){const m=(d,a,s)=>{const o=()=>{u(s?"edit-disabled":"edit",d,a)},n=()=>u("click-item",d,a),g=()=>{u(s?"select-disabled":"select",d,a),s||u("update:modelValue",d.id)};return i(z,{key:d.id,address:d,disabled:s,switchable:e.switchable,defaultTagText:e.defaultTagText,onEdit:o,onClick:n,onSelect:g},{bottom:t["item-bottom"],tag:t.tag})},r=(d,a)=>{if(d)return d.map((s,o)=>m(s,o,a))},f=()=>i("div",{class:[b("bottom"),"van-safe-area-bottom"]},[i(A,{round:!0,block:!0,type:"danger",text:e.addButtonText||U("add"),class:b("add"),onClick:()=>u("add")},null)]);return()=>{var o,n;const d=r(e.list),a=r(e.disabledList,!0),s=e.disabledText&&i("div",{class:b("disabled-text")},[e.disabledText]);return i("div",{class:b()},[(o=t.top)==null?void 0:o.call(t),i(F,{modelValue:e.modelValue},P(d)?d:{default:()=>[d]}),s,a,(n=t.default)==null?void 0:n.call(t),f()])}}});const G=v(q);const je=p({setup(e){const t=k({"zh-CN":{list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u6587\u4E09\u8DEF 138 \u53F7\u4E1C\u65B9\u901A\u4FE1\u5927\u53A6 7 \u697C 501 \u5BA4",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A\u83AB\u5E72\u5C71\u8DEF 50 \u53F7"}],disabledList:[{id:"3",name:"\u738B\u4E94",tel:"1320000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6C5F\u5357\u5927\u9053 15 \u53F7"}],add:"\u65B0\u589E\u5730\u5740",edit:"\u7F16\u8F91\u5730\u5740",disabledText:"\u4EE5\u4E0B\u5730\u5740\u8D85\u51FA\u914D\u9001\u8303\u56F4",defaultTagText:"\u9ED8\u8BA4"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range",defaultTagText:"Default"}}),u=y("1"),m=()=>{j(t("add"))},r=(f,d)=>{j(`${t("edit")}:${d}`)};return(f,d)=>{const a=L("demo-block");return V(),I(a,{title:l(t)("basicUsage")},{default:$(()=>[i(l(G),{modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=s=>u.value=s),list:l(t)("list"),"disabled-list":l(t)("disabledList"),"disabled-text":l(t)("disabledText"),"default-tag-text":l(t)("defaultTagText"),onAdd:m,onEdit:r},null,8,["modelValue","list","disabled-list","disabled-text","default-tag-text"])]),_:1},8,["title"])}}});export{je as default};
