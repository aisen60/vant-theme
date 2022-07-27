import{c as B,p as M,i as N,e as k,d as L,f as z}from"./use-translate.9f14972f.js";import{m as g,n as v,a as j,u as O,w as U}from"./with-install.74763816.js";import{I as V}from"./index.b817fd06.js";import{P as q}from"./index.6ecb02f5.js";import{L as A}from"./index.ccf6f928.js";import{A as D,y as h,N as E,G as F,e as l,B as S,x as G,P as H}from"./vue-libs.a3cd7f61.js";import{m as _,u as J}from"./mount-component.21851ecf.js";let u=0;function K(e){e?(u||document.body.classList.add("van-toast--unclickable"),u++):u&&(u--,u||document.body.classList.remove("van-toast--unclickable"))}const[Q,d]=B("toast"),R=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],W={icon:String,show:Boolean,type:g("text"),overlay:Boolean,message:v,iconSize:v,duration:j(2e3),position:g("middle"),teleport:[String,Object],className:O,iconPrefix:String,transition:g("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:O,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var P=D({name:Q,props:W,emits:["update:show"],setup(e,{emit:n}){let s,c=!1;const i=()=>{const t=e.show&&e.forbidClick;c!==t&&(c=t,K(c))},r=t=>n("update:show",t),p=()=>{e.closeOnClick&&r(!1)},f=()=>clearTimeout(s),y=()=>{const{icon:t,type:o,iconSize:w,iconPrefix:x,loadingType:I}=e;if(t||o==="success"||o==="fail")return l(V,{name:t||o,size:w,class:d("icon"),classPrefix:x},null);if(o==="loading")return l(A,{class:d("loading"),size:w,type:I},null)},m=()=>{const{type:t,message:o}=e;if(N(o)&&o!=="")return t==="html"?l("div",{key:0,class:d("text"),innerHTML:String(o)},null):l("div",{class:d("text")},[o])};return h(()=>[e.show,e.forbidClick],i),h(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(s=setTimeout(()=>{r(!1)},e.duration))}),E(i),F(i),()=>l(q,S({class:[d([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:p,onClosed:f,"onUpdate:show":r},M(e,R)),{default:()=>[y(),m()]})}});const X={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let a=[],Y=!1,b=k({},X);const Z=new Map;function T(e){return z(e)?e:{message:e}}function $(){const{instance:e,unmount:n}=_({setup(){const s=G(""),{open:c,state:i,close:r,toggle:p}=J(),f=()=>{},y=()=>l(P,S(i,{onClosed:f,"onUpdate:show":p}),null);return h(s,m=>{i.message=m}),H().render=y,{open:c,close:r,message:s}}});return e}function ee(){if(!a.length||Y){const e=$();a.push(e)}return a[a.length-1]}function ne(e={}){if(!L)return{};const n=ee(),s=T(e);return n.open(k({},b,Z.get(s.type||b.type),s)),n}const C=e=>n=>ne(k({type:e},T(n))),ue=C("loading"),de=C("success"),fe=C("fail"),me=e=>{a.length&&(e?(a.forEach(n=>{n.close()}),a=[]):a[0].close())};U(P);export{ue as a,de as b,me as c,fe as d,ne as s};
