(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();var _=(e=>(e.APP_VERSION="APP_VERSION",e.APP_LOCALE="APP_LOCALE",e.APP_LOCALE_ZH_CN="zh-CN",e.APP_LOCALE_EN_US="en-US",e.APP_THEME="APP_THEME",e))(_||{}),a=(e=>(e.VERSION_2="v2",e.VERSION_3="v3",e.VERSION_4="v4",e.PROJECT_LIST="PROJECT_LIST",e.PROJECT_VAR_DEFAULT="PROJECT_VAR_DEFAULT",e.PROJECT_VAR_CONFIG="PROJECT_VAR_CONFIG",e))(a||{});const p=e=>{let t;try{t=JSON.parse(e)}catch{t=e||null}return t},g=e=>{let t;try{t=JSON.stringify(e)}catch{t=t||null}return t},i=(e,t)=>{const s=window.localStorage.getItem(e);return s?p(s):t?(l(e,t),t):s},l=(e,t)=>{const s=g(t);window.localStorage.setItem(e,s)},d=()=>i(a.PROJECT_VAR_DEFAULT),h=e=>d()[e],u=()=>i(a.PROJECT_VAR_CONFIG),P=(e,t="light")=>u()[e][t],E=(e,t,s)=>{const n=u(),r=n[e];r[t]=s,n[e]=r,l(a.PROJECT_VAR_CONFIG,n)},V=e=>{const t=document.createElement("span");return t.style.color=e,t.style.color!==""},R=e=>{const t=e.toLowerCase().trim();return!!(t==="white"||t==="#fff"||t==="#ffffff"||t.startsWith("rgba")&&(t==="rgba(255, 255, 255, 1)"||t==="rgba(255, 255, 255)"))},A=e=>{const t=e.toLowerCase().trim();return!!(t==="transparent"||t.startsWith("rgba")&&parseFloat(t.split(",")[3].trim().slice(0,-1))===0||t.startsWith("rgb")&&parseFloat(e.split("/").slice(-1)[0])===0||t.startsWith("hsla")&&parseFloat(t.split(",")[3].trim().slice(0,-1))===0)},C=e=>{const t=document.documentElement;return getComputedStyle(t).getPropertyValue(e)},m=(e,t)=>{const s={},n=e;return Object.keys(n).forEach(r=>{const o=t===a.VERSION_2?n[r].startsWith("@"):n[r].includes("var(--"),c=o?n[r]:"",f=t===a.VERSION_2?r.replace("@","--van-"):r,O=C(f);s[r]={isVar:o,varLabel:c,value:O}}),s},L=e=>{const t={};for(const[s]of Object.entries(e)){const n=e[s],r=V(n.value)?"1":"0";t[s]={...n,type:r}}return t};export{_ as A,a as P,i as a,A as b,h as c,P as d,E as e,u as f,C as g,L as h,R as i,l as s,m as t};
