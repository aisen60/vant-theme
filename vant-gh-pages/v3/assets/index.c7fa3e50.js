import{a as e,R as a}from"./index.a140bd5f.js";import{C as l}from"./index.94cab239.js";import{C as o}from"./index.8591e547.js";import{a as t}from"./use-translate.bf1abf23.js";import{B as d,G as u,r as i,a as s,f as m,w as r,D as n,F as c,o as f,i as p,t as _,e as b}from"./vendor.09b5b9a9.js";import"./with-install.af140ae3.js";import"./useChildren.692bc2bf.js";import"./index.e6355079.js";import"./Checker.90c07c2c.js";import"./unit.36efb2dd.js";import"./index.5afcfd01.js";import"./useParent.60a302fe.js";import"./constant.4d85ecb9.js";import"./use-route.bc60204d.js";const V=["src"],h=["src"];var v=d({setup(d){const v=t({"zh-CN":{radio:"单选框",text1:"未选中禁用",text2:"选中且禁用",withCell:"搭配单元格组件使用",horizontal:"水平排列",customIcon:"自定义图标",customColor:"自定义颜色",customShape:"自定义形状",customIconSize:"自定义大小",disableLabel:"禁用文本点击"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",withCell:"Inside a Cell",horizontal:"Hrizontal",customIcon:"Custom Icon",customColor:"Custom Color",customShape:"Custom Shape",customIconSize:"Custom Icon Size",disableLabel:"Disable label click"}}),C=u("1"),g=u("2"),j=u("1"),z=u("1"),k=u("1"),x=u("1"),U=u("1"),I=u("1"),S=u("1"),w="https://img.yzcdn.cn/vant/user-active.png",D="https://img.yzcdn.cn/vant/user-inactive.png";return(t,d)=>{const u=i("demo-block");return f(),s(c,null,[m(u,{title:n(v)("basicUsage")},{default:r((()=>[m(n(e),{modelValue:C.value,"onUpdate:modelValue":d[0]||(d[0]=e=>C.value=e),class:"demo-radio-group"},{default:r((()=>[m(n(a),{name:"1"},{default:r((()=>[p(_(n(v)("radio"))+" 1",1)])),_:1}),m(n(a),{name:"2"},{default:r((()=>[p(_(n(v)("radio"))+" 2",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),m(u,{title:n(v)("horizontal")},{default:r((()=>[m(n(e),{modelValue:S.value,"onUpdate:modelValue":d[1]||(d[1]=e=>S.value=e),class:"demo-radio-group",direction:"horizontal"},{default:r((()=>[m(n(a),{name:"1"},{default:r((()=>[p(_(n(v)("radio"))+" 1",1)])),_:1}),m(n(a),{name:"2"},{default:r((()=>[p(_(n(v)("radio"))+" 2",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),m(u,{title:n(v)("disabled")},{default:r((()=>[m(n(e),{modelValue:g.value,"onUpdate:modelValue":d[2]||(d[2]=e=>g.value=e),class:"demo-radio-group",disabled:""},{default:r((()=>[m(n(a),{name:"1"},{default:r((()=>[p(_(n(v)("radio"))+" 1",1)])),_:1}),m(n(a),{name:"2"},{default:r((()=>[p(_(n(v)("radio"))+" 2",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),m(u,{title:n(v)("customShape")},{default:r((()=>[m(n(e),{modelValue:U.value,"onUpdate:modelValue":d[3]||(d[3]=e=>U.value=e),class:"demo-radio-group"},{default:r((()=>[m(n(a),{name:"1",shape:"square"},{default:r((()=>[p(_(n(v)("radio"))+" 1",1)])),_:1}),m(n(a),{name:"2",shape:"square"},{default:r((()=>[p(_(n(v)("radio"))+" 2",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),m(u,{title:n(v)("customColor")},{default:r((()=>[m(n(e),{modelValue:j.value,"onUpdate:modelValue":d[4]||(d[4]=e=>j.value=e),class:"demo-radio-group"},{default:r((()=>[m(n(a),{name:"1","checked-color":"#ee0a24"},{default:r((()=>[p(_(n(v)("radio"))+" 1 ",1)])),_:1}),m(n(a),{name:"2","checked-color":"#ee0a24"},{default:r((()=>[p(_(n(v)("radio"))+" 2 ",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),m(u,{title:n(v)("customIconSize")},{default:r((()=>[m(n(e),{modelValue:I.value,"onUpdate:modelValue":d[5]||(d[5]=e=>I.value=e),class:"demo-radio-group"},{default:r((()=>[m(n(a),{name:"1","icon-size":"24px"},{default:r((()=>[p(_(n(v)("radio"))+" 1 ",1)])),_:1}),m(n(a),{name:"2","icon-size":"24px"},{default:r((()=>[p(_(n(v)("radio"))+" 2 ",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),m(u,{title:n(v)("customIcon")},{default:r((()=>[m(n(e),{modelValue:z.value,"onUpdate:modelValue":d[6]||(d[6]=e=>z.value=e),class:"demo-radio-group"},{default:r((()=>[m(n(a),{name:"1"},{icon:r((({checked:e})=>[b("img",{src:e?w:D},null,8,V)])),default:r((()=>[p(_(n(v)("radio"))+" 1 ",1)])),_:1}),m(n(a),{name:"2"},{icon:r((({checked:e})=>[b("img",{src:e?w:D},null,8,h)])),default:r((()=>[p(_(n(v)("radio"))+" 2 ",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),m(u,{title:n(v)("disableLabel")},{default:r((()=>[m(n(e),{modelValue:x.value,"onUpdate:modelValue":d[7]||(d[7]=e=>x.value=e),class:"demo-radio-group"},{default:r((()=>[m(n(a),{name:"1","label-disabled":""},{default:r((()=>[p(_(n(v)("radio"))+" 1",1)])),_:1}),m(n(a),{name:"2","label-disabled":""},{default:r((()=>[p(_(n(v)("radio"))+" 2",1)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"]),m(u,{title:n(v)("withCell")},{default:r((()=>[m(n(e),{modelValue:k.value,"onUpdate:modelValue":d[10]||(d[10]=e=>k.value=e)},{default:r((()=>[m(n(l),null,{default:r((()=>[m(n(o),{clickable:"",title:n(v)("radio")+1,onClick:d[8]||(d[8]=e=>k.value="1")},{"right-icon":r((()=>[m(n(a),{name:"1"})])),_:1},8,["title"]),m(n(o),{clickable:"",title:n(v)("radio")+2,onClick:d[9]||(d[9]=e=>k.value="2")},{"right-icon":r((()=>[m(n(a),{name:"2"})])),_:1},8,["title"])])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"])],64)}}});export{v as default};
