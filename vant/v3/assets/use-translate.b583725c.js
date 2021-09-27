import{E as e,G as a}from"./vendor.ef334a89.js";function t(){}const n=Object.assign,o="undefined"!=typeof window,s=null,d={type:Boolean,default:!0};function r(e,a){const t=a.split(".");let n=e;return t.forEach((e=>{var a;n=null!=(a=n[e])?a:""})),n}function l(e,a,t){return a.reduce(((a,n)=>(t&&void 0===e[n]||(a[n]=e[n]),a)),{})}const c=/-(\w)/g;function i(e){return e.replace(c,((e,a)=>a.toUpperCase()))}function u(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"")}function p(e,a=2){let t=e+"";for(;t.length<a;)t="0"+t;return t}function f(e){return null!=e}function m(e){return"function"==typeof e}function v(e){return null!==e&&"object"==typeof e}function g(e){return v(e)&&m(e.then)&&m(e.catch)}function h(e){return"[object Date]"===Object.prototype.toString.call(e)&&!Number.isNaN(e.getTime())}function b(e){return e=e.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(e)||/^0[0-9-]{10,13}$/.test(e)}function C(e){return"number"==typeof e||/^\d+(\.\d+)?$/.test(e)}function y(){return!!o&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}const{hasOwnProperty:w}=Object.prototype;function A(e,a){return Object.keys(a).forEach((t=>{!function(e,a,t){const n=a[t];f(n)&&(w.call(e,t)&&v(n)?e[t]=A(Object(e[t]),a[t]):e[t]=n)}(e,a,t)})),e}const E=e("zh-CN"),P=a({"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",confirmDelete:"确定要删除吗",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",confirm:"确定",startEnd:"开始/结束",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,a)=>`${e}年${a}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{unlimited:"无使用门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用优惠券",enable:"可用",disabled:"不可用",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码不正确",defaultAddress:"设为默认收货地址"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌信息"},vanAddressList:{add:"新增地址"}}}),S={messages:()=>P[E.value],use(e,a){E.value=e,this.add({[e]:a})},add(e={}){A(P,e)}};function $(e){const a=i(e)+".";return function(e,...t){const n=S.messages(),o=r(n,a+e)||r(n,e);return m(o)?o(...t):o}}var U={name:"Name",tel:"Phone",save:"Save",confirm:"Confirm",cancel:"Cancel",delete:"Delete",loading:"Loading...",noCoupon:"No coupons",nameEmpty:"Please fill in the name",confirmDelete:"Are you sure you want to delete?",telInvalid:"Malformed phone number",vanCalendar:{end:"End",start:"Start",title:"Calendar",startEnd:"Start/End",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:(e,a)=>`${e}/${a}`,rangePrompt:e=>`Choose no more than ${e} days`},vanCascader:{select:"Select"},vanContactCard:{addText:"Add contact info"},vanContactList:{addText:"Add new contact"},vanPagination:{prev:"Previous",next:"Next"},vanPullRefresh:{pulling:"Pull to refresh...",loosing:"Loose to refresh..."},vanSubmitBar:{label:"Total："},vanCoupon:{unlimited:"Unlimited",discount:e=>10*e+"% off",condition:e=>`At least ${e}`},vanCouponCell:{title:"Coupon",count:e=>`You have ${e} coupons`},vanCouponList:{exchange:"Exchange",close:"Close",enable:"Available",disabled:"Unavailable",placeholder:"Coupon code"},vanAddressEdit:{area:"Area",postal:"Postal",areaEmpty:"Please select a receiving area",addressEmpty:"Address can not be empty",postalEmpty:"Wrong postal code",defaultAddress:"Set as the default address"},vanAddressEditDetail:{label:"Address",placeholder:"Address"},vanAddressList:{add:"Add new address"}};S.add({"en-US":U}),window.vueRouter&&window.vueRouter.afterEach((e=>{const{lang:a}=e.meta||{};a&&S.use(a)})),S.add({"zh-CN":{add:"增加",decrease:"减少",red:"红色",orange:"橙色",yellow:"黄色",purple:"紫色",tab:"标签",tag:"标签",desc:"描述信息",back:"返回",title:"标题",status:"状态",button:"按钮",option:"选项",search:"搜索",content:"内容",custom:"自定义",username:"用户名",password:"密码",disabled:"禁用状态",uneditable:"不可编辑",basicUsage:"基础用法",advancedUsage:"高级用法",loadingStatus:"加载状态",usernamePlaceholder:"请输入用户名",passwordPlaceholder:"请输入密码"},"en-US":{add:"Add",decrease:"Decrease",red:"Red",orange:"Orange",yellow:"Yellow",purple:"Purple",tab:"Tab",tag:"Tag",desc:"Description",back:"Back",title:"Title",status:"Status",button:"Button",option:"Option",search:"Search",content:"Content",custom:"Custom",username:"Username",password:"Password",loadingStatus:"Loading",disabled:"Disabled",uneditable:"Uneditable",basicUsage:"Basic Usage",advancedUsage:"Advanced Usage",usernamePlaceholder:"Username",passwordPlaceholder:"Password"}});let T=0;function x(e){const a="demo-i18n-"+T++;if(e){const t={},n=i(a);Object.keys(e).forEach((a=>{t[a]={[n]:e[a]}})),S.add(t)}return $(a)}export{x as a,o as b,v as c,$ as d,n as e,y as f,i as g,C as h,f as i,g as j,u as k,b as l,m,t as n,h as o,l as p,p as q,d as t,s as u};
