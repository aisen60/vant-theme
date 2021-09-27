import{t,e}from"./use-translate.b583725c.js";import{c as r,w as o}from"./with-install.62f47d2f.js";import{b as s,e as n}from"./constant.4d85ecb9.js";import{a as i}from"./unit.49c29796.js";import{A as a,e as c,D as u,B as l}from"./vendor.ef334a89.js";import{u as d}from"./useChildren.a94b5b99.js";import{r as p,u as f}from"./use-route.3fda2186.js";import{B as m,I as g}from"./index.3af24151.js";import{u as b}from"./useParent.0a2f50cb.js";const[v,x]=r("grid"),S={square:Boolean,center:t,border:t,gutter:[Number,String],reverse:Boolean,iconSize:[Number,String],direction:String,clickable:Boolean,columnNum:{type:[Number,String],default:4}},j=Symbol(v);const h=o(a({name:v,props:S,setup(t,{slots:e}){const{linkChildren:r}=d(j);return r({props:t}),()=>{var r;return c("div",{style:{paddingLeft:i(t.gutter)},class:[x(),{[s]:t.border&&!t.gutter}]},[null==(r=e.default)?void 0:r.call(e)])}}}));const[y,B]=r("grid-item");const q=o(a({name:y,props:e({},p,{dot:Boolean,text:String,icon:String,badge:[Number,String],iconPrefix:String,iconColor:String}),setup(t,{slots:e}){const{parent:r,index:o}=b(j),s=f();if(!r)return;const a=u((()=>{const{square:t,gutter:e,columnNum:s}=r.props,n=100/+s+"%",a={flexBasis:n};if(t)a.paddingTop=n;else if(e){const t=i(e);a.paddingRight=t,o.value>=s&&(a.marginTop=t)}return a})),d=u((()=>{const{square:t,gutter:e}=r.props;if(t&&e){const t=i(e);return{right:t,bottom:t,height:"auto"}}})),p=()=>{if(e.icon){let r;return c(m,{dot:t.dot,content:t.badge},"function"==typeof(o=r=e.icon())||"[object Object]"===Object.prototype.toString.call(o)&&!l(o)?r:{default:()=>[r]})}var o;if(t.icon)return c(g,{dot:t.dot,name:t.icon,size:r.props.iconSize,badge:t.badge,class:B("icon"),classPrefix:t.iconPrefix,color:t.iconColor},null)};return()=>{const{center:o,border:i,square:u,gutter:l,reverse:f,direction:m,clickable:g}=r.props,b=[B("content",[m,{center:o,square:u,reverse:f,clickable:g,surround:i&&l}]),{[n]:i}];return c("div",{class:[B({square:u})],style:a.value},[c("div",{role:g?"button":void 0,class:b,style:d.value,tabindex:g?0:void 0,onClick:s},[e.default?e.default():[p(),e.text?e.text():t.text?c("span",{class:B("text")},[t.text]):void 0]])])}}}));export{h as G,q as a};