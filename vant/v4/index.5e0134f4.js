import{F as E}from"./index.433414e7.js";import{F as m}from"./index.d546301d.js";import{B as S}from"./index.84df32bd.js";import{C as D}from"./index.397bdaa2.js";import{a as _}from"./use-translate.94d81043.js";import{A as V,x as d,r as P,o as C,c as A,w as r,e as a,C as e,d as $,h as x,t as U,a as w,F}from"./vue-libs.84c45047.js";import{T as z}from"./function-call.a4a9c07c.js";import{R as T}from"./index.fffda245.js";import{a as R,R as N}from"./index.62d98190.js";import{S as M}from"./index.7079e69a.js";import{S as L}from"./index.c3cce590.js";import{S as j}from"./index.6e1921ef.js";import{C as y}from"./index.b6b78f90.js";import{U as H}from"./index.dd24da9d.js";import{C as I}from"./index.17a713b8.js";import{b as J,a as K}from"./index.esm.23c6809c.js";import{P as q}from"./index.00b48509.js";import{a as O}from"./area-en.bc1aa920.js";import{P as Q}from"./index.e68bded9.js";import{b as G}from"./data.557ab6e4.js";import{C as W}from"./index.526b5141.js";import{D as X}from"./index.9a8e61ea.js";import"./with-install.dd5596ee.js";import"./constant.80c6de18.js";import"./use-expose.771ababc.js";import"./index.b5574021.js";import"./use-route.7c55373a.js";import"./index.63869abe.js";import"./use-id.e5fd672f.js";import"./index.a750e74d.js";import"./mount-component.725b707e.js";import"./use-refs.e65104ff.js";import"./use-touch.109c1035.js";import"./Checker.99b27945.js";import"./interceptor.e76ee8d4.js";import"./function-call.839a2d23.js";import"./index.d1d9d18e.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9fd60cc9.js";import"./Picker.a386e4b2.js";import"./use-lazy-render.20e241a7.js";import"./index.9c372815.js";import"./utils.e639c14b.js";import"./use-height.f8b07716.js";const Y={style:{margin:"16px 16px 0"}},Z=V({setup(k){const l=_({"zh-CN":{submit:"\u63D0\u4EA4",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",requireUsername:"\u8BF7\u586B\u5199\u7528\u6237\u540D",requirePassword:"\u8BF7\u586B\u5199\u5BC6\u7801"},"en-US":{submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required"}}),n=d(""),u=d(""),c=i=>{console.log("submit",i)},b=i=>{console.log("failed",i)};return(i,o)=>{const s=P("demo-block");return C(),A(s,{title:e(l)("basicUsage")},{default:r(()=>[a(e(E),{onSubmit:c,onFailed:b},{default:r(()=>[a(e(D),{inset:""},{default:r(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=f=>n.value=f),name:"username",label:e(l)("username"),rules:[{required:!0,message:e(l)("requireUsername")}],placeholder:e(l)("username")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=f=>u.value=f),type:"password",name:"password",label:e(l)("password"),rules:[{required:!0,message:e(l)("requirePassword")}],placeholder:e(l)("password")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),$("div",Y,[a(e(S),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[x(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ee={style:{margin:"16px 16px 0"}},le=V({setup(k){const l=_({"zh-CN":{label:"\u6587\u672C",title:"\u6821\u9A8C\u89C4\u5219",submit:"\u63D0\u4EA4",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9",invalid:t=>`${t} \u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`,pattern:"\u6B63\u5219\u6821\u9A8C",validator:"\u51FD\u6570\u6821\u9A8C",validating:"\u9A8C\u8BC1\u4E2D...",asyncValidator:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",validatorMessage:"\u6821\u9A8C\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u63D0\u793A"},"en-US":{label:"Label",title:"Validate Rules",submit:"Submit",message:"Error message",invalid:t=>`${t} is invalid`,pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",validatorMessage:"Use validator to return message"}}),n=d(""),u=d(""),c=d("abc"),b=d(""),i=/\d{6}/,o=t=>/1\d{10}/.test(t),s=t=>l("invalid",t),f=t=>new Promise(v=>{z.loading(l("validating")),setTimeout(()=>{z.clear(),v(t==="1234")},1e3)}),B=t=>{console.log("submit",t)},g=t=>{console.log("failed",t)};return(t,v)=>{const p=P("demo-block");return C(),A(p,{title:e(l)("title")},{default:r(()=>[a(e(E),{onSumbit:B,onFailed:g},{default:r(()=>[a(e(D),{inset:""},{default:r(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]=h=>n.value=h),name:"pattern",label:e(l)("label"),rules:[{pattern:i,message:e(l)("message")}],placeholder:e(l)("pattern")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":v[1]||(v[1]=h=>u.value=h),name:"validator",label:e(l)("label"),rules:[{validator:o,message:e(l)("message")}],placeholder:e(l)("validator")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:c.value,"onUpdate:modelValue":v[2]||(v[2]=h=>c.value=h),name:"validatorMessage",label:e(l)("label"),rules:[{validator:s}],placeholder:e(l)("validatorMessage")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:b.value,"onUpdate:modelValue":v[3]||(v[3]=h=>b.value=h),name:"asyncValidator",label:e(l)("label"),rules:[{validator:f,message:e(l)("message")}],placeholder:e(l)("asyncValidator")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),$("div",ee,[a(e(S),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[x(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ae=V({setup(k){const l=_({"zh-CN":{picker:"\u5730\u533A\u9009\u62E9",areaList:J,placeholder:"\u70B9\u51FB\u9009\u62E9\u7701\u5E02\u533A"},"en-US":{picker:"Area Picker",areaList:O,placeholder:"Select area"}}),n=d(""),u=d(!1),c=({selectedOptions:i})=>{n.value=i.map(o=>o.text).join("/"),u.value=!1},b=()=>{u.value=!1};return(i,o)=>(C(),w(F,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"area",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(K),{"area-list":e(l)("areaList"),onConfirm:c,onCancel:b},null,8,["area-list"])]),_:1},8,["show"])],64))}}),oe=V({setup(k){const l=_({"zh-CN":{picker:"\u9009\u62E9\u5668",placeholder:"\u70B9\u51FB\u9009\u62E9\u57CE\u5E02",textColumns:G["zh-CN"]},"en-US":{picker:"Picker",placeholder:"Select city",textColumns:G["en-US"]}}),n=d(""),u=d(!1),c=({selectedOptions:i})=>{var o;n.value=((o=i[0])==null?void 0:o.text)||"",u.value=!1},b=()=>{u.value=!1};return(i,o)=>(C(),w(F,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"picker",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(Q),{columns:e(l)("textColumns"),onConfirm:c,onCancel:b},null,8,["columns"])]),_:1},8,["show"])],64))}}),ue=V({setup(k){const l=_({"zh-CN":{calendar:"\u65E5\u5386",placeholder:"\u70B9\u51FB\u9009\u62E9\u65E5\u671F"},"en-US":{calendar:"Calendar",placeholder:"Select date"}}),n=d(""),u=d(!1),c=i=>`${i.getMonth()+1}/${i.getDate()}`,b=i=>{n.value=c(i),u.value=!1};return(i,o)=>(C(),w(F,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"calendar",label:e(l)("calendar"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(W),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",teleport:"body",onConfirm:b},null,8,["show"])],64))}}),te=V({setup(k){const l=_({"zh-CN":{label:"\u65F6\u95F4\u9009\u62E9",placeholder:"\u70B9\u51FB\u9009\u62E9\u65F6\u95F4"},"en-US":{label:"Datetime Picker",placeholder:"Select time"}}),n=d(""),u=d(!1),c=({selectedValues:i})=>{n.value=i.join("/"),u.value=!1},b=()=>{u.value=!1};return(i,o)=>(C(),w(F,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"datePicker",label:e(l)("label"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(X),{onConfirm:c,onCancel:b})]),_:1},8,["show"])],64))}}),re={style:{margin:"16px 16px 0"}},se=V({setup(k){const l=_({"zh-CN":{rate:"\u8BC4\u5206",radio:"\u5355\u9009\u6846",submit:"\u63D0\u4EA4",switch:"\u5F00\u5173",slider:"\u6ED1\u5757",picker:"\u9009\u62E9\u5668",stepper:"\u6B65\u8FDB\u5668",checkbox:"\u590D\u9009\u6846",uploader:"\u6587\u4EF6\u4E0A\u4F20",fieldType:"\u8868\u5355\u9879\u7C7B\u578B",checkboxGroup:"\u590D\u9009\u6846\u7EC4",requireCheckbox:"\u8BF7\u52FE\u9009\u590D\u9009\u6846"},"en-US":{rate:"Rate",radio:"Radio",submit:"Submit",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",fieldType:"Field Type",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required"}}),n=d(3),u=d("1"),c=d(50),b=d(1),i=d([{url:"https://img.yzcdn.cn/vant/leaf.jpg"}]),o=d(!1),s=d([]),f=d(!1),B=g=>{console.log(g)};return(g,t)=>{const v=P("demo-block");return C(),A(v,{title:e(l)("fieldType")},{default:r(()=>[a(e(E),{onSubmit:B},{default:r(()=>[a(e(D),{inset:""},{default:r(()=>[a(e(m),{name:"switch",label:e(l)("switch")},{input:r(()=>[a(e(L),{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=p=>f.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkbox",label:e(l)("checkbox")},{input:r(()=>[a(e(y),{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=p=>o.value=p),shape:"square"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkboxGroup",label:e(l)("checkboxGroup")},{input:r(()=>[a(e(I),{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=p=>s.value=p),direction:"horizontal"},{default:r(()=>[a(e(y),{name:"1",shape:"square"},{default:r(()=>[x(U(e(l)("checkbox"))+" 1 ",1)]),_:1}),a(e(y),{name:"2",shape:"square"},{default:r(()=>[x(U(e(l)("checkbox"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"radio",label:e(l)("radio")},{input:r(()=>[a(e(R),{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=p=>u.value=p),direction:"horizontal"},{default:r(()=>[a(e(N),{name:"1"},{default:r(()=>[x(U(e(l)("radio"))+" 1",1)]),_:1}),a(e(N),{name:"2"},{default:r(()=>[x(U(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"stepper",label:e(l)("stepper")},{input:r(()=>[a(e(j),{modelValue:b.value,"onUpdate:modelValue":t[4]||(t[4]=p=>b.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"rate",label:e(l)("rate")},{input:r(()=>[a(e(T),{modelValue:n.value,"onUpdate:modelValue":t[5]||(t[5]=p=>n.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"slider",label:e(l)("slider")},{input:r(()=>[a(e(M),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=p=>c.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"uploader",label:e(l)("uploader")},{input:r(()=>[a(e(H),{modelValue:i.value,"onUpdate:modelValue":t[7]||(t[7]=p=>i.value=p),"max-count":"2"},null,8,["modelValue"])]),_:1},8,["label"]),a(oe),a(te),a(ae),a(ue)]),_:1}),$("div",re,[a(e(S),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[x(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),Ye=V({setup(k){return(l,n)=>(C(),w(F,null,[a(Z),a(le),a(se)],64))}});export{Ye as default};
