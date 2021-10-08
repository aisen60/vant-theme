import{C as f}from"./index.f7946dd6.js";import{c as T,e as y,t as S,m as I,r as U,a as N}from"./use-translate.39547e32.js";import{w as $}from"./with-install.cc9696bc.js";import{I as z}from"./index.5e447543.js";import{p as _,P as L,a as V}from"./index.760aa272.js";import{L as q}from"./index.b9a228ca.js";import{z as D,e as n,I as H,q as K,D as w,C as j,r as W,o as G,a as J,w as h,B as e,d as M,t as Q,F as R}from"./vue-libs.71fdcafc.js";import{T as g}from"./function-call.025b6196.js";import"./use-route.913efdd2.js";import"./interceptor.33314343.js";import"./use-expose.877c018b.js";import"./use-touch.30351383.js";import"./index.92de2fdc.js";import"./utils.39620306.js";import"./index.c1e8d10d.js";import"./use-lazy-render.3dcfda58.js";import"./on-popup-reopen.d7054786.js";import"./index.0ff7945f.js";import"./mount-component.a2b5841e.js";const[X,l]=T("action-sheet");var Y=D({name:X,props:y({},_,{title:String,round:S,actions:Array,closeIcon:I("cross"),closeable:S,cancelText:String,description:String,closeOnPopstate:Boolean,closeOnClickAction:Boolean,safeAreaInsetBottom:S}),emits:["select","cancel","update:show"],setup(i,{slots:t,emit:c}){const u=a=>c("update:show",a),r=()=>{u(!1),c("cancel")},p=()=>{if(i.title)return n("div",{class:l("header")},[i.title,i.closeable&&n(z,{name:i.closeIcon,class:l("close"),onClick:r},null)])},m=()=>{if(t.cancel||i.cancelText)return[n("div",{class:l("gap")},null),n("button",{type:"button",class:l("cancel"),onClick:r},[t.cancel?t.cancel():i.cancelText])]},b=(a,F)=>{const{name:v,color:o,subname:d,loading:s,callback:A,disabled:O,className:B}=a,P=s?n(q,{class:l("loading-icon")},null):[n("span",{class:l("name")},[v]),d&&n("div",{class:l("subname")},[d])],E=()=>{O||s||(A&&A(a),i.closeOnClickAction&&u(!1),K(()=>c("select",a,F)))};return n("button",{type:"button",style:{color:o},class:[l("item",{loading:s,disabled:O}),B],onClick:E},[P])},k=()=>{if(i.description||t.description){const a=t.description?t.description():i.description;return n("div",{class:l("description")},[a])}},x=()=>{if(i.actions)return i.actions.map(b)};return()=>n(L,H({class:l(),round:i.round,position:"bottom",safeAreaInsetBottom:i.safeAreaInsetBottom},U(i,V),{"onUpdate:show":u}),{default:()=>{var a;return[p(),k(),n("div",{class:l("content")},[x(),(a=t.default)==null?void 0:a.call(t)]),m()]}})}});const C=$(Y);const Z={class:"demo-action-sheet-content"},ht=D({setup(i){const t=N({"zh-CN":{option1:"\u9009\u9879\u4E00",option2:"\u9009\u9879\u4E8C",option3:"\u9009\u9879\u4E09",subname:"\u63CF\u8FF0\u4FE1\u606F",showCancel:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",buttonText:"\u5F39\u51FA\u83DC\u5355",customPanel:"\u81EA\u5B9A\u4E49\u9762\u677F",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F",optionStatus:"\u9009\u9879\u72B6\u6001",coloredOption:"\u7740\u8272\u9009\u9879",disabledOption:"\u7981\u7528\u9009\u9879",showDescription:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"},"en-US":{option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description"}}),c=w(!1),u=w(!1),r=w(!1),p=w(!1),m=w(!1),b=j(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3")}]),k=j(()=>[{name:t("coloredOption"),color:"#ee0a24"},{name:t("disabledOption"),disabled:!0},{loading:!0}]),x=j(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3"),subname:t("subname")}]),a=v=>{c.value=!1,g(v.name)},F=()=>g(t("cancel"));return(v,o)=>{const d=W("demo-block");return G(),J(R,null,[n(d,{card:"",title:e(t)("basicUsage")},{default:h(()=>[n(e(f),{"is-link":"",title:e(t)("basicUsage"),onClick:o[0]||(o[0]=s=>c.value=!0)},null,8,["title"]),n(e(f),{"is-link":"",title:e(t)("showCancel"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["title"]),n(e(f),{"is-link":"",title:e(t)("showDescription"),onClick:o[2]||(o[2]=s=>m.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("optionStatus")},{default:h(()=>[n(e(f),{"is-link":"",title:e(t)("optionStatus"),onClick:o[3]||(o[3]=s=>p.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("customPanel")},{default:h(()=>[n(e(f),{"is-link":"",title:e(t)("customPanel"),onClick:o[4]||(o[4]=s=>r.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(e(C),{show:c.value,"onUpdate:show":o[5]||(o[5]=s=>c.value=s),actions:e(b),onSelect:a},null,8,["show","actions"]),n(e(C),{show:u.value,"onUpdate:show":o[6]||(o[6]=s=>u.value=s),actions:e(b),"close-on-click-action":"","cancel-text":e(t)("cancel"),onCancel:F},null,8,["show","actions","cancel-text"]),n(e(C),{show:m.value,"onUpdate:show":o[7]||(o[7]=s=>m.value=s),actions:e(x),"close-on-click-action":"","cancel-text":e(t)("cancel"),description:e(t)("description")},null,8,["show","actions","cancel-text","description"]),n(e(C),{show:p.value,"onUpdate:show":o[8]||(o[8]=s=>p.value=s),"close-on-click-action":"",actions:e(k),"cancel-text":e(t)("cancel")},null,8,["show","actions","cancel-text"]),n(e(C),{show:r.value,"onUpdate:show":o[9]||(o[9]=s=>r.value=s),title:e(t)("title")},{default:h(()=>[M("div",Z,Q(e(t)("content")),1)]),_:1},8,["show","title"])],64)}}});export{ht as default};
