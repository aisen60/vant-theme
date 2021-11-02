import{c as b,f,e as k}from"./use-translate.b8dd01c6.js";import{t as p,n as g,c as N,w as x}from"./with-install.b43d27ad.js";import{c as q,d as z}from"./constant.80c6de18.js";import{z as P,e as i,B as v}from"./vue-libs.311a0de3.js";import{u as T}from"./useChildren.9c836bf0.js";import{r as _,u as w}from"./use-route.fbe6f823.js";import{B as D,I as E}from"./index.a6ba9341.js";import{u as O}from"./useParent.c4a91987.js";const[h,V]=b("grid"),$={square:Boolean,center:p,border:p,gutter:g,reverse:Boolean,iconSize:g,direction:String,clickable:Boolean,columnNum:N(4)},B=Symbol(h);var K=P({name:h,props:$,setup(e,{slots:t}){const{linkChildren:o}=T(B);return o({props:e}),()=>{var c;return i("div",{style:{paddingLeft:f(e.gutter)},class:[V(),{[q]:e.border&&!e.gutter}]},[(c=t.default)==null?void 0:c.call(t)])}}});const Z=x(K),[L,l]=b("grid-item"),U=k({},_,{dot:Boolean,text:String,icon:String,badge:g,iconColor:String,iconPrefix:String});var Y=P({name:L,props:U,setup(e,{slots:t}){const{parent:o,index:c}=O(B),S=w();if(!o)return;const j=v(()=>{const{square:s,gutter:r,columnNum:n}=o.props,u=`${100/+n}%`,a={flexBasis:u};if(s)a.paddingTop=u;else if(r){const d=f(r);a.paddingRight=d,c.value>=n&&(a.marginTop=d)}return a}),C=v(()=>{const{square:s,gutter:r}=o.props;if(s&&r){const n=f(r);return{right:n,bottom:n,height:"auto"}}}),I=()=>{if(t.icon)return i(D,{dot:e.dot,content:e.badge},{default:t.icon});if(e.icon)return i(E,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:l("icon"),classPrefix:e.iconPrefix,color:e.iconColor},null)},y=()=>{if(t.text)return t.text();if(e.text)return i("span",{class:l("text")},[e.text])},R=()=>t.default?t.default():[I(),y()];return()=>{const{center:s,border:r,square:n,gutter:u,reverse:a,direction:d,clickable:m}=o.props,G=[l("content",[d,{center:s,square:n,reverse:a,clickable:m,surround:r&&u}]),{[z]:r}];return i("div",{class:[l({square:n})],style:j.value},[i("div",{role:m?"button":void 0,class:G,style:C.value,tabindex:m?0:void 0,onClick:S},[R()])])}}});const ee=x(Y);export{Z as G,ee as a};