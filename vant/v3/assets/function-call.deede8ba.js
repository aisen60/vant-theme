import{c as N,m as O,n as x,u as P,i as D,e as d,b as L,d as U}from"./use-translate.e667ce10.js";import{w as V}from"./with-install.feb19484.js";import{m as H,u as q}from"./mount-component.553013ae.js";import{I as E}from"./index.472ff4df.js";import{P as G}from"./index.13873f42.js";import{L as J}from"./index.ae867a8e.js";import{z as $,x as b,G as A,H as F,e as r,I,D as K,J as Q}from"./vue-libs.1dda7261.js";let m=0;function R(e){e?(m||document.body.classList.add("van-toast--unclickable"),m++):m&&(m--,m||document.body.classList.remove("van-toast--unclickable"))}const[W,y]=N("toast");var T=$({name:W,props:{icon:String,show:Boolean,type:O("text"),overlay:Boolean,message:x,iconSize:x,position:O("middle"),className:P,iconPrefix:String,transition:O("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:P,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,duration:{type:Number,default:2e3}},emits:["update:show"],setup(e,{emit:n}){let o,f=!1;const i=()=>{const a=e.show&&e.forbidClick;f!==a&&(f=a,R(f))},u=a=>n("update:show",a),k=()=>{e.closeOnClick&&u(!1)},g=()=>clearTimeout(o),w=()=>{const{icon:a,type:l,iconSize:S,iconPrefix:z,loadingType:B}=e;if(a||l==="success"||l==="fail")return r(E,{name:a||l,size:S,class:y("icon"),classPrefix:z},null);if(l==="loading")return r(J,{class:y("loading"),size:S,type:B},null)},c=()=>{const{type:a,message:l}=e;if(D(l)&&l!=="")return a==="html"?r("div",{class:y("text"),innerHTML:String(l)},null):r("div",{class:y("text")},[l])};return b(()=>[e.show,e.forbidClick],i),b(()=>[e.show,e.type,e.message,e.duration],()=>{g(),e.show&&e.duration>0&&(o=setTimeout(()=>{u(!1)},e.duration))}),A(i),F(i),()=>r(G,I({show:e.show,class:[y([e.position,{[e.type]:!e.icon}]),e.className],overlay:e.overlay,lockScroll:!1,transition:e.transition,overlayClass:e.overlayClass,overlayStyle:e.overlayStyle,closeOnClickOverlay:e.closeOnClickOverlay,onClick:k,onClosed:g},{"onUpdate:show":u}),{default:()=>[w(),c()]})}});const j={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let t=[],C=!1,h=d({},j);const v=new Map;function M(e){return U(e)?e:{message:e}}function X(){const{instance:e,unmount:n}=H({setup(){const o=K(""),{open:f,state:i,close:u,toggle:k}=q(),g=()=>{C&&(t=t.filter(c=>c!==e),n())},w=()=>r(T,I(i,{onClosed:g,"onUpdate:show":k}),null);return b(o,c=>{i.message=c}),Q().render=w,{open:f,clear:u,message:o}}});return e}function Y(){if(!t.length||C){const e=X();t.push(e)}return t[t.length-1]}function s(e={}){if(!L)return{};const n=Y(),o=M(e);return n.open(d({},h,v.get(o.type||h.type),o)),n}const p=e=>n=>s(d({type:e},M(n)));s.loading=p("loading");s.success=p("success");s.fail=p("fail");s.clear=e=>{var n;t.length&&(e?(t.forEach(o=>{o.clear()}),t=[]):C?(n=t.shift())==null||n.clear():t[0].clear())};function Z(e,n){typeof e=="string"?v.set(e,n):d(h,e)}s.setDefaultOptions=Z;s.resetDefaultOptions=e=>{typeof e=="string"?v.delete(e):(h=d({},j),v.clear())};s.allowMultiple=(e=!0)=>{C=e};s.install=e=>{e.use(V(T)),e.config.globalProperties.$toast=s};export{s as T};
