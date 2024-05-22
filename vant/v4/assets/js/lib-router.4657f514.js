/*! For license information please see lib-router.4657f514.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["2118"],{42680:function(e,t,n){"use strict";n.d(t,{p7:function(){return eP},r5:function(){return Y}});var r,l,o,a,i,u,c=n("80681"),s=n("11848");let f="undefined"!=typeof document,p=Object.assign;function h(e,t){let n={};for(let r in t){let l=t[r];n[r]=m(l)?l.map(e):e(l)}return n}let d=()=>{},m=Array.isArray,g=/#/g,v=/&/g,y=/\//g,b=/=/g,w=/\?/g,E=/\+/g,k=/%5B/g,O=/%5D/g,R=/%5E/g,C=/%60/g,P=/%7B/g,S=/%7C/g,x=/%7D/g,j=/%20/g;function $(e){return encodeURI(""+e).replace(S,"|").replace(k,"[").replace(O,"]")}function q(e){return $(e).replace(E,"%2B").replace(j,"+").replace(g,"%23").replace(v,"%26").replace(C,"`").replace(P,"{").replace(x,"}").replace(R,"^")}function F(e){return null==e?"":$(e).replace(g,"%23").replace(w,"%3F").replace(y,"%2F")}function A(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}let M=/\/$/,U=e=>e.replace(M,"");function L(e,t,n="/"){let r,l={},o="",a="",i=t.indexOf("#"),u=t.indexOf("?");return i<u&&i>=0&&(u=-1),u>-1&&(r=t.slice(0,u),l=e(o=t.slice(u+1,i>-1?i:t.length))),i>-1&&(r=r||t.slice(0,i),a=t.slice(i,t.length)),{fullPath:(r=function(e,t){let n,r;if(e.startsWith("/"))return e;if(!e)return t;let l=t.split("/"),o=e.split("/"),a=o[o.length-1];(".."===a||"."===a)&&o.push("");let i=l.length-1;for(n=0;n<o.length;n++)if("."!==(r=o[n])){if(".."===r)i>1&&i--;else break}return l.slice(0,i).join("/")+"/"+o.slice(n).join("/")}(null!=r?r:t,n))+(o&&"?")+o+a,path:r,query:l,hash:A(a)}}function B(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!function(e,t){return m(e)?I(e,t):m(t)?I(t,e):e===t}(e[n],t[n]))return!1;return!0}function I(e,t){return m(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}(r=a||(a={})).pop="pop",r.push="push",(l=i||(i={})).back="back",l.forward="forward",l.unknown="";let W=/^[^#]+#/;function D(e,t){return e.replace(W,"#")+t}let J=()=>({left:window.scrollX,top:window.scrollY});function T(e,t){return(history.state?history.state.position-t:-1)+e}let V=new Map,z=()=>location.protocol+"//"+location.host;function H(e,t){let{pathname:n,search:r,hash:l}=t,o=e.indexOf("#");if(o>-1){let t=l.includes(e.slice(o))?e.slice(o).length:1,n=l.slice(t);return"/"!==n[0]&&(n="/"+n),B(n,"")}return B(n,e)+r+l}function K(e,t,n,r=!1,l=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:l?J():null}}function Y(e){return!(e=location.host?e||location.pathname+location.search:"").includes("#")&&(e+="#"),function(e){let t=function(e){let{history:t,location:n}=window,r={value:H(e,n)},l={value:t.state};function o(r,o,a){let i=e.indexOf("#"),u=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+r:z()+e+r;try{t[a?"replaceState":"pushState"](o,"",u),l.value=o}catch(e){console.error(e),n[a?"replace":"assign"](u)}}return!l.value&&o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:l,push:function(e,n){let a=p({},l.value,t.state,{forward:e,scroll:J()});o(a.current,a,!0);let i=p({},K(r.value,e,null),{position:a.position+1},n);o(e,i,!1),r.value=e},replace:function(e,n){let a=p({},t.state,K(l.value.back,e,l.value.forward,!0),n,{position:l.value.position});o(e,a,!0),r.value=e}}}(e=function(e){if(!e){if(f){let t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/"}return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),U(e)}(e)),n=function(e,t,n,r){let l=[],o=[],u=null,c=({state:o})=>{let c=H(e,location),s=n.value,f=t.value,p=0;if(o){if(n.value=c,t.value=o,u&&u===s){u=null;return}p=f?o.position-f.position:0}else r(c);l.forEach(e=>{e(n.value,s,{delta:p,type:a.pop,direction:p?p>0?i.forward:i.back:i.unknown})})};function s(){let{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:J()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:function(){u=n.value},listen:function(e){l.push(e);let t=()=>{let t=l.indexOf(e);t>-1&&l.splice(t,1)};return o.push(t),t},destroy:function(){for(let e of o)e();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",s)}}}(e,t.state,t.location,t.replace),r=p({location:"",base:e,go:function(e,t=!0){!t&&n.pauseListeners(),history.go(e)},createHref:D.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(e)}function X(e){return"string"==typeof e||"symbol"==typeof e}let Z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Q=Symbol("");function N(e,t){return p(Error(),{type:e,[Q]:!0},t)}function ee(e,t){return e instanceof Error&&Q in e&&(null==t||!!(e.type&t))}(o=u||(u={}))[o.aborted=4]="aborted",o[o.cancelled=8]="cancelled",o[o.duplicated=16]="duplicated";let et="[^/]+?",en={sensitive:!1,strict:!1,start:!0,end:!0},er=/[.+*?^${}()[\]/\\]/g;function el(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}let eo={type:0,value:""},ea=/[a-zA-Z0-9_]/;function ei(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function eu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ec(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}function es(e){let t={};if(""===e||"?"===e)return t;let n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){let r=n[e].replace(E," "),l=r.indexOf("="),o=A(l<0?r:r.slice(0,l)),a=l<0?null:A(r.slice(l+1));if(o in t){let e=t[o];!m(e)&&(e=t[o]=[e]),e.push(a)}else t[o]=a}return t}function ef(e){let t="";for(let n in e){let r=e[n];if(n=q(n).replace(b,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(m(r)?r.map(e=>e&&q(e)):[r&&q(r)]).forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}let ep=Symbol(""),eh=Symbol(""),ed=Symbol(""),em=Symbol(""),eg=Symbol("");function ev(){let e=[];return{add:function(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function ey(e,t,n,r,l,o=e=>e()){let a=r&&(r.enterCallbacks[l]=r.enterCallbacks[l]||[]);return()=>new Promise((i,u)=>{let c=e=>{if(!1===e)u(N(4,{from:n,to:t}));else if(e instanceof Error)u(e);else{var o;if("string"==typeof(o=e)||o&&"object"==typeof o)u(N(2,{from:t,to:e}));else a&&r.enterCallbacks[l]===a&&"function"==typeof e&&a.push(e),i()}},s=Promise.resolve(o(()=>e.call(r&&r.instances[l],t,n,c)));e.length<3&&(s=s.then(c)),s.catch(e=>u(e))})}function eb(e,t,n,r,l=e=>e()){let o=[];for(let a of e)for(let e in a.components){let i=a.components[e];if("beforeRouteEnter"===t||a.instances[e]){if(function(e){return"object"==typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}(i)){let u=(i.__vccOpts||i)[t];u&&o.push(ey(u,n,r,a,e,l))}else{let u=i();o.push(()=>u.then(o=>{var i;if(!o)return Promise.reject(Error(`Couldn't resolve component "${e}" at "${a.path}"`));let u=(i=o).__esModule||"Module"===i[Symbol.toStringTag]?o.default:o;a.components[e]=u;let c=(u.__vccOpts||u)[t];return c&&ey(c,n,r,a,e,l)()}))}}}return o}function ew(e){let t=(0,c.f3)(ed),n=(0,c.f3)(em),r=(0,c.Fl)(()=>{let n=(0,s.SU)(e.to);return t.resolve(n)}),l=(0,c.Fl)(()=>{let{matched:e}=r.value,{length:t}=e,l=e[t-1],o=n.matched;if(!l||!o.length)return -1;let a=o.findIndex(G.bind(null,l));if(a>-1)return a;let i=ek(e[t-2]);return t>1&&ek(l)===i&&o[o.length-1].path!==i?o.findIndex(G.bind(null,e[t-2])):a}),o=(0,c.Fl)(()=>l.value>-1&&function(e,t){for(let n in t){let r=t[n],l=e[n];if("string"==typeof r){if(r!==l)return!1}else if(!m(l)||l.length!==r.length||r.some((e,t)=>e!==l[t]))return!1}return!0}(n.params,r.value.params)),a=(0,c.Fl)(()=>l.value>-1&&l.value===n.matched.length-1&&_(n.params,r.value.params));return{route:r,href:(0,c.Fl)(()=>r.value.href),isActive:o,isExactActive:a,navigate:function(n={}){return function(e){if(!e.metaKey&&!e.altKey&&!e.ctrlKey&&!e.shiftKey&&!e.defaultPrevented){if(void 0===e.button||0===e.button){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}}(n)?t[(0,s.SU)(e.replace)?"replace":"push"]((0,s.SU)(e.to)).catch(d):Promise.resolve()}}}let eE=(0,c.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ew,setup(e,{slots:t}){let n=(0,s.qj)(ew(e)),{options:r}=(0,c.f3)(ed),l=(0,c.Fl)(()=>({[eO(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[eO(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{let r=t.default&&t.default(n);return e.custom?r:(0,c.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},r)}}});function ek(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}let eO=(e,t,n)=>null!=e?e:null!=t?t:n,eR=(0,c.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=(0,c.f3)(eg),l=(0,c.Fl)(()=>e.route||r.value),o=(0,c.f3)(eh,0),a=(0,c.Fl)(()=>{let e,t=(0,s.SU)(o),{matched:n}=l.value;for(;(e=n[t])&&!e.components;)t++;return t}),i=(0,c.Fl)(()=>l.value.matched[a.value]);(0,c.JJ)(eh,(0,c.Fl)(()=>a.value+1)),(0,c.JJ)(ep,i),(0,c.JJ)(eg,l);let u=(0,s.iH)();return(0,c.YP)(()=>[u.value,i.value,e.name],([e,t,n],[r,l,o])=>{t&&(t.instances[n]=e,l&&l!==t&&e&&e===r&&(!t.leaveGuards.size&&(t.leaveGuards=l.leaveGuards),!t.updateGuards.size&&(t.updateGuards=l.updateGuards))),e&&t&&(!l||!G(t,l)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{let r=l.value,o=e.name,a=i.value,s=a&&a.components[o];if(!s)return eC(n.default,{Component:s,route:r});let f=a.props[o],h=f?!0===f?r.params:"function"==typeof f?f(r):f:null,d=(0,c.h)(s,p({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[o]=null)},ref:u}));return eC(n.default,{Component:d,route:r})||d}}});function eC(e,t){if(!e)return null;let n=e(t);return 1===n.length?n[0]:n}function eP(e){let t,n,r;let l=function(e,t){let n=[],r=new Map;t=ec({strict:!1,end:!0,sensitive:!1},t);function l(e,a,i){let u,c;let s=!i,f=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:function(e){let t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="object"==typeof n?n[r]:n;return t}(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);f.aliasOf=i&&i.record;let h=ec(t,e),g=[f];if("alias"in e)for(let t of"string"==typeof e.alias?[e.alias]:e.alias)g.push(p({},f,{components:i?i.record.components:f.components,path:t,aliasOf:i?i.record:f}));for(let t of g){let{path:d}=t;if(a&&"/"!==d[0]){let e=a.record.path,n="/"===e[e.length-1]?"":"/";t.path=a.record.path+(d&&n+d)}if(u=function(e,t,n){let r=function(e,t){let n=p({},en,t),r=[],l=n.start?"^":"",o=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(l+="/");for(let r=0;r<t.length;r++){let a=t[r],i=40+(n.sensitive?.25:0);if(0===a.type)!r&&(l+="/"),l+=a.value.replace(er,"\\$&"),i+=40;else if(1===a.type){let{value:e,repeatable:n,optional:u,regexp:c}=a;o.push({name:e,repeatable:n,optional:u});let s=c||et;if(s!==et){i+=10;try{RegExp(`(${s})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${s}): `+t.message)}}let f=n?`((?:${s})(?:/(?:${s}))*)`:`(${s})`;!r&&(f=u&&t.length<2?`(?:/${f})`:"/"+f),u&&(f+="?"),l+=f,i+=20,u&&(i+=-8),n&&(i+=-20),".*"===s&&(i+=-50)}e.push(i)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}!n.strict&&(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");let a=new RegExp(l,n.sensitive?"":"i");return{re:a,score:r,keys:o,parse:function(e){let t=e.match(a),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||"",l=o[e-1];n[l.name]=r&&l.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(let l of e)for(let e of((!r||!n.endsWith("/"))&&(n+="/"),r=!1,l))if(0===e.type)n+=e.value;else if(1===e.type){let{value:o,repeatable:a,optional:i}=e,u=o in t?t[o]:"";if(m(u)&&!a)throw Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);let c=m(u)?u.join("/"):u;if(!c){if(i)l.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${o}"`)}n+=c}return n||"/"}}}(function(e){let t,n;if(!e)return[[]];if("/"===e)return[[eo]];if(!e.startsWith("/"))throw Error(`Invalid path "${e}"`);function r(e){throw Error(`ERR (${l})/"${c}": ${e}`)}let l=0,o=0,a=[];function i(){t&&a.push(t),t=[]}let u=0,c="",s="";function f(){c&&(0===l?t.push({type:0,value:c}):1===l||2===l||3===l?(t.length>1&&("*"===n||"+"===n)&&r(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),t.push({type:1,value:c,regexp:s,repeatable:"*"===n||"+"===n,optional:"*"===n||"?"===n})):r("Invalid state to consume buffer"),c="")}function p(){c+=n}for(;u<e.length;){if("\\"===(n=e[u++])&&2!==l){o=l,l=4;continue}switch(l){case 0:"/"===n?(c&&f(),i()):":"===n?(f(),l=1):c+=n;break;case 4:c+=n,l=o;break;case 1:"("===n?l=2:ea.test(n)?c+=n:(f(),l=0,"*"!==n&&"?"!==n&&"+"!==n&&u--);break;case 2:")"===n?"\\"==s[s.length-1]?s=s.slice(0,-1)+n:l=3:s+=n;break;case 3:f(),l=0,"*"!==n&&"?"!==n&&"+"!==n&&u--,s="";break;default:r("Unknown state")}}return 2===l&&r(`Unfinished custom RegExp for param "${c}"`),f(),i(),a}(e.path),n),l=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}(t,a,h),i?i.alias.push(u):((c=c||u)!==u&&c.alias.push(u),s&&e.name&&!eu(u)&&o(e.name)),f.children){let e=f.children;for(let t=0;t<e.length;t++)l(e[t],u,i&&i.children[t])}i=i||u,(u.record.components&&Object.keys(u.record.components).length||u.record.name||u.record.redirect)&&function(e){let t=0;for(;t<n.length&&function(e,t){let n=0,r=e.score,l=t.score;for(;n<r.length&&n<l.length;){let e=function(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}(r[n],l[n]);if(e)return e;n++}if(1===Math.abs(l.length-r.length)){if(el(r))return 1;if(el(l))return -1}return l.length-r.length}(e,n[t])>=0&&(e.record.path!==n[t].record.path||!function e(t,n){return n.children.some(n=>n===t||e(t,n))}(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!eu(e)&&r.set(e.record.name,e)}(u)}return c?()=>{o(c)}:d}function o(e){if(X(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}return e.forEach(e=>l(e)),{addRoute:l,resolve:function(e,t){let l,o,a;let i={};if("name"in e&&e.name){if(!(l=r.get(e.name)))throw N(1,{location:e});a=l.record.name,i=p(ei(t.params,l.keys.filter(e=>!e.optional).concat(l.parent?l.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&ei(e.params,l.keys.map(e=>e.name))),o=l.stringify(i)}else if(null!=e.path)o=e.path,(l=n.find(e=>e.re.test(o)))&&(i=l.parse(o),a=l.record.name);else{if(!(l=t.name?r.get(t.name):n.find(e=>e.re.test(t.path))))throw N(1,{location:e,currentLocation:t});a=l.record.name,i=p({},t.params,e.params),o=l.stringify(i)}let u=[],c=l;for(;c;)u.unshift(c.record),c=c.parent;return{name:a,path:o,params:i,matched:u,meta:function(e){return e.reduce((e,t)=>p(e,t.meta),{})}(u)}},removeRoute:o,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}(e.routes,e),o=e.parseQuery||es,i=e.stringifyQuery||ef,u=e.history,g=ev(),v=ev(),y=ev(),b=(0,s.XI)(Z),w=Z;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");let E=h.bind(null,e=>""+e),k=h.bind(null,F),O=h.bind(null,A);function C(e,t){let n;if(t=p({},t||b.value),"string"==typeof e){let n=L(o,e,t.path),r=l.resolve({path:n.path},t),a=u.createHref(n.fullPath);return p(n,r,{params:O(r.params),hash:A(n.hash),redirectedFrom:void 0,href:a})}if(null!=e.path)n=p({},e,{path:L(o,e.path,t.path).path});else{let r=p({},e.params);for(let e in r)null==r[e]&&delete r[e];n=p({},e,{params:k(r)}),t.params=k(t.params)}let r=l.resolve(n,t),a=e.hash||"";r.params=E(O(r.params));let c=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,p({},e,{hash:$(a).replace(P,"{").replace(x,"}").replace(R,"^"),path:r.path})),s=u.createHref(c);return p({fullPath:c,hash:a,query:i===ef?function(e){let t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=m(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}(e.query):e.query||{}},r,{redirectedFrom:void 0,href:s})}function S(e){return"string"==typeof e?L(o,e,b.value.path):p({},e)}function j(e,t){if(w!==e)return N(8,{from:t,to:e})}function q(e){return U(e)}function M(e){let t=e.matched[e.matched.length-1];if(t&&t.redirect){let{redirect:n}=t,r="function"==typeof n?n(e):n;return"string"==typeof r&&((r=r.includes("?")||r.includes("#")?r=S(r):{path:r}).params={}),p({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function U(e,t){let n;let r=w=C(e),l=b.value,o=e.state,a=e.force,u=!0===e.replace,c=M(r);return c?U(p(S(c),{state:"object"==typeof c?p({},o,c.state):o,force:a,replace:u}),t||r):(r.redirectedFrom=t,!a&&function(e,t,n){let r=t.matched.length-1,l=n.matched.length-1;return r>-1&&r===l&&G(t.matched[r],n.matched[l])&&_(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,l,r)&&(n=N(16,{to:r,from:l}),ep(l,l,!0,!1)),(n?Promise.resolve(n):W(r,l)).catch(e=>ee(e)?ee(e,2)?e:Q(e):Y(e,r,l)).then(e=>{if(e){if(ee(e,2))return U(p({replace:u},S(e.to),{state:"object"==typeof e.to?p({},o,e.to.state):o,force:a}),t||r)}else e=z(r,l,!0,u,o);return D(r,l,e),e}))}function B(e,t){let n=j(e,t);return n?Promise.reject(n):Promise.resolve()}function I(e){let t=ew.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function W(e,t){let n;let[r,l,o]=function(e,t){let n=[],r=[],l=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){let o=t.matched[a];o&&(e.matched.find(e=>G(e,o))?r.push(o):n.push(o));let i=e.matched[a];i&&!t.matched.find(e=>G(e,i))&&l.push(i)}return[n,r,l]}(e,t);for(let l of(n=eb(r.reverse(),"beforeRouteLeave",e,t),r))l.leaveGuards.forEach(r=>{n.push(ey(r,e,t))});let a=B.bind(null,e,t);return n.push(a),eO(n).then(()=>{for(let r of(n=[],g.list()))n.push(ey(r,e,t));return n.push(a),eO(n)}).then(()=>{for(let r of(n=eb(l,"beforeRouteUpdate",e,t),l))r.updateGuards.forEach(r=>{n.push(ey(r,e,t))});return n.push(a),eO(n)}).then(()=>{for(let r of(n=[],o))if(r.beforeEnter){if(m(r.beforeEnter))for(let l of r.beforeEnter)n.push(ey(l,e,t));else n.push(ey(r.beforeEnter,e,t))}return n.push(a),eO(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),(n=eb(o,"beforeRouteEnter",e,t,I)).push(a),eO(n))).then(()=>{for(let r of(n=[],v.list()))n.push(ey(r,e,t));return n.push(a),eO(n)}).catch(e=>ee(e,8)?e:Promise.reject(e))}function D(e,t,n){y.list().forEach(r=>I(()=>r(e,t,n)))}function z(e,t,n,r,l){let o=j(e,t);if(o)return o;let a=t===Z,i=f?history.state:{};n&&(r||a?u.replace(e.fullPath,p({scroll:a&&i&&i.scroll},l)):u.push(e.fullPath,l)),b.value=e,ep(e,t,n,a),Q()}let H=ev(),K=ev();function Y(e,t,n){Q(e);let r=K.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function Q(e){return!n&&(n=!e,t||(t=u.listen((e,t,n)=>{if(!ek.listening)return;let r=C(e),l=M(r);if(l){U(p(l,{replace:!0}),r).catch(d);return}w=r;let o=b.value;if(f){var i,c;i=T(o.fullPath,n.delta),c=J(),V.set(i,c)}W(r,o).catch(e=>ee(e,12)?e:ee(e,2)?(U(e.to,r).then(e=>{ee(e,20)&&!n.delta&&n.type===a.pop&&u.go(-1,!1)}).catch(d),Promise.reject()):(n.delta&&u.go(-n.delta,!1),Y(e,r,o))).then(e=>{(e=e||z(r,o,!1))&&(n.delta&&!ee(e,8)?u.go(-n.delta,!1):n.type===a.pop&&ee(e,20)&&u.go(-1,!1)),D(r,o,e)}).catch(d)})),H.list().forEach(([t,n])=>e?n(e):t()),H.reset()),e}function ep(t,n,r,l){let{scrollBehavior:o}=e;if(!f||!o)return Promise.resolve();let a=!r&&function(e){let t=V.get(e);return V.delete(e),t}(T(t.fullPath,0))||(l||!r)&&history.state&&history.state.scroll||null;return(0,c.Y3)().then(()=>o(t,n,a)).then(e=>e&&function(e){let t;if("el"in e){let n=e.el,r="string"==typeof n&&n.startsWith("#"),l="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;t=function(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}(e)).catch(e=>Y(e,t,n))}let eh=e=>u.go(e),ew=new Set,ek={currentRoute:b,listening:!0,addRoute:function(e,t){let n,r;return X(e)?(n=l.getRecordMatcher(e),r=t):r=e,l.addRoute(r,n)},removeRoute:function(e){let t=l.getRecordMatcher(e);t&&l.removeRoute(t)},hasRoute:function(e){return!!l.getRecordMatcher(e)},getRoutes:function(){return l.getRoutes().map(e=>e.record)},resolve:C,options:e,push:q,replace:function(e){return U(p(S(e),{replace:!0}))},go:eh,back:()=>eh(-1),forward:()=>eh(1),beforeEach:g.add,beforeResolve:v.add,afterEach:y.add,onError:K.add,isReady:function(){return n&&b.value!==Z?Promise.resolve():new Promise((e,t)=>{H.add([e,t])})},install(e){if(e.component("RouterLink",eE),e.component("RouterView",eR),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(b)}),f&&!r&&b.value===Z)r=!0,U(u.location).catch(e=>{});let l={};for(let e in Z)Object.defineProperty(l,e,{get:()=>b.value[e],enumerable:!0});e.provide(ed,this),e.provide(em,(0,s.Um)(l)),e.provide(eg,b);let o=e.unmount;ew.add(e),e.unmount=function(){ew.delete(e),ew.size<1&&(w=Z,t&&t(),t=null,b.value=Z,r=!1,n=!1),o()}}};function eO(e){return e.reduce((e,t)=>e.then(()=>I(t)),Promise.resolve())}return ek}}}]);