import{A as P,y as ue,z as re,B as se,C as ie,D as ve,f as be,n as ce}from"./index.e3eb1b72.js";import{d as g,o as v,m as c,b as p,a as m,F as y,q as x,u as s,Z as I,n as S,t as B,_ as de,j as D,r as L,w as pe,c as $,g as he,v as k,$ as Ce,a0 as Se,a1 as Ne,k as ze,l as me,s as O,a2 as Ue,D as F,N as G,a3 as K,K as ge,C as j,a4 as ye,a5 as ke,a6 as we,a7 as fe,E as _e,G as Pe}from"./vendor.5b1e10fa.js";import{u as R,s as Be,a as De,b as H,g as Le,c as Te,_ as Ae,l as Ee,d as xe,e as Ie,f as $e,h as Fe}from"./index.c8e71943.js";const Re={class:"console-panel-nav"},Ve={class:"console-panel-nav__group-title"},Me=["id"],Oe=g({props:{options:null,loading:{type:Boolean}},setup(r){const a=r;return(e,t)=>(v(),c("div",Re,[p(s(I),{show:a.loading},{default:m(()=>[(v(!0),c(y,null,x(a.options,n=>(v(),c("div",{class:"console-panel-nav__group",key:n.value},[S("div",Ve,B(n.label),1),(v(!0),c(y,null,x(n.children,o=>(v(),c("div",{class:"console-panel-nav__group-item",key:o.value,id:`nav-${o.value}`},[p(s(de),{to:o.value,"active-class":"active"},{default:m(()=>[D(B(o.label),1)]),_:2},1032,["to"])],8,Me))),128))]))),128))]),_:1},8,["show"])]))}}),Ge={class:"console-panel-mobile"},Ke={class:"console-panel-mobile__container"},je=["src"],He=g({props:{src:null,loading:{type:Boolean}},emits:["load"],setup(r,{emit:a}){const e=r;return(t,n)=>(v(),c("div",Ge,[S("div",Ke,[p(s(I),{show:e.loading},{default:m(()=>[S("iframe",{src:e.src,onLoad:n[0]||(n[0]=o=>a("load"))},null,40,je)]),_:1},8,["show"])])]))}}),We=g({props:{type:null,index:null,label:null,value:null},emits:["complete"],setup(r,{emit:a}){const e=r,t=L(e.value),n=async o=>{const{type:l,index:i,label:N}=e;a("complete",{type:l,index:i,label:N,value:o})};return pe(()=>{t.value=e.value}),(o,l)=>(v(),c(y,null,[e.type==="n-input"?(v(),$(s(he),{key:0,type:"text",value:t.value,"onUpdate:value":l[0]||(l[0]=i=>t.value=i),onChange:n},null,8,["value"])):k("",!0),e.type==="n-color-picker"?(v(),$(s(Ce),{key:1,modes:["rgb","hex","hsl","hsv"],value:t.value,"onUpdate:value":l[1]||(l[1]=i=>t.value=i),onComplete:n},null,8,["value"])):k("",!0)],64))}}),qe={class:"console-panel-var"},Ze={class:"console-panel-var__container"},Je={key:0,class:"console-panel-var-list"},Qe={key:1,class:"console-panel-var-no-var"},Xe=g({props:{options:null},emits:["complete"],setup(r,{emit:a}){const e=r;return(t,n)=>(v(),c("div",qe,[S("div",Ze,[e.options&&e.options.children&&e.options.children.length>0?(v(),c("div",Je,[(v(!0),c(y,null,x(e.options.children,(o,l)=>(v(),c("div",{class:"console-panel-var__group__item",key:`${o.label}`},[p(s(Se),{class:"console-panel-var__group__item-var-name"},{default:m(()=>[D(B(o.label),1)]),_:2},1024),p(We,{type:o.type,index:l,label:o.label,value:o.value,onComplete:n[0]||(n[0]=i=>a("complete",i))},null,8,["type","index","label","value"])]))),128))])):(v(),c("p",Qe,"\u6CA1\u6709\u6837\u5F0F\u53D8\u91CF"))])]))}}),Ye="group",el="\u57FA\u7840\u6837\u5F0F\u53D8\u91CF",ll="base group",al=[{label:"\u57FA\u7840\u6837\u5F0F",value:"/zh-CN"}];var tl={type:Ye,label:el,value:ll,children:al},nl=[{type:"group",label:"\u57FA\u7840\u7EC4\u4EF6",value:"\u57FA\u7840\u7EC4\u4EF6",children:[{label:"Button \u6309\u94AE",value:"/zh-CN/button"},{label:"Cell \u5355\u5143\u683C",value:"/zh-CN/cell"},{label:"Icon \u56FE\u6807",value:"/zh-CN/icon"},{label:"Image \u56FE\u7247",value:"/zh-CN/image"},{label:"Layout \u5E03\u5C40",value:"/zh-CN/col"},{label:"Popup \u5F39\u51FA\u5C42",value:"/zh-CN/popup"},{label:"Style \u5185\u7F6E\u6837\u5F0F",value:"/zh-CN/style"},{label:"Toast \u8F7B\u63D0\u793A",value:"/zh-CN/toast"}]},{type:"group",label:"\u8868\u5355\u7EC4\u4EF6",value:"\u8868\u5355\u7EC4\u4EF6",children:[{label:"Calendar \u65E5\u5386",value:"/zh-CN/calendar"},{label:"Cascader \u7EA7\u8054\u9009\u62E9",value:"/zh-CN/cascader"},{label:"Checkbox \u590D\u9009\u6846",value:"/zh-CN/checkbox"},{label:"DatetimePicker \u65F6\u95F4\u9009\u62E9",value:"/zh-CN/datetime-picker"},{label:"Field \u8F93\u5165\u6846",value:"/zh-CN/field"},{label:"Form \u8868\u5355",value:"/zh-CN/form"},{label:"NumberKeyboard \u6570\u5B57\u952E\u76D8",value:"/zh-CN/number-keyboard"},{label:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846",value:"/zh-CN/password-input"},{label:"Picker \u9009\u62E9\u5668",value:"/zh-CN/picker"},{label:"Radio \u5355\u9009\u6846",value:"/zh-CN/radio"},{label:"Rate \u8BC4\u5206",value:"/zh-CN/rate"},{label:"Search \u641C\u7D22",value:"/zh-CN/search"},{label:"Slider \u6ED1\u5757",value:"/zh-CN/slider"},{label:"Stepper \u6B65\u8FDB\u5668",value:"/zh-CN/stepper"},{label:"Switch \u5F00\u5173",value:"/zh-CN/switch"},{label:"Uploader \u6587\u4EF6\u4E0A\u4F20",value:"/zh-CN/uploader"}]},{type:"group",label:"\u53CD\u9988\u7EC4\u4EF6",value:"\u53CD\u9988\u7EC4\u4EF6",children:[{label:"ActionSheet \u52A8\u4F5C\u9762\u677F",value:"/zh-CN/action-sheet"},{label:"Dialog \u5F39\u51FA\u6846",value:"/zh-CN/dialog"},{label:"DropdownMenu \u4E0B\u62C9\u83DC\u5355",value:"/zh-CN/dropdown-menu"},{label:"Loading \u52A0\u8F7D",value:"/zh-CN/loading"},{label:"Notify \u6D88\u606F\u901A\u77E5",value:"/zh-CN/notify"},{label:"Overlay \u906E\u7F69\u5C42",value:"/zh-CN/overlay"},{label:"PullRefresh \u4E0B\u62C9\u5237\u65B0",value:"/zh-CN/pull-refresh"},{label:"ShareSheet \u5206\u4EAB\u9762\u677F",value:"/zh-CN/share-sheet"},{label:"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C",value:"/zh-CN/swipe-cell"}]},{type:"group",label:"\u5C55\u793A\u7EC4\u4EF6",value:"\u5C55\u793A\u7EC4\u4EF6",children:[{label:"Badge \u5FBD\u6807",value:"/zh-CN/badge"},{label:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761",value:"/zh-CN/circle"},{label:"Collapse \u6298\u53E0\u9762\u677F",value:"/zh-CN/collapse"},{label:"CountDown \u5012\u8BA1\u65F6",value:"/zh-CN/count-down"},{label:"Divider \u5206\u5272\u7EBF",value:"/zh-CN/divider"},{label:"Empty \u7A7A\u72B6\u6001",value:"/zh-CN/empty"},{label:"ImagePreview \u56FE\u7247\u9884\u89C8",value:"/zh-CN/image-preview"},{label:"Lazyload \u61D2\u52A0\u8F7D",value:"/zh-CN/lazyload"},{label:"List \u5217\u8868",value:"/zh-CN/list"},{label:"NoticeBar \u901A\u77E5\u680F",value:"/zh-CN/notice-bar"},{label:"Popover \u6C14\u6CE1\u5F39\u51FA\u6846",value:"/zh-CN/popover"},{label:"Progress \u8FDB\u5EA6\u6761",value:"/zh-CN/progress"},{label:"Skeleton \u9AA8\u67B6\u5C4F",value:"/zh-CN/skeleton"},{label:"Steps \u6B65\u9AA4\u6761",value:"/zh-CN/steps"},{label:"Sticky \u7C98\u6027\u5E03\u5C40",value:"/zh-CN/sticky"},{label:"Swipe \u8F6E\u64AD",value:"/zh-CN/swipe"},{label:"Tag \u6807\u7B7E",value:"/zh-CN/tag"}]},{type:"group",label:"\u5BFC\u822A\u7EC4\u4EF6",value:"\u5BFC\u822A\u7EC4\u4EF6",children:[{label:"Grid \u5BAB\u683C",value:"/zh-CN/grid"},{label:"IndexBar \u7D22\u5F15\u680F",value:"/zh-CN/index-bar"},{label:"NavBar \u5BFC\u822A\u680F",value:"/zh-CN/nav-bar"},{label:"Pagination \u5206\u9875",value:"/zh-CN/pagination"},{label:"Sidebar \u4FA7\u8FB9\u5BFC\u822A",value:"/zh-CN/sidebar"},{label:"Tab \u6807\u7B7E\u9875",value:"/zh-CN/tab"},{label:"Tabbar \u6807\u7B7E\u680F",value:"/zh-CN/tabbar"},{label:"TreeSelect \u5206\u7C7B\u9009\u62E9",value:"/zh-CN/tree-select"}]},{type:"group",label:"\u4E1A\u52A1\u7EC4\u4EF6",value:"\u4E1A\u52A1\u7EC4\u4EF6",children:[{label:"AddressEdit \u5730\u5740\u7F16\u8F91",value:"/zh-CN/address-edit"},{label:"AddressList \u5730\u5740\u5217\u8868",value:"/zh-CN/address-list"},{label:"Area \u7701\u5E02\u533A\u9009\u62E9",value:"/zh-CN/area"},{label:"Card \u5546\u54C1\u5361\u7247",value:"/zh-CN/card"},{label:"ContactCard \u8054\u7CFB\u4EBA\u5361\u7247",value:"/zh-CN/contact-card"},{label:"ContactEdit \u8054\u7CFB\u4EBA\u7F16\u8F91",value:"/zh-CN/contact-edit"},{label:"ContactList \u8054\u7CFB\u4EBA\u5217\u8868",value:"/zh-CN/contact-list"},{label:"Coupon \u4F18\u60E0\u5238",value:"/zh-CN/coupon-list"},{label:"GoodsAction \u5546\u54C1\u5BFC\u822A",value:"/zh-CN/goods-action"},{label:"SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F",value:"/zh-CN/submit-bar"},{label:"Sku \u5546\u54C1\u89C4\u683C",value:"/zh-CN/sku"}]}],ol=[{type:"group",label:"\u57FA\u7840\u7EC4\u4EF6",value:"\u57FA\u7840\u7EC4\u4EF6",children:[{label:"Button \u6309\u94AE",value:"/zh-CN/button"},{label:"Cell \u5355\u5143\u683C",value:"/zh-CN/cell"},{label:"ConfigProvider \u5168\u5C40\u914D\u7F6E",value:"/zh-CN/config-provider"},{label:"Icon \u56FE\u6807",value:"/zh-CN/icon"},{label:"Image \u56FE\u7247",value:"/zh-CN/image"},{label:"Layout \u5E03\u5C40",value:"/zh-CN/col"},{label:"Popup \u5F39\u51FA\u5C42",value:"/zh-CN/popup"},{label:"Style \u5185\u7F6E\u6837\u5F0F",value:"/zh-CN/style"},{label:"Toast \u8F7B\u63D0\u793A",value:"/zh-CN/toast"}]},{type:"group",label:"\u8868\u5355\u7EC4\u4EF6",value:"\u8868\u5355\u7EC4\u4EF6",children:[{label:"Calendar \u65E5\u5386",value:"/zh-CN/calendar"},{label:"Cascader \u7EA7\u8054\u9009\u62E9",value:"/zh-CN/cascader"},{label:"Checkbox \u590D\u9009\u6846",value:"/zh-CN/checkbox"},{label:"DatetimePicker \u65F6\u95F4\u9009\u62E9",value:"/zh-CN/datetime-picker"},{label:"Field \u8F93\u5165\u6846",value:"/zh-CN/field"},{label:"Form \u8868\u5355",value:"/zh-CN/form"},{label:"NumberKeyboard \u6570\u5B57\u952E\u76D8",value:"/zh-CN/number-keyboard"},{label:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846",value:"/zh-CN/password-input"},{label:"Picker \u9009\u62E9\u5668",value:"/zh-CN/picker"},{label:"Radio \u5355\u9009\u6846",value:"/zh-CN/radio"},{label:"Rate \u8BC4\u5206",value:"/zh-CN/rate"},{label:"Search \u641C\u7D22",value:"/zh-CN/search"},{label:"Slider \u6ED1\u5757",value:"/zh-CN/slider"},{label:"Stepper \u6B65\u8FDB\u5668",value:"/zh-CN/stepper"},{label:"Switch \u5F00\u5173",value:"/zh-CN/switch"},{label:"Uploader \u6587\u4EF6\u4E0A\u4F20",value:"/zh-CN/uploader"}]},{type:"group",label:"\u53CD\u9988\u7EC4\u4EF6",value:"\u53CD\u9988\u7EC4\u4EF6",children:[{label:"ActionSheet \u52A8\u4F5C\u9762\u677F",value:"/zh-CN/action-sheet"},{label:"Dialog \u5F39\u51FA\u6846",value:"/zh-CN/dialog"},{label:"DropdownMenu \u4E0B\u62C9\u83DC\u5355",value:"/zh-CN/dropdown-menu"},{label:"Loading \u52A0\u8F7D",value:"/zh-CN/loading"},{label:"Notify \u6D88\u606F\u901A\u77E5",value:"/zh-CN/notify"},{label:"Overlay \u906E\u7F69\u5C42",value:"/zh-CN/overlay"},{label:"PullRefresh \u4E0B\u62C9\u5237\u65B0",value:"/zh-CN/pull-refresh"},{label:"ShareSheet \u5206\u4EAB\u9762\u677F",value:"/zh-CN/share-sheet"},{label:"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C",value:"/zh-CN/swipe-cell"}]},{type:"group",label:"\u5C55\u793A\u7EC4\u4EF6",value:"\u5C55\u793A\u7EC4\u4EF6",children:[{label:"Badge \u5FBD\u6807",value:"/zh-CN/badge"},{label:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761",value:"/zh-CN/circle"},{label:"Collapse \u6298\u53E0\u9762\u677F",value:"/zh-CN/collapse"},{label:"CountDown \u5012\u8BA1\u65F6",value:"/zh-CN/count-down"},{label:"Divider \u5206\u5272\u7EBF",value:"/zh-CN/divider"},{label:"Empty \u7A7A\u72B6\u6001",value:"/zh-CN/empty"},{label:"ImagePreview \u56FE\u7247\u9884\u89C8",value:"/zh-CN/image-preview"},{label:"Lazyload \u61D2\u52A0\u8F7D",value:"/zh-CN/lazyload"},{label:"List \u5217\u8868",value:"/zh-CN/list"},{label:"NoticeBar \u901A\u77E5\u680F",value:"/zh-CN/notice-bar"},{label:"Popover \u6C14\u6CE1\u5F39\u51FA\u6846",value:"/zh-CN/popover"},{label:"Progress \u8FDB\u5EA6\u6761",value:"/zh-CN/progress"},{label:"Skeleton \u9AA8\u67B6\u5C4F",value:"/zh-CN/skeleton"},{label:"Steps \u6B65\u9AA4\u6761",value:"/zh-CN/steps"},{label:"Sticky \u7C98\u6027\u5E03\u5C40",value:"/zh-CN/sticky"},{label:"Swipe \u8F6E\u64AD",value:"/zh-CN/swipe"},{label:"Tag \u6807\u7B7E",value:"/zh-CN/tag"}]},{type:"group",label:"\u5BFC\u822A\u7EC4\u4EF6",value:"\u5BFC\u822A\u7EC4\u4EF6",children:[{label:"ActionBar \u52A8\u4F5C\u680F",value:"/zh-CN/action-bar"},{label:"Grid \u5BAB\u683C",value:"/zh-CN/grid"},{label:"IndexBar \u7D22\u5F15\u680F",value:"/zh-CN/index-bar"},{label:"NavBar \u5BFC\u822A\u680F",value:"/zh-CN/nav-bar"},{label:"Pagination \u5206\u9875",value:"/zh-CN/pagination"},{label:"Sidebar \u4FA7\u8FB9\u5BFC\u822A",value:"/zh-CN/sidebar"},{label:"Tab \u6807\u7B7E\u9875",value:"/zh-CN/tab"},{label:"Tabbar \u6807\u7B7E\u680F",value:"/zh-CN/tabbar"},{label:"TreeSelect \u5206\u7C7B\u9009\u62E9",value:"/zh-CN/tree-select"}]},{type:"group",label:"\u4E1A\u52A1\u7EC4\u4EF6",value:"\u4E1A\u52A1\u7EC4\u4EF6",children:[{label:"AddressEdit \u5730\u5740\u7F16\u8F91",value:"/zh-CN/address-edit"},{label:"AddressList \u5730\u5740\u5217\u8868",value:"/zh-CN/address-list"},{label:"Area \u7701\u5E02\u533A\u9009\u62E9",value:"/zh-CN/area"},{label:"Card \u5546\u54C1\u5361\u7247",value:"/zh-CN/card"},{label:"ContactCard \u8054\u7CFB\u4EBA\u5361\u7247",value:"/zh-CN/contact-card"},{label:"ContactEdit \u8054\u7CFB\u4EBA\u7F16\u8F91",value:"/zh-CN/contact-edit"},{label:"ContactList \u8054\u7CFB\u4EBA\u5217\u8868",value:"/zh-CN/contact-list"},{label:"Coupon \u4F18\u60E0\u5238",value:"/zh-CN/coupon-list"},{label:"SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F",value:"/zh-CN/submit-bar"}]}],ul=[{type:"group",label:"\u57FA\u7840\u7EC4\u4EF6",value:"\u57FA\u7840\u7EC4\u4EF6",children:[{label:"Button \u6309\u94AE",value:"/zh-CN/button"},{label:"Cell \u5355\u5143\u683C",value:"/zh-CN/cell"},{label:"ConfigProvider \u5168\u5C40\u914D\u7F6E",value:"/zh-CN/config-provider"},{label:"Icon \u56FE\u6807",value:"/zh-CN/icon"},{label:"Image \u56FE\u7247",value:"/zh-CN/image"},{label:"Layout \u5E03\u5C40",value:"/zh-CN/col"},{label:"Popup \u5F39\u51FA\u5C42",value:"/zh-CN/popup"},{label:"Style \u5185\u7F6E\u6837\u5F0F",value:"/zh-CN/style"},{label:"Toast \u8F7B\u63D0\u793A",value:"/zh-CN/toast"}]},{type:"group",label:"\u8868\u5355\u7EC4\u4EF6",value:"\u8868\u5355\u7EC4\u4EF6",children:[{label:"Calendar \u65E5\u5386",value:"/zh-CN/calendar"},{label:"Cascader \u7EA7\u8054\u9009\u62E9",value:"/zh-CN/cascader"},{label:"Checkbox \u590D\u9009\u6846",value:"/zh-CN/checkbox"},{label:"DatePicker \u65E5\u671F\u9009\u62E9",value:"/zh-CN/date-picker"},{label:"Field \u8F93\u5165\u6846",value:"/zh-CN/field"},{label:"Form \u8868\u5355",value:"/zh-CN/form"},{label:"NumberKeyboard \u6570\u5B57\u952E\u76D8",value:"/zh-CN/number-keyboard"},{label:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846",value:"/zh-CN/password-input"},{label:"Picker \u9009\u62E9\u5668",value:"/zh-CN/picker"},{label:"Radio \u5355\u9009\u6846",value:"/zh-CN/radio"},{label:"Rate \u8BC4\u5206",value:"/zh-CN/rate"},{label:"Search \u641C\u7D22",value:"/zh-CN/search"},{label:"Slider \u6ED1\u5757",value:"/zh-CN/slider"},{label:"Stepper \u6B65\u8FDB\u5668",value:"/zh-CN/stepper"},{label:"Switch \u5F00\u5173",value:"/zh-CN/switch"},{label:"TimePicker \u65F6\u95F4\u9009\u62E9",value:"/zh-CN/time-picker"},{label:"Uploader \u6587\u4EF6\u4E0A\u4F20",value:"/zh-CN/uploader"}]},{type:"group",label:"\u53CD\u9988\u7EC4\u4EF6",value:"\u53CD\u9988\u7EC4\u4EF6",children:[{label:"ActionSheet \u52A8\u4F5C\u9762\u677F",value:"/zh-CN/action-sheet"},{label:"Dialog \u5F39\u51FA\u6846",value:"/zh-CN/dialog"},{label:"DropdownMenu \u4E0B\u62C9\u83DC\u5355",value:"/zh-CN/dropdown-menu"},{label:"Loading \u52A0\u8F7D",value:"/zh-CN/loading"},{label:"Notify \u6D88\u606F\u901A\u77E5",value:"/zh-CN/notify"},{label:"Overlay \u906E\u7F69\u5C42",value:"/zh-CN/overlay"},{label:"PullRefresh \u4E0B\u62C9\u5237\u65B0",value:"/zh-CN/pull-refresh"},{label:"ShareSheet \u5206\u4EAB\u9762\u677F",value:"/zh-CN/share-sheet"},{label:"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C",value:"/zh-CN/swipe-cell"}]},{type:"group",label:"\u5C55\u793A\u7EC4\u4EF6",value:"\u5C55\u793A\u7EC4\u4EF6",children:[{label:"Badge \u5FBD\u6807",value:"/zh-CN/badge"},{label:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761",value:"/zh-CN/circle"},{label:"Collapse \u6298\u53E0\u9762\u677F",value:"/zh-CN/collapse"},{label:"CountDown \u5012\u8BA1\u65F6",value:"/zh-CN/count-down"},{label:"Divider \u5206\u5272\u7EBF",value:"/zh-CN/divider"},{label:"Empty \u7A7A\u72B6\u6001",value:"/zh-CN/empty"},{label:"ImagePreview \u56FE\u7247\u9884\u89C8",value:"/zh-CN/image-preview"},{label:"Lazyload \u61D2\u52A0\u8F7D",value:"/zh-CN/lazyload"},{label:"List \u5217\u8868",value:"/zh-CN/list"},{label:"NoticeBar \u901A\u77E5\u680F",value:"/zh-CN/notice-bar"},{label:"Popover \u6C14\u6CE1\u5F39\u51FA\u6846",value:"/zh-CN/popover"},{label:"Progress \u8FDB\u5EA6\u6761",value:"/zh-CN/progress"},{label:"Skeleton \u9AA8\u67B6\u5C4F",value:"/zh-CN/skeleton"},{label:"Steps \u6B65\u9AA4\u6761",value:"/zh-CN/steps"},{label:"Sticky \u7C98\u6027\u5E03\u5C40",value:"/zh-CN/sticky"},{label:"Swipe \u8F6E\u64AD",value:"/zh-CN/swipe"},{label:"Tag \u6807\u7B7E",value:"/zh-CN/tag"}]},{type:"group",label:"\u5BFC\u822A\u7EC4\u4EF6",value:"\u5BFC\u822A\u7EC4\u4EF6",children:[{label:"ActionBar \u52A8\u4F5C\u680F",value:"/zh-CN/action-bar"},{label:"Grid \u5BAB\u683C",value:"/zh-CN/grid"},{label:"IndexBar \u7D22\u5F15\u680F",value:"/zh-CN/index-bar"},{label:"NavBar \u5BFC\u822A\u680F",value:"/zh-CN/nav-bar"},{label:"Pagination \u5206\u9875",value:"/zh-CN/pagination"},{label:"Sidebar \u4FA7\u8FB9\u5BFC\u822A",value:"/zh-CN/sidebar"},{label:"Tab \u6807\u7B7E\u9875",value:"/zh-CN/tab"},{label:"Tabbar \u6807\u7B7E\u680F",value:"/zh-CN/tabbar"},{label:"TreeSelect \u5206\u7C7B\u9009\u62E9",value:"/zh-CN/tree-select"}]},{type:"group",label:"\u4E1A\u52A1\u7EC4\u4EF6",value:"\u4E1A\u52A1\u7EC4\u4EF6",children:[{label:"AddressEdit \u5730\u5740\u7F16\u8F91",value:"/zh-CN/address-edit"},{label:"AddressList \u5730\u5740\u5217\u8868",value:"/zh-CN/address-list"},{label:"Area \u7701\u5E02\u533A\u9009\u62E9",value:"/zh-CN/area"},{label:"Card \u5546\u54C1\u5361\u7247",value:"/zh-CN/card"},{label:"ContactCard \u8054\u7CFB\u4EBA\u5361\u7247",value:"/zh-CN/contact-card"},{label:"ContactEdit \u8054\u7CFB\u4EBA\u7F16\u8F91",value:"/zh-CN/contact-edit"},{label:"ContactList \u8054\u7CFB\u4EBA\u5217\u8868",value:"/zh-CN/contact-list"},{label:"Coupon \u4F18\u60E0\u5238",value:"/zh-CN/coupon-list"},{label:"SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F",value:"/zh-CN/submit-bar"}]}];const rl="group",sl="Basic Css Variables",il="base group",vl=[{label:"Base",value:"/en-US"}];var bl={type:rl,label:sl,value:il,children:vl},cl=[{type:"group",label:"Basic Components",value:"Basic Components",children:[{label:"Button",value:"/en-US/button"},{label:"Cell",value:"/en-US/cell"},{label:"Icon",value:"/en-US/icon"},{label:"Image",value:"/en-US/image"},{label:"Layout",value:"/en-US/col"},{label:"Popup",value:"/en-US/popup"},{label:"Built-in style",value:"/en-US/style"},{label:"Toast",value:"/en-US/toast"}]},{type:"group",label:"Form Components",value:"Form Components",children:[{label:"Calendar",value:"/en-US/calendar"},{label:"Cascader",value:"/en-US/cascader"},{label:"Checkbox",value:"/en-US/checkbox"},{label:"DatetimePicker",value:"/en-US/datetime-picker"},{label:"Field",value:"/en-US/field"},{label:"Form",value:"/en-US/form"},{label:"NumberKeyboard",value:"/en-US/number-keyboard"},{label:"PasswordInput",value:"/en-US/password-input"},{label:"Picker",value:"/en-US/picker"},{label:"Radio",value:"/en-US/radio"},{label:"Rate",value:"/en-US/rate"},{label:"Search",value:"/en-US/search"},{label:"Slider",value:"/en-US/slider"},{label:"Stepper",value:"/en-US/stepper"},{label:"Switch",value:"/en-US/switch"},{label:"SwitchCell",value:"/en-US/switch-cell"},{label:"Uploader",value:"/en-US/uploader"}]},{type:"group",label:"Action Components",value:"Action Components",children:[{label:"ActionSheet",value:"/en-US/action-sheet"},{label:"Dialog",value:"/en-US/dialog"},{label:"DropdownMenu",value:"/en-US/dropdown-menu"},{label:"Loading",value:"/en-US/loading"},{label:"Notify",value:"/en-US/notify"},{label:"Overlay",value:"/en-US/overlay"},{label:"PullRefresh",value:"/en-US/pull-refresh"},{label:"ShareSheet",value:"/en-US/share-sheet"},{label:"SwipeCell",value:"/en-US/swipe-cell"}]},{type:"group",label:"Display Components",value:"Display Components",children:[{label:"Badge",value:"/en-US/badge"},{label:"Circle",value:"/en-US/circle"},{label:"Collapse",value:"/en-US/collapse"},{label:"CountDown",value:"/en-US/count-down"},{label:"Divider",value:"/en-US/divider"},{label:"Empty",value:"/en-US/empty"},{label:"ImagePreview",value:"/en-US/image-preview"},{label:"Lazyload",value:"/en-US/lazyload"},{label:"List",value:"/en-US/list"},{label:"NoticeBar",value:"/en-US/notice-bar"},{label:"Popover",value:"/en-US/popover"},{label:"Progress",value:"/en-US/progress"},{label:"Skeleton",value:"/en-US/skeleton"},{label:"Steps",value:"/en-US/steps"},{label:"Sticky",value:"/en-US/sticky"},{label:"Swipe",value:"/en-US/swipe"},{label:"Tag",value:"/en-US/tag"}]},{type:"group",label:"Navigation Components",value:"Navigation Components",children:[{label:"Grid",value:"/en-US/grid"},{label:"IndexBar",value:"/en-US/index-bar"},{label:"NavBar",value:"/en-US/nav-bar"},{label:"Pagination",value:"/en-US/pagination"},{label:"Sidebar",value:"/en-US/sidebar"},{label:"Tab",value:"/en-US/tab"},{label:"Tabbar",value:"/en-US/tabbar"},{label:"TreeSelect",value:"/en-US/tree-select"}]},{type:"group",label:"Business Components",value:"Business Components",children:[{label:"AddressEdit",value:"/en-US/address-edit"},{label:"AddressList",value:"/en-US/address-list"},{label:"Area",value:"/en-US/area"},{label:"Card",value:"/en-US/card"},{label:"ContactCard",value:"/en-US/contact-card"},{label:"ContactEdit",value:"/en-US/contact-edit"},{label:"ContactList",value:"/en-US/contact-list"},{label:"Coupon",value:"/en-US/coupon-list"},{label:"GoodsAction",value:"/en-US/goods-action"},{label:"SubmitBar",value:"/en-US/submit-bar"},{label:"Sku",value:"/en-US/sku"}]}],dl=[{type:"group",label:"Basic Components",value:"Basic Components",children:[{label:"Button",value:"/en-US/button"},{label:"Cell",value:"/en-US/cell"},{label:"ConfigProvider",value:"/en-US/config-provider"},{label:"Icon",value:"/en-US/icon"},{label:"Image",value:"/en-US/image"},{label:"Layout",value:"/en-US/col"},{label:"Popup",value:"/en-US/popup"},{label:"Built-in style",value:"/en-US/style"},{label:"Toast",value:"/en-US/toast"}]},{type:"group",label:"Form Components",value:"Form Components",children:[{label:"Calendar",value:"/en-US/calendar"},{label:"Cascader",value:"/en-US/cascader"},{label:"Checkbox",value:"/en-US/checkbox"},{label:"DatetimePicker",value:"/en-US/datetime-picker"},{label:"Field",value:"/en-US/field"},{label:"Form",value:"/en-US/form"},{label:"NumberKeyboard",value:"/en-US/number-keyboard"},{label:"PasswordInput",value:"/en-US/password-input"},{label:"Picker",value:"/en-US/picker"},{label:"Radio",value:"/en-US/radio"},{label:"Rate",value:"/en-US/rate"},{label:"Search",value:"/en-US/search"},{label:"Slider",value:"/en-US/slider"},{label:"Stepper",value:"/en-US/stepper"},{label:"Switch",value:"/en-US/switch"},{label:"Uploader",value:"/en-US/uploader"}]},{type:"group",label:"Action Components",value:"Action Components",children:[{label:"ActionSheet",value:"/en-US/action-sheet"},{label:"Dialog",value:"/en-US/dialog"},{label:"DropdownMenu",value:"/en-US/dropdown-menu"},{label:"Loading",value:"/en-US/loading"},{label:"Notify",value:"/en-US/notify"},{label:"Overlay",value:"/en-US/overlay"},{label:"PullRefresh",value:"/en-US/pull-refresh"},{label:"ShareSheet",value:"/en-US/share-sheet"},{label:"SwipeCell",value:"/en-US/swipe-cell"}]},{type:"group",label:"Display Components",value:"Display Components",children:[{label:"Badge",value:"/en-US/badge"},{label:"Circle",value:"/en-US/circle"},{label:"Collapse",value:"/en-US/collapse"},{label:"CountDown",value:"/en-US/count-down"},{label:"Divider",value:"/en-US/divider"},{label:"Empty",value:"/en-US/empty"},{label:"ImagePreview",value:"/en-US/image-preview"},{label:"Lazyload",value:"/en-US/lazyload"},{label:"List",value:"/en-US/list"},{label:"NoticeBar",value:"/en-US/notice-bar"},{label:"Popover",value:"/en-US/popover"},{label:"Progress",value:"/en-US/progress"},{label:"Skeleton",value:"/en-US/skeleton"},{label:"Steps",value:"/en-US/steps"},{label:"Sticky",value:"/en-US/sticky"},{label:"Swipe",value:"/en-US/swipe"},{label:"Tag",value:"/en-US/tag"}]},{type:"group",label:"Navigation Components",value:"Navigation Components",children:[{label:"ActionBar",value:"/en-US/action-bar"},{label:"Grid",value:"/en-US/grid"},{label:"IndexBar",value:"/en-US/index-bar"},{label:"NavBar",value:"/en-US/nav-bar"},{label:"Pagination",value:"/en-US/pagination"},{label:"Sidebar",value:"/en-US/sidebar"},{label:"Tab",value:"/en-US/tab"},{label:"Tabbar",value:"/en-US/tabbar"},{label:"TreeSelect",value:"/en-US/tree-select"}]},{type:"group",label:"Business Components",value:"Business Components",children:[{label:"AddressEdit",value:"/en-US/address-edit"},{label:"AddressList",value:"/en-US/address-list"},{label:"Area",value:"/en-US/area"},{label:"Card",value:"/en-US/card"},{label:"ContactCard",value:"/en-US/contact-card"},{label:"ContactEdit",value:"/en-US/contact-edit"},{label:"ContactList",value:"/en-US/contact-list"},{label:"Coupon",value:"/en-US/coupon-list"},{label:"SubmitBar",value:"/en-US/submit-bar"}]}],pl=[{type:"group",label:"Basic Components",value:"Basic Components",children:[{label:"Button",value:"/en-US/button"},{label:"Cell",value:"/en-US/cell"},{label:"ConfigProvider",value:"/en-US/config-provider"},{label:"Icon",value:"/en-US/icon"},{label:"Image",value:"/en-US/image"},{label:"Layout",value:"/en-US/col"},{label:"Popup",value:"/en-US/popup"},{label:"Built-in style",value:"/en-US/style"},{label:"Toast",value:"/en-US/toast"}]},{type:"group",label:"Form Components",value:"Form Components",children:[{label:"Calendar",value:"/en-US/calendar"},{label:"Cascader",value:"/en-US/cascader"},{label:"Checkbox",value:"/en-US/checkbox"},{label:"DatePicker",value:"/en-US/date-picker"},{label:"Field",value:"/en-US/field"},{label:"Form",value:"/en-US/form"},{label:"NumberKeyboard",value:"/en-US/number-keyboard"},{label:"PasswordInput",value:"/en-US/password-input"},{label:"Picker",value:"/en-US/picker"},{label:"Radio",value:"/en-US/radio"},{label:"Rate",value:"/en-US/rate"},{label:"Search",value:"/en-US/search"},{label:"Slider",value:"/en-US/slider"},{label:"Stepper",value:"/en-US/stepper"},{label:"Switch",value:"/en-US/switch"},{label:"TimePicker",value:"/en-US/time-picker"},{label:"Uploader",value:"/en-US/uploader"}]},{type:"group",label:"Action Components",value:"Action Components",children:[{label:"ActionSheet",value:"/en-US/action-sheet"},{label:"Dialog",value:"/en-US/dialog"},{label:"DropdownMenu",value:"/en-US/dropdown-menu"},{label:"Loading",value:"/en-US/loading"},{label:"Notify",value:"/en-US/notify"},{label:"Overlay",value:"/en-US/overlay"},{label:"PullRefresh",value:"/en-US/pull-refresh"},{label:"ShareSheet",value:"/en-US/share-sheet"},{label:"SwipeCell",value:"/en-US/swipe-cell"}]},{type:"group",label:"Display Components",value:"Display Components",children:[{label:"Badge",value:"/en-US/badge"},{label:"Circle",value:"/en-US/circle"},{label:"Collapse",value:"/en-US/collapse"},{label:"CountDown",value:"/en-US/count-down"},{label:"Divider",value:"/en-US/divider"},{label:"Empty",value:"/en-US/empty"},{label:"ImagePreview",value:"/en-US/image-preview"},{label:"Lazyload",value:"/en-US/lazyload"},{label:"List",value:"/en-US/list"},{label:"NoticeBar",value:"/en-US/notice-bar"},{label:"Popover",value:"/en-US/popover"},{label:"Progress",value:"/en-US/progress"},{label:"Skeleton",value:"/en-US/skeleton"},{label:"Steps",value:"/en-US/steps"},{label:"Sticky",value:"/en-US/sticky"},{label:"Swipe",value:"/en-US/swipe"},{label:"Tag",value:"/en-US/tag"}]},{type:"group",label:"Navigation Components",value:"Navigation Components",children:[{label:"ActionBar",value:"/en-US/action-bar"},{label:"Grid",value:"/en-US/grid"},{label:"IndexBar",value:"/en-US/index-bar"},{label:"NavBar",value:"/en-US/nav-bar"},{label:"Pagination",value:"/en-US/pagination"},{label:"Sidebar",value:"/en-US/sidebar"},{label:"Tab",value:"/en-US/tab"},{label:"Tabbar",value:"/en-US/tabbar"},{label:"TreeSelect",value:"/en-US/tree-select"}]},{type:"group",label:"Business Components",value:"Business Components",children:[{label:"AddressEdit",value:"/en-US/address-edit"},{label:"AddressList",value:"/en-US/address-list"},{label:"Area",value:"/en-US/area"},{label:"Card",value:"/en-US/card"},{label:"ContactCard",value:"/en-US/contact-card"},{label:"ContactEdit",value:"/en-US/contact-edit"},{label:"ContactList",value:"/en-US/contact-list"},{label:"Coupon",value:"/en-US/coupon-list"},{label:"SubmitBar",value:"/en-US/submit-bar"}]}];const V=(r,a)=>{const e=r,t=a,n={"zh-CN":tl,"en-US":bl},o={"zh-CN":{v2:nl,v3:ol,v4:ul},"en-US":{v2:cl,v3:dl,v4:pl}},l=n[t],i=o[t][e];return[l,...i]},hl={key:0,class:"vant-theme-console-panel"},Cl={class:"console-panel-header"},Sl={class:"console-panel-header__top"},Nl={class:"console-panel-header__top-name"},zl={class:"console-panel-header__top-btn"},ml=D(" \u91CD\u7F6E\u6240\u6709 "),Ul=D(" \u4E0B\u8F7D\u4E3B\u9898 "),gl={class:"console-panel-container"},W=g({setup(r){const a=Ne(),e=R(),t=ze(),n=me(),{schemeColor:o,versionInfo:l,versionCurrentTheme:i,language:N,listenSyncPathState:w}=O(e),f=L(!0),_=L([]),A=`${P}src/page/mobile/${l.value.key}.html#/${N.value}`,d=L(!0);let U=[],h=Ue({label:"",value:"",children:[]});const J=()=>new Promise((u,z)=>{var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.href=se[l.value.key],document.head.appendChild(b),b.onload=function(){console.log("vant css loading complete"),e.setLoadVantCssState(!0),u()},b.onerror=function(){z()}}),Q=async()=>{U=await Le(l.value.key,N.value),console.log("current version all css variables:",U)},X=async()=>{const u=await V(l.value.key,N.value);_.value=u,f.value=!1,console.log("current menu:",u)},E=async()=>{var z;const u=[...U].filter(b=>b.value===a.path)[0];u?(u.children=(z=u.children)==null?void 0:z.map(b=>{const C=ie(b.label,l.value.key),oe=C.startsWith("#")||C.startsWith("rgba")||C.startsWith("hsl")?"n-color-picker":"n-input";return{label:b.label,value:C,type:oe}}),h.label=u.label,h.value=u.value,h.children=u.children):(h.label="",h.value="",h.children=[]),console.log("current component:",h)},Y=()=>{const u=ge(i.value.config);u&&(ve(u,l.value.key),setTimeout(()=>{Te(u,l.value.key)},0))},ee=u=>{const{index:z,label:b,value:C}=u;ue(b,C,l.value.key),Be({label:b,value:C},l.value.key),h.children&&(h.children[z].value=C),e.setVariables({[b]:C})},le=()=>{n.info({title:"\u63D0\u793A",content:"\u786E\u5B9A\u8981\u91CD\u7F6E\u5F53\u524D\u4E3B\u9898\u6240\u6709\u53D8\u91CF\u561B\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",maskClosable:!1,onPositiveClick:async()=>{re(l.value.key),De(l.value.key),e.clearVariables(i.value.id),K(()=>{E(),t.success("\u91CD\u7F6E\u6210\u529F")})}})},ae=()=>{const u=i.value.id;u&&e.downloadTheme(u).then(()=>{t.success("\u4E0B\u8F7D\u6210\u529F")})},te=async()=>{i.value?await J():t.error("\u4E3B\u9898\u4E0D\u5B58\u5728",{duration:1800,onLeave:()=>{e.clearCurrentConfigId(),window.location.href=`${P}`}})},ne=()=>{X(),Q().then(E),Y(),H(o.value),e.setIframeState(!0),e.setCreateRouteState(!0),d.value=!1};return te(),F(()=>a.path,()=>{w.value&&(E(),e.setListenSyncPathState(!1))}),F(()=>o.value,u=>{l.value.key!=="v4"&&u==="dark"&&(l.value.key,t.warning(`vant ${l.value.key} \u7248\u672C\u4E0D\u652F\u6301\u6DF1\u8272\u6A21\u5F0F`))},{immediate:!0}),(u,z)=>s(i)?(v(),c("div",hl,[S("div",Cl,[S("div",Sl,[S("div",Nl," \u5F53\u524D\u4E3B\u9898\uFF1A"+B(s(i).name),1),S("div",zl,[p(s(G),{type:"error",size:"small",onClick:le},{default:m(()=>[ml]),_:1}),p(s(G),{type:"info",size:"small",onClick:ae},{default:m(()=>[Ul]),_:1}),k("",!0)])])]),S("div",gl,[p(Oe,{options:_.value,loading:f.value},null,8,["options","loading"]),p(He,{src:A,loading:d.value,onLoad:ne},null,8,["loading"]),p(Xe,{options:s(h),onComplete:ee},null,8,["options"])])])):k("",!0)}});var yl=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));const kl=g({setup(r){const a=R(),{schemeColor:e,language:t,versionInfo:n,versionList:o,loadVantCssState:l,iframeState:i,createRouteState:N}=O(a),w=j(()=>({schemeColor:e.value,language:t.value})),f=j(()=>({title:n.value.title,subtitle:n.value.subtitle,links:be,schemeColor:e.value,version:n.value.key,versionList:o.value})),_=()=>{const d=e.value==="dark"?"light":"dark";a.setSchemeColor(d),H(d)},A=d=>{d.disabled||(a.setVersion(d),window.location.href=`${P}`)};return F(()=>e.value,(d,U)=>{a.setSchemeColor(d),document.body.classList.remove(`vant-theme-${U}`),document.body.classList.add(`vant-theme-${d}`)},{immediate:!0}),a.init(),(d,U)=>(v(),c(y,null,[!s(l)||!s(i)||!s(N)?(v(),$(s(I),{key:0,show:!0,class:"vant-theme-app-loading"})):k("",!0),ye(p(Ae,{app:s(w),header:s(f),router:!1,onSwitchSchemeColor:_,onSwitchVersion:A},{default:m(()=>[p(W)]),_:1},8,["app","header"]),[[ke,s(l)&&s(i)&&s(N)]])],64))}}),wl=Fe(),fl={path:"/",redirect:"/zh-CN"},_l=()=>{const r=wl.getItem(ce),a=V(r,"zh-CN"),e=V(r,"en-US"),t=q(a),n=q(e);return[fl,...t,...n]},q=r=>{const a=[];return r.forEach((e,t)=>{var n;(n=e.children)==null||n.forEach((o,l)=>{a.push({path:o.value,component:()=>Ie(()=>Promise.resolve().then(function(){return yl}),void 0),meta:{parentIndex:t,parentLabel:e.label,parentValue:e.value,index:l,label:o.label,value:o.value}})})}),a},T=we({history:fe(P),routes:_l()});T.afterEach(r=>{K(()=>{$e(),Z(".console-panel-nav",`nav-${r.path}`),Z(".console-panel-var",""),R().setListenSyncPathState(!0)})});Ee();xe(T);window.vueRouter=T;const Z=(r,a)=>{const e=document.querySelector(r),t=document.getElementById(a);e&&t&&(e.scrollTop=t.offsetTop-72),e&&!t&&(e.scrollTop=0)},M=_e(kl);M.use(Pe());M.use(T);M.mount("#app");
