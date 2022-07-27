import{C as h}from"./index.44f2ddab.js";import{c as P,e as x,p as Q,a as L}from"./use-translate.00c0a8db.js";import{t as F,b as U,w as M}from"./with-install.f242061f.js";import{H as T}from"./constant.80c6de18.js";import{a as y,p as O,P as W}from"./index.f915e03a.js";import{I as N}from"./index.2879154d.js";import{A as D,e as n,B as $,x as f,D as C,r as H,o as K,a as R,w as k,C as o,F as z}from"./vue-libs.84c45047.js";import{c as b}from"./index.c094f278.js";import{T as V}from"./function-call.18417f70.js";import"./use-route.7c55373a.js";import"./interceptor.f340ca2d.js";import"./use-expose.024996fe.js";import"./use-touch.c1d7ebd1.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.d15c01ab.js";import"./mount-component.99b67023.js";import"./index.3f188a06.js";const j=[...y,"round","closeOnPopstate","safeAreaInsetBottom"],B={qq:"qq",link:"link-o",weibo:"weibo",qrcode:"qr",poster:"photo-o",wechat:"wechat","weapp-qrcode":"miniprogram-o","wechat-moments":"wechat-moments"},[G,c,J]=P("share-sheet"),X=x({},O,{title:String,round:F,options:U(),cancelText:String,description:String,closeOnPopstate:F,safeAreaInsetBottom:F});var Y=D({name:G,props:X,emits:["cancel","select","update:show"],setup(l,{emit:t,slots:a}){const r=e=>t("update:show",e),u=()=>{r(!1),t("cancel")},p=(e,i)=>t("select",e,i),S=()=>{const e=a.title?a.title():l.title,i=a.description?a.description():l.description;if(e||i)return n("div",{class:c("header")},[e&&n("h2",{class:c("title")},[e]),i&&n("span",{class:c("description")},[i])])},q=e=>B[e]?n("div",{class:c("icon",[e])},[n(N,{name:B[e]||e},null)]):n("img",{src:e,class:c("image-icon")},null),A=(e,i)=>{const{name:s,icon:I,className:g,description:E}=e;return n("div",{role:"button",tabindex:0,class:[c("option"),g,T],onClick:()=>p(e,i)},[q(I),s&&n("span",{class:c("name")},[s]),E&&n("span",{class:c("option-description")},[E])])},d=(e,i)=>n("div",{class:c("options",{border:i})},[e.map(A)]),m=()=>{const{options:e}=l;return Array.isArray(e[0])?e.map((i,s)=>d(i,s!==0)):d(e)},w=()=>{var i;const e=(i=l.cancelText)!=null?i:J("cancel");if(a.cancel||e)return n("button",{type:"button",class:c("cancel"),onClick:u},[a.cancel?a.cancel():e])};return()=>n(W,$({class:c(),position:"bottom","onUpdate:show":r},Q(l,j)),{default:()=>[S(),m(),w()]})}});const v=M(Y),fe=D({setup(l){const t=L({"zh-CN":{qq:"QQ",name:"\u540D\u79F0",link:"\u590D\u5236\u94FE\u63A5",title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",weibo:"\u5FAE\u535A",wechat:"\u5FAE\u4FE1",poster:"\u5206\u4EAB\u6D77\u62A5",qrcode:"\u4E8C\u7EF4\u7801",multiLine:"\u5C55\u793A\u591A\u884C\u9009\u9879",showSheet:"\u663E\u793A\u5206\u4EAB\u9762\u677F",withDesc:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",description:"\u63CF\u8FF0\u4FE1\u606F",weappQrcode:"\u5C0F\u7A0B\u5E8F\u7801",wechatMoments:"\u670B\u53CB\u5708"},"en-US":{qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"WeChat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"WeChat Moments"}}),a=f(!1),r=f(!1),u=f(!1),p=f(!1),S=C(()=>[{name:t("wechat"),icon:"wechat"},{name:t("weibo"),icon:"weibo"},{name:t("link"),icon:"link"},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"}]),q=C(()=>[[{name:t("wechat"),icon:"wechat"},{name:t("wechatMoments"),icon:"wechat-moments"},{name:t("weibo"),icon:"weibo"},{name:t("qq"),icon:"qq"}],[{name:t("link"),icon:"link"},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"},{name:t("weappQrcode"),icon:"weapp-qrcode"}]]),A=C(()=>[{name:t("name"),icon:b("custom-icon-fire.png")},{name:t("name"),icon:b("custom-icon-light.png")},{name:t("name"),icon:b("custom-icon-water.png")}]),d=C(()=>[{name:t("wechat"),icon:"wechat"},{name:t("weibo"),icon:"weibo"},{name:t("link"),icon:"link",description:t("description")},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"}]),m=w=>{V(w.name),a.value=!1,r.value=!1,u.value=!1,p.value=!1};return(w,e)=>{const i=H("demo-block");return K(),R(z,null,[n(i,{card:"",title:o(t)("basicUsage")},{default:k(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[0]||(e[0]=s=>a.value=!0)},null,8,["title"]),n(o(v),{show:a.value,"onUpdate:show":e[1]||(e[1]=s=>a.value=s),title:o(t)("title"),options:o(S),onSelect:m},null,8,["show","title","options"])]),_:1},8,["title"]),n(i,{card:"",title:o(t)("multiLine")},{default:k(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[2]||(e[2]=s=>u.value=!0)},null,8,["title"]),n(o(v),{show:u.value,"onUpdate:show":e[3]||(e[3]=s=>u.value=s),title:o(t)("title"),options:o(q),onSelect:m},null,8,["show","title","options"])]),_:1},8,["title"]),n(i,{card:"",title:o(t)("customIcon")},{default:k(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[4]||(e[4]=s=>p.value=!0)},null,8,["title"]),n(o(v),{show:p.value,"onUpdate:show":e[5]||(e[5]=s=>p.value=s),options:o(A),onSelect:m},null,8,["show","options"])]),_:1},8,["title"]),n(i,{card:"",title:o(t)("withDesc")},{default:k(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[6]||(e[6]=s=>r.value=!0)},null,8,["title"]),n(o(v),{show:r.value,"onUpdate:show":e[7]||(e[7]=s=>r.value=s),title:o(t)("title"),options:o(d),description:o(t)("description"),onSelect:m},null,8,["show","title","options","description"])]),_:1},8,["title"])],64)}}});export{fe as default};
