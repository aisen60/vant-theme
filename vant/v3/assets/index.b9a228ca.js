import{c as o,n as l,m as u,e as m,j as d,g as f}from"./use-translate.39547e32.js";import{w as p}from"./with-install.cc9696bc.js";import{e as n,z as S,C as g}from"./vue-libs.71fdcafc.js";const[x,a]=o("loading"),v=Array(12).fill(null).map((e,r)=>n("i",{class:a("line",String(r+1))},null)),y=n("svg",{class:a("circular"),viewBox:"25 25 50 50"},[n("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]);var z=S({name:x,props:{size:l,type:u("circular"),color:String,vertical:Boolean,textSize:l,textColor:String},setup(e,{slots:r}){const s=g(()=>m({color:e.color},d(e.size))),c=()=>{var t;if(r.default)return n("span",{class:a("text"),style:{fontSize:f(e.textSize),color:(t=e.textColor)!=null?t:e.color}},[r.default()])};return()=>{const{type:t,vertical:i}=e;return n("div",{class:a([t,{vertical:i}])},[n("span",{class:a("spinner",t),style:s.value},[t==="spinner"?v:y]),c()])}}});const b=p(z);export{b as L};
