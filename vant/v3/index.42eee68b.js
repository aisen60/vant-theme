import{c as q,F as de,h as me,p as V,G as p,H as he,o as ge,I as le,J as X,K as ye}from"./use-translate.fbf36f21.js";import{d as j,a as ve,n as ee,m as ie,t as A,c as De,w as we}from"./with-install.251697cd.js";import{u as be}from"./use-refs.1bd4ff6f.js";import{u as ue}from"./use-expose.8d47dba2.js";import{P as ke}from"./index.b25dcbf6.js";import{B as Te}from"./index.16d2686f.js";import{T as se}from"./function-call.a70e3069.js";import{g as Se}from"./utils.048b262b.js";import{u as Me}from"./use-height.a6137a9c.js";import{z as G,C as x,e as c,D as Y,x as Z,A as xe}from"./vue-libs.bf80eadf.js";const[Re,f,I]=q("calendar"),Ce=e=>I("monthTitle",e.getFullYear(),e.getMonth()+1);function te(e,s){const l=e.getFullYear(),d=s.getFullYear();if(l===d){const D=e.getMonth(),T=s.getMonth();return D===T?0:D>T?1:-1}return l>d?1:-1}function R(e,s){const l=te(e,s);if(l===0){const d=e.getDate(),D=s.getDate();return d===D?0:d>D?1:-1}return l}const U=e=>new Date(e),ce=e=>Array.isArray(e)?e.map(U):U(e);function oe(e,s){const l=U(e);return l.setDate(l.getDate()+s),l}const ne=e=>oe(e,-1),fe=e=>oe(e,1),ae=()=>{const e=new Date;return e.setHours(0,0,0,0),e};function Oe(e){const s=e[0].getTime();return(e[1].getTime()-s)/(1e3*60*60*24)+1}const[Pe]=q("calendar-day");var Ae=G({name:Pe,props:{item:j(Object),color:String,index:Number,offset:ve(0),rowHeight:String},emits:["click"],setup(e,{emit:s,slots:l}){const d=x(()=>{const{item:a,index:h,color:k,offset:B,rowHeight:O}=e,S={height:O};if(a.type==="placeholder")return S.width="100%",S;if(h===0&&(S.marginLeft=`${100*B/7}%`),k)switch(a.type){case"end":case"start":case"start-end":case"multiple-middle":case"multiple-selected":S.background=k;break;case"middle":S.color=k;break}return S}),D=()=>{e.item.type!=="disabled"&&s("click",e.item)},T=()=>{const{topInfo:a}=e.item;if(a||l["top-info"])return c("div",{class:f("top-info")},[l["top-info"]?l["top-info"](e.item):a])},C=()=>{const{bottomInfo:a}=e.item;if(a||l["bottom-info"])return c("div",{class:f("bottom-info")},[l["bottom-info"]?l["bottom-info"](e.item):a])},w=()=>{const{item:a,color:h,rowHeight:k}=e,{type:B,text:O}=a,S=[T(),O,C()];return B==="selected"?c("div",{class:f("selected-day"),style:{width:k,height:k,background:h}},[S]):S};return()=>{const{type:a,className:h}=e.item;return a==="placeholder"?c("div",{class:f("day"),style:d.value},null):c("div",{role:"gridcell",style:d.value,class:[f("day",a),h],tabindex:a==="disabled"?void 0:-1,onClick:D},[w()])}}});const[Be]=q("calendar-month"),He={date:j(Date),type:String,color:String,minDate:j(Date),maxDate:j(Date),showMark:Boolean,rowHeight:ee,formatter:Function,lazyRender:Boolean,currentDate:[Date,Array],allowSameDay:Boolean,showSubtitle:Boolean,showMonthTitle:Boolean,firstDayOfWeek:Number};var Ie=G({name:Be,props:He,emits:["click","update-height"],setup(e,{emit:s,slots:l}){const[d,D]=de(),T=Y(),C=Y(),w=Me(C),a=x(()=>Ce(e.date)),h=x(()=>me(e.rowHeight)),k=x(()=>{const o=e.date.getDay();return e.firstDayOfWeek?(o+7-e.firstDayOfWeek)%7:o}),B=x(()=>Se(e.date.getFullYear(),e.date.getMonth()+1)),O=x(()=>d.value||!e.lazyRender),S=()=>a.value,W=o=>{const m=g=>e.currentDate.some(u=>R(u,g)===0);if(m(o)){const g=ne(o),u=fe(o),t=m(g),n=m(u);return t&&n?"multiple-middle":t?"end":n?"start":"multiple-selected"}return""},$=o=>{const[m,g]=e.currentDate;if(!m)return"";const u=R(o,m);if(!g)return u===0?"start":"";const t=R(o,g);return e.allowSameDay&&u===0&&t===0?"start-end":u===0?"start":t===0?"end":u>0&&t<0?"middle":""},F=o=>{const{type:m,minDate:g,maxDate:u,currentDate:t}=e;if(R(o,g)<0||R(o,u)>0)return"disabled";if(t===null)return"";if(Array.isArray(t)){if(m==="multiple")return W(o);if(m==="range")return $(o)}else if(m==="single")return R(o,t)===0?"selected":"";return""},z=o=>{if(e.type==="range"){if(o==="start"||o==="end")return I(o);if(o==="start-end")return`${I("start")}/${I("end")}`}},E=()=>{if(e.showMonthTitle)return c("div",{class:f("month-title")},[a.value])},J=()=>{if(e.showMark&&O.value)return c("div",{class:f("month-mark")},[e.date.getMonth()+1])},N=x(()=>{const o=Math.ceil((B.value+k.value)/7);return Array(o).fill({type:"placeholder"})}),M=x(()=>{const o=[],m=e.date.getFullYear(),g=e.date.getMonth();for(let u=1;u<=B.value;u++){const t=new Date(m,g,u),n=F(t);let r={date:t,type:n,text:u,bottomInfo:z(n)};e.formatter&&(r=e.formatter(r)),o.push(r)}return o}),K=x(()=>M.value.filter(o=>o.type==="disabled")),L=(o,m)=>{if(T.value){const g=p(T.value),u=N.value.length,n=(Math.ceil((m.getDate()+k.value)/7)-1)*g.height/u;he(o,g.top+n+o.scrollTop-p(o).top)}},_=(o,m)=>c(Ae,{item:o,index:m,color:e.color,offset:k.value,rowHeight:h.value,onClick:g=>s("click",g)},V(l,["top-info","bottom-info"])),Q=()=>c("div",{ref:T,role:"grid",class:f("days")},[J(),(O.value?M:N).value.map(_)]);return ue({getTitle:S,getHeight:()=>w.value,setVisible:D,scrollToDate:L,disabledDays:K}),()=>c("div",{class:f("month"),ref:C},[E(),Q()])}});const[We]=q("calendar-header");var Fe=G({name:We,props:{title:String,subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:Number},emits:["click-subtitle"],setup(e,{slots:s,emit:l}){const d=()=>{if(e.showTitle){const w=e.title||I("title"),a=s.title?s.title():w;return c("div",{class:f("header-title")},[a])}},D=w=>l("click-subtitle",w),T=()=>{if(e.showSubtitle){const w=s.subtitle?s.subtitle():e.subtitle;return c("div",{class:f("header-subtitle"),onClick:D},[w])}},C=()=>{const{firstDayOfWeek:w}=e,a=I("weekdays"),h=[...a.slice(w,7),...a.slice(0,w)];return c("div",{class:f("weekdays")},[h.map(k=>c("span",{class:f("weekday")},[k]))])};return()=>c("div",{class:f("header")},[d(),T(),C()])}});const Ne={show:Boolean,type:ie("single"),title:String,color:String,round:A,readonly:Boolean,poppable:A,maxRange:De(null),position:ie("bottom"),teleport:[String,Object],showMark:A,showTitle:A,formatter:Function,rowHeight:ee,confirmText:String,rangePrompt:String,lazyRender:A,showConfirm:A,defaultDate:[Date,Array],allowSameDay:Boolean,showSubtitle:A,closeOnPopstate:A,showRangePrompt:A,confirmDisabledText:String,closeOnClickOverlay:A,safeAreaInsetTop:Boolean,safeAreaInsetBottom:A,minDate:{type:Date,validator:le,default:ae},maxDate:{type:Date,validator:le,default:()=>{const e=ae();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate())}},firstDayOfWeek:{type:ee,default:0,validator:e=>e>=0&&e<=6}};var Ye=G({name:Re,props:Ne,emits:["select","confirm","unselect","month-show","over-range","update:show","click-subtitle"],setup(e,{emit:s,slots:l}){const d=(t,n=e.minDate,r=e.maxDate)=>R(t,n)===-1?n:R(t,r)===1?r:t,D=(t=e.defaultDate)=>{const{type:n,minDate:r,maxDate:i}=e;if(t===null)return t;const y=ae();if(n==="range"){Array.isArray(t)||(t=[]);const b=d(t[0]||y,r,ne(i)),H=d(t[1]||y,fe(r));return[b,H]}return n==="multiple"?Array.isArray(t)?t.map(b=>d(b)):[d(y)]:((!t||Array.isArray(t))&&(t=y),d(t))};let T;const C=Y(),w=Y(""),a=Y(D()),[h,k]=be(),B=x(()=>e.firstDayOfWeek?+e.firstDayOfWeek%7:0),O=x(()=>{const t=[],n=new Date(e.minDate);n.setDate(1);do t.push(new Date(n)),n.setMonth(n.getMonth()+1);while(te(n,e.maxDate)!==1);return t}),S=x(()=>{if(a.value){if(e.type==="range")return!a.value[0]||!a.value[1];if(e.type==="multiple")return!a.value.length}return!a.value}),W=()=>{const t=ye(C.value),n=t+T,r=O.value.map((v,P)=>h.value[P].getHeight()),i=r.reduce((v,P)=>v+P,0);if(n>i&&t>0)return;let y=0,b;const H=[-1,-1];for(let v=0;v<O.value.length;v++){const P=h.value[v];y<=n&&y+r[v]>=t&&(H[1]=v,b||(b=P,H[0]=v),h.value[v].showed||(h.value[v].showed=!0,s("month-show",{date:P.date,title:P.getTitle()}))),y+=r[v]}O.value.forEach((v,P)=>{const re=P>=H[0]-1&&P<=H[1]+1;h.value[P].setVisible(re)}),b&&(w.value=b.getTitle())},$=t=>{X(()=>{O.value.some((n,r)=>te(n,t)===0?(C.value&&h.value[r].scrollToDate(C.value,t),!0):!1),W()})},F=()=>{if(!(e.poppable&&!e.show))if(a.value){const t=e.type==="single"?a.value:a.value[0];$(t)}else X(W)},z=()=>{e.poppable&&!e.show||X(()=>{T=Math.floor(p(C).height),F()})},E=(t=D())=>{a.value=t,F()},J=t=>{const{maxRange:n,rangePrompt:r,showRangePrompt:i}=e;return n&&Oe(t)>n?(i&&se(r||I("rangePrompt",n)),s("over-range"),!1):!0},N=()=>{var t;return s("confirm",(t=a.value)!=null?t:ce(a.value))},M=(t,n)=>{const r=i=>{a.value=i,s("select",ce(i))};if(n&&e.type==="range"&&!J(t)){r([t[0],oe(t[0],+e.maxRange-1)]);return}r(t),n&&!e.showConfirm&&N()},K=(t,n,r)=>{var i;return(i=t.find(y=>R(n,y.date)===-1&&R(y.date,r)===-1))==null?void 0:i.date},L=x(()=>h.value.reduce((t,n)=>{var r,i;return t.push(...(i=(r=n.disabledDays)==null?void 0:r.value)!=null?i:[]),t},[])),_=t=>{if(e.readonly||!t.date)return;const{date:n}=t,{type:r}=e;if(r==="range"){if(!a.value){M([n]);return}const[i,y]=a.value;if(i&&!y){const b=R(n,i);if(b===1){const H=K(L.value,i,n);if(H){const v=ne(H);R(i,v)===-1?M([i,v]):M([n])}else M([i,n],!0)}else b===-1?M([n]):e.allowSameDay&&M([n,n],!0)}else M([n])}else if(r==="multiple"){if(!a.value){M([n]);return}const i=a.value,y=i.findIndex(b=>R(b,n)===0);if(y!==-1){const[b]=i.splice(y,1);s("unselect",U(b))}else e.maxRange&&i.length>=e.maxRange?se(e.rangePrompt||I("rangePrompt",e.maxRange)):M([...i,n])}else M(n,!0)},Q=t=>s("update:show",t),o=(t,n)=>{const r=n!==0||!e.showSubtitle;return c(Ie,xe({ref:k(n),date:t,currentDate:a.value,showMonthTitle:r,firstDayOfWeek:B.value},V(e,["type","color","minDate","maxDate","showMark","formatter","rowHeight","lazyRender","showSubtitle","allowSameDay"]),{onClick:_}),V(l,["top-info","bottom-info"]))},m=()=>{if(l.footer)return l.footer();if(e.showConfirm){const t=l["confirm-text"],n=S.value,r=n?e.confirmDisabledText:e.confirmText;return c(Te,{round:!0,block:!0,type:"danger",color:e.color,class:f("confirm"),disabled:n,nativeType:"button",onClick:N},{default:()=>[t?t({disabled:n}):r||I("confirm")]})}},g=()=>c("div",{class:[f("footer"),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[m()]),u=()=>c("div",{class:f()},[c(Fe,{title:e.title,subtitle:w.value,showTitle:e.showTitle,showSubtitle:e.showSubtitle,firstDayOfWeek:B.value,"onClick-subtitle":t=>s("click-subtitle",t)},V(l,["title","subtitle"])),c("div",{ref:C,class:f("body"),onScroll:W},[O.value.map(o)]),g()]);return Z(()=>e.show,z),Z(()=>[e.type,e.minDate,e.maxDate],()=>E(D(a.value))),Z(()=>e.defaultDate,(t=null)=>{a.value=t,F()}),ue({reset:E,scrollToDate:$}),ge(z),()=>e.poppable?c(ke,{show:e.show,class:f("popup"),round:e.round,position:e.position,closeable:e.showTitle||e.showSubtitle,teleport:e.teleport,closeOnPopstate:e.closeOnPopstate,safeAreaInsetTop:e.safeAreaInsetTop,closeOnClickOverlay:e.closeOnClickOverlay,"onUpdate:show":Q},{default:u}):u()}});const Le=we(Ye);export{Le as C};
