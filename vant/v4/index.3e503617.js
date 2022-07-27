import{U as d}from"./index.fd7fa90e.js";import{B as z}from"./index.3d7c0eea.js";import{c as s}from"./index.9abc96fc.js";import{s as n}from"./index.c88a663f.js";import{a as _}from"./use-translate.9f14972f.js";import{A as S,x as p,r as j,o as y,a as B,e as u,w as i,C as e,h as D,t as C,d as T,F as k}from"./vue-libs.a3cd7f61.js";import"./with-install.74763816.js";import"./use-expose.b4c33459.js";import"./index.b817fd06.js";import"./index.c1b798da.js";import"./mount-component.21851ecf.js";import"./constant.80c6de18.js";import"./interceptor.2ffde640.js";import"./index.11c569ee.js";import"./use-touch.196fce0c.js";import"./on-popup-reopen.a53db14c.js";import"./index.6ecb02f5.js";import"./use-lazy-render.4c81c593.js";import"./index.663d05d1.js";import"./index.2dd458da.js";import"./index.ccf6f928.js";import"./use-route.7a9317f3.js";const L={class:"preview-cover van-ellipsis"},oe=S({__name:"index",setup(N){const l=_({"zh-CN":{status:"\u4E0A\u4F20\u72B6\u6001",failed:"\u4E0A\u4F20\u5931\u8D25",upload:"\u4E0A\u4F20\u6587\u4EF6",preview:"\u6587\u4EF6\u9884\u89C8",maxSize:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",disabled:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20",maxCount:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF",uploading:"\u4E0A\u4F20\u4E2D...",imageName:"\u56FE\u7247\u540D\u79F0",beforeRead:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406",overSizeTip:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500kb",invalidType:"\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247",customUpload:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",previewSize:"\u81EA\u5B9A\u4E49\u9884\u89C8\u5927\u5C0F",previewCover:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F",deleteMessage:"\u5220\u9664\u524D\u7F6E\u5904\u7406",customPreviewImage:"\u81EA\u5B9A\u4E49\u5355\u4E2A\u56FE\u7247\u9884\u89C8"},"en-US":{status:"Upload Status",failed:"Failed",upload:"Upload File",preview:"Preview File",maxSize:"Max Size",disabled:"Disable Uploader",maxCount:"Max Count",uploading:"Uploading...",imageName:"Image Name",beforeRead:"Before Read",overSizeTip:"File size cannot exceed 500kb",invalidType:"Please upload an image in jpg format",customUpload:"Custom Upload Area",previewSize:"Preview Size",previewCover:"Preview Cover",deleteMessage:"Before Delete",customPreviewImage:"Custom single preview image"}}),m=p([{url:s("leaf.jpeg")},{url:s("tree.jpeg")}]),f=p([{url:s("sand.jpeg")}]),v=p([]),g=p([{url:s("sand.jpeg")}]),F=p([{url:s("sand.jpeg"),deletable:!0,beforeDelete:()=>{n(l("deleteMessage"))}},{url:s("tree.jpeg"),imageFit:"contain"}]),E=p([{url:s("leaf.jpeg"),status:"uploading",message:l("uploading")},{url:s("tree.jpeg"),status:"failed",message:l("failed")}]),c=p([{url:s("leaf.jpeg"),file:{name:l("imageName")}}]),b=p([{url:s("leaf.jpeg")}]),A=o=>Array.isArray(o)?!0:o.type!=="image/jpeg"?(n(l("invalidType")),!1):!0,V=(o,a)=>{console.log(o,a)},w=o=>{o.status="uploading",o.message=l("uploading"),setTimeout(()=>{o.status="failed",o.message=l("failed")},1e3)},x=o=>{Array.isArray(o)?o.forEach(w):w(o)},U=(o,a)=>{console.log(o,a),n(l("overSizeTip"))};return(o,a)=>{const r=j("demo-block");return y(),B(k,null,[u(r,{title:e(l)("basicUsage")},{default:i(()=>[u(e(d),{"after-read":V})]),_:1},8,["title"]),u(r,{title:e(l)("preview")},{default:i(()=>[u(e(d),{modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=t=>m.value=t),multiple:"",accept:"*"},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("status")},{default:i(()=>[u(e(d),{modelValue:E.value,"onUpdate:modelValue":a[1]||(a[1]=t=>E.value=t),"after-read":x},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("maxCount")},{default:i(()=>[u(e(d),{modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=t=>f.value=t),multiple:"","max-count":2},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("maxSize")},{default:i(()=>[u(e(d),{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=t=>g.value=t),multiple:"","max-size":500*1024,onOversize:U},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("customUpload")},{default:i(()=>[u(e(d),null,{default:i(()=>[u(e(z),{type:"primary",icon:"plus"},{default:i(()=>[D(C(e(l)("upload")),1)]),_:1})]),_:1})]),_:1},8,["title"]),u(r,{title:e(l)("previewCover")},{default:i(()=>[u(e(d),{modelValue:c.value,"onUpdate:modelValue":a[4]||(a[4]=t=>c.value=t)},{"preview-cover":i(({file:t})=>[T("div",L,C(t.name),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("previewSize")},{default:i(()=>[u(e(d),{modelValue:b.value,"onUpdate:modelValue":a[5]||(a[5]=t=>b.value=t),"preview-size":"60"},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("beforeRead")},{default:i(()=>[u(e(d),{modelValue:v.value,"onUpdate:modelValue":a[6]||(a[6]=t=>v.value=t),"before-read":A},null,8,["modelValue"])]),_:1},8,["title"]),u(r,{title:e(l)("disabled")},{default:i(()=>[u(e(d),{"after-read":V,disabled:""})]),_:1},8,["title"]),u(r,{title:e(l)("customPreviewImage")},{default:i(()=>[u(e(d),{modelValue:F.value,"onUpdate:modelValue":a[7]||(a[7]=t=>F.value=t),multiple:"",accept:"*",deletable:!1},null,8,["modelValue"])]),_:1},8,["title"])],64)}}});export{oe as default};
