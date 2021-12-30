import{o as R,m as _,l as F,e as H,c as K,i as M,n as N}from"./use-translate.a3af5295.js";import{n as k,t as I,u as Y,m as b,w as G}from"./with-install.1b1f1c54.js";import{M as x,J as U,x as S,z as V,D as j,C as $,N as J,L as Z,I as q,e as f,T as Q,R as W,F as X,j as ee,v as oe,A as te}from"./vue-libs.6d5ed635.js";import{H as ne}from"./constant.80c6de18.js";import{c as se}from"./interceptor.0311b2d6.js";import{u as ae}from"./use-expose.b6cf8b20.js";import{u as re}from"./use-touch.21117490.js";import{u as ce}from"./use-lazy-render.437ea78e.js";import{P as le}from"./on-popup-reopen.8120d0d7.js";import{I as ie}from"./index.97c885c5.js";import{O as ue}from"./index.e5d520da.js";const A={show:Boolean,zIndex:k,overlay:I,duration:k,teleport:[String,Object],lockScroll:I,lazyRender:I,beforeClose:Function,overlayStyle:Object,overlayClass:Y,transitionAppear:Boolean,closeOnClickOverlay:I},Se=Object.keys(A);let p=0;const L="van-overflow-hidden";function de(e,o){const s=re(),a=c=>{s.move(c);const w=s.deltaY.value>0?"10":"01",h=_(c.target,e.value),{scrollHeight:l,offsetHeight:y,scrollTop:m}=h;let u="11";m===0?u=y>=l?"00":"01":m+y>=l&&(u="10"),u!=="11"&&s.isVertical()&&!(parseInt(u,2)&parseInt(w,2))&&F(c,!0)},n=()=>{document.addEventListener("touchstart",s.start),document.addEventListener("touchmove",a,{passive:!1}),p||document.body.classList.add(L),p++},r=()=>{p&&(document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",a),p--,p||document.body.classList.remove(L))},v=()=>o()&&n(),i=()=>o()&&r();R(v),x(i),U(i),S(o,c=>{c?n():r()})}const fe=H({},A,{round:Boolean,position:b("center"),closeIcon:b("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:b("top-right"),safeAreaInsetBottom:Boolean}),[ve,g]=K("popup");let z=2e3;var me=V({name:ve,inheritAttrs:!1,props:fe,emits:["open","close","opened","closed","update:show","click-overlay","click-close-icon"],setup(e,{emit:o,attrs:s,slots:a}){let n,r;const v=j(),i=j(),c=ce(()=>e.show||!e.lazyRender),w=$(()=>{const t={zIndex:v.value};if(M(e.duration)){const d=e.position==="center"?"animationDuration":"transitionDuration";t[d]=`${e.duration}s`}return t}),h=()=>{n||(e.zIndex!==void 0&&(z=+e.zIndex),n=!0,v.value=++z,o("open"))},l=()=>{n&&se(e.beforeClose,{done(){n=!1,o("close"),o("update:show",!1)}})},y=t=>{o("click-overlay",t),e.closeOnClickOverlay&&l()},m=()=>{if(e.overlay)return f(ue,{show:e.show,class:e.overlayClass,zIndex:v.value,duration:e.duration,customStyle:e.overlayStyle,onClick:y},{default:a["overlay-content"]})},u=t=>{o("click-close-icon",t),l()},B=()=>{if(e.closeable)return f(ie,{role:"button",tabindex:0,name:e.closeIcon,class:[g("close-icon",e.closeIconPosition),ne],classPrefix:e.iconPrefix,onClick:u},null)},E=()=>o("opened"),D=()=>o("closed"),T=c(()=>{var P;const{round:t,position:d,safeAreaInsetBottom:C}=e;return ee(f("div",te({ref:i,style:w.value,class:[g({round:t,[d]:d}),{"van-safe-area-bottom":C}]},s),[(P=a.default)==null?void 0:P.call(a),B()]),[[oe,e.show]])}),O=()=>{const{position:t,transition:d,transitionAppear:C}=e,P=t==="center"?"van-fade":`van-popup-slide-${t}`;return f(Q,{name:d||P,appear:C,onAfterEnter:E,onAfterLeave:D},{default:T})};return S(()=>e.show,t=>{t?h():(n=!1,o("close"))}),ae({popupRef:i}),de(i,()=>e.show&&e.lockScroll),N("popstate",()=>{e.closeOnPopstate&&(l(),r=!1)}),J(()=>{e.show&&h()}),Z(()=>{r&&(o("update:show",!0),r=!1)}),x(()=>{e.show&&(l(),r=!0)}),q(le,()=>e.show),()=>e.teleport?f(W,{to:e.teleport},{default:()=>[m(),O()]}):f(X,null,[m(),O()])}});const je=G(me);export{je as P,Se as a,A as p};