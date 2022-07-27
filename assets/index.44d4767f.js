import{H as v,I as d}from"./vendor.3ad8c3fa.js";const p=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};p();const _="vant-theme",g="0.4.0",m="online theme preview built on Vant UI",f="MIT",A={name:"aisen60",email:"caixusheng60@gmail.com"},h={type:"git",url:"https://github.com/Aisen60/vant-theme.git"},T={url:"https://github.com/Aisen60/vant-theme/issues"},y="https://github.com/Aisen60/vant-theme#readme",N=["vue","vue3","vant 2","vant 3","vant 4","theme","vant-theme","aisen60"],b="module",V={prepare:"husky install",serve:"node scripts/serve.js",build:"node scripts/build.js","reptile:css":"node scripts/reptile-css.js",clean:"node scripts/clean.js",preview:"vite preview --port 5050","test:unit":"vitest --environment jsdom","test:e2e":"start-server-and-test preview http://127.0.0.1:5050/ 'cypress open'","test:e2e:ci":"start-server-and-test preview http://127.0.0.1:5050/ 'cypress run'",typecheck:"vue-tsc --noEmit -p tsconfig.vitest.json --composite false",lint:"eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"},C={"@vicons/ionicons5":"^0.12.0","@vueuse/core":"^8.2.0",jszip:"^3.7.1","naive-ui":"^2.26.4",pinia:"^2.0.11",vue:"^3.2.31","vue-router":"^4.0.12"},S={"@commitlint/cli":"^16.2.1","@commitlint/config-conventional":"^16.2.1","@rushstack/eslint-patch":"^1.1.0","@types/file-saver":"^2.0.5","@types/jsdom":"^16.2.14","@types/node":"^16.11.25","@vant/stylelint-config":"^1.4.2","@vitejs/plugin-vue":"2.0.1","@vitejs/plugin-vue-jsx":"^1.3.7","@vue/eslint-config-prettier":"^7.0.0","@vue/eslint-config-typescript":"^10.0.0","@vue/test-utils":"^2.0.0-rc.18","@vue/tsconfig":"^0.1.3",cheerio:"^1.0.0-rc.10",cypress:"^9.5.0","download-git-repo":"^3.0.2",eslint:"^8.5.0","eslint-plugin-cypress":"^2.12.1","eslint-plugin-vue":"^8.2.0","fs-extra":"^10.0.1",husky:"^7.0.4",jsdom:"^19.0.0",less:"^4.1.2","lint-staged":"^12.3.4",ora:"^6.1.0",prettier:"^2.5.1",puppeteer:"^13.4.0","start-server-and-test":"^1.14.0",stylelint:"^13.13.1",typescript:"~4.5.5",vite:"2.7.7",vitest:"^0.5.0","vue-tsc":"^0.31.4"},L={extends:["@commitlint/config-conventional"]},R={node:">=14.0.0"};var M={name:_,version:g,description:m,license:f,author:A,repository:h,bugs:T,homepage:y,keywords:N,type:b,scripts:V,dependencies:C,devDependencies:S,commitlint:L,"lint-staged":{"*.md":"prettier --write","*.{ts,tsx,js,vue}":"eslint --fix","*.{css,less}":"stylelint --fix"},engines:R};const j="VANT_THEME_APP_VERSION",k="VANT_THEME_SCHEMECOLOR",D="VANT_THEME_LANGUAGE",P="VANT_THEME_VERSION",w="VANT_THEME_USER_CONFIG",U="VANT_THEME_CURRENT_CONFIG_ID",u="/vant-theme/",F=[{url:"https://youzan.github.io/vant/",lightLogo:`${u}vant.png`,darkLogo:`${u}vant.png`},{url:"https://github.com/Aisen60/vant-theme",lightLogo:`${u}dark-github.png`,darkLogo:`${u}light-github.png`}],G="v3",z="zh-CN",$=[{key:"v2",title:"vant-theme 2",subtitle:"\u9002\u7528\u4E8E vue 2\u3001vant 2"},{key:"v3",title:"vant-theme 3",subtitle:"\u9002\u7528\u4E8E vue 3\u3001vant 3"},{key:"v4",title:"vant-theme 4",subtitle:"\u9002\u7528\u4E8E vue 3\u3001vant 4"}],x=[{key:"zh-CN",label:"\u4E2D",disabled:!1},{key:"en-US",label:"EN",disabled:!0}],B={"@red":"#ee0a24","@blue":"#1989fa","@orange":"#ff976a","@orange-dark":"#ed6a0c","@orange-light":"#fffbe8","@green":"#07c160"},Y={"--van-red":"#ee0a24","--van-blue":"#1989fa","--van-orange":"#ff976a","--van-orange-dark":"#ed6a0c","--van-orange-light":"#fffbe8","--van-green":"#07c160"},q={"--van-red":"#ee0a24","--van-blue":"#1989fa","--van-orange":"#ff976a","--van-orange-dark":"#ed6a0c","--van-orange-light":"#fffbe8","--van-green":"#07c160"},J="@red",K="--van-red",Q="--van-blue",W="replacePath",X="VANT_THEME_MESSAGE_VARIABLES_INIT",Z="VANT_THEME_MESSAGE_VARIABLES_SET",ee="VANT_THEME_MESSAGE_VARIABLES_CLEAR",E={v2:document.documentElement,v3:document.documentElement,v4:document.body},te={v2:`${u}v2.css`,v3:"https://cdn.jsdelivr.net/npm/vant/lib/index.css",v4:"https://cdn.jsdelivr.net/npm/vant@beta/lib/index.css"},se="VANT_THEME_STYLE_TAG_ID",ne=t=>v(t).format("YYYY-MM-DD HH:mm"),oe=()=>v().valueOf(),O=(t,n="--van-",o="")=>t.replace(n,o).replace(/-(\w)/g,function(e,s){return s.toUpperCase()}),ie=async(t,n,o)=>{const{name:c,config:e}=n,s=new d;if((t==="v3"||t==="v4")&&e){let a=":root {",l="{";const i={};for(const r in e)a+=`
 ${r}: ${e[r]};`,o.includes(r)?i[r]=e[r]:l+=`
"${O(r)}": "${e[r]}",`;if(Object.keys(i).length>0){l+=`
/**  
zh-CN: \u57FA\u7840\u53D8\u91CF\u53EA\u80FD\u901A\u8FC7 root \u9009\u62E9\u5668\u4FEE\u6539\uFF0C\u4E0D\u80FD\u901A\u8FC7 ConfigProvider \u7EC4\u4EF6\u4FEE\u6539\u3002https://youzan.github.io/vant/${t}/#/zh-CN/config-provider#zhu-ti-bian-liang
en-US: The basic variables can only be modified through the root selector. https://youzan.github.io/vant/${t}/#/zh-CN/config-provider#variables
*/`;for(const r in i)l+=`
"${r}": "${e[r]}",`}a+=`
}`,l+=`
}`,s.file("variables.css",a),s.file("config-provider.json",l)}if(t==="v2"){let a="";for(const i in e)a+=`${i}: ${e[i]};
`;const l=`
/**  
zh-CN: https://youzan.github.io/vant/v2/#/zh-CN/theme#ding-zhi-fang-fa
en-US: https://youzan.github.io/vant/v2/#/en-US/theme#how-to-custom-theme
*/;
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'hack': \`true; @import "variables.less";\`,
        },
      },
    },
  },
};`;s.file("variables.less",a),s.file("vue.config.js",l)}s.file(`${M.name}.json`,JSON.stringify(n)),s.generateAsync({type:"blob"}).then(function(a){const l=`${c}.zip`,i=document.createElement("a");i.download=l,i.style.display="none",i.href=URL.createObjectURL(a),document.body.appendChild(i),i.click(),document.body.removeChild(i)})},ae=(t,n)=>{const o=E[n],c=n==="v2"?t.replace("@","--van-"):t;return window.getComputedStyle(o).getPropertyValue(c).trim()},I=(t,n,o)=>{const c=E[o],e=o==="v2"?t.replace("@","--van-"):t;c.style.setProperty(e,n)},re=(t,n)=>{for(const o in t)I(o,t[o],n)},ce=t=>{E[t].setAttribute("style","")};export{u as A,te as B,ae as C,re as D,se as E,B as V,Y as a,q as b,J as c,K as d,Q as e,F as f,W as g,X as h,Z as i,ee as j,k,M as l,P as m,G as n,$ as o,ne as p,D as q,z as r,x as s,w as t,U as u,j as v,ie as w,oe as x,I as y,ce as z};
