import{b as M,V as ct}from"./index.8bc1944b.js";import{c as K,M as rt,b as at,i as lt,n as ut,l as dt,O as ft,L,r as R,z as ht,y as Q,u as mt,e as pt,v as xt,a as gt}from"./use-translate.8ba7ae4e.js";import{t as vt,n as Z,a as yt,w as G}from"./with-install.1c49d2eb.js";import{u as Tt}from"./use-touch.2a7e3be3.js";import{u as J}from"./use-expose.30c76c17.js";import{z as O,C as k,D as B,N as Ct,x as j,e as c,R as It,Q as St,q as bt,H as kt,o as _,c as At,w as C,B as n,a as F,b as H,d as U,F as X,h as _t,t as wt}from"./vue-libs.d483629c.js";import{f as Lt}from"./constant.80c6de18.js";import{V as I}from"./index.07b0068c.js";import"./use-id.af179088.js";import"./use-route.e59fb0a1.js";import"./index.8f5866f1.js";import"./on-popup-reopen.27c65306.js";import"./interceptor.5ac8596d.js";import"./use-refs.4f5e4be1.js";import"./index.4ee2710f.js";import"./index.1d88bb58.js";function Rt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!St(e)}function Bt(){const e="A".charCodeAt(0);return Array(26).fill("").map((o,f)=>String.fromCharCode(e+f))}const[W,w]=K("index-bar"),Ot={sticky:vt,zIndex:Z,teleport:[String,Object],highlightColor:String,stickyOffsetTop:yt(0),indexList:{type:Array,default:Bt}},tt=Symbol(W),Vt=O({name:W,props:Ot,emits:["select","change"],setup(e,{emit:r,slots:o}){const f=k(),h=k(""),x=Tt(),a=rt(f),{children:g,linkChildren:i}=at(tt);let m;i({props:e});const S=B(()=>{if(lt(e.zIndex))return{zIndex:+e.zIndex+1}}),et=B(()=>{if(e.highlightColor)return{color:e.highlightColor}}),V=(t,s)=>{for(let l=g.length-1;l>=0;l--){const d=l>0?s[l-1].height:0,u=e.sticky?d+e.stickyOffsetTop:0;if(t+u>=s[l].top)return l}return-1},E=t=>g.find(s=>String(s.index)===t),A=()=>{if(ft(f))return;const{sticky:t,indexList:s}=e,l=L(a.value),d=R(a),u=g.map(T=>T.getRect(a.value,d));let v=-1;if(m){const T=E(m);if(T){const y=T.getRect(a.value,d);v=V(y.top,u)}}else v=V(l,u);h.value=s[v],t&&g.forEach((T,y)=>{const{state:p,$el:it}=T;if(y===v||y===v-1){const b=it.getBoundingClientRect();p.left=b.left,p.width=b.width}else p.left=null,p.width=null;if(y===v)p.active=!0,p.top=Math.max(e.stickyOffsetTop,u[y].top-l)+d.top;else if(y===v-1&&m===""){const b=u[v].top-l;p.active=b>0,p.top=b+d.top-u[y].height}else p.active=!1}),m=""},N=()=>{bt(A)};ut("scroll",A,{target:a}),Ct(N),j(()=>e.indexList,N),j(h,t=>{t&&r("change",t)});const nt=()=>e.indexList.map(t=>{const s=t===h.value;return c("span",{class:w("index",{active:s}),style:s?et.value:void 0,"data-index":t},[t])}),P=t=>{m=String(t);const s=E(m);if(s){const l=L(a.value),d=R(a),{offsetHeight:u}=document.documentElement;if(l===u-d.height){A();return}s.$el.scrollIntoView(),e.sticky&&e.stickyOffsetTop&&ht(Q()-e.stickyOffsetTop),r("select",s.index)}},z=t=>{const{index:s}=t.dataset;s&&P(s)},ot=t=>{z(t.target)};let $;const st=t=>{if(x.move(t),x.isVertical()){dt(t);const{clientX:s,clientY:l}=t.touches[0],d=document.elementFromPoint(s,l);if(d){const{index:u}=d.dataset;u&&$!==u&&($=u,z(d))}}},D=()=>c("div",{class:w("sidebar"),style:S.value,onClick:ot,onTouchstart:x.start,onTouchmove:st},[nt()]);return J({scrollTo:P}),()=>{var s;let t;return c("div",{ref:f,class:w()},[e.teleport?c(It,{to:e.teleport},Rt(t=D())?t:{default:()=>[t]}):D(),(s=o.default)==null?void 0:s.call(o)])}}}),Et=G(Vt),Y=Et,[Nt,Pt]=K("index-anchor"),zt={index:Z},$t=O({name:Nt,props:zt,setup(e,{slots:r}){const o=kt({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),f=k(),{parent:h}=mt(tt);if(!h)return;const x=()=>o.active&&h.props.sticky,a=B(()=>{const{zIndex:i,highlightColor:m}=h.props;if(x())return pt(xt(i),{left:o.left?`${o.left}px`:void 0,width:o.width?`${o.width}px`:void 0,transform:o.top?`translate3d(0, ${o.top}px, 0)`:void 0,color:m})});return J({state:o,getRect:(i,m)=>{const S=R(f);return o.rect.height=S.height,i===window||i===document.body?o.rect.top=S.top+Q():o.rect.top=S.top+L(i)-m.top,o.rect}}),()=>{const i=x();return c("div",{ref:f,style:{height:i?`${o.rect.height}px`:void 0}},[c("div",{style:a.value,class:[Pt({sticky:i}),{[Lt]:i}]},[r.default?r.default():e.index])])}}}),Dt=G($t),q=Dt,ne=O({__name:"index",setup(e){const r=gt({"zh-CN":{text:"\u6587\u672C",customIndexList:"\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868"},"en-US":{text:"Text",customIndexList:"Custom Index List"}}),o=k(0),f=[],h=[1,2,3,4,5,6,8,9,10],x="A".charCodeAt(0);for(let a=0;a<26;a++)f.push(String.fromCharCode(x+a));return(a,g)=>(_(),At(n(ct),{active:o.value,"onUpdate:active":g[0]||(g[0]=i=>o.value=i)},{default:C(()=>[c(n(M),{title:n(r)("basicUsage")},{default:C(()=>[c(n(Y),null,{default:C(()=>[(_(),F(X,null,H(f,i=>U("div",{key:i},[c(n(q),{index:i},null,8,["index"]),c(n(I),{title:n(r)("text")},null,8,["title"]),c(n(I),{title:n(r)("text")},null,8,["title"]),c(n(I),{title:n(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"]),c(n(M),{title:n(r)("customIndexList")},{default:C(()=>[c(n(Y),{"index-list":h},{default:C(()=>[(_(),F(X,null,H(h,i=>U("div",{key:i},[c(n(q),{index:i},{default:C(()=>[_t(wt(n(r)("title")+i),1)]),_:2},1032,["index"]),c(n(I),{title:n(r)("text")},null,8,["title"]),c(n(I),{title:n(r)("text")},null,8,["title"]),c(n(I),{title:n(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"]))}});export{ne as default};
