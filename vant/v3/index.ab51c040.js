import{c as y,a as L}from"./use-translate.fbf36f21.js";import{m as B,c as T,t as F,w as D}from"./with-install.251697cd.js";import{I as E}from"./index.f1bbf430.js";import{B as A}from"./index.16d2686f.js";import{z as v,e as t,D as I,r as N,o as V,a as P,w as c,B as e,h as _,t as d,d as w,F as U}from"./vue-libs.bf80eadf.js";import{C as z}from"./index.fb1f7cb4.js";import{T as S}from"./function-call.a70e3069.js";import"./constant.80c6de18.js";import"./use-route.9fd68ea8.js";import"./index.d99a07cf.js";import"./use-expose.8d47dba2.js";import"./Checker.9f9fefc2.js";import"./mount-component.985a4079.js";import"./index.b25dcbf6.js";import"./interceptor.12fa8767.js";import"./use-touch.9de12470.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.c2caac4e.js";const[$,o,j]=y("submit-bar"),q={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:B("\xA5"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:B("danger"),buttonColor:String,suffixLabel:String,decimalLength:T(2),safeAreaInsetBottom:F};var G=v({name:$,props:q,emits:["submit"],setup(a,{emit:i,slots:n}){const l=()=>{const{price:u,label:r,currency:m,textAlign:C,suffixLabel:k,decimalLength:x}=a;if(typeof u=="number"){const g=(u/100).toFixed(+x).split("."),h=x?`.${g[1]}`:"";return t("div",{class:o("text"),style:{textAlign:C}},[t("span",null,[r||j("label")]),t("span",{class:o("price")},[m,t("span",{class:o("price-integer")},[g[0]]),h]),k&&t("span",{class:o("suffix-label")},[k])])}},b=()=>{var m;const{tip:u,tipIcon:r}=a;if(n.tip||u)return t("div",{class:o("tip")},[r&&t(E,{class:o("tip-icon"),name:r},null),u&&t("span",{class:o("tip-text")},[u]),(m=n.tip)==null?void 0:m.call(n)])},f=()=>i("submit"),s=()=>n.button?n.button():t(A,{round:!0,type:a.buttonType,text:a.buttonText,class:o("button",a.buttonType),color:a.buttonColor,loading:a.loading,disabled:a.disabled,onClick:f},null);return()=>{var u,r;return t("div",{class:[o(),{"van-safe-area-bottom":a.safeAreaInsetBottom}]},[(u=n.top)==null?void 0:u.call(n),b(),t("div",{class:o("bar")},[(r=n.default)==null?void 0:r.call(n),l(),s()])])}}});const p=D(G);const ct=v({setup(a){const i=L({"zh-CN":{tip1:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001",tip2:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001, ",tip3:"\u4FEE\u6539\u5730\u5740",check:"\u5168\u9009",submit:"\u63D0\u4EA4\u8BA2\u5355",clickLink:"\u4FEE\u6539\u5730\u5740",clickButton:"\u70B9\u51FB\u6309\u94AE"},"en-US":{tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",submit:"Submit",clickLink:"Click Link",clickButton:"Submit"}}),n=I(!0),l=()=>S(i("clickButton")),b=()=>S(i("clickLink"));return(f,s)=>{const u=N("demo-block");return V(),P(U,null,[t(u,{title:e(i)("basicUsage")},{default:c(()=>[t(e(p),{price:3050,"button-text":e(i)("submit"),onSubmit:l},null,8,["button-text"])]),_:1},8,["title"]),t(u,{title:e(i)("disabled")},{default:c(()=>[t(e(p),{disabled:"",price:3050,"button-text":e(i)("submit"),tip:e(i)("tip1"),"tip-icon":"info-o",onSubmit:l},null,8,["button-text","tip"])]),_:1},8,["title"]),t(u,{title:e(i)("loadingStatus")},{default:c(()=>[t(e(p),{loading:"",price:3050,"button-text":e(i)("submit"),onSubmit:l},null,8,["button-text"])]),_:1},8,["title"]),t(u,{title:e(i)("advancedUsage")},{default:c(()=>[t(e(p),{price:3050,"button-text":e(i)("submit"),onSubmit:l},{tip:c(()=>[_(d(e(i)("tip2"))+" ",1),w("span",{class:"edit-address",onClick:b},d(e(i)("tip3")),1)]),default:c(()=>[t(e(z),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=r=>n.value=r)},{default:c(()=>[_(d(e(i)("check")),1)]),_:1},8,["modelValue"])]),_:1},8,["button-text"])]),_:1},8,["title"])],64)}}});export{ct as default};
