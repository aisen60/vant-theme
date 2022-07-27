import{C}from"./index.e2ebc413.js";import{c as B,e as E,p as T,a as y}from"./use-translate.a4133d47.js";import{t as k,b as I,m as U,w as N}from"./with-install.00d98dcc.js";import{H as $}from"./constant.80c6de18.js";import{I as _}from"./index.fe213903.js";import{p as H,a as K,P as z}from"./index.baabf595.js";import{L}from"./index.699d7dad.js";import{z as P,e as o,A as V,q,D as w,C as x,r as W,o as j,a as G,w as S,B as e,d as J,t as M,F as Q}from"./vue-libs.bf80eadf.js";import{T as D}from"./function-call.7ee2359c.js";import"./use-route.9fd68ea8.js";import"./interceptor.1d862fca.js";import"./use-expose.b164e589.js";import"./use-touch.b6ff7b52.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.6cb86735.js";import"./mount-component.4fccb495.js";const[R,l]=B("action-sheet"),X=E({},H,{title:String,round:k,actions:I(),closeIcon:U("cross"),closeable:k,cancelText:String,description:String,closeOnPopstate:k,closeOnClickAction:Boolean,safeAreaInsetBottom:k}),Y=[...K,"round","closeOnPopstate","safeAreaInsetBottom"];var Z=P({name:R,props:X,emits:["select","cancel","update:show"],setup(a,{slots:t,emit:c}){const u=s=>c("update:show",s),r=()=>{u(!1),c("cancel")},m=()=>{if(a.title)return o("div",{class:l("header")},[a.title,a.closeable&&o(_,{name:a.closeIcon,class:[l("close"),$],onClick:r},null)])},f=()=>{if(t.cancel||a.cancelText)return[o("div",{class:l("gap")},null),o("button",{type:"button",class:l("cancel"),onClick:r},[t.cancel?t.cancel():a.cancelText])]},h=(s,p)=>s.loading?o(L,{class:l("loading-icon")},null):t.action?t.action({action:s,index:p}):[o("span",{class:l("name")},[s.name]),s.subname&&o("div",{class:l("subname")},[s.subname])],F=(s,p)=>{const{color:b,loading:n,callback:d,disabled:i,className:g}=s,O=()=>{i||n||(d&&d(s),a.closeOnClickAction&&u(!1),q(()=>c("select",s,p)))};return o("button",{type:"button",style:{color:b},class:[l("item",{loading:n,disabled:i}),g],onClick:O},[h(s,p)])},A=()=>{if(a.description||t.description){const s=t.description?t.description():a.description;return o("div",{class:l("description")},[s])}};return()=>o(z,V({class:l(),position:"bottom","onUpdate:show":u},T(a,Y)),{default:()=>{var s;return[m(),A(),o("div",{class:l("content")},[a.actions.map(F),(s=t.default)==null?void 0:s.call(t)]),f()]}})}});const v=N(Z);const tt={class:"demo-action-sheet-content"},ht=P({setup(a){const t=y({"zh-CN":{option1:"\u9009\u9879\u4E00",option2:"\u9009\u9879\u4E8C",option3:"\u9009\u9879\u4E09",subname:"\u63CF\u8FF0\u4FE1\u606F",showCancel:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",buttonText:"\u5F39\u51FA\u83DC\u5355",customPanel:"\u81EA\u5B9A\u4E49\u9762\u677F",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F",optionStatus:"\u9009\u9879\u72B6\u6001",coloredOption:"\u7740\u8272\u9009\u9879",disabledOption:"\u7981\u7528\u9009\u9879",showDescription:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"},"en-US":{option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description"}}),c=w(!1),u=w(!1),r=w(!1),m=w(!1),f=w(!1),h=x(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3")}]),F=x(()=>[{name:t("coloredOption"),color:"#ee0a24"},{name:t("disabledOption"),disabled:!0},{loading:!0}]),A=x(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3"),subname:t("subname")}]),s=b=>{c.value=!1,D(b.name)},p=()=>D(t("cancel"));return(b,n)=>{const d=W("demo-block");return j(),G(Q,null,[o(d,{card:"",title:e(t)("basicUsage")},{default:S(()=>[o(e(C),{"is-link":"",title:e(t)("basicUsage"),onClick:n[0]||(n[0]=i=>c.value=!0)},null,8,["title"]),o(e(C),{"is-link":"",title:e(t)("showCancel"),onClick:n[1]||(n[1]=i=>u.value=!0)},null,8,["title"]),o(e(C),{"is-link":"",title:e(t)("showDescription"),onClick:n[2]||(n[2]=i=>f.value=!0)},null,8,["title"])]),_:1},8,["title"]),o(d,{card:"",title:e(t)("optionStatus")},{default:S(()=>[o(e(C),{"is-link":"",title:e(t)("optionStatus"),onClick:n[3]||(n[3]=i=>m.value=!0)},null,8,["title"])]),_:1},8,["title"]),o(d,{card:"",title:e(t)("customPanel")},{default:S(()=>[o(e(C),{"is-link":"",title:e(t)("customPanel"),onClick:n[4]||(n[4]=i=>r.value=!0)},null,8,["title"])]),_:1},8,["title"]),o(e(v),{show:c.value,"onUpdate:show":n[5]||(n[5]=i=>c.value=i),actions:e(h),onSelect:s},null,8,["show","actions"]),o(e(v),{show:u.value,"onUpdate:show":n[6]||(n[6]=i=>u.value=i),actions:e(h),"close-on-click-action":"","cancel-text":e(t)("cancel"),onCancel:p},null,8,["show","actions","cancel-text"]),o(e(v),{show:f.value,"onUpdate:show":n[7]||(n[7]=i=>f.value=i),actions:e(A),"close-on-click-action":"","cancel-text":e(t)("cancel"),description:e(t)("description")},null,8,["show","actions","cancel-text","description"]),o(e(v),{show:m.value,"onUpdate:show":n[8]||(n[8]=i=>m.value=i),"close-on-click-action":"",actions:e(F),"cancel-text":e(t)("cancel")},null,8,["show","actions","cancel-text"]),o(e(v),{show:r.value,"onUpdate:show":n[9]||(n[9]=i=>r.value=i),title:e(t)("title")},{default:S(()=>[J("div",tt,M(e(t)("content")),1)]),_:1},8,["show","title"])],64)}}});export{ht as default};
