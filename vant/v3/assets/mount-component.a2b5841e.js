import{s as u,E as a}from"./vue-libs.71fdcafc.js";import{e as r}from"./use-translate.39547e32.js";import{u as c}from"./use-expose.877c018b.js";function d(){const o=a({show:!1}),e=n=>{o.show=n},t=n=>{r(o,n,{transitionAppear:!0}),e(!0)},s=()=>e(!1);return c({open:t,close:s,toggle:e}),{open:t,close:s,state:o,toggle:e}}function f(o){const e=u(o),t=document.createElement("div");return document.body.appendChild(t),{instance:e.mount(t),unmount(){e.unmount(),document.body.removeChild(t)}}}export{f as m,d as u};
