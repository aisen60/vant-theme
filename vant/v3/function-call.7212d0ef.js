import{c as D,p as L,i as j,e as g,d as U,f as V}from"./use-translate.8b8ccbb1.js";import{m as v,n as S,a as q,u as x,w as A}from"./with-install.994557f3.js";import{m as E,u as G}from"./mount-component.af79618c.js";import{I as H}from"./index.bbd0c688.js";import{P as $}from"./index.169d2299.js";import{L as F}from"./index.4ba0b313.js";import{z as J,x as w,N as K,G as Q,e as r,A as I,D as R,P as W}from"./vue-libs.bf80eadf.js";let d=0;function X(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}const[Y,m]=D("toast"),Z=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],_={icon:String,show:Boolean,type:v("text"),overlay:Boolean,message:S,iconSize:S,duration:q(2e3),position:v("middle"),teleport:[String,Object],className:x,iconPrefix:String,transition:v("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:x,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var T=J({name:Y,props:_,emits:["update:show"],setup(e,{emit:t}){let o,u=!1;const l=()=>{const a=e.show&&e.forbidClick;u!==a&&(u=a,X(u))},f=a=>t("update:show",a),C=()=>{e.closeOnClick&&f(!1)},p=()=>clearTimeout(o),O=()=>{const{icon:a,type:i,iconSize:P,iconPrefix:z,loadingType:B}=e;if(a||i==="success"||i==="fail")return r(H,{name:a||i,size:P,class:m("icon"),classPrefix:z},null);if(i==="loading")return r(F,{class:m("loading"),size:P,type:B},null)},c=()=>{const{type:a,message:i}=e;if(j(i)&&i!=="")return a==="html"?r("div",{key:0,class:m("text"),innerHTML:String(i)},null):r("div",{class:m("text")},[i])};return w(()=>[e.show,e.forbidClick],l),w(()=>[e.show,e.type,e.message,e.duration],()=>{p(),e.show&&e.duration>0&&(o=setTimeout(()=>{f(!1)},e.duration))}),K(l),Q(l),()=>r($,I({class:[m([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:C,onClosed:p,"onUpdate:show":f},L(e,Z)),{default:()=>[O(),c()]})}});const M={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let n=[],h=!1,y=g({},M);const k=new Map;function N(e){return V(e)?e:{message:e}}function ee(){const{instance:e,unmount:t}=E({setup(){const o=R(""),{open:u,state:l,close:f,toggle:C}=G(),p=()=>{h&&(n=n.filter(c=>c!==e),t())},O=()=>r(T,I(l,{onClosed:p,"onUpdate:show":C}),null);return w(o,c=>{l.message=c}),W().render=O,{open:u,clear:f,message:o}}});return e}function te(){if(!n.length||h){const e=ee();n.push(e)}return n[n.length-1]}function s(e={}){if(!U)return{};const t=te(),o=N(e);return t.open(g({},y,k.get(o.type||y.type),o)),t}const b=e=>t=>s(g({type:e},N(t)));s.loading=b("loading");s.success=b("success");s.fail=b("fail");s.clear=e=>{var t;n.length&&(e?(n.forEach(o=>{o.clear()}),n=[]):h?(t=n.shift())==null||t.clear():n[0].clear())};function ne(e,t){typeof e=="string"?k.set(e,t):g(y,e)}s.setDefaultOptions=ne;s.resetDefaultOptions=e=>{typeof e=="string"?k.delete(e):(y=g({},M),k.clear())};s.allowMultiple=(e=!0)=>{h=e};s.install=e=>{e.use(A(T)),e.config.globalProperties.$toast=s};export{s as T};
