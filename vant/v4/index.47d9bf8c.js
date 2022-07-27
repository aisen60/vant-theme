import{V as E}from"./index.3ad47284.js";import{V as m}from"./index.3a3bc210.js";import{V as D}from"./index.e0cc520d.js";import{V as S}from"./index.073943e5.js";import{a as U}from"./use-translate.c56bc05e.js";import{A as f,x as d,r as A,o as k,c as P,w as r,e as a,C as e,d as $,h,t as x,a as F,F as w}from"./vue-libs.a3cd7f61.js";import{a as z,c as G}from"./index.650d8a76.js";import{c as R}from"./index.e41a59ee.js";import{V as L}from"./index.05e524fd.js";import{V as M,b as T}from"./index.9493bff2.js";import{V as j}from"./index.5b8e3247.js";import{V as H}from"./index.02f79831.js";import{V as I}from"./index.f9af5d26.js";import{V as B}from"./index.1a0d957d.js";import{V as J}from"./index.27110336.js";import{V as K}from"./index.74690a9d.js";import{b as O,V as Q}from"./index.esm.e6fb2015.js";import{V as q}from"./index.fd46e6ae.js";import{a as W}from"./area-en.bc1aa920.js";import{V as X}from"./index.2fa5c196.js";import{b as N}from"./data.557ab6e4.js";import{V as Y}from"./index.2fddb9da.js";import{V as Z}from"./index.b491ea00.js";import"./with-install.2d06a5b3.js";import"./constant.80c6de18.js";import"./use-expose.2dad0d8e.js";import"./index.5e3bace1.js";import"./use-route.7a9317f3.js";import"./index.e7e14384.js";import"./use-id.5b8801cd.js";import"./index.1fe53b6c.js";import"./mount-component.2ea251e1.js";import"./use-refs.a0fe18f0.js";import"./use-touch.196fce0c.js";import"./Checker.4b68c47b.js";import"./interceptor.7caa5e9a.js";import"./index.883b1ed6.js";import"./index.3ccbda83.js";import"./on-popup-reopen.a53db14c.js";import"./index.4e7a9b44.js";import"./Picker.3cea1bed.js";import"./use-lazy-render.4c81c593.js";import"./index.a0b9e7c8.js";import"./utils.f27d08ae.js";import"./use-height.b399722c.js";const ee={style:{margin:"16px 16px 0"}},le=f({__name:"BasicUsage",setup(C){const l=U({"zh-CN":{submit:"\u63D0\u4EA4",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",requireUsername:"\u8BF7\u586B\u5199\u7528\u6237\u540D",requirePassword:"\u8BF7\u586B\u5199\u5BC6\u7801"},"en-US":{submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required"}}),n=d(""),u=d(""),c=i=>{console.log("submit",i)},b=i=>{console.log("failed",i)};return(i,o)=>{const s=A("demo-block");return k(),P(s,{title:e(l)("basicUsage")},{default:r(()=>[a(e(E),{onSubmit:c,onFailed:b},{default:r(()=>[a(e(S),{inset:""},{default:r(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=v=>n.value=v),name:"username",label:e(l)("username"),rules:[{required:!0,message:e(l)("requireUsername")}],placeholder:e(l)("username")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=v=>u.value=v),type:"password",name:"password",label:e(l)("password"),rules:[{required:!0,message:e(l)("requirePassword")}],placeholder:e(l)("password")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),$("div",ee,[a(e(D),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[h(x(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ae={style:{margin:"16px 16px 0"}},oe=f({__name:"ValidateRules",setup(C){const l=U({"zh-CN":{label:"\u6587\u672C",title:"\u6821\u9A8C\u89C4\u5219",submit:"\u63D0\u4EA4",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9",invalid:t=>`${t} \u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`,pattern:"\u6B63\u5219\u6821\u9A8C",validator:"\u51FD\u6570\u6821\u9A8C",validating:"\u9A8C\u8BC1\u4E2D...",asyncValidator:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",validatorMessage:"\u6821\u9A8C\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u63D0\u793A"},"en-US":{label:"Label",title:"Validate Rules",submit:"Submit",message:"Error message",invalid:t=>`${t} is invalid`,pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",validatorMessage:"Use validator to return message"}}),n=d(""),u=d(""),c=d("abc"),b=d(""),i=/\d{6}/,o=t=>/1\d{10}/.test(t),s=t=>l("invalid",t),v=t=>new Promise(V=>{z(l("validating")),setTimeout(()=>{G(),V(t==="1234")},1e3)}),g=t=>{console.log("submit",t)},y=t=>{console.log("failed",t)};return(t,V)=>{const p=A("demo-block");return k(),P(p,{title:e(l)("title")},{default:r(()=>[a(e(E),{onSumbit:g,onFailed:y},{default:r(()=>[a(e(S),{inset:""},{default:r(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":V[0]||(V[0]=_=>n.value=_),name:"pattern",label:e(l)("label"),rules:[{pattern:i,message:e(l)("message")}],placeholder:e(l)("pattern")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":V[1]||(V[1]=_=>u.value=_),name:"validator",label:e(l)("label"),rules:[{validator:o,message:e(l)("message")}],placeholder:e(l)("validator")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:c.value,"onUpdate:modelValue":V[2]||(V[2]=_=>c.value=_),name:"validatorMessage",label:e(l)("label"),rules:[{validator:s}],placeholder:e(l)("validatorMessage")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:b.value,"onUpdate:modelValue":V[3]||(V[3]=_=>b.value=_),name:"asyncValidator",label:e(l)("label"),rules:[{validator:v,message:e(l)("message")}],placeholder:e(l)("asyncValidator")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),$("div",ae,[a(e(D),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[h(x(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ue=f({__name:"FieldTypeArea",setup(C){const l=U({"zh-CN":{picker:"\u5730\u533A\u9009\u62E9",areaList:O,placeholder:"\u70B9\u51FB\u9009\u62E9\u7701\u5E02\u533A"},"en-US":{picker:"Area Picker",areaList:W,placeholder:"Select area"}}),n=d(""),u=d(!1),c=({selectedOptions:i})=>{n.value=i.map(o=>o.text).join("/"),u.value=!1},b=()=>{u.value=!1};return(i,o)=>(k(),F(w,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"area",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(Q),{"area-list":e(l)("areaList"),onConfirm:c,onCancel:b},null,8,["area-list"])]),_:1},8,["show"])],64))}}),te=f({__name:"FieldTypePicker",setup(C){const l=U({"zh-CN":{picker:"\u9009\u62E9\u5668",placeholder:"\u70B9\u51FB\u9009\u62E9\u57CE\u5E02",textColumns:N["zh-CN"]},"en-US":{picker:"Picker",placeholder:"Select city",textColumns:N["en-US"]}}),n=d(""),u=d(!1),c=({selectedOptions:i})=>{var o;n.value=((o=i[0])==null?void 0:o.text)||"",u.value=!1},b=()=>{u.value=!1};return(i,o)=>(k(),F(w,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"picker",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(X),{columns:e(l)("textColumns"),onConfirm:c,onCancel:b},null,8,["columns"])]),_:1},8,["show"])],64))}}),re=f({__name:"FieldTypeCalendar",setup(C){const l=U({"zh-CN":{calendar:"\u65E5\u5386",placeholder:"\u70B9\u51FB\u9009\u62E9\u65E5\u671F"},"en-US":{calendar:"Calendar",placeholder:"Select date"}}),n=d(""),u=d(!1),c=i=>`${i.getMonth()+1}/${i.getDate()}`,b=i=>{n.value=c(i),u.value=!1};return(i,o)=>(k(),F(w,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"calendar",label:e(l)("calendar"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(Y),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",teleport:"body",onConfirm:b},null,8,["show"])],64))}}),se=f({__name:"FieldTypeDatePicker",setup(C){const l=U({"zh-CN":{label:"\u65F6\u95F4\u9009\u62E9",placeholder:"\u70B9\u51FB\u9009\u62E9\u65F6\u95F4"},"en-US":{label:"Datetime Picker",placeholder:"Select time"}}),n=d(""),u=d(!1),c=({selectedValues:i})=>{n.value=i.join("/"),u.value=!1},b=()=>{u.value=!1};return(i,o)=>(k(),F(w,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"datePicker",label:e(l)("label"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(Z),{onConfirm:c,onCancel:b})]),_:1},8,["show"])],64))}}),ne={style:{margin:"16px 16px 0"}},ie=f({__name:"FieldType",setup(C){const l=U({"zh-CN":{rate:"\u8BC4\u5206",radio:"\u5355\u9009\u6846",submit:"\u63D0\u4EA4",switch:"\u5F00\u5173",slider:"\u6ED1\u5757",picker:"\u9009\u62E9\u5668",stepper:"\u6B65\u8FDB\u5668",checkbox:"\u590D\u9009\u6846",uploader:"\u6587\u4EF6\u4E0A\u4F20",fieldType:"\u8868\u5355\u9879\u7C7B\u578B",checkboxGroup:"\u590D\u9009\u6846\u7EC4",requireCheckbox:"\u8BF7\u52FE\u9009\u590D\u9009\u6846"},"en-US":{rate:"Rate",radio:"Radio",submit:"Submit",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",fieldType:"Field Type",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required"}}),n=d(3),u=d("1"),c=d(50),b=d(1),i=d([{url:R("leaf.jpeg")}]),o=d(!1),s=d([]),v=d(!1),g=y=>{console.log(y)};return(y,t)=>{const V=A("demo-block");return k(),P(V,{title:e(l)("fieldType")},{default:r(()=>[a(e(E),{onSubmit:g},{default:r(()=>[a(e(S),{inset:""},{default:r(()=>[a(e(m),{name:"switch",label:e(l)("switch")},{input:r(()=>[a(e(H),{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=p=>v.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkbox",label:e(l)("checkbox")},{input:r(()=>[a(e(B),{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=p=>o.value=p),shape:"square"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkboxGroup",label:e(l)("checkboxGroup")},{input:r(()=>[a(e(K),{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=p=>s.value=p),direction:"horizontal"},{default:r(()=>[a(e(B),{name:"1",shape:"square"},{default:r(()=>[h(x(e(l)("checkbox"))+" 1 ",1)]),_:1}),a(e(B),{name:"2",shape:"square"},{default:r(()=>[h(x(e(l)("checkbox"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"radio",label:e(l)("radio")},{input:r(()=>[a(e(M),{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=p=>u.value=p),direction:"horizontal"},{default:r(()=>[a(e(T),{name:"1"},{default:r(()=>[h(x(e(l)("radio"))+" 1",1)]),_:1}),a(e(T),{name:"2"},{default:r(()=>[h(x(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"stepper",label:e(l)("stepper")},{input:r(()=>[a(e(I),{modelValue:b.value,"onUpdate:modelValue":t[4]||(t[4]=p=>b.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"rate",label:e(l)("rate")},{input:r(()=>[a(e(L),{modelValue:n.value,"onUpdate:modelValue":t[5]||(t[5]=p=>n.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"slider",label:e(l)("slider")},{input:r(()=>[a(e(j),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=p=>c.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"uploader",label:e(l)("uploader")},{input:r(()=>[a(e(J),{modelValue:i.value,"onUpdate:modelValue":t[7]||(t[7]=p=>i.value=p),"max-count":"2"},null,8,["modelValue"])]),_:1},8,["label"]),a(te),a(se),a(ue),a(re)]),_:1}),$("div",ne,[a(e(D),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[h(x(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ll=f({__name:"index",setup(C){return(l,n)=>(k(),F(w,null,[a(le),a(oe),a(ie)],64))}});export{ll as default};
