import{D as i}from"./index.9a8e61ea.js";import{a as F}from"./use-translate.94d81043.js";import{A as V,x as s,r as C,o as v,a as E,e as a,w as d,C as e,F as M}from"./vue-libs.84c45047.js";import"./with-install.dd5596ee.js";import"./utils.e639c14b.js";import"./Picker.a386e4b2.js";import"./constant.80c6de18.js";import"./use-expose.771ababc.js";import"./index.a750e74d.js";import"./use-touch.109c1035.js";import"./index.e68bded9.js";const A=V({setup(T){const o=F({"zh-CN":{day:"\u65E5",year:"\u5E74",month:"\u6708",chooseDate:"\u9009\u62E9\u65E5\u671F",columnsType:"\u9009\u9879\u7C7B\u578B",optionsFilter:"\u8FC7\u6EE4\u9009\u9879",chooseYearMonth:"\u9009\u62E9\u5E74\u6708",optionsFormatter:"\u683C\u5F0F\u5316\u9009\u9879"},"en-US":{day:" Day",year:" Year",month:" Month",chooseDate:"Choose Date",columnsType:"Columns Type",optionsFilter:"Options Filter",chooseYearMonth:"Choose Year-Month",optionsFormatter:"Options Formatter"}}),r=new Date(2020,0,1),u=new Date(2025,5,1),c=s(["2021","01","01"]),f=s(["2021","01"]),h=s(["2021","01"]),y=s(["2021","01"]),p=["year","month"],x=(n,t)=>n==="month"?t.filter(m=>Number(m.value)%6===0):t,D=(n,t)=>(n==="year"&&(t.text+=o("year")),n==="month"&&(t.text+=o("month")),n==="day"&&(t.text+=o("day")),t);return(n,t)=>{const m=C("demo-block");return v(),E(M,null,[a(m,{card:"",title:e(o)("basicUsage")},{default:d(()=>[a(e(i),{modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=l=>c.value=l),title:e(o)("chooseDate"),"min-date":e(r),"max-date":e(u)},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(m,{card:"",title:e(o)("columnsType")},{default:d(()=>[a(e(i),{modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=l=>f.value=l),title:e(o)("chooseYearMonth"),"min-date":e(r),"max-date":e(u),"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(m,{card:"",title:e(o)("optionsFormatter")},{default:d(()=>[a(e(i),{modelValue:h.value,"onUpdate:modelValue":t[2]||(t[2]=l=>h.value=l),title:e(o)("chooseYearMonth"),"min-date":e(r),"max-date":e(u),formatter:D,"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(m,{card:"",title:e(o)("optionsFilter")},{default:d(()=>[a(e(i),{modelValue:y.value,"onUpdate:modelValue":t[3]||(t[3]=l=>y.value=l),title:e(o)("optionFilter"),filter:x,"min-date":e(r),"max-date":e(u),"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"])],64)}}});export{A as default};
