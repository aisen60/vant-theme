import{c as _,g as x,t as h,n as g,a as k}from"./use-translate.39547e32.js";import{w as C}from"./with-install.cc9696bc.js";import{z as v,C as y,e,D as b,r as S,o as B,a as j,w as p,B as t,d as w,F}from"./vue-libs.71fdcafc.js";import{B as f}from"./index.64adedce.js";import"./constant.4d85ecb9.js";import"./use-route.913efdd2.js";import"./index.5e447543.js";import"./index.b9a228ca.js";const[P,m]=_("progress"),W={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:h,pivotColor:String,trackColor:String,strokeWidth:g,percentage:{type:g,default:0,validator:a=>a>=0&&a<=100}};var E=v({name:P,props:W,setup(a){const o=y(()=>a.inactive?"#cacaca":a.color),n=()=>{const{textColor:c,pivotText:s,pivotColor:u,percentage:r}=a,d=s!=null?s:`${r}%`;if(a.showPivot&&d){const i={color:c,left:`${+r}%`,transform:`translate(-${+r}%,-50%)`,background:u||o.value};return e("span",{style:i,class:m("pivot")},[d])}};return()=>{const{trackColor:c,percentage:s,strokeWidth:u}=a,r={background:c,height:x(u)},d={background:o.value,transform:`scaleX(${+s/100})`};return e("div",{class:m(),style:r},[e("span",{class:m("portion"),style:d},null),n()])}}});const l=C(E);const z={style:{"margin-top":"15px"}},D=v({setup(a){const o=k({"zh-CN":{title2:"\u7F6E\u7070",title3:"\u6837\u5F0F\u5B9A\u5236",strokeWidth:"\u7EBF\u6761\u7C97\u7EC6",transition:"\u8FC7\u6E21\u6548\u679C"},"en-US":{title2:"Inactive",title3:"Custom Style",strokeWidth:"Stroke Width",transition:"Transition"}}),n=b(50),c=r=>Math.min(Math.max(r,0),100),s=()=>{n.value=c(n.value+20)},u=()=>{n.value=c(n.value-20)};return(r,d)=>{const i=S("demo-block");return B(),j(F,null,[e(i,{title:t(o)("basicUsage")},{default:p(()=>[e(t(l),{percentage:50})]),_:1},8,["title"]),e(i,{title:t(o)("strokeWidth")},{default:p(()=>[e(t(l),{percentage:50,"stroke-width":"8"})]),_:1},8,["title"]),e(i,{title:t(o)("title2")},{default:p(()=>[e(t(l),{inactive:"",percentage:50})]),_:1},8,["title"]),e(i,{title:t(o)("title3")},{default:p(()=>[e(t(l),{color:"#f2826a",percentage:25,"pivot-text":t(o)("orange")},null,8,["pivot-text"]),e(t(l),{color:"#ee0a24",percentage:50,"pivot-text":t(o)("red")},null,8,["pivot-text"]),e(t(l),{percentage:75,"pivot-text":t(o)("purple"),"pivot-color":"#7232dd",color:"linear-gradient(to right, #be99ff, #7232dd)"},null,8,["pivot-text"])]),_:1},8,["title"]),e(i,{title:t(o)("transition")},{default:p(()=>[e(t(l),{inactive:"",percentage:n.value},null,8,["percentage"]),w("div",z,[e(t(f),{text:t(o)("add"),type:"primary",size:"small",onClick:s},null,8,["text"]),e(t(f),{text:t(o)("decrease"),type:"danger",size:"small",onClick:u},null,8,["text"])])]),_:1},8,["title"])],64)}}});export{D as default};
