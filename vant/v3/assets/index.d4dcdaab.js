import{c as U,t as x,m as C,n as E,s as j,g as D,a as G}from"./use-translate.e667ce10.js";import{w as P}from"./with-install.feb19484.js";import{B as y,a as R}from"./constant.4d85ecb9.js";import{z as M,e as s,D as f,x as S,r as A,o as N,a as _,w as h,B as n,F as $}from"./vue-libs.1dda7261.js";import{N as T}from"./index.6ffa06cb.js";import"./use-touch.b0c07ae6.js";import"./index.ae867a8e.js";import"./index.2a9a1046.js";import"./utils.39620306.js";import"./index.904c4b4d.js";const[O,p]=U("password-input");var V=M({name:O,props:{info:String,mask:x,value:C(""),gutter:E,length:j(6),focused:Boolean,errorInfo:String},emits:["focus"],setup(v,{emit:l}){const L=e=>{e.stopPropagation(),l("focus",e)},u=()=>{const e=[],{mask:m,value:g,length:I,gutter:d,focused:b}=v;for(let r=0;r<I;r++){const k=g[r],F=r!==0&&!d,B=b&&r===g.length;let c;r!==0&&d&&(c={marginLeft:D(d)}),e.push(s("li",{class:[{[R]:F},p("item",{focus:B})],style:c},[m?s("i",{style:{visibility:k?"visible":"hidden"}},null):k,B&&s("div",{class:p("cursor")},null)]))}return e};return()=>{const e=v.errorInfo||v.info;return s("div",{class:p()},[s("ul",{class:[p("security"),{[y]:!v.gutter}],onTouchstart:L},[u()]),e&&s("div",{class:p(v.errorInfo?"error-info":"info")},[e])])}}});const w=P(V);const ee=M({setup(v){const l=G({"zh-CN":{info:"\u5BC6\u7801\u4E3A 6 \u4F4D\u6570\u5B57",showInfo:"\u63D0\u793A\u4FE1\u606F",addGutter:"\u683C\u5B50\u95F4\u8DDD",errorInfo:"\u5BC6\u7801\u9519\u8BEF",removeMask:"\u660E\u6587\u5C55\u793A",customLength:"\u81EA\u5B9A\u4E49\u957F\u5EA6"},"en-US":{info:"Some tips",showInfo:"Show Info",addGutter:"Add Gutter",errorInfo:"Password Mistake",removeMask:"Remove Mask",customLength:"Custom Length"}}),u=f({showInfo:"123",addGutter:"123",basicUsage:"123",removeMask:"123",customLength:"123"}),e=f("basicUsage"),m=f(""),g=f(),I=f(),d=f(),b=f(),r=f(),k={showInfo:g,addGutter:I,basicUsage:d,removeMask:b,customLength:r},F=c=>{if(!e.value)return;const o=e.value==="customLength"?4:6,a=(u.value[e.value]+c).slice(0,o);u.value[e.value]=a,e.value==="showInfo"&&a.length===6&&a!=="123456"&&(m.value=l("errorInfo"))},B=()=>{!e.value||(u.value[e.value]=u.value[e.value].slice(0,u.value[e.value].length-1),e.value==="showInfo"&&(m.value=""))};return S(e,c=>{if(c){const o=k[c].value;if(o){const{top:a}=o.$el.getBoundingClientRect();window.scrollTo(0,window.pageYOffset+a)}}}),(c,o)=>{const a=A("demo-block");return N(),_($,null,[s(a,{ref:(t,i)=>{i.basicUsage=t,d.value=t},title:n(l)("basicUsage")},{default:h(()=>[s(n(w),{value:u.value.basicUsage,focused:e.value==="basicUsage",onFocus:o[0]||(o[0]=t=>e.value="basicUsage")},null,8,["value","focused"])]),_:1},8,["title"]),s(a,{ref:(t,i)=>{i.customLength=t,r.value=t},title:n(l)("customLength")},{default:h(()=>[s(n(w),{value:u.value.customLength,length:4,focused:e.value==="customLength",onFocus:o[1]||(o[1]=t=>e.value="customLength")},null,8,["value","focused"])]),_:1},8,["title"]),s(a,{ref:(t,i)=>{i.addGutter=t,I.value=t},title:n(l)("addGutter")},{default:h(()=>[s(n(w),{value:u.value.addGutter,gutter:10,focused:e.value==="addGutter",onFocus:o[2]||(o[2]=t=>e.value="addGutter")},null,8,["value","focused"])]),_:1},8,["title"]),s(a,{ref:(t,i)=>{i.removeMask=t,b.value=t},title:n(l)("removeMask")},{default:h(()=>[s(n(w),{mask:!1,value:u.value.removeMask,focused:e.value==="removeMask",onFocus:o[3]||(o[3]=t=>e.value="removeMask")},null,8,["value","focused"])]),_:1},8,["title"]),s(a,{ref:(t,i)=>{i.showInfo=t,g.value=t},title:n(l)("showInfo")},{default:h(()=>[s(n(w),{info:n(l)("info"),value:u.value.showInfo,"error-info":m.value,focused:e.value==="showInfo",onFocus:o[4]||(o[4]=t=>e.value="showInfo")},null,8,["info","value","error-info","focused"])]),_:1},8,["title"]),s(n(T),{show:!!e.value,onBlur:o[5]||(o[5]=t=>e.value=null),onInput:F,onDelete:B},null,8,["show"])],64)}}});export{ee as default};
