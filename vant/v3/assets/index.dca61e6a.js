import{c as r,b as g,e as h,u as j}from"./use-translate.a3af5295.js";import{t as C,w as i}from"./with-install.1b1f1c54.js";import{z as c,e as u,C as l}from"./vue-libs.6d5ed635.js";import{u as P}from"./use-expose.b6cf8b20.js";import{r as S,u as y}from"./use-route.c058a8b7.js";import{B as I}from"./index.06f314c1.js";const[p,_]=r("action-bar"),d=Symbol(p),w={safeAreaInsetBottom:C};var N=c({name:p,props:w,setup(a,{slots:o}){const{linkChildren:n}=g(d);return n(),()=>{var e;return u("div",{class:[_(),{"van-safe-area-bottom":a.safeAreaInsetBottom}]},[(e=o.default)==null?void 0:e.call(o)])}}});const V=i(N),[k,z]=r("action-bar-button"),E=h({},S,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var R=c({name:k,props:E,setup(a,{slots:o}){const n=y(),{parent:e,index:s}=j(d),m=l(()=>{if(e){const t=e.children[s.value-1];return!(t&&"isButton"in t)}}),f=l(()=>{if(e){const t=e.children[s.value+1];return!(t&&"isButton"in t)}});return P({isButton:!0}),()=>{const{type:t,icon:B,text:b,color:v,loading:x,disabled:A}=a;return u(I,{class:z([t,{last:f.value,first:m.value}]),size:"large",type:t,icon:B,color:v,loading:x,disabled:A,onClick:n},{default:()=>[o.default?o.default():b]})}}});const Y=i(R);export{d as A,V as a,Y as b};