import{t as e}from"./use-translate.b583725c.js";import{c as t,w as a}from"./with-install.62f47d2f.js";import{i}from"./style.21d4b335.js";import{p as l}from"./event.7d40caae.js";import{c as o}from"./number.b01aa591.js";import{u as s}from"./use-touch.ce80657e.js";import{u as r}from"./use-expose.33de0944.js";import{o as n}from"./on-popup-reopen.522dc00c.js";import{i as u,d as v}from"./utils.b0356070.js";import{u as c}from"./index.7e292110.js";import{E as p,A as h,G as f,D as d,y as m,H as g,Q as w,O as b,P as y,e as j,s as S}from"./vendor.ef334a89.js";import{u as x}from"./useChildren.a94b5b99.js";import{u as C}from"./useParent.0a2f50cb.js";function z(){var e=p(u?window.innerWidth:0),t=p(u?window.innerHeight:0),a=()=>{e.value=window.innerWidth,t.value=window.innerHeight};return c("resize",a),c("orientationchange",a),{width:e,height:t}}const[$,M]=t("swipe"),T={loop:e,width:[Number,String],height:[Number,String],vertical:Boolean,touchable:e,lazyRender:Boolean,indicatorColor:String,showIndicators:e,stopPropagation:e,autoplay:{type:[Number,String],default:0},duration:{type:[Number,String],default:500},initialSwipe:{type:[Number,String],default:0}},N=Symbol($);const O=a(h({name:$,props:T,emits:["change"],setup(e,{emit:t,slots:a}){const h=p(),S=f({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),C=s(),$=z(),{children:T,linkChildren:O}=x(N),D=d((()=>T.length)),H=d((()=>S[e.vertical?"height":"width"])),I=d((()=>e.vertical?C.deltaY.value:C.deltaX.value)),P=d((()=>{if(S.rect){return(e.vertical?S.rect.height:S.rect.width)-H.value*D.value}return 0})),X=d((()=>Math.ceil(Math.abs(P.value)/H.value))),Y=d((()=>D.value*H.value)),k=d((()=>(S.active+D.value)%D.value)),W=d((()=>{const t=e.vertical?"vertical":"horizontal";return C.direction.value===t})),A=d((()=>{const t={transitionDuration:`${S.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${S.offset}px)`};if(H.value){const a=e.vertical?"height":"width",i=e.vertical?"width":"height";t[a]=`${Y.value}px`,t[i]=e[i]?`${e[i]}px`:""}return t})),B=(t,a=0)=>{let i=t*H.value;e.loop||(i=Math.min(i,-P.value));let l=a-i;return e.loop||(l=o(l,P.value,0)),l},E=({pace:a=0,offset:i=0,emitChange:l})=>{if(D.value<=1)return;const{active:s}=S,r=(t=>{const{active:a}=S;return t?e.loop?o(a+t,-1,D.value):o(a+t,0,X.value):a})(a),n=B(r,i);if(e.loop){if(T[0]&&n!==P.value){const e=n<P.value;T[0].setOffset(e?Y.value:0)}if(T[D.value-1]&&0!==n){const e=n>0;T[D.value-1].setOffset(e?-Y.value:0)}}S.active=r,S.offset=n,l&&r!==s&&t("change",k.value)},R=()=>{S.swiping=!0,S.active<=-1?E({pace:D.value}):S.active>=D.value&&E({pace:-D.value})},G=()=>{R(),C.reset(),v((()=>{S.swiping=!1,E({pace:1,emitChange:!0})}))};let Q;const q=()=>clearTimeout(Q),F=()=>{q(),e.autoplay>0&&D.value>1&&(Q=setTimeout((()=>{G(),F()}),+e.autoplay))},J=(t=+e.initialSwipe)=>{var a,l;if(h.value){if(!i(h)){const t={width:h.value.offsetWidth,height:h.value.offsetHeight};S.rect=t,S.width=+(null!=(a=e.width)?a:t.width),S.height=+(null!=(l=e.height)?l:t.height)}D.value&&(t=Math.min(D.value-1,t)),S.active=t,S.swiping=!0,S.offset=B(t),T.forEach((e=>{e.setOffset(0)})),F()}},K=()=>J(S.active);let L;const U=t=>{e.touchable&&(C.start(t),L=Date.now(),q(),R())},V=t=>{e.touchable&&S.swiping&&(C.move(t),W.value&&(l(t,e.stopPropagation),E({offset:I.value})))},Z=()=>{if(!e.touchable||!S.swiping)return;const t=Date.now()-L,a=I.value/t;if((Math.abs(a)>.25||Math.abs(I.value)>H.value/2)&&W.value){const t=e.vertical?C.offsetY.value:C.offsetX.value;let a=0;a=e.loop?t>0?I.value>0?-1:1:0:-Math[I.value>0?"ceil":"floor"](I.value/H.value),E({pace:a,emitChange:!0})}else I.value&&E({pace:0});S.swiping=!1,F()},_=(t,a)=>{const i=a===k.value,l=i?{backgroundColor:e.indicatorColor}:void 0;return j("i",{style:l,class:M("indicator",{active:i})},null)};var ee,te;return r({prev:()=>{R(),C.reset(),v((()=>{S.swiping=!1,E({pace:-1,emitChange:!0})}))},next:G,state:S,resize:K,swipeTo:(t,a={})=>{R(),C.reset(),v((()=>{let i;i=e.loop&&t===D.value?0===S.active?0:t:t%D.value,a.immediate?v((()=>{S.swiping=!1})):S.swiping=!1,E({pace:i-S.active,emitChange:!0})}))}}),O({size:H,props:e,count:D,activeIndicator:k}),m((()=>e.initialSwipe),(e=>J(+e))),m(D,(()=>J(S.active))),m((()=>e.autoplay),F),m([$.width,$.height],K),m((ee=p("visible"),(te=()=>{u&&(ee.value=document.hidden?"hidden":"visible")})(),c("visibilitychange",te),ee),(e=>{"visible"===e?F():q()})),g(J),w((()=>J(S.active))),n((()=>J(S.active))),b(q),y(q),()=>{var t;return j("div",{ref:h,class:M()},[j("div",{style:A.value,class:M("track",{vertical:e.vertical}),onTouchstart:U,onTouchmove:V,onTouchend:Z,onTouchcancel:Z},[null==(t=a.default)?void 0:t.call(a)]),a.indicator?a.indicator({active:k.value}):e.showIndicators&&D.value>1?j("div",{class:M("indicators",{vertical:e.vertical})},[Array(D.value).fill("").map(_)]):void 0])}}})),[D,H]=t("swipe-item");const I=a(h({name:D,setup(e,{slots:t}){let a;const i=f({offset:0,inited:!1,mounted:!1}),{parent:l,index:o}=C(N);if(!l)return;const s=d((()=>{const e={},{vertical:t}=l.props;return l.size.value&&(e[t?"height":"width"]=`${l.size.value}px`),i.offset&&(e.transform=`translate${t?"Y":"X"}(${i.offset}px)`),e})),n=d((()=>{const{loop:e,lazyRender:t}=l.props;if(!t||a)return!0;if(!i.mounted)return!1;const s=l.activeIndicator.value,r=l.count.value-1,n=0===s&&e?r:s-1,u=s===r&&e?0:s+1;return a=o.value===s||o.value===n||o.value===u,a}));return g((()=>{S((()=>{i.mounted=!0}))})),r({setOffset:e=>{i.offset=e}}),()=>{var e;return j("div",{class:H(),style:s.value},[n.value?null==(e=t.default)?void 0:e.call(t):null])}}}));export{O as S,I as a,z as u};
