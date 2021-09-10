import{U as e}from"./index.5ebce7b5.js";import{V as a}from"./index.700b8aa4.js";import{a as t}from"./use-translate.bf1abf23.js";import{T as l}from"./function-call.2f25783d.js";import{B as i,G as o,r as d,a as s,f as u,w as m,D as n,F as p,o as r,i as c,t as f,e as v}from"./vendor.09b5b9a9.js";import"./with-install.af140ae3.js";import"./unit.36efb2dd.js";import"./use-expose.028ef04d.js";import"./index.5afcfd01.js";import"./function-call.56e19f56.js";import"./mount-component.14353bf5.js";import"./interceptor.9b43abfe.js";import"./index.55079559.js";import"./style.ae88e9b6.js";import"./event.7d40caae.js";import"./number.b01aa591.js";import"./use-touch.871001cd.js";import"./on-popup-reopen.d2d6f1c6.js";import"./utils.fd06bcd3.js";import"./index.2baefb73.js";import"./useChildren.692bc2bf.js";import"./useParent.60a302fe.js";import"./index.02c1c9ae.js";import"./index.e4b17f1e.js";import"./use-lazy-render.bae5ade9.js";import"./index.bb1b1d01.js";import"./index.429cd099.js";import"./index.4893bdc2.js";import"./index.e6355079.js";import"./constant.4d85ecb9.js";import"./use-route.bc60204d.js";const g={class:"preview-cover van-ellipsis"};var b=i({setup(i){const b=t({"zh-CN":{status:"上传状态",failed:"上传失败",upload:"上传文件",preview:"文件预览",maxSize:"限制上传大小",disabled:"禁用文件上传",maxCount:"限制上传数量",uploading:"上传中...",imageName:"图片名称",beforeRead:"上传前置处理",overSizeTip:"文件大小不能超过 500kb",invalidType:"请上传 jpg 格式图片",customUpload:"自定义上传样式",previewCover:"自定义预览样式",customPreviewImage:"自定义单个图片预览",deleteMessage:"删除前置处理"},"en-US":{status:"Upload Status",failed:"Failed",upload:"Upload File",preview:"Preview File",maxSize:"Max Size",disabled:"Disable Uploader",maxCount:"Max Count",uploading:"Uploading...",imageName:"Image Name",beforeRead:"Before Read",overSizeTip:"File size cannot exceed 500kb",invalidType:"Please upload an image in jpg format",customUpload:"Custom Upload Area",previewCover:"Preview Cover",customPreviewImage:"Custom single prevew image",deleteMessage:"Before Delete"}}),j=o([{url:"https://img.yzcdn.cn/vant/leaf.jpg"},{url:"https://img.yzcdn.cn/vant/tree.jpg"}]),x=o([{url:"https://img.yzcdn.cn/vant/sand.jpg"}]),z=o([]),V=o([{url:"https://img.yzcdn.cn/vant/sand.jpg"}]),y=o([{url:"https://img.yzcdn.cn/vant/leaf.jpg"},{url:"https://img.yzcdn.cn/vant/sand.jpg",deletable:!0,beforeDelete:()=>{l(b("deleteMessage"))}},{url:"https://img.yzcdn.cn/vant/tree.jpg",deletable:!0,imageFit:"contain",previewSize:120}]),U=o([{url:"https://img.yzcdn.cn/vant/leaf.jpg",status:"uploading",message:b("uploading")},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"failed",message:b("failed")}]),w=o([{url:"https://img.yzcdn.cn/vant/leaf.jpg",file:{name:b("imageName")}}]),h=e=>"image/jpeg"===e.type||(l(b("invalidType")),!1),_=(e,a)=>{console.log(e,a)},C=e=>{e.status="uploading",e.message=b("uploading"),setTimeout((()=>{e.status="failed",e.message=b("failed")}),1e3)},S=(e,a)=>{console.log(e,a),l(b("overSizeTip"))};return(t,l)=>{const i=d("demo-block");return r(),s(p,null,[u(i,{title:n(b)("basicUsage")},{default:m((()=>[u(n(e),{"after-read":_})])),_:1},8,["title"]),u(i,{title:n(b)("preview")},{default:m((()=>[u(n(e),{modelValue:j.value,"onUpdate:modelValue":l[0]||(l[0]=e=>j.value=e),multiple:"",accept:"*"},null,8,["modelValue"])])),_:1},8,["title"]),u(i,{title:n(b)("status")},{default:m((()=>[u(n(e),{modelValue:U.value,"onUpdate:modelValue":l[1]||(l[1]=e=>U.value=e),"after-read":C},null,8,["modelValue"])])),_:1},8,["title"]),u(i,{title:n(b)("maxCount")},{default:m((()=>[u(n(e),{modelValue:x.value,"onUpdate:modelValue":l[2]||(l[2]=e=>x.value=e),multiple:"","max-count":2},null,8,["modelValue"])])),_:1},8,["title"]),u(i,{title:n(b)("maxSize")},{default:m((()=>[u(n(e),{modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=e=>V.value=e),multiple:"","max-size":512e3,onOversize:S},null,8,["modelValue"])])),_:1},8,["title"]),u(i,{title:n(b)("customUpload")},{default:m((()=>[u(n(e),null,{default:m((()=>[u(n(a),{type:"primary",icon:"plus"},{default:m((()=>[c(f(n(b)("upload")),1)])),_:1})])),_:1})])),_:1},8,["title"]),u(i,{title:n(b)("previewCover")},{default:m((()=>[u(n(e),{modelValue:w.value,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value=e)},{"preview-cover":m((({file:e})=>[v("div",g,f(e.name),1)])),_:1},8,["modelValue"])])),_:1},8,["title"]),u(i,{title:n(b)("beforeRead")},{default:m((()=>[u(n(e),{modelValue:z.value,"onUpdate:modelValue":l[5]||(l[5]=e=>z.value=e),"before-read":h},null,8,["modelValue"])])),_:1},8,["title"]),u(i,{title:n(b)("disabled")},{default:m((()=>[u(n(e),{"after-read":_,disabled:""})])),_:1},8,["title"]),u(i,{title:n(b)("customPreviewImage")},{default:m((()=>[u(n(e),{modelValue:y.value,"onUpdate:modelValue":l[6]||(l[6]=e=>y.value=e),multiple:"",accept:"*",deletable:!1},null,8,["modelValue"])])),_:1},8,["title"])],64)}}});export{b as default};
