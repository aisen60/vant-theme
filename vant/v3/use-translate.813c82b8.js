import{B as E,D as f,E as _,G as j,C as z,H as A,I as ue,J as oe,L as Y,M as H,N as V,q as ae,O as se,x as W,P as Z,Q as re}from"./vue-libs.e99ed056.js";function Ye(){}const He=Object.assign,q=typeof window!="undefined";function M(e,n){const t=n.split(".");let u=e;return t.forEach(o=>{var a;u=(a=u[o])!=null?a:""}),u}function Ve(e,n,t){return n.reduce((u,o)=>((!t||e[o]!==void 0)&&(u[o]=e[o]),u),{})}const We=e=>Array.isArray(e)?e:[e];var p=typeof window!="undefined";function v(e){return p?requestAnimationFrame(e):-1}function ie(e){p&&cancelAnimationFrame(e)}function Ze(e){v(()=>v(e))}var ce=e=>e===window,$=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),de=e=>{const n=E(e);if(ce(n)){const t=n.innerWidth,u=n.innerHeight;return $(t,u)}return n!=null&&n.getBoundingClientRect?n.getBoundingClientRect():$(0,0)};function qe(e=!1){const n=f(e);return[n,(u=!n.value)=>{n.value=u}]}function Je(e){const n=_(e,null);if(n){const t=Z(),{link:u,unlink:o,internalChildren:a}=n;u(t),j(()=>o(t));const s=z(()=>a.indexOf(t));return{parent:n,index:s}}return{parent:null,index:f(-1)}}function le(e){const n=[],t=u=>{Array.isArray(u)&&u.forEach(o=>{var a;re(o)&&(n.push(o),(a=o.component)!=null&&a.subTree&&(n.push(o.component.subTree),t(o.component.subTree.children)),o.children&&t(o.children))})};return t(e),n}function fe(e,n,t){const u=le(e.subTree.children);t.sort((a,s)=>u.indexOf(a.vnode)-u.indexOf(s.vnode));const o=t.map(a=>a.proxy);n.sort((a,s)=>{const i=o.indexOf(a),r=o.indexOf(s);return i-r})}function Ke(e){const n=A([]),t=A([]),u=Z();return{children:n,linkChildren:a=>{ue(e,Object.assign({link:r=>{r.proxy&&(t.push(r),n.push(r.proxy),fe(u,n,t))},unlink:r=>{const c=t.indexOf(r);n.splice(c,1),t.splice(c,1)},children:n,internalChildren:t},a))}}}var D=1e3,B=60*D,y=60*B,R=24*y;function pe(e){const n=Math.floor(e/R),t=Math.floor(e%R/y),u=Math.floor(e%y/B),o=Math.floor(e%B/D),a=Math.floor(e%D);return{total:e,days:n,hours:t,minutes:u,seconds:o,milliseconds:a}}function me(e,n){return Math.floor(e/1e3)===Math.floor(n/1e3)}function Ge(e){let n,t,u,o;const a=f(e.time),s=z(()=>pe(a.value)),i=()=>{u=!1,ie(n)},r=()=>Math.max(t-Date.now(),0),c=l=>{var N,P;a.value=l,(N=e.onChange)==null||N.call(e,s.value),l===0&&(i(),(P=e.onFinish)==null||P.call(e))},d=()=>{n=v(()=>{u&&(c(r()),a.value>0&&d())})},x=()=>{n=v(()=>{if(u){const l=r();(!me(l,a.value)||l===0)&&c(l),a.value>0&&x()}})},O=()=>{!p||(e.millisecond?d():x())},ne=()=>{u||(t=Date.now()+a.value,u=!0,O())},te=(l=e.time)=>{i(),a.value=l};return oe(i),Y(()=>{o&&(u=!0,o=!1,O())}),H(()=>{u&&(i(),o=!0)}),{start:ne,pause:i,reset:te,current:s}}function Ee(e){let n;V(()=>{e(),ae(()=>{n=!0})}),Y(()=>{n&&e()})}function ge(e,n,t={}){if(!p)return;const{target:u=window,passive:o=!1,capture:a=!1}=t;let s;const i=c=>{const d=E(c);d&&!s&&(d.addEventListener(e,n,{capture:a,passive:o}),s=!0)},r=c=>{const d=E(c);d&&s&&(d.removeEventListener(e,n,a),s=!1)};j(()=>r(u)),H(()=>r(u)),Ee(()=>i(u)),se(u)&&W(u,(c,d)=>{r(d),i(c)})}function Qe(e,n,t={}){if(!p)return;const{eventName:u="click"}=t;ge(u,a=>{const s=E(e);s&&!s.contains(a.target)&&n(a)},{target:document})}var g,C;function he(){if(!g&&(g=f(0),C=f(0),p)){const e=()=>{g.value=window.innerWidth,C.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:g,height:C}}var ve=/scroll|auto/i,J=p?window:void 0;function Ce(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function we(e,n=J){let t=e;for(;t&&t!==n&&Ce(t);){const{overflowY:u}=window.getComputedStyle(t);if(ve.test(u))return t;t=t.parentNode}return n}function Xe(e,n=J){const t=f();return V(()=>{e.value&&(t.value=we(e.value,n))}),t}var h;function en(){if(!h&&(h=f("visible"),p)){const e=()=>{h.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return h}var be=Symbol("van-field");function nn(e){const n=_(be,null);n&&!n.customValue.value&&(n.customValue.value=e,W(e,()=>{n.resetValidation(),n.validateWithTrigger("onChange")}))}const S=e=>e!=null,F=e=>typeof e=="function",K=e=>e!==null&&typeof e=="object",tn=e=>K(e)&&F(e.then)&&F(e.catch),un=e=>Object.prototype.toString.call(e)==="[object Date]"&&!Number.isNaN(e.getTime());function on(e){return e=e.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(e)||/^0[0-9-]{10,13}$/.test(e)}const Ae=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),De=()=>q?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Be(e){const n="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(n,0)}function L(e,n){"scrollTop"in e?e.scrollTop=n:e.scrollTo(e.scrollX,n)}function G(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function ye(e){L(window,e),L(document.body,e)}function an(e,n){if(e===window)return 0;const t=n?Be(n):G();return de(e).top+t}const Fe=De();function sn(){Fe&&ye(G())}const Te=e=>e.stopPropagation();function rn(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&Te(e)}function cn(e){const n=E(e);if(!n)return!1;const t=window.getComputedStyle(n),u=t.display==="none",o=n.offsetParent===null&&t.position!=="fixed";return u||o}const{width:Se,height:xe}=he();function w(e){if(S(e))return Ae(e)?`${e}px`:String(e)}function dn(e){if(S(e)){if(Array.isArray(e))return{width:w(e[0]),height:w(e[1])};const n=w(e);return{width:n,height:n}}}function ln(e){const n={};return e!==void 0&&(n.zIndex=+e),n}let b;function Oe(){if(!b){const e=document.documentElement,n=e.style.fontSize||window.getComputedStyle(e).fontSize;b=parseFloat(n)}return b}function Ne(e){return e=e.replace(/rem/g,""),+e*Oe()}function Pe(e){return e=e.replace(/vw/g,""),+e*Se.value/100}function Me(e){return e=e.replace(/vh/g,""),+e*xe.value/100}function fn(e){if(typeof e=="number")return e;if(q){if(e.includes("rem"))return Ne(e);if(e.includes("vw"))return Pe(e);if(e.includes("vh"))return Me(e)}return parseFloat(e)}const $e=/-(\w)/g,Q=e=>e.replace($e,(n,t)=>t.toUpperCase()),pn=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function mn(e,n=2){let t=e+"";for(;t.length<n;)t="0"+t;return t}const En=(e,n,t)=>Math.min(Math.max(e,n),t);function U(e,n,t){const u=e.indexOf(n);return u===-1?e:n==="-"&&u!==0?e.slice(0,u):e.slice(0,u+1)+e.slice(u).replace(t,"")}function gn(e,n=!0,t=!0){n?e=U(e,".",/\./g):e=e.split(".")[0],t?e=U(e,"-",/-/g):e=e.replace(/-/,"");const u=n?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(u,"")}function hn(e,n){return Math.round((e+n)*1e10)/1e10}const{hasOwnProperty:Re}=Object.prototype;function Le(e,n,t){const u=n[t];!S(u)||(!Re.call(e,t)||!K(u)?e[t]=u:e[t]=X(Object(e[t]),u))}function X(e,n){return Object.keys(n).forEach(t=>{Le(e,n,t)}),e}var Ue={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,n)=>`${e}\u5E74${n}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1:"},vanCoupon:{unlimited:"\u65E0\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",postal:"\u90AE\u653F\u7F16\u7801",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",postalEmpty:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E",addressDetail:"\u8BE6\u7EC6\u5730\u5740",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const k=f("zh-CN"),I=A({"zh-CN":Ue}),m={messages(){return I[k.value]},use(e,n){k.value=e,this.add({[e]:n})},add(e={}){X(I,e)}};function ee(e){const n=Q(e)+".";return(t,...u)=>{const o=m.messages(),a=M(o,n+t)||M(o,t);return F(a)?a(...u):a}}function T(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((t,u)=>t+T(e,u),""):Object.keys(n).reduce((t,u)=>t+(n[u]?T(e,u):""),""):""}function ke(e){return(n,t)=>(n&&typeof n!="string"&&(t=n,n=""),n=n?`${e}__${n}`:e,`${n}${T(n,t)}`)}function vn(e){const n=`van-${e}`;return[n,ke(n),ee(n)]}var Ie={name:"Name",tel:"Phone",save:"Save",confirm:"Confirm",cancel:"Cancel",delete:"Delete",loading:"Loading...",noCoupon:"No coupons",nameEmpty:"Please fill in the name",addContact:"Add contact",telInvalid:"Malformed phone number",vanCalendar:{end:"End",start:"Start",title:"Calendar",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:(e,n)=>`${e}/${n}`,rangePrompt:e=>`Choose no more than ${e} days`},vanCascader:{select:"Select"},vanPagination:{prev:"Previous",next:"Next"},vanPullRefresh:{pulling:"Pull to refresh...",loosing:"Loose to refresh..."},vanSubmitBar:{label:"Total:"},vanCoupon:{unlimited:"Unlimited",discount:e=>`${e*10}% off`,condition:e=>`At least ${e}`},vanCouponCell:{title:"Coupon",count:e=>`You have ${e} coupons`},vanCouponList:{exchange:"Exchange",close:"Close",enable:"Available",disabled:"Unavailable",placeholder:"Coupon code"},vanAddressEdit:{area:"Area",postal:"Postal",areaEmpty:"Please select a receiving area",addressEmpty:"Address can not be empty",postalEmpty:"Wrong postal code",addressDetail:"Address",defaultAddress:"Set as the default address"},vanAddressList:{add:"Add new address"}};function _e(){m.add({"en-US":Ie}),window.vueRouter&&window.vueRouter.afterEach(e=>{const{lang:n}=e.meta||{};n&&m.use(n)}),m.add({"zh-CN":{add:"\u589E\u52A0",red:"\u7EA2\u8272",tab:"\u6807\u7B7E",tag:"\u6807\u7B7E",desc:"\u63CF\u8FF0\u4FE1\u606F",back:"\u8FD4\u56DE",title:"\u6807\u9898",status:"\u72B6\u6001",button:"\u6309\u94AE",option:"\u9009\u9879",search:"\u641C\u7D22",orange:"\u6A59\u8272",yellow:"\u9EC4\u8272",purple:"\u7D2B\u8272",custom:"\u81EA\u5B9A\u4E49",content:"\u5185\u5BB9",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",decrease:"\u51CF\u5C11",disabled:"\u7981\u7528\u72B6\u6001",uneditable:"\u4E0D\u53EF\u7F16\u8F91",basicUsage:"\u57FA\u7840\u7528\u6CD5",advancedUsage:"\u9AD8\u7EA7\u7528\u6CD5",loadingStatus:"\u52A0\u8F7D\u72B6\u6001"},"en-US":{add:"Add",red:"Red",tab:"Tab",tag:"Tag",desc:"Description",back:"Back",title:"Title",status:"Status",button:"Button",option:"Option",search:"Search",orange:"Orange",yellow:"Yellow",purple:"Purple",custom:"Custom",content:"Content",username:"Username",password:"Password",decrease:"Decrease",disabled:"Disabled",uneditable:"Uneditable",basicUsage:"Basic Usage",advancedUsage:"Advanced Usage",loadingStatus:"Loading"}})}_e();let je=0;function Cn(e){const n=`demo-i18n-${je++}`;if(e){const t={},u=Q(n);Object.keys(e).forEach(o=>{t[o]={[u]:e[o]}}),m.add(t)}return ee(n)}export{gn as A,sn as B,be as C,nn as D,En as E,fn as F,qe as G,de as H,L as I,un as J,v as K,Be as L,Xe as M,Se as N,cn as O,an as P,xe as Q,en as R,Ze as S,ie as T,Te as U,hn as V,mn as W,Ge as X,Qe as Y,p as Z,Cn as a,Ke as b,vn as c,q as d,He as e,K as f,Q as g,w as h,S as i,Ae as j,pn as k,rn as l,we as m,ge as n,Ee as o,Ve as p,dn as q,tn as r,Ye as s,ln as t,Je as u,on as v,F as w,G as x,ye as y,We as z};
