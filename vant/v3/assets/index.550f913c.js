import{e,t as l,u as i,i as t}from"./use-translate.b583725c.js";import{c as r,w as a}from"./with-install.62f47d2f.js";import{r as s,u as n}from"./use-route.3fda2186.js";import{I as o}from"./index.3af24151.js";import{A as c,e as u}from"./vendor.ef334a89.js";const[b,d]=r("cell"),f={icon:String,size:String,title:[Number,String],value:[Number,String],label:[Number,String],center:Boolean,isLink:Boolean,border:l,required:Boolean,iconPrefix:String,valueClass:i,labelClass:i,titleClass:i,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}};const v=a(c({name:b,props:e({},f,s),setup(e,{slots:l}){const i=n(),r=()=>{if(l.label||t(e.label))return u("div",{class:[d("label"),e.labelClass]},[l.label?l.label():e.label])},a=()=>{if(l.title||t(e.title))return u("div",{class:[d("title"),e.titleClass],style:e.titleStyle},[l.title?l.title():u("span",null,[e.title]),r()])},s=()=>{const i=l.value||l.default;if(i||t(e.value)){const r=l.title||t(e.title);return u("div",{class:[d("value",{alone:!r}),e.valueClass]},[i?i():u("span",null,[e.value])])}},c=()=>{if(l["right-icon"])return l["right-icon"]();if(e.isLink){const l=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return u(o,{name:l,class:d("right-icon")},null)}};return()=>{var t,r;const{size:n,center:b,border:f,isLink:v,required:m}=e,p=null!=(t=e.clickable)?t:v,g={center:b,required:m,clickable:p,borderless:!f};return n&&(g[n]=!!n),u("div",{class:d(g),role:p?"button":void 0,tabindex:p?0:void 0,onClick:i},[l.icon?l.icon():e.icon?u(o,{name:e.icon,class:d("left-icon"),classPrefix:e.iconPrefix},null):void 0,a(),s(),c(),null==(r=l.extra)?void 0:r.call(l)])}}}));export{v as C,f as c};