import{c as l,n as u,m,t as V,g as s,i as x,h as j,k as p}from"./use-translate.39547e32.js";import{w as y}from"./with-install.cc9696bc.js";import{z as g,C as b,e as i,L as w,M as B}from"./vue-libs.71fdcafc.js";const[_,P]=l("badge");var k=g({name:_,props:{dot:Boolean,max:u,tag:m("div"),color:String,offset:Array,content:u,showZero:V},setup(e,{slots:t}){const r=()=>{if(t.content)return!0;const{content:n,showZero:a}=e;return x(n)&&n!==""&&(a||n!==0)},o=()=>{const{dot:n,max:a,content:c}=e;if(!n&&r())return t.content?t.content():x(a)&&j(c)&&+c>a?`${a}+`:c},d=b(()=>{const n={background:e.color};if(e.offset){const[a,c]=e.offset;t.default?(n.top=s(c),typeof a=="number"?n.right=s(-a):n.right=a.startsWith("-")?a.replace("-",""):`-${a}`):(n.marginTop=s(c),n.marginLeft=s(a))}return n}),f=()=>{if(r()||e.dot)return i("div",{class:P({dot:e.dot,fixed:!!t.default}),style:d.value},[o()])};return()=>{if(t.default){const{tag:n}=e;return i(n,{class:P("wrapper")},{default:()=>[t.default(),f()]})}return f()}}});const z=y(k),[S,N]=l("config-provider"),I=Symbol(S);function O(e){const t={};return Object.keys(e).forEach(r=>{t[`--van-${p(r)}`]=e[r]}),t}var A=g({name:S,props:{tag:m("div"),themeVars:Object,iconPrefix:String},setup(e,{slots:t}){const r=b(()=>{if(e.themeVars)return O(e.themeVars)});return w(I,e),()=>i(e.tag,{class:N(),style:r.value},{default:()=>{var o;return[(o=t.default)==null?void 0:o.call(t)]}})}});const[E,$]=l("icon"),T=e=>e==null?void 0:e.includes("/");var D=g({name:E,props:{dot:Boolean,tag:m("i"),name:String,size:u,badge:u,color:String,classPrefix:String},setup(e,{slots:t}){const r=B(I,null),o=b(()=>e.classPrefix||(r==null?void 0:r.iconPrefix)||$());return()=>{const{tag:d,dot:f,name:n,size:a,badge:c,color:C}=e,v=T(n);return i(z,{dot:f,tag:d,content:c,class:[o.value,v?"":`${o.value}-${n}`],style:{color:C,fontSize:s(a)}},{default:()=>{var h;return[(h=t.default)==null?void 0:h.call(t),v&&i("img",{class:$("image"),src:n},null)]}})}}});const F=y(D);export{z as B,F as I,A as _};
