import{C as w}from"./index.e9ec9dce.js";import{c as B,e as D,p as I,a as P}from"./use-translate.fbf36f21.js";import{t as E,b as y,w as Q}from"./with-install.251697cd.js";import{H as x}from"./constant.80c6de18.js";import{a as L,p as T,P as U}from"./index.6b877abf.js";import{z as b,e as s,A as O,D as f,C,r as z,o as M,a as N,w as v,B as o,F as W}from"./vue-libs.bf80eadf.js";import{T as $}from"./function-call.105b6793.js";import"./use-route.9fd68ea8.js";import"./index.f1bbf430.js";import"./interceptor.12fa8767.js";import"./use-expose.8d47dba2.js";import"./use-touch.9de12470.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.c2caac4e.js";import"./mount-component.985a4079.js";import"./index.d99a07cf.js";const H=["qq","link","weibo","wechat","poster","qrcode","weapp-qrcode","wechat-moments"],K=[...L,"round","closeOnPopstate","safeAreaInsetBottom"];function R(c){return H.includes(c)?`https://img.yzcdn.cn/vant/share-sheet-${c}.png`:c}const[V,r,j]=B("share-sheet"),G=D({},T,{title:String,round:E,options:y(),cancelText:String,description:String,closeOnPopstate:E,safeAreaInsetBottom:E});var J=b({name:V,props:G,emits:["cancel","select","update:show"],setup(c,{emit:e,slots:a}){const u=n=>e("update:show",n),p=()=>{u(!1),e("cancel")},m=(n,t)=>e("select",n,t),k=()=>{const n=a.title?a.title():c.title,t=a.description?a.description():c.description;if(n||t)return s("div",{class:r("header")},[n&&s("h2",{class:r("title")},[n]),t&&s("span",{class:r("description")},[t])])},A=(n,t)=>{const{name:l,icon:i,className:g,description:q}=n;return s("div",{role:"button",tabindex:0,class:[r("option"),g,x],onClick:()=>m(n,t)},[s("img",{src:R(i),class:r("icon")},null),l&&s("span",{class:r("name")},[l]),q&&s("span",{class:r("option-description")},[q])])},h=(n,t)=>s("div",{class:r("options",{border:t})},[n.map(A)]),F=()=>{const{options:n}=c;return Array.isArray(n[0])?n.map((t,l)=>h(t,l!==0)):h(n)},d=()=>{var t;const n=(t=c.cancelText)!=null?t:j("cancel");if(a.cancel||n)return s("button",{type:"button",class:r("cancel"),onClick:p},[a.cancel?a.cancel():n])};return()=>s(U,O({class:r(),position:"bottom","onUpdate:show":u},I(c,K)),{default:()=>[k(),F(),d()]})}});const S=Q(J),de=b({setup(c){const e=P({"zh-CN":{qq:"QQ",name:"\u540D\u79F0",link:"\u590D\u5236\u94FE\u63A5",title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",weibo:"\u5FAE\u535A",wechat:"\u5FAE\u4FE1",poster:"\u5206\u4EAB\u6D77\u62A5",qrcode:"\u4E8C\u7EF4\u7801",multiLine:"\u5C55\u793A\u591A\u884C\u9009\u9879",showSheet:"\u663E\u793A\u5206\u4EAB\u9762\u677F",withDesc:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",description:"\u63CF\u8FF0\u4FE1\u606F",weappQrcode:"\u5C0F\u7A0B\u5E8F\u7801",wechatMoments:"\u670B\u53CB\u5708"},"en-US":{qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"Wechat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"Wechat Moments"}}),a=f(!1),u=f(!1),p=f(!1),m=f(!1),k=C(()=>[{name:e("wechat"),icon:"wechat"},{name:e("weibo"),icon:"weibo"},{name:e("link"),icon:"link"},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"}]),A=C(()=>[[{name:e("wechat"),icon:"wechat"},{name:e("wechatMoments"),icon:"wechat-moments"},{name:e("weibo"),icon:"weibo"},{name:e("qq"),icon:"qq"}],[{name:e("link"),icon:"link"},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"},{name:e("weappQrcode"),icon:"weapp-qrcode"}]]),h=C(()=>[{name:e("name"),icon:"https://img.yzcdn.cn/vant/custom-icon-fire.png"},{name:e("name"),icon:"https://img.yzcdn.cn/vant/custom-icon-light.png"},{name:e("name"),icon:"https://img.yzcdn.cn/vant/custom-icon-water.png"}]),F=C(()=>[{name:e("wechat"),icon:"wechat"},{name:e("weibo"),icon:"weibo"},{name:e("link"),icon:"link",description:e("description")},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"}]),d=n=>{$(n.name),a.value=!1,u.value=!1,p.value=!1,m.value=!1};return(n,t)=>{const l=z("demo-block");return M(),N(W,null,[s(l,{card:"",title:o(e)("basicUsage")},{default:v(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[0]||(t[0]=i=>a.value=!0)},null,8,["title"]),s(o(S),{show:a.value,"onUpdate:show":t[1]||(t[1]=i=>a.value=i),title:o(e)("title"),options:o(k),onSelect:d},null,8,["show","title","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("multiLine")},{default:v(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[2]||(t[2]=i=>p.value=!0)},null,8,["title"]),s(o(S),{show:p.value,"onUpdate:show":t[3]||(t[3]=i=>p.value=i),title:o(e)("title"),options:o(A),onSelect:d},null,8,["show","title","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("customIcon")},{default:v(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[4]||(t[4]=i=>m.value=!0)},null,8,["title"]),s(o(S),{show:m.value,"onUpdate:show":t[5]||(t[5]=i=>m.value=i),options:o(h),onSelect:d},null,8,["show","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("withDesc")},{default:v(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[6]||(t[6]=i=>u.value=!0)},null,8,["title"]),s(o(S),{show:u.value,"onUpdate:show":t[7]||(t[7]=i=>u.value=i),title:o(e)("title"),options:o(F),description:o(e)("description"),onSelect:d},null,8,["show","title","options","description"])]),_:1},8,["title"])],64)}}});export{de as default};
