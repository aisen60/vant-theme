var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(o,t,s)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;import{C as a}from"./index.550f913c.js";import{I as n}from"./function-call.df6d8027.js";import{a as i}from"./use-translate.b583725c.js";import{T as r}from"./function-call.b2678465.js";import{A as c,E as p,r as m,o as u,a as d,e as f,w as j,C,i as b,t as v,F as g}from"./vendor.ef334a89.js";import"./with-install.62f47d2f.js";import"./use-route.3fda2186.js";import"./index.3af24151.js";import"./unit.49c29796.js";import"./mount-component.4a14b4e1.js";import"./use-expose.33de0944.js";import"./interceptor.ab1192d4.js";import"./index.c15090cc.js";import"./style.21d4b335.js";import"./event.7d40caae.js";import"./number.b01aa591.js";import"./use-touch.ce80657e.js";import"./on-popup-reopen.522dc00c.js";import"./utils.b0356070.js";import"./index.7e292110.js";import"./useChildren.a94b5b99.js";import"./useParent.0a2f50cb.js";import"./index.aa2914ba.js";import"./index.253cf6b3.js";import"./use-lazy-render.49349a00.js";import"./index.0acb7aaf.js";import"./index.620c085b.js";import"./index.6fa13143.js";const h=c({setup(e){const c=n.Component,h=i({"zh-CN":{closed:"关闭",showClose:"展示关闭按钮",showImages:"预览图片",beforeClose:"异步关闭",closeEvent:"监听关闭事件",customConfig:"传入配置项",startPosition:"指定初始位置",componentCall:"组件调用",index:e=>`第${e+1}页`},"en-US":{closed:"closed",showClose:"Show Close Icon",showImages:"Show Images",beforeClose:"Before Close",closeEvent:"Close Event",customConfig:"Custom Config",startPosition:"Set Start Position",componentCall:"Component Call",index:e=>`Page: ${e}`}}),w=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg"],x=p(!1),k=p(0),y=()=>r(h("closed")),P=()=>new Promise((e=>{setTimeout((()=>{e(!0)}),1e3)})),I=()=>{x.value=!0},z=e=>{k.value=e},E=(e={})=>{const a=n(((e,a)=>{for(var n in a||(a={}))t.call(a,n)&&l(e,n,a[n]);if(o)for(var n of o(a))s.call(a,n)&&l(e,n,a[n]);return e})({images:w},e));e.beforeClose&&setTimeout((()=>{null==a||a.close()}),2e3)};return(e,o)=>{const t=m("demo-block");return u(),d(g,null,[f(t,{card:"",title:C(h)("basicUsage")},{default:j((()=>[f(C(a),{"is-link":"",value:C(h)("showImages"),onClick:o[0]||(o[0]=e=>E())},null,8,["value"])])),_:1},8,["title"]),f(t,{card:"",title:C(h)("customConfig")},{default:j((()=>[f(C(a),{"is-link":"",value:C(h)("startPosition"),onClick:o[1]||(o[1]=e=>E({startPosition:1}))},null,8,["value"]),f(C(a),{"is-link":"",value:C(h)("showClose"),onClick:o[2]||(o[2]=e=>E({closeable:!0}))},null,8,["value"]),f(C(a),{"is-link":"",value:C(h)("closeEvent"),onClick:o[3]||(o[3]=e=>E({onClose:y}))},null,8,["value"])])),_:1},8,["title"]),f(t,{card:"",title:C(h)("beforeClose")},{default:j((()=>[f(C(a),{"is-link":"",value:C(h)("beforeClose"),onClick:o[4]||(o[4]=e=>E({beforeClose:P}))},null,8,["value"])])),_:1},8,["title"]),f(t,{card:"",title:C(h)("componentCall")},{default:j((()=>[f(C(a),{"is-link":"",value:C(h)("componentCall"),onClick:I},null,8,["value"]),f(C(c),{show:x.value,"onUpdate:show":o[5]||(o[5]=e=>x.value=e),images:w,onChange:z},{index:j((()=>[b(v(C(h)("index",k.value)),1)])),_:1},8,["show"])])),_:1},8,["title"])],64)}}});export{h as default};
