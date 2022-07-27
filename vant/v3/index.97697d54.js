import{C as b}from"./index.f609f533.js";import{c as O,e as B,p as E,a as T}from"./use-translate.7145ee20.js";import{t as k,b as y,m as I,w as U}from"./with-install.756837d9.js";import{H as N}from"./constant.80c6de18.js";import{I as $}from"./index.bea91046.js";import{p as _,a as z,P as H}from"./index.bba74b3b.js";import{L as K}from"./index.8397aee6.js";import{z as j,e as n,A as L,q as V,D as w,C as A,r as q,o as W,a as G,w as S,B as t,d as J,t as M,F as Q}from"./vue-libs.84e059bd.js";import{T as D}from"./function-call.3d6aa441.js";import"./use-route.841a0e09.js";import"./interceptor.fa55923e.js";import"./use-expose.897feea8.js";import"./use-touch.a752672a.js";import"./use-lazy-render.0b8d6da1.js";import"./on-popup-reopen.b9a88023.js";import"./index.bd0de4f7.js";import"./mount-component.f2698375.js";const[R,l]=O("action-sheet"),X=B({},_,{title:String,round:k,actions:y(),closeIcon:I("cross"),closeable:k,cancelText:String,description:String,closeOnPopstate:k,closeOnClickAction:Boolean,safeAreaInsetBottom:k}),Y=[...z,"round","closeOnPopstate","safeAreaInsetBottom"];var Z=j({name:R,props:X,emits:["select","cancel","update:show"],setup(i,{slots:e,emit:c}){const u=s=>c("update:show",s),r=()=>{u(!1),c("cancel")},m=()=>{if(i.title)return n("div",{class:l("header")},[i.title,i.closeable&&n($,{name:i.closeIcon,class:[l("close"),N],onClick:r},null)])},f=()=>{if(e.cancel||i.cancelText)return[n("div",{class:l("gap")},null),n("button",{type:"button",class:l("cancel"),onClick:r},[e.cancel?e.cancel():i.cancelText])]},v=(s,p)=>s.loading?n(K,{class:l("loading-icon")},null):e.action?e.action({action:s,index:p}):[n("span",{class:l("name")},[s.name]),s.subname&&n("div",{class:l("subname")},[s.subname])],x=(s,p)=>{const{color:h,loading:o,callback:d,disabled:a,className:P}=s,g=()=>{a||o||(d&&d(s),i.closeOnClickAction&&u(!1),V(()=>c("select",s,p)))};return n("button",{type:"button",style:{color:h},class:[l("item",{loading:o,disabled:a}),P],onClick:g},[v(s,p)])},F=()=>{if(i.description||e.description){const s=e.description?e.description():i.description;return n("div",{class:l("description")},[s])}};return()=>n(H,L({class:l(),position:"bottom","onUpdate:show":u},E(i,Y)),{default:()=>{var s;return[m(),F(),n("div",{class:l("content")},[i.actions.map(x),(s=e.default)==null?void 0:s.call(e)]),f()]}})}});const C=U(Z);const ee={class:"demo-action-sheet-content"},ve=j({setup(i){const e=T({"zh-CN":{option1:"\u9009\u9879\u4E00",option2:"\u9009\u9879\u4E8C",option3:"\u9009\u9879\u4E09",subname:"\u63CF\u8FF0\u4FE1\u606F",showCancel:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",buttonText:"\u5F39\u51FA\u83DC\u5355",customPanel:"\u81EA\u5B9A\u4E49\u9762\u677F",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F",optionStatus:"\u9009\u9879\u72B6\u6001",coloredOption:"\u7740\u8272\u9009\u9879",disabledOption:"\u7981\u7528\u9009\u9879",showDescription:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"},"en-US":{option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description"}}),c=w(!1),u=w(!1),r=w(!1),m=w(!1),f=w(!1),v=A(()=>[{name:e("option1")},{name:e("option2")},{name:e("option3")}]),x=A(()=>[{name:e("coloredOption"),color:"#ee0a24"},{name:e("disabledOption"),disabled:!0},{loading:!0}]),F=A(()=>[{name:e("option1")},{name:e("option2")},{name:e("option3"),subname:e("subname")}]),s=h=>{c.value=!1,D(h.name)},p=()=>D(e("cancel"));return(h,o)=>{const d=q("demo-block");return W(),G(Q,null,[n(d,{card:"",title:t(e)("basicUsage")},{default:S(()=>[n(t(b),{"is-link":"",title:t(e)("basicUsage"),onClick:o[0]||(o[0]=a=>c.value=!0)},null,8,["title"]),n(t(b),{"is-link":"",title:t(e)("showCancel"),onClick:o[1]||(o[1]=a=>u.value=!0)},null,8,["title"]),n(t(b),{"is-link":"",title:t(e)("showDescription"),onClick:o[2]||(o[2]=a=>f.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:t(e)("optionStatus")},{default:S(()=>[n(t(b),{"is-link":"",title:t(e)("optionStatus"),onClick:o[3]||(o[3]=a=>m.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:t(e)("customPanel")},{default:S(()=>[n(t(b),{"is-link":"",title:t(e)("customPanel"),onClick:o[4]||(o[4]=a=>r.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(t(C),{show:c.value,"onUpdate:show":o[5]||(o[5]=a=>c.value=a),actions:t(v),onSelect:s},null,8,["show","actions"]),n(t(C),{show:u.value,"onUpdate:show":o[6]||(o[6]=a=>u.value=a),actions:t(v),"close-on-click-action":"","cancel-text":t(e)("cancel"),onCancel:p},null,8,["show","actions","cancel-text"]),n(t(C),{show:f.value,"onUpdate:show":o[7]||(o[7]=a=>f.value=a),actions:t(F),"close-on-click-action":"","cancel-text":t(e)("cancel"),description:t(e)("description")},null,8,["show","actions","cancel-text","description"]),n(t(C),{show:m.value,"onUpdate:show":o[8]||(o[8]=a=>m.value=a),"close-on-click-action":"",actions:t(x),"cancel-text":t(e)("cancel")},null,8,["show","actions","cancel-text"]),n(t(C),{show:r.value,"onUpdate:show":o[9]||(o[9]=a=>r.value=a),title:t(e)("title")},{default:S(()=>[J("div",ee,M(t(e)("content")),1)]),_:1},8,["show","title"])],64)}}});export{ve as default};
