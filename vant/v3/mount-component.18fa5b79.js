import{s as r,H as u}from"./vue-libs.bf80eadf.js";import{e as a}from"./use-translate.d627ebf3.js";import{u as m}from"./use-expose.36b4c9ee.js";function d(){const e=u({show:!1}),t=n=>{e.show=n},o=n=>{a(e,n,{transitionAppear:!0}),t(!0)},s=()=>t(!1);return m({open:o,close:s,toggle:t}),{open:o,close:s,state:e,toggle:t}}function f(e){const t=r(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}export{f as m,d as u};
