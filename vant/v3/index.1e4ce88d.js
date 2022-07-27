import{c as K,H as me,h as he,p as U,r as ee,I as ge,o as ye,J as ie,K as Z,L as ve}from"./use-translate.82d1675a.js";import{d as q,a as De,n as te,m as se,t as B,c as we,w as be}from"./with-install.1e1e6f3a.js";import{u as ke}from"./use-refs.4f5e4be1.js";import{u as fe}from"./use-expose.0b7af251.js";import{P as Te}from"./index.d942910e.js";import{B as Se}from"./index.228fc332.js";import{T as ce}from"./function-call.67aa4b4e.js";import{g as Me}from"./utils.4dbd7bdb.js";import{u as xe}from"./use-height.65a2922d.js";import{z as _,D as x,e as c,C as $,x as p,A as Re}from"./vue-libs.d483629c.js";const[Ce,f,W]=K("calendar"),Oe=e=>W("monthTitle",e.getFullYear(),e.getMonth()+1);function ne(e,s){const l=e.getFullYear(),d=s.getFullYear();if(l===d){const w=e.getMonth(),M=s.getMonth();return w===M?0:w>M?1:-1}return l>d?1:-1}function R(e,s){const l=ne(e,s);if(l===0){const d=e.getDate(),w=s.getDate();return d===w?0:d>w?1:-1}return l}const J=e=>new Date(e),ue=e=>Array.isArray(e)?e.map(J):J(e);function re(e,s){const l=J(e);return l.setDate(l.getDate()+s),l}const ae=e=>re(e,-1),de=e=>re(e,1),oe=()=>{const e=new Date;return e.setHours(0,0,0,0),e};function Pe(e){const s=e[0].getTime();return(e[1].getTime()-s)/(1e3*60*60*24)+1}const[Ae]=K("calendar-day");var Be=_({name:Ae,props:{item:q(Object),color:String,index:Number,offset:De(0),rowHeight:String},emits:["click"],setup(e,{emit:s,slots:l}){const d=x(()=>{var N;const{item:a,index:h,color:T,offset:H,rowHeight:O}=e,S={height:O};if(a.type==="placeholder")return S.width="100%",S;if(h===0&&(S.marginLeft=`${100*H/7}%`),T)switch(a.type){case"end":case"start":case"start-end":case"multiple-middle":case"multiple-selected":S.background=T;break;case"middle":S.color=T;break}return H+(((N=a.date)==null?void 0:N.getDate())||1)>28&&(S.marginBottom=0),S}),w=()=>{e.item.type!=="disabled"&&s("click",e.item)},M=()=>{const{topInfo:a}=e.item;if(a||l["top-info"])return c("div",{class:f("top-info")},[l["top-info"]?l["top-info"](e.item):a])},C=()=>{const{bottomInfo:a}=e.item;if(a||l["bottom-info"])return c("div",{class:f("bottom-info")},[l["bottom-info"]?l["bottom-info"](e.item):a])},b=()=>{const{item:a,color:h,rowHeight:T}=e,{type:H,text:O}=a,S=[M(),O,C()];return H==="selected"?c("div",{class:f("selected-day"),style:{width:T,height:T,background:h}},[S]):S};return()=>{const{type:a,className:h}=e.item;return a==="placeholder"?c("div",{class:f("day"),style:d.value},null):c("div",{role:"gridcell",style:d.value,class:[f("day",a),h],tabindex:a==="disabled"?void 0:-1,onClick:w},[b()])}}});const[He]=K("calendar-month"),Ie={date:q(Date),type:String,color:String,minDate:q(Date),maxDate:q(Date),showMark:Boolean,rowHeight:te,formatter:Function,lazyRender:Boolean,currentDate:[Date,Array],allowSameDay:Boolean,showSubtitle:Boolean,showMonthTitle:Boolean,firstDayOfWeek:Number};var We=_({name:He,props:Ie,emits:["click","update-height"],setup(e,{emit:s,slots:l}){const[d,w]=me(),M=$(),C=$(),b=xe(C),a=x(()=>Oe(e.date)),h=x(()=>he(e.rowHeight)),T=x(()=>{const o=e.date.getDay();return e.firstDayOfWeek?(o+7-e.firstDayOfWeek)%7:o}),H=x(()=>Me(e.date.getFullYear(),e.date.getMonth()+1)),O=x(()=>d.value||!e.lazyRender),S=()=>a.value,N=o=>{const m=g=>e.currentDate.some(u=>R(u,g)===0);if(m(o)){const g=ae(o),u=de(o),y=m(g),t=m(u);return y&&t?"multiple-middle":y?"end":t?"start":"multiple-selected"}return""},F=o=>{const[m,g]=e.currentDate;if(!m)return"";const u=R(o,m);if(!g)return u===0?"start":"";const y=R(o,g);return e.allowSameDay&&u===0&&y===0?"start-end":u===0?"start":y===0?"end":u>0&&y<0?"middle":""},E=o=>{const{type:m,minDate:g,maxDate:u,currentDate:y}=e;if(R(o,g)<0||R(o,u)>0)return"disabled";if(y===null)return"";if(Array.isArray(y)){if(m==="multiple")return N(o);if(m==="range")return F(o)}else if(m==="single")return R(o,y)===0?"selected":"";return""},z=o=>{if(e.type==="range"){if(o==="start"||o==="end")return W(o);if(o==="start-end")return`${W("start")}/${W("end")}`}},V=()=>{if(e.showMonthTitle)return c("div",{class:f("month-title")},[a.value])},j=()=>{if(e.showMark&&O.value)return c("div",{class:f("month-mark")},[e.date.getMonth()+1])},L=x(()=>{const o=Math.ceil((H.value+T.value)/7);return Array(o).fill({type:"placeholder"})}),Y=x(()=>{const o=[],m=e.date.getFullYear(),g=e.date.getMonth();for(let u=1;u<=H.value;u++){const y=new Date(m,g,u),t=E(y);let n={date:y,type:t,text:u,bottomInfo:z(t)};e.formatter&&(n=e.formatter(n)),o.push(n)}return o}),P=x(()=>Y.value.filter(o=>o.type==="disabled")),G=(o,m)=>{if(M.value){const g=ee(M.value),u=L.value.length,t=(Math.ceil((m.getDate()+T.value)/7)-1)*g.height/u;ge(o,g.top+t+o.scrollTop-ee(o).top)}},Q=(o,m)=>c(Be,{item:o,index:m,color:e.color,offset:T.value,rowHeight:h.value,onClick:g=>s("click",g)},U(l,["top-info","bottom-info"])),X=()=>c("div",{ref:M,role:"grid",class:f("days")},[j(),(O.value?Y:L).value.map(Q)]);return fe({getTitle:S,getHeight:()=>b.value,setVisible:w,scrollToDate:G,disabledDays:P}),()=>c("div",{class:f("month"),ref:C},[V(),X()])}});const[Ne]=K("calendar-header");var Fe=_({name:Ne,props:{title:String,subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:Number},emits:["click-subtitle"],setup(e,{slots:s,emit:l}){const d=()=>{if(e.showTitle){const b=e.title||W("title"),a=s.title?s.title():b;return c("div",{class:f("header-title")},[a])}},w=b=>l("click-subtitle",b),M=()=>{if(e.showSubtitle){const b=s.subtitle?s.subtitle():e.subtitle;return c("div",{class:f("header-subtitle"),onClick:w},[b])}},C=()=>{const{firstDayOfWeek:b}=e,a=W("weekdays"),h=[...a.slice(b,7),...a.slice(0,b)];return c("div",{class:f("weekdays")},[h.map(T=>c("span",{class:f("weekday")},[T]))])};return()=>c("div",{class:f("header")},[d(),M(),C()])}});const ze={show:Boolean,type:se("single"),title:String,color:String,round:B,readonly:Boolean,poppable:B,maxRange:we(null),position:se("bottom"),teleport:[String,Object],showMark:B,showTitle:B,formatter:Function,rowHeight:te,confirmText:String,rangePrompt:String,lazyRender:B,showConfirm:B,defaultDate:[Date,Array],allowSameDay:Boolean,showSubtitle:B,closeOnPopstate:B,showRangePrompt:B,confirmDisabledText:String,closeOnClickOverlay:B,safeAreaInsetTop:Boolean,safeAreaInsetBottom:B,minDate:{type:Date,validator:ie,default:oe},maxDate:{type:Date,validator:ie,default:()=>{const e=oe();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate())}},firstDayOfWeek:{type:te,default:0,validator:e=>e>=0&&e<=6}};var Ye=_({name:Ce,props:ze,emits:["select","confirm","unselect","month-show","over-range","update:show","click-subtitle"],setup(e,{emit:s,slots:l}){const d=(t,n=e.minDate,r=e.maxDate)=>R(t,n)===-1?n:R(t,r)===1?r:t,w=(t=e.defaultDate)=>{const{type:n,minDate:r,maxDate:i}=e;if(t===null)return t;const v=oe();if(n==="range"){Array.isArray(t)||(t=[]);const k=d(t[0]||v,r,ae(i)),I=d(t[1]||v,de(r));return[k,I]}return n==="multiple"?Array.isArray(t)?t.map(k=>d(k)):[d(v)]:((!t||Array.isArray(t))&&(t=v),d(t))};let M;const C=$(),b=$(""),a=$(w()),[h,T]=ke(),H=x(()=>e.firstDayOfWeek?+e.firstDayOfWeek%7:0),O=x(()=>{const t=[],n=new Date(e.minDate);if(e.lazyRender&&!e.show&&e.poppable)return t;n.setDate(1);do t.push(new Date(n)),n.setMonth(n.getMonth()+1);while(ne(n,e.maxDate)!==1);return t}),S=x(()=>{if(a.value){if(e.type==="range")return!a.value[0]||!a.value[1];if(e.type==="multiple")return!a.value.length}return!a.value}),N=()=>a.value,F=()=>{const t=ve(C.value),n=t+M,r=O.value.map((D,A)=>h.value[A].getHeight()),i=r.reduce((D,A)=>D+A,0);if(n>i&&t>0)return;let v=0,k;const I=[-1,-1];for(let D=0;D<O.value.length;D++){const A=h.value[D];v<=n&&v+r[D]>=t&&(I[1]=D,k||(k=A,I[0]=D),h.value[D].showed||(h.value[D].showed=!0,s("month-show",{date:A.date,title:A.getTitle()}))),v+=r[D]}O.value.forEach((D,A)=>{const le=A>=I[0]-1&&A<=I[1]+1;h.value[A].setVisible(le)}),k&&(b.value=k.getTitle())},E=t=>{Z(()=>{O.value.some((n,r)=>ne(n,t)===0?(C.value&&h.value[r].scrollToDate(C.value,t),!0):!1),F()})},z=()=>{if(!(e.poppable&&!e.show))if(a.value){const t=e.type==="single"?a.value:a.value[0];E(t)}else Z(F)},V=()=>{e.poppable&&!e.show||(Z(()=>{M=Math.floor(ee(C).height)}),z())},j=(t=w())=>{a.value=t,z()},L=t=>{const{maxRange:n,rangePrompt:r,showRangePrompt:i}=e;return n&&Pe(t)>n?(i&&ce(r||W("rangePrompt",n)),s("over-range"),!1):!0},Y=()=>{var t;return s("confirm",(t=a.value)!=null?t:ue(a.value))},P=(t,n)=>{const r=i=>{a.value=i,s("select",ue(i))};if(n&&e.type==="range"&&!L(t)){r([t[0],re(t[0],+e.maxRange-1)]);return}r(t),n&&!e.showConfirm&&Y()},G=(t,n,r)=>{var i;return(i=t.find(v=>R(n,v.date)===-1&&R(v.date,r)===-1))==null?void 0:i.date},Q=x(()=>h.value.reduce((t,n)=>{var r,i;return t.push(...(i=(r=n.disabledDays)==null?void 0:r.value)!=null?i:[]),t},[])),X=t=>{if(e.readonly||!t.date)return;const{date:n}=t,{type:r}=e;if(r==="range"){if(!a.value){P([n]);return}const[i,v]=a.value;if(i&&!v){const k=R(n,i);if(k===1){const I=G(Q.value,i,n);if(I){const D=ae(I);R(i,D)===-1?P([i,D]):P([n])}else P([i,n],!0)}else k===-1?P([n]):e.allowSameDay&&P([n,n],!0)}else P([n])}else if(r==="multiple"){if(!a.value){P([n]);return}const i=a.value,v=i.findIndex(k=>R(k,n)===0);if(v!==-1){const[k]=i.splice(v,1);s("unselect",J(k))}else e.maxRange&&i.length>=e.maxRange?ce(e.rangePrompt||W("rangePrompt",e.maxRange)):P([...i,n])}else P(n,!0)},o=t=>s("update:show",t),m=(t,n)=>{const r=n!==0||!e.showSubtitle;return c(We,Re({ref:T(n),date:t,currentDate:a.value,showMonthTitle:r,firstDayOfWeek:H.value},U(e,["type","color","minDate","maxDate","showMark","formatter","rowHeight","lazyRender","showSubtitle","allowSameDay"]),{onClick:X}),U(l,["top-info","bottom-info"]))},g=()=>{if(l.footer)return l.footer();if(e.showConfirm){const t=l["confirm-text"],n=S.value,r=n?e.confirmDisabledText:e.confirmText;return c(Se,{round:!0,block:!0,type:"danger",color:e.color,class:f("confirm"),disabled:n,nativeType:"button",onClick:Y},{default:()=>[t?t({disabled:n}):r||W("confirm")]})}},u=()=>c("div",{class:[f("footer"),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[g()]),y=()=>c("div",{class:f()},[c(Fe,{title:e.title,subtitle:b.value,showTitle:e.showTitle,showSubtitle:e.showSubtitle,firstDayOfWeek:H.value,"onClick-subtitle":t=>s("click-subtitle",t)},U(l,["title","subtitle"])),c("div",{ref:C,class:f("body"),onScroll:F},[O.value.map(m)]),u()]);return p(()=>e.show,V),p(()=>[e.type,e.minDate,e.maxDate],()=>j(w(a.value))),p(()=>e.defaultDate,(t=null)=>{a.value=t,z()}),fe({reset:j,scrollToDate:E,getSelectedDate:N}),ye(V),()=>e.poppable?c(Te,{show:e.show,class:f("popup"),round:e.round,position:e.position,closeable:e.showTitle||e.showSubtitle,teleport:e.teleport,closeOnPopstate:e.closeOnPopstate,safeAreaInsetTop:e.safeAreaInsetTop,closeOnClickOverlay:e.closeOnClickOverlay,"onUpdate:show":o},{default:y}):y()}});const Ge=be(Ye);export{Ge as C};
