import{U as d}from"./index.e5fbc12e.js";import{B as C}from"./index.d91601ec.js";import{a as V}from"./use-translate.e667ce10.js";import{T as r}from"./function-call.deede8ba.js";import{z as y,D as n,r as w,o as U,a as A,e as t,w as i,B as e,h as _,t as b,d as B,F as D}from"./vue-libs.1dda7261.js";import"./with-install.feb19484.js";import"./use-expose.9b0dd301.js";import"./index.472ff4df.js";import"./function-call.de02bd03.js";import"./mount-component.553013ae.js";import"./interceptor.b759bdc5.js";import"./index.d7333b46.js";import"./use-touch.b0c07ae6.js";import"./on-popup-reopen.1b0dc8ad.js";import"./utils.39620306.js";import"./index.904c4b4d.js";import"./useChildren.ed284d59.js";import"./useParent.5e3d1dfb.js";import"./index.13873f42.js";import"./index.0749451f.js";import"./use-lazy-render.e44d61c0.js";import"./index.57f9d610.js";import"./index.b7f6e1af.js";import"./index.ae867a8e.js";import"./index.5b10c1d9.js";import"./constant.4d85ecb9.js";import"./use-route.dfb37f70.js";const S={class:"preview-cover van-ellipsis"},se=y({setup(T){const u=V({"zh-CN":{status:"\u4E0A\u4F20\u72B6\u6001",failed:"\u4E0A\u4F20\u5931\u8D25",upload:"\u4E0A\u4F20\u6587\u4EF6",preview:"\u6587\u4EF6\u9884\u89C8",maxSize:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",disabled:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20",maxCount:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF",uploading:"\u4E0A\u4F20\u4E2D...",imageName:"\u56FE\u7247\u540D\u79F0",beforeRead:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406",overSizeTip:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500kb",invalidType:"\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247",customUpload:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",previewCover:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F",customPreviewImage:"\u81EA\u5B9A\u4E49\u5355\u4E2A\u56FE\u7247\u9884\u89C8",deleteMessage:"\u5220\u9664\u524D\u7F6E\u5904\u7406"},"en-US":{status:"Upload Status",failed:"Failed",upload:"Upload File",preview:"Preview File",maxSize:"Max Size",disabled:"Disable Uploader",maxCount:"Max Count",uploading:"Uploading...",imageName:"Image Name",beforeRead:"Before Read",overSizeTip:"File size cannot exceed 500kb",invalidType:"Please upload an image in jpg format",customUpload:"Custom Upload Area",previewCover:"Preview Cover",customPreviewImage:"Custom single prevew image",deleteMessage:"Before Delete"}}),p=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg"},{url:"https://img.yzcdn.cn/vant/tree.jpg"}]),m=n([{url:"https://img.yzcdn.cn/vant/sand.jpg"}]),f=n([]),v=n([{url:"https://img.yzcdn.cn/vant/sand.jpg"}]),c=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg"},{url:"https://img.yzcdn.cn/vant/sand.jpg",deletable:!0,beforeDelete:()=>{r(u("deleteMessage"))}},{url:"https://img.yzcdn.cn/vant/tree.jpg",deletable:!0,imageFit:"contain",previewSize:120}]),g=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg",status:"uploading",message:u("uploading")},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"failed",message:u("failed")}]),F=n([{url:"https://img.yzcdn.cn/vant/leaf.jpg",file:{name:u("imageName")}}]),x=o=>o.type!=="image/jpeg"?(r(u("invalidType")),!1):!0,j=(o,a)=>{console.log(o,a)},E=o=>{o.status="uploading",o.message=u("uploading"),setTimeout(()=>{o.status="failed",o.message=u("failed")},1e3)},z=(o,a)=>{console.log(o,a),r(u("overSizeTip"))};return(o,a)=>{const s=w("demo-block");return U(),A(D,null,[t(s,{title:e(u)("basicUsage")},{default:i(()=>[t(e(d),{"after-read":j})]),_:1},8,["title"]),t(s,{title:e(u)("preview")},{default:i(()=>[t(e(d),{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=l=>p.value=l),multiple:"",accept:"*"},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("status")},{default:i(()=>[t(e(d),{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=l=>g.value=l),"after-read":E},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("maxCount")},{default:i(()=>[t(e(d),{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=l=>m.value=l),multiple:"","max-count":2},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("maxSize")},{default:i(()=>[t(e(d),{modelValue:v.value,"onUpdate:modelValue":a[3]||(a[3]=l=>v.value=l),multiple:"","max-size":500*1024,onOversize:z},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("customUpload")},{default:i(()=>[t(e(d),null,{default:i(()=>[t(e(C),{type:"primary",icon:"plus"},{default:i(()=>[_(b(e(u)("upload")),1)]),_:1})]),_:1})]),_:1},8,["title"]),t(s,{title:e(u)("previewCover")},{default:i(()=>[t(e(d),{modelValue:F.value,"onUpdate:modelValue":a[4]||(a[4]=l=>F.value=l)},{"preview-cover":i(({file:l})=>[B("div",S,b(l.name),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("beforeRead")},{default:i(()=>[t(e(d),{modelValue:f.value,"onUpdate:modelValue":a[5]||(a[5]=l=>f.value=l),"before-read":x},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("disabled")},{default:i(()=>[t(e(d),{"after-read":j,disabled:""})]),_:1},8,["title"]),t(s,{title:e(u)("customPreviewImage")},{default:i(()=>[t(e(d),{modelValue:c.value,"onUpdate:modelValue":a[6]||(a[6]=l=>c.value=l),multiple:"",accept:"*",deletable:!1},null,8,["modelValue"])]),_:1},8,["title"])],64)}}});export{se as default};
