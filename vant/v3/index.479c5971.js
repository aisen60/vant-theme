import{c as m}from"./use-translate.82d1675a.js";import{t as c,w as s}from"./with-install.1e1e6f3a.js";import{b as u}from"./constant.80c6de18.js";import{z as d,e as r,A as f,F as p}from"./vue-libs.d483629c.js";const[b,a]=m("cell-group"),g={title:String,inset:Boolean,border:c};var C=d({name:b,inheritAttrs:!1,props:g,setup(e,{slots:t,attrs:l}){const i=()=>{var n;return r("div",f({class:[a({inset:e.inset}),{[u]:e.border&&!e.inset}]},l),[(n=t.default)==null?void 0:n.call(t)])},o=()=>r("div",{class:a("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(p,null,[o(),i()]):i()}});const h=s(C);export{h as C};
