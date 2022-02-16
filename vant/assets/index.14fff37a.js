import{c as h,q as E,a as y}from"./use-translate.fbf36f21.js";import{m as F,n as _,w as v}from"./with-install.251697cd.js";import{e as t,z as f,D as x,r as k,o as B,a as w,w as n,B as e,h as D,t as C,F as $}from"./vue-libs.bf80eadf.js";import{T as b,a as m}from"./index.187ce2d8.js";import{B as S}from"./index.16d2686f.js";import"./use-id.139c5032.js";import"./use-expose.8d47dba2.js";import"./use-route.9fd68ea8.js";import"./index.47538ae0.js";import"./use-touch.9de12470.js";import"./on-popup-reopen.e08ee506.js";import"./constant.80c6de18.js";import"./interceptor.12fa8767.js";import"./use-refs.1bd4ff6f.js";import"./index.1a890101.js";import"./index.f1bbf430.js";import"./index.d99a07cf.js";const o="van-empty-network-",a=(l,r,s)=>t("stop",{"stop-color":l,offset:`${r}%`,"stop-opacity":s},null),z=t("svg",{viewBox:"0 0 160 160"},[t("defs",null,[t("linearGradient",{id:`${o}1`,x1:"64%",y1:"100%",x2:"64%"},[a("#FFF",0,.5),a("#F2F3F5",100)]),t("linearGradient",{id:`${o}2`,x1:"50%",x2:"50%",y2:"84%"},[a("#EBEDF0",0),a("#DCDEE0",100,0)]),t("linearGradient",{id:`${o}3`,x1:"100%",x2:"100%",y2:"100%"},[a("#EAEDF0",0),a("#DCDEE0",100)]),t("radialGradient",{id:`${o}4`,cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54 0 .5 -.5)"},[a("#EBEDF0",0),a("#FFF",100,0)])]),t("g",{fill:"none"},[t("g",{opacity:".8"},[t("path",{d:"M36 131V53H16v20H2v58h34z",fill:`url(#${o}1)`},null),t("path",{d:"M123 15h22v14h9v77h-31V15z",fill:`url(#${o}1)`},null)]),t("path",{fill:`url(#${o}4)`,d:"M0 139h160v21H0z"},null),t("path",{d:"M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",fill:`url(#${o}2)`},null),t("g",{opacity:".6","stroke-linecap":"round","stroke-width":"7"},[t("path",{d:"M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",stroke:`url(#${o}3)`},null),t("path",{d:"M53 36a34 34 0 0 0 0 48",stroke:`url(#${o}3)`},null),t("path",{d:"M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",stroke:`url(#${o}3)`},null),t("path",{d:"M106 84a34 34 0 0 0 0-48",stroke:`url(#${o}3)`},null)]),t("g",{transform:"translate(31 105)"},[t("rect",{fill:"#EBEDF0",width:"98",height:"34",rx:"2"},null),t("rect",{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.1"},null),t("rect",{fill:"#EBEDF0",x:"15",y:"12",width:"18",height:"6",rx:"1.1"},null)])])]),[T,p]=h("empty"),M=["error","search","default"],I={image:F("default"),imageSize:_,description:String};var A=f({name:T,props:I,setup(l,{slots:r}){const s=()=>{if(r.image)return r.image();let{image:i}=l;return i==="network"?z:(M.includes(i)&&(i=`https://img.yzcdn.cn/vant/empty-image-${i}.png`),t("img",{src:i},null))},d=()=>{const i=r.description?r.description():l.description;if(i)return t("p",{class:p("description")},[i])},c=()=>{if(r.default)return t("div",{class:p("bottom")},[r.default()])};return()=>t("div",{class:p()},[t("div",{class:p("image"),style:E(l.imageSize)},[s()]),d(),c()])}});const u=v(A);const Z=f({setup(l){const r=y({"zh-CN":{error:"\u901A\u7528\u9519\u8BEF",search:"\u641C\u7D22\u63D0\u793A",network:"\u7F51\u7EDC\u9519\u8BEF",imageType:"\u56FE\u7247\u7C7B\u578B",description:"\u63CF\u8FF0\u6587\u5B57",customImage:"\u81EA\u5B9A\u4E49\u56FE\u7247",bottomContent:"\u5E95\u90E8\u5185\u5BB9"},"en-US":{error:"Error",search:"Search",network:"Network",imageType:"Image Type",description:"Description",customImage:"Custom Image",bottomContent:"Bottom Content"}}),s=x("error");return(d,c)=>{const i=k("demo-block");return B(),w($,null,[t(i,{title:e(r)("basicUsage")},{default:n(()=>[t(e(u),{description:e(r)("description")},null,8,["description"])]),_:1},8,["title"]),t(i,{title:e(r)("imageType")},{default:n(()=>[t(e(b),{active:s.value,"onUpdate:active":c[0]||(c[0]=g=>s.value=g)},{default:n(()=>[t(e(m),{name:"error",title:e(r)("error")},{default:n(()=>[t(e(u),{image:"error",description:e(r)("description")},null,8,["description"])]),_:1},8,["title"]),t(e(m),{name:"network",title:e(r)("network")},{default:n(()=>[t(e(u),{image:"network",description:e(r)("description")},null,8,["description"])]),_:1},8,["title"]),t(e(m),{name:"search",title:e(r)("search")},{default:n(()=>[t(e(u),{image:"search",description:e(r)("description")},null,8,["description"])]),_:1},8,["title"])]),_:1},8,["active"])]),_:1},8,["title"]),t(i,{title:e(r)("customImage")},{default:n(()=>[t(e(u),{class:"custom-image",image:"https://img.yzcdn.cn/vant/custom-empty-image.png",description:e(r)("description")},null,8,["description"])]),_:1},8,["title"]),t(i,{title:e(r)("bottomContent")},{default:n(()=>[t(e(u),{description:e(r)("description")},{default:n(()=>[t(e(S),{round:"",type:"danger",class:"bottom-button"},{default:n(()=>[D(C(e(r)("button")),1)]),_:1})]),_:1},8,["description"])]),_:1},8,["title"])],64)}}});export{Z as default};
