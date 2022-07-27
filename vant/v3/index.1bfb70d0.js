import{F as B}from"./index.238f1bc5.js";import{F as m}from"./index.7ebed1fc.js";import{B as y}from"./index.7aa09e1c.js";import{C as D}from"./index.9437d720.js";import{a as h}from"./use-translate.7145ee20.js";import{z as x,D as i,r as E,o as V,c as S,w as s,e as a,B as e,d as P,h as j,t as U,a as w,F as _}from"./vue-libs.84e059bd.js";import{T as $}from"./function-call.3d6aa441.js";import{R as G}from"./index.a4b2875a.js";import{a as N,R as z}from"./index.349e2c2c.js";import{S as T}from"./index.a7a80ab9.js";import{S as R}from"./index.2ec215d0.js";import{S as M}from"./index.02c748f5.js";import{C as q}from"./index.4a2797b4.js";import{U as L}from"./index.18bbd4e6.js";import{C as I}from"./index.db1ed6d7.js";import{a as H,A as J}from"./index.esm.628dc968.js";import{P as A}from"./index.bba74b3b.js";import{a as K}from"./area-en.345d80e1.js";import{P as O}from"./index.85a62db0.js";import{C as Q}from"./index.9e017f43.js";import{D as W}from"./index.f37fc5d7.js";import"./with-install.756837d9.js";import"./constant.80c6de18.js";import"./use-expose.897feea8.js";import"./index.f609f533.js";import"./use-route.841a0e09.js";import"./index.bea91046.js";import"./use-id.28dc46a0.js";import"./index.8397aee6.js";import"./mount-component.f2698375.js";import"./use-refs.a0d96d45.js";import"./use-touch.a752672a.js";import"./Checker.9c26c32e.js";import"./interceptor.fa55923e.js";import"./function-call.a28d0d56.js";import"./index.5da1b63b.js";import"./on-popup-reopen.b9a88023.js";import"./index.9a9564b1.js";import"./deep-clone.efa332bb.js";import"./Picker.d4a42567.js";import"./use-lazy-render.0b8d6da1.js";import"./index.bd0de4f7.js";import"./utils.49ad2d70.js";import"./use-height.c7dcb8d8.js";const X={style:{margin:"16px 16px 0"}},Y=x({setup(C){const l=h({"zh-CN":{submit:"\u63D0\u4EA4",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",requireUsername:"\u8BF7\u586B\u5199\u7528\u6237\u540D",requirePassword:"\u8BF7\u586B\u5199\u5BC6\u7801"},"en-US":{submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required"}}),n=i(""),u=i(""),c=d=>{console.log("submit",d)},b=d=>{console.log("failed",d)};return(d,o)=>{const r=E("demo-block");return V(),S(r,{title:e(l)("basicUsage")},{default:s(()=>[a(e(B),{onSubmit:c,onFailed:b},{default:s(()=>[a(e(D),{inset:""},{default:s(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=f=>n.value=f),name:"username",label:e(l)("username"),rules:[{required:!0,message:e(l)("requireUsername")}],placeholder:e(l)("username")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=f=>u.value=f),type:"password",name:"password",label:e(l)("password"),rules:[{required:!0,message:e(l)("requirePassword")}],placeholder:e(l)("password")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),P("div",X,[a(e(y),{round:"",block:"",type:"primary","native-type":"submit"},{default:s(()=>[j(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),Z={style:{margin:"16px 16px 0"}},ee=x({setup(C){const l=h({"zh-CN":{label:"\u6587\u672C",title:"\u6821\u9A8C\u89C4\u5219",submit:"\u63D0\u4EA4",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9",invalid:t=>`${t} \u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`,pattern:"\u6B63\u5219\u6821\u9A8C",validator:"\u51FD\u6570\u6821\u9A8C",validating:"\u9A8C\u8BC1\u4E2D...",asyncValidator:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",validatorMessage:"\u6821\u9A8C\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u63D0\u793A"},"en-US":{label:"Label",title:"Validate Rules",submit:"Submit",message:"Error message",invalid:t=>`${t} is invalid`,pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",validatorMessage:"Use validator to return message"}}),n=i(""),u=i(""),c=i("abc"),b=i(""),d=/\d{6}/,o=t=>/1\d{10}/.test(t),r=t=>l("invalid",t),f=t=>new Promise(v=>{$.loading(l("validating")),setTimeout(()=>{$.clear(),v(t==="1234")},1e3)}),g=t=>{console.log("submit",t)},F=t=>{console.log("failed",t)};return(t,v)=>{const p=E("demo-block");return V(),S(p,{title:e(l)("title")},{default:s(()=>[a(e(B),{onSumbit:g,onFailed:F},{default:s(()=>[a(e(D),{inset:""},{default:s(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]=k=>n.value=k),name:"pattern",label:e(l)("label"),rules:[{pattern:d,message:e(l)("message")}],placeholder:e(l)("pattern")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":v[1]||(v[1]=k=>u.value=k),name:"validator",label:e(l)("label"),rules:[{validator:o,message:e(l)("message")}],placeholder:e(l)("validator")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:c.value,"onUpdate:modelValue":v[2]||(v[2]=k=>c.value=k),name:"validatorMessage",label:e(l)("label"),rules:[{validator:r}],placeholder:e(l)("validatorMessage")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:b.value,"onUpdate:modelValue":v[3]||(v[3]=k=>b.value=k),name:"asyncValidator",label:e(l)("label"),rules:[{validator:f,message:e(l)("message")}],placeholder:e(l)("asyncValidator")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),P("div",Z,[a(e(y),{round:"",block:"",type:"primary","native-type":"submit"},{default:s(()=>[j(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),le=x({setup(C){const l=h({"zh-CN":{picker:"\u5730\u533A\u9009\u62E9",areaList:H,placeholder:"\u70B9\u51FB\u9009\u62E9\u7701\u5E02\u533A"},"en-US":{picker:"Area Picker",areaList:K,placeholder:"Select area"}}),n=i(""),u=i(!1),c=d=>{n.value=d.filter(o=>!!o).map(o=>o.name).join("/"),u.value=!1},b=()=>{u.value=!1};return(d,o)=>(V(),w(_,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),"is-link":"",readonly:"",name:"area",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=r=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(A),{show:u.value,"onUpdate:show":o[2]||(o[2]=r=>u.value=r),round:"",position:"bottom",teleport:"body"},{default:s(()=>[a(e(J),{"area-list":e(l)("areaList"),onConfirm:c,onCancel:b},null,8,["area-list"])]),_:1},8,["show"])],64))}}),ae=x({setup(C){const l=h({"zh-CN":{picker:"\u9009\u62E9\u5668",placeholder:"\u70B9\u51FB\u9009\u62E9\u57CE\u5E02",textColumns:["\u676D\u5DDE","\u5B81\u6CE2","\u6E29\u5DDE","\u5609\u5174","\u6E56\u5DDE"]},"en-US":{picker:"Picker",placeholder:"Select city",textColumns:["Delaware","Florida","Georqia","Indiana","Maine"]}}),n=i(""),u=i(!1),c=d=>{n.value=d,u.value=!1},b=()=>{u.value=!1};return(d,o)=>(V(),w(_,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),"is-link":"",readonly:"",name:"picker",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=r=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(A),{show:u.value,"onUpdate:show":o[2]||(o[2]=r=>u.value=r),round:"",position:"bottom",teleport:"body"},{default:s(()=>[a(e(O),{columns:e(l)("textColumns"),onConfirm:c,onCancel:b},null,8,["columns"])]),_:1},8,["show"])],64))}}),oe=x({setup(C){const l=h({"zh-CN":{calendar:"\u65E5\u5386",placeholder:"\u70B9\u51FB\u9009\u62E9\u65E5\u671F"},"en-US":{calendar:"Calendar",placeholder:"Select date"}}),n=i(""),u=i(!1),c=d=>`${d.getMonth()+1}/${d.getDate()}`,b=d=>{n.value=c(d),u.value=!1};return(d,o)=>(V(),w(_,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),"is-link":"",readonly:"",name:"calendar",label:e(l)("calendar"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=r=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(Q),{show:u.value,"onUpdate:show":o[2]||(o[2]=r=>u.value=r),round:"",teleport:"body",onConfirm:b},null,8,["show"])],64))}}),ue=x({setup(C){const l=h({"zh-CN":{label:"\u65F6\u95F4\u9009\u62E9",placeholder:"\u70B9\u51FB\u9009\u62E9\u65F6\u95F4"},"en-US":{label:"Datetime Picker",placeholder:"Select time"}}),n=i(""),u=i(!1),c=d=>{n.value=d,u.value=!1},b=()=>{u.value=!1};return(d,o)=>(V(),w(_,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),"is-link":"",readonly:"",name:"datetimePicker",label:e(l)("label"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=r=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(A),{show:u.value,"onUpdate:show":o[2]||(o[2]=r=>u.value=r),round:"",position:"bottom",teleport:"body"},{default:s(()=>[a(e(W),{type:"time",onConfirm:c,onCancel:b})]),_:1},8,["show"])],64))}}),te={style:{margin:"16px 16px 0"}},se=x({setup(C){const l=h({"zh-CN":{rate:"\u8BC4\u5206",radio:"\u5355\u9009\u6846",submit:"\u63D0\u4EA4",switch:"\u5F00\u5173",slider:"\u6ED1\u5757",picker:"\u9009\u62E9\u5668",stepper:"\u6B65\u8FDB\u5668",checkbox:"\u590D\u9009\u6846",uploader:"\u6587\u4EF6\u4E0A\u4F20",fieldType:"\u8868\u5355\u9879\u7C7B\u578B",checkboxGroup:"\u590D\u9009\u6846\u7EC4",requireCheckbox:"\u8BF7\u52FE\u9009\u590D\u9009\u6846"},"en-US":{rate:"Rate",radio:"Radio",submit:"Submit",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",fieldType:"Field Type",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required"}}),n=i(3),u=i("1"),c=i(50),b=i(1),d=i([{url:"https://img.yzcdn.cn/vant/leaf.jpg"}]),o=i(!1),r=i([]),f=i(!1),g=F=>{console.log(F)};return(F,t)=>{const v=E("demo-block");return V(),S(v,{title:e(l)("fieldType")},{default:s(()=>[a(e(B),{onSubmit:g},{default:s(()=>[a(e(D),{inset:""},{default:s(()=>[a(e(m),{name:"switch",label:e(l)("switch")},{input:s(()=>[a(e(R),{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=p=>f.value=p),size:"20"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkbox",label:e(l)("checkbox")},{input:s(()=>[a(e(q),{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=p=>o.value=p),shape:"square"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkboxGroup",label:e(l)("checkboxGroup")},{input:s(()=>[a(e(I),{modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=p=>r.value=p),direction:"horizontal"},{default:s(()=>[a(e(q),{name:"1",shape:"square"},{default:s(()=>[j(U(e(l)("checkbox"))+" 1 ",1)]),_:1}),a(e(q),{name:"2",shape:"square"},{default:s(()=>[j(U(e(l)("checkbox"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"radio",label:e(l)("radio")},{input:s(()=>[a(e(N),{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=p=>u.value=p),direction:"horizontal"},{default:s(()=>[a(e(z),{name:"1"},{default:s(()=>[j(U(e(l)("radio"))+" 1",1)]),_:1}),a(e(z),{name:"2"},{default:s(()=>[j(U(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"stepper",label:e(l)("stepper")},{input:s(()=>[a(e(M),{modelValue:b.value,"onUpdate:modelValue":t[4]||(t[4]=p=>b.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"rate",label:e(l)("rate")},{input:s(()=>[a(e(G),{modelValue:n.value,"onUpdate:modelValue":t[5]||(t[5]=p=>n.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"slider",label:e(l)("slider")},{input:s(()=>[a(e(T),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=p=>c.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"uploader",label:e(l)("uploader")},{input:s(()=>[a(e(L),{modelValue:d.value,"onUpdate:modelValue":t[7]||(t[7]=p=>d.value=p),"max-count":"2"},null,8,["modelValue"])]),_:1},8,["label"]),a(ae),a(ue),a(le),a(oe)]),_:1}),P("div",te,[a(e(y),{round:"",block:"",type:"primary","native-type":"submit"},{default:s(()=>[j(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),Xe=x({setup(C){return(l,n)=>(V(),w(_,null,[a(Y),a(ee),a(se)],64))}});export{Xe as default};
