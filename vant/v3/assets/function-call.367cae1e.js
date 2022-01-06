import{c as B,p as D,i as L,e as d,d as U,f as V}from"./use-translate.55dc92d8.js";import{m as v,n as x,a as q,u as S,w as A}from"./with-install.c8955fea.js";import{m as E,u as G}from"./mount-component.bb4140aa.js";import{I as H}from"./index.f787d2de.js";import{P as $}from"./index.2a45ff86.js";import{L as F}from"./index.64be35d3.js";import{z as J,x as w,N as K,G as Q,e as r,A as I,D as R,P as W}from"./vue-libs.b1f02cae.js";let m=0;function X(e){e?(m||document.body.classList.add("van-toast--unclickable"),m++):m&&(m--,m||document.body.classList.remove("van-toast--unclickable"))}const[Y,g]=B("toast"),Z=["show","overlay","transition","overlayClass","overlayStyle","closeOnClickOverlay"],_={icon:String,show:Boolean,type:v("text"),overlay:Boolean,message:x,iconSize:x,duration:q(2e3),position:v("middle"),className:S,iconPrefix:String,transition:v("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:S,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var T=J({name:Y,props:_,emits:["update:show"],setup(e,{emit:n}){let o,f=!1;const l=()=>{const a=e.show&&e.forbidClick;f!==a&&(f=a,X(f))},u=a=>n("update:show",a),C=()=>{e.closeOnClick&&u(!1)},p=()=>clearTimeout(o),b=()=>{const{icon:a,type:i,iconSize:P,iconPrefix:N,loadingType:z}=e;if(a||i==="success"||i==="fail")return r(H,{name:a||i,size:P,class:g("icon"),classPrefix:N},null);if(i==="loading")return r(F,{class:g("loading"),size:P,type:z},null)},c=()=>{const{type:a,message:i}=e;if(L(i)&&i!=="")return a==="html"?r("div",{class:g("text"),innerHTML:String(i)},null):r("div",{class:g("text")},[i])};return w(()=>[e.show,e.forbidClick],l),w(()=>[e.show,e.type,e.message,e.duration],()=>{p(),e.show&&e.duration>0&&(o=setTimeout(()=>{u(!1)},e.duration))}),K(l),Q(l),()=>r($,I({class:[g([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:C,onClosed:p,"onUpdate:show":u},D(e,Z)),{default:()=>[b(),c()]})}});const j={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let t=[],y=!1,h=d({},j);const k=new Map;function M(e){return V(e)?e:{message:e}}function ee(){const{instance:e,unmount:n}=E({setup(){const o=R(""),{open:f,state:l,close:u,toggle:C}=G(),p=()=>{y&&(t=t.filter(c=>c!==e),n())},b=()=>r(T,I(l,{onClosed:p,"onUpdate:show":C}),null);return w(o,c=>{l.message=c}),W().render=b,{open:f,clear:u,message:o}}});return e}function ne(){if(!t.length||y){const e=ee();t.push(e)}return t[t.length-1]}function s(e={}){if(!U)return{};const n=ne(),o=M(e);return n.open(d({},h,k.get(o.type||h.type),o)),n}const O=e=>n=>s(d({type:e},M(n)));s.loading=O("loading");s.success=O("success");s.fail=O("fail");s.clear=e=>{var n;t.length&&(e?(t.forEach(o=>{o.clear()}),t=[]):y?(n=t.shift())==null||n.clear():t[0].clear())};function te(e,n){typeof e=="string"?k.set(e,n):d(h,e)}s.setDefaultOptions=te;s.resetDefaultOptions=e=>{typeof e=="string"?k.delete(e):(h=d({},j),k.clear())};s.allowMultiple=(e=!0)=>{y=e};s.install=e=>{e.use(A(T)),e.config.globalProperties.$toast=s};export{s as T};