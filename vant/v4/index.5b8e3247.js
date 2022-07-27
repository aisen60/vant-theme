import{c as W,h as _,E as j,W as G,X as J,H as k,r as P,l as L,q as Q,F as Z}from"./use-translate.c56bc05e.js";import{c as w,n as z,w as p}from"./with-install.2d06a5b3.js";import{u as ee}from"./use-touch.196fce0c.js";import{A as te,x as E,D as x,e as y}from"./vue-libs.a3cd7f61.js";const[ae,f]=W("slider"),ne={min:w(0),max:w(100),step:w(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:z,buttonSize:z,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}},re=te({name:ae,props:ne,emits:["change","dragEnd","dragStart","update:modelValue"],setup(t,{emit:b,slots:V}){let S,o,u;const N=E(),c=E(),g=ee(),m=x(()=>Number(t.max)-Number(t.min)),X=x(()=>{const e=t.vertical?"width":"height";return{background:t.inactiveColor,[e]:_(t.barHeight)}}),s=e=>t.range&&Array.isArray(e),D=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[1]-e[0])*100/m.value}%`:`${(e-Number(a))*100/m.value}%`},H=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[0]-Number(a))*100/m.value}%`:"0%"},M=x(()=>{const a={[t.vertical?"height":"width"]:D(),background:t.activeColor};c.value&&(a.transition="none");const n=()=>t.vertical?t.reverse?"bottom":"top":t.reverse?"right":"left";return a[n()]=H(),a}),h=e=>{const a=+t.min,n=+t.max,i=+t.step;e=Z(e,a,n);const r=Math.round((e-a)/i)*i;return J(a,r)},R=e=>{var i,r;const a=(i=e[0])!=null?i:Number(t.min),n=(r=e[1])!=null?r:Number(t.max);return a>n?[n,a]:[a,n]},d=(e,a)=>{s(e)?e=R(e).map(h):e=h(e),k(e,t.modelValue)||b("update:modelValue",e),a&&!k(e,u)&&b("change",e)},Y=e=>{if(e.stopPropagation(),t.disabled||t.readonly)return;const{min:a,reverse:n,vertical:i,modelValue:r}=t,l=P(N),K=()=>i?n?l.bottom-e.clientY:e.clientY-l.top:n?l.right-e.clientX:e.clientX-l.left,O=i?l.height:l.width,v=Number(a)+K()/O*m.value;if(s(r)){const[B,T]=r,U=(B+T)/2;v<=U?d([v,T],!0):d([B,v],!0)}else d(v,!0)},$=e=>{t.disabled||t.readonly||(g.start(e),o=t.modelValue,s(o)?u=o.map(h):u=h(o),c.value="start")},F=e=>{if(t.disabled||t.readonly)return;c.value==="start"&&b("dragStart",e),L(e,!0),g.move(e),c.value="dragging";const a=P(N),n=t.vertical?g.deltaY.value:g.deltaX.value,i=t.vertical?a.height:a.width;let r=n/i*m.value;if(t.reverse&&(r=-r),s(u)){const l=t.reverse?1-S:S;o[l]=u[l]+r}else o=u+r;d(o)},A=e=>{t.disabled||t.readonly||(c.value==="dragging"&&(d(o,!0),b("dragEnd",e)),c.value="")},I=e=>typeof e=="number"?f("button-wrapper",["left","right"][e]):f("button-wrapper",t.reverse?"left":"right"),q=(e,a)=>{if(typeof a=="number"){const n=V[a===0?"left-button":"right-button"];if(n)return n({value:e})}return V.button?V.button({value:e}):y("div",{class:f("button"),style:Q(t.buttonSize)},null)},C=e=>{const a=typeof e=="number"?t.modelValue[e]:t.modelValue;return y("div",{role:"slider",class:I(e),tabindex:t.disabled?void 0:0,"aria-valuemin":t.min,"aria-valuenow":a,"aria-valuemax":t.max,"aria-disabled":t.disabled||void 0,"aria-readonly":t.readonly||void 0,"aria-orientation":t.vertical?"vertical":"horizontal",onTouchstart:n=>{typeof e=="number"&&(S=e),$(n)},onTouchmove:F,onTouchend:A,onTouchcancel:A,onClick:G},[q(a,e)])};return d(t.modelValue),j(()=>t.modelValue),()=>y("div",{ref:N,style:X.value,class:f({vertical:t.vertical,disabled:t.disabled}),onClick:Y},[y("div",{class:f("bar"),style:M.value},[t.range?[C(0),C(1)]:C()])])}}),ie=p(re),se=ie;export{se as V};
