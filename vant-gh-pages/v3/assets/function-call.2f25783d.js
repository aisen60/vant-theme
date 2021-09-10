import{u as e,i as o,e as s,b as t,c as n}from"./use-translate.bf1abf23.js";import{c as a,w as l}from"./with-install.af140ae3.js";import{m as i,u as r}from"./mount-component.14353bf5.js";import{I as c}from"./index.5afcfd01.js";import{P as d}from"./index.02c1c9ae.js";import{L as u}from"./index.4893bdc2.js";import{B as p,z as f,I as m,J as y,f as g,L as v,G as b,M as h}from"./vendor.09b5b9a9.js";let C=0;const[S,k]=a("toast");var w=p({name:S,props:{icon:String,show:Boolean,overlay:Boolean,message:[Number,String],iconSize:[Number,String],className:e,iconPrefix:String,loadingType:String,forbidClick:Boolean,overlayClass:e,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,type:{type:String,default:"text"},duration:{type:Number,default:2e3},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"}},emits:["update:show"],setup(e,{emit:s}){let t,n=!1;const a=()=>{const o=e.show&&e.forbidClick;n!==o&&(n=o,n?(C||document.body.classList.add("van-toast--unclickable"),C++):C&&(C--,C||document.body.classList.remove("van-toast--unclickable")))},l=e=>s("update:show",e),i=()=>{e.closeOnClick&&l(!1)},r=()=>clearTimeout(t),p=()=>{const{icon:o,type:s,iconSize:t,iconPrefix:n,loadingType:a}=e;return o||"success"===s||"fail"===s?g(c,{name:o||s,size:t,class:k("icon"),classPrefix:n},null):"loading"===s?g(u,{class:k("loading"),size:t,type:a},null):void 0},b=()=>{const{type:s,message:t}=e;if(o(t)&&""!==t)return"html"===s?g("div",{class:k("text"),innerHTML:String(t)},null):g("div",{class:k("text")},[t])};return f((()=>[e.show,e.forbidClick]),a),f((()=>[e.show,e.type,e.message,e.duration]),(()=>{r(),e.show&&e.duration>0&&(t=setTimeout((()=>{l(!1)}),e.duration))})),m(a),y(a),()=>g(d,v({show:e.show,class:[k([e.position,{[e.type]:!e.icon}]),e.className],overlay:e.overlay,lockScroll:!1,transition:e.transition,overlayClass:e.overlayClass,overlayStyle:e.overlayStyle,closeOnClickOverlay:e.closeOnClickOverlay,onClick:i,onClosed:r},{"onUpdate:show":l}),{default:()=>[p(),b()]})}});const O={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let x=[],j=!1,T=s({},O);const z=new Map;function B(e){return n(e)?e:{message:e}}function N(){if(!x.length||j){const e=function(){const{instance:e,unmount:o}=i({setup(){const s=b(""),{open:t,state:n,close:a,toggle:l}=r(),i=()=>{j&&(x=x.filter((o=>o!==e)),o())};return f(s,(e=>{n.message=e})),h().render=()=>g(w,v(n,{onClosed:i,"onUpdate:show":l}),null),{open:t,clear:a,message:s}}});return e}();x.push(e)}return x[x.length-1]}function P(e={}){if(!t)return{};const o=N(),n=B(e);return o.open(s({},T,z.get(n.type||T.type),n)),o}const L=e=>o=>P(s({type:e},B(o)));P.loading=L("loading"),P.success=L("success"),P.fail=L("fail"),P.clear=e=>{var o;x.length&&(e?(x.forEach((e=>{e.clear()})),x=[]):j?null==(o=x.shift())||o.clear():x[0].clear())},P.setDefaultOptions=function(e,o){"string"==typeof e?z.set(e,o):s(T,e)},P.resetDefaultOptions=e=>{"string"==typeof e?z.delete(e):(T=s({},O),z.clear())},P.allowMultiple=(e=!0)=>{j=e},P.install=e=>{e.use(l(w)),e.config.globalProperties.$toast=P};export{P as T};
