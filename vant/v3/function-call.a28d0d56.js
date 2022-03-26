import{c as W,l as M,D as S,M as Q,P as J,p as ee,G as oe,d as te,e as ae}from"./use-translate.7145ee20.js";import{d as j,n as k,t as Y,b as se,c as H,u as A,m as $,w as ne}from"./with-install.756837d9.js";import{m as ie,u as ce}from"./mount-component.f2698375.js";import{H as le}from"./constant.80c6de18.js";import{c as re}from"./interceptor.fa55923e.js";import{u as me}from"./use-expose.897feea8.js";import{I as ue}from"./index.bea91046.js";import{a as de,S as ve}from"./index.5da1b63b.js";import{P as fe}from"./index.bba74b3b.js";import{u as ge}from"./use-touch.a752672a.js";import{I as he}from"./index.9a9564b1.js";import{L as we}from"./index.8397aee6.js";import{z as O,H as B,C as Z,x as T,e as r,D as pe,N as xe,q as Pe,Q as Ie,A as E}from"./vue-libs.84e059bd.js";const _=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),F=W("image-preview")[1];var be=O({props:{src:String,show:Boolean,active:Number,minZoom:j(k),maxZoom:j(k),rootWidth:j(Number),rootHeight:j(Number)},emits:["scale","close"],setup(e,{emit:c}){const o=B({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),l=ge(),i=Z(()=>{const{rootWidth:t,rootHeight:s}=e,n=s/t;return o.imageRatio>n}),b=Z(()=>{const{scale:t,moveX:s,moveY:n,moving:u,zooming:P}=o,X={transitionDuration:P||u?"0s":".3s"};if(t!==1){const G=s/t,K=n/t;X.transform=`scale(${t}, ${t}) translate(${G}px, ${K}px)`}return X}),g=Z(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:s}=e,n=i.value?s/o.imageRatio:t;return Math.max(0,(o.scale*n-t)/2)}return 0}),d=Z(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:s}=e,n=i.value?s:t*o.imageRatio;return Math.max(0,(o.scale*n-s)/2)}return 0}),h=t=>{t=S(t,+e.minZoom,+e.maxZoom+1),t!==o.scale&&(o.scale=t,c("scale",{scale:t,index:e.active}))},v=()=>{h(1),o.moveX=0,o.moveY=0},D=()=>{const t=o.scale>1?1:2;h(t),o.moveX=0,o.moveY=0};let w,p,x,C,y,a,m;const f=t=>{const{touches:s}=t,{offsetX:n}=l;l.start(t),w=s.length,p=o.moveX,x=o.moveY,m=Date.now(),o.moving=w===1&&o.scale!==1,o.zooming=w===2&&!n.value,o.zooming&&(C=o.scale,y=_(t.touches))},q=t=>{const{touches:s}=t;if(l.move(t),(o.moving||o.zooming)&&M(t,!0),o.moving){const{deltaX:n,deltaY:u}=l,P=n.value+p,X=u.value+x;o.moveX=S(P,-g.value,g.value),o.moveY=S(X,-d.value,d.value)}if(o.zooming&&s.length===2){const n=_(s),u=C*n/y;h(u)}},V=()=>{if(w>1)return;const{offsetX:t,offsetY:s}=l,n=Date.now()-m,u=250,P=5;t.value<P&&s.value<P&&n<u&&(a?(clearTimeout(a),a=null,D()):a=setTimeout(()=>{c("close"),a=null},u))},R=t=>{let s=!1;(o.moving||o.zooming)&&(s=!0,o.moving&&p===o.moveX&&x===o.moveY&&(s=!1),t.touches.length||(o.zooming&&(o.moveX=S(o.moveX,-g.value,g.value),o.moveY=S(o.moveY,-d.value,d.value),o.zooming=!1),o.moving=!1,p=0,x=0,C=1,o.scale<1&&v(),o.scale>e.maxZoom&&(o.scale=+e.maxZoom))),M(t,s),V(),l.reset()},U=t=>{const{naturalWidth:s,naturalHeight:n}=t.target;o.imageRatio=n/s};return T(()=>e.active,v),T(()=>e.show,t=>{t||v()}),()=>{const t={loading:()=>r(we,{type:"spinner"},null)};return r(de,{class:F("swipe-item"),onTouchstart:f,onTouchmove:q,onTouchend:R,onTouchcancel:R},{default:()=>[r(he,{src:e.src,fit:"contain",class:F("image",{vertical:i.value}),style:b.value,onLoad:U},t)]})}}});function Ce(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ie(e)}const[ye,I]=W("image-preview"),Se=["show","transition","overlayStyle","closeOnPopstate"],Te={show:Boolean,loop:Y,images:se(),minZoom:H(1/3),maxZoom:H(3),overlay:Y,closeable:Boolean,showIndex:Y,className:A,closeIcon:$("clear"),transition:String,beforeClose:Function,overlayClass:A,overlayStyle:Object,swipeDuration:H(300),startPosition:H(0),showIndicators:Boolean,closeOnPopstate:Y,closeIconPosition:$("top-right")};var L=O({name:ye,props:Te,emits:["scale","close","closed","change","update:show"],setup(e,{emit:c,slots:o}){const l=pe(),i=B({active:0,rootWidth:0,rootHeight:0}),b=()=>{if(l.value){const a=oe(l.value.$el);i.rootWidth=a.width,i.rootHeight=a.height,l.value.resize()}},g=a=>c("scale",a),d=a=>c("update:show",a),h=()=>{re(e.beforeClose,{args:[i.active],done:()=>d(!1)})},v=a=>{a!==i.active&&(i.active=a,c("change",a))},D=()=>{if(e.showIndex)return r("div",{class:I("index")},[o.index?o.index({index:i.active}):`${i.active+1} / ${e.images.length}`])},w=()=>{if(o.cover)return r("div",{class:I("cover")},[o.cover()])},p=()=>{let a;return r(ve,{ref:l,lazyRender:!0,loop:e.loop,class:I("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:v},Ce(a=e.images.map(m=>r(be,{src:m,show:e.show,active:i.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:i.rootWidth,rootHeight:i.rootHeight,onScale:g,onClose:h},null)))?a:{default:()=>[a]})},x=()=>{if(e.closeable)return r(ue,{role:"button",name:e.closeIcon,class:[I("close-icon",e.closeIconPosition),le],onClick:h},null)},C=()=>c("closed"),y=(a,m)=>{var f;return(f=l.value)==null?void 0:f.swipeTo(a,m)};return me({swipeTo:y}),xe(b),T([Q,J],b),T(()=>e.startPosition,a=>v(+a)),T(()=>e.show,a=>{const{images:m,startPosition:f}=e;a?(v(+f),Pe(()=>{b(),y(+f,{immediate:!0})})):c("close",{index:i.active,url:m[i.active]})}),()=>r(fe,E({class:[I(),e.className],overlayClass:[I("overlay"),e.overlayClass],onClosed:C,"onUpdate:show":d},ee(e,Se)),{default:()=>[x(),p(),D(),w()]})}});let z;const Xe={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function je(){({instance:z}=ie({setup(){const{state:e,toggle:c}=ce(),o=()=>{e.images=[]};return()=>r(L,E(e,{onClosed:o,"onUpdate:show":c}),null)}}))}const N=(e,c=0)=>{if(!!te)return z||je(),e=Array.isArray(e)?{images:e,startPosition:c}:e,z.open(ae({},Xe,e)),z};N.Component=ne(L);N.install=e=>{e.use(N.Component)};export{N as I};
