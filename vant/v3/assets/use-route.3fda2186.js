import{L as o}from"./vendor.ef334a89.js";const r={to:[String,Object],url:String,replace:Boolean};function e(o){const r=o.$router,{to:e,url:t,replace:n}=o;e&&r?r[n?"replace":"push"](e):t&&(n?location.replace(t):location.href=t)}function t(){const r=o().proxy;return()=>e(r)}export{e as a,r,t as u};
