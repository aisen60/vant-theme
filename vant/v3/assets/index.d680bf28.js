import{c as b,b as k,h as g,e as N,u as q}from"./use-translate.a3af5295.js";import{t as x,n as f,c as z,w as P}from"./with-install.1b1f1c54.js";import{c as O,d as T}from"./constant.80c6de18.js";import{z as p,e as i,C as v,A as _}from"./vue-libs.6d5ed635.js";import{r as w,u as D}from"./use-route.c058a8b7.js";import{B as E,I as V}from"./index.97c885c5.js";const[h,$]=b("grid"),A={square:Boolean,center:x,border:x,gutter:f,reverse:Boolean,iconSize:f,direction:String,clickable:Boolean,columnNum:z(4)},S=Symbol(h);var K=p({name:h,props:A,setup(e,{slots:t}){const{linkChildren:o}=k(S);return o({props:e}),()=>{var s;return i("div",{style:{paddingLeft:g(e.gutter)},class:[$(),{[O]:e.border&&!e.gutter}]},[(s=t.default)==null?void 0:s.call(t)])}}});const X=P(K),[L,l]=b("grid-item"),U=N({},w,{dot:Boolean,text:String,icon:String,badge:f,iconColor:String,iconPrefix:String,badgeProps:Object});var Y=p({name:L,props:U,setup(e,{slots:t}){const{parent:o,index:s}=q(S),B=D();if(!o)return;const C=v(()=>{const{square:c,gutter:r,columnNum:n}=o.props,d=`${100/+n}%`,a={flexBasis:d};if(c)a.paddingTop=d;else if(r){const u=g(r);a.paddingRight=u,s.value>=n&&(a.marginTop=u)}return a}),I=v(()=>{const{square:c,gutter:r}=o.props;if(c&&r){const n=g(r);return{right:n,bottom:n,height:"auto"}}}),j=()=>{if(t.icon)return i(E,_({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon});if(e.icon)return i(V,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:l("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null)},y=()=>{if(t.text)return t.text();if(e.text)return i("span",{class:l("text")},[e.text])},R=()=>t.default?t.default():[j(),y()];return()=>{const{center:c,border:r,square:n,gutter:d,reverse:a,direction:u,clickable:m}=o.props,G=[l("content",[u,{center:c,square:n,reverse:a,clickable:m,surround:r&&d}]),{[T]:r}];return i("div",{class:[l({square:n})],style:C.value},[i("div",{role:m?"button":void 0,class:G,style:I.value,tabindex:m?0:void 0,onClick:B},[R()])])}}});const Z=P(Y);export{X as G,Z as a};
