import{r as ae,w as re,x as ie,y as le,f as oe,c as se,e as ce,u as ue,h as de,i as k,z as fe,C as ge,l as B,A as me}from"./use-translate.7145ee20.js";import{n as M,m as x,u as he,c as be,w as ye}from"./with-install.756837d9.js";import{F as ve}from"./constant.80c6de18.js";import{c as xe,C as Ce}from"./index.f609f533.js";import{u as Ie}from"./use-id.28dc46a0.js";import{u as Se}from"./use-expose.897feea8.js";import{I as T}from"./index.bea91046.js";import{z as we,H as Ve,D as R,C,I as ke,x as Me,q as I,N as Te,e as o,A as Fe,h as Pe}from"./vue-libs.84e059bd.js";function Ee(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Ae(e,r){return!(r.required&&Ee(e)||r.pattern&&!r.pattern.test(String(e)))}function Le(e,r){return new Promise(i=>{const s=r.validator(e,r);if(ae(s)){s.then(i);return}i(s)})}function N(e,r){const{message:i}=r;return re(i)?i(e,r):i||""}function je({target:e}){e.composing=!0}function z({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function Be(e,r){const i=ie();e.style.height="auto";let s=e.scrollHeight;if(oe(r)){const{maxHeight:l,minHeight:g}=r;l!==void 0&&(s=Math.min(s,l)),g!==void 0&&(s=Math.max(s,g))}s&&(e.style.height=`${s}px`,le(i))}function Re(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function F(e){return[...e].length}function Ne(e,r){return[...e].slice(0,r).join("")}const[ze,u]=se("field"),Oe={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:M,formatter:Function,clearIcon:x("clear"),modelValue:be(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,clearTrigger:x("focus"),formatTrigger:x("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},De=ce({},xe,Oe,{rows:M,type:x("text"),rules:Array,autosize:[Boolean,Object],labelWidth:M,labelClass:he,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var We=we({name:ze,props:De,emits:["blur","focus","clear","keypress","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:r,slots:i}){const s=Ie(),l=Ve({focused:!1,validateFailed:!1,validateMessage:""}),g=R(),S=R(),{parent:d}=ue(ve),m=()=>{var t;return String((t=e.modelValue)!=null?t:"")},f=t=>{if(k(e[t]))return e[t];if(d&&k(d.props[t]))return d.props[t]},O=C(()=>{const t=f("readonly");if(e.clearable&&!t){const n=m()!=="",a=e.clearTrigger==="always"||e.clearTrigger==="focus"&&l.focused;return n&&a}return!1}),P=C(()=>S.value&&i.input?S.value():e.modelValue),D=t=>t.reduce((n,a)=>n.then(()=>{if(l.validateFailed)return;let{value:c}=P;if(a.formatter&&(c=a.formatter(c,a)),!Ae(c,a)){l.validateFailed=!0,l.validateMessage=N(c,a);return}if(a.validator)return Le(c,a).then(v=>{v&&typeof v=="string"?(l.validateFailed=!0,l.validateMessage=v):v===!1&&(l.validateFailed=!0,l.validateMessage=N(c,a))})}),Promise.resolve()),h=()=>{l.validateFailed&&(l.validateFailed=!1,l.validateMessage="")},E=(t=e.rules)=>new Promise(n=>{h(),t?D(t).then(()=>{l.validateFailed?n({name:e.name,message:l.validateMessage}):n()}):n()}),w=t=>{if(d&&e.rules){const n=d.props.validateTrigger===t,a=e.rules.filter(c=>c.trigger?c.trigger===t:n);a.length&&E(a)}},W=t=>{const{maxlength:n}=e;if(k(n)&&F(t)>n){const a=m();return a&&F(a)===+n?a:Ne(t,+n)}return t},b=(t,n="onChange")=>{if(t=W(t),e.type==="number"||e.type==="digit"){const a=e.type==="number";t=fe(t,a,a)}e.formatter&&n===e.formatTrigger&&(t=e.formatter(t)),g.value&&g.value.value!==t&&(g.value.value=t),t!==e.modelValue&&r("update:modelValue",t)},_=t=>{t.target.composing||b(t.target.value)},V=()=>{var t;return(t=g.value)==null?void 0:t.blur()},$=()=>{var t;return(t=g.value)==null?void 0:t.focus()},y=()=>{const t=g.value;e.type==="textarea"&&e.autosize&&t&&Be(t,e.autosize)},q=t=>{l.focused=!0,r("focus",t),I(y),f("readonly")&&V()},H=t=>{f("readonly")||(l.focused=!1,b(m(),"onBlur"),r("blur",t),w("onBlur"),I(y),me())},A=t=>r("click-input",t),K=t=>r("click-left-icon",t),U=t=>r("click-right-icon",t),Y=t=>{B(t),r("update:modelValue",""),r("clear",t)},L=C(()=>{if(typeof e.error=="boolean")return e.error;if(d&&d.props.showError&&l.validateFailed)return!0}),J=C(()=>{const t=f("labelWidth");if(t)return{width:de(t)}}),G=t=>{const n=13;t.keyCode===n&&(!(d&&d.props.submitOnEnter)&&e.type!=="textarea"&&B(t),e.type==="search"&&V()),r("keypress",t)},j=()=>e.id||`${s}-input`,Q=()=>{const t=u("control",[f("inputAlign"),{error:L.value,custom:!!i.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(i.input)return o("div",{class:t,onClick:A},[i.input()]);const n={id:j(),ref:g,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,value:e.modelValue,disabled:f("disabled"),readonly:f("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,"aria-labelledby":e.label?`${s}-label`:void 0,onBlur:H,onFocus:q,onInput:_,onClick:A,onChange:z,onKeypress:G,onCompositionend:z,onCompositionstart:je};return e.type==="textarea"?o("textarea",n,null):o("input",Fe(Re(e.type),n),null)},X=()=>{const t=i["left-icon"];if(e.leftIcon||t)return o("div",{class:u("left-icon"),onClick:K},[t?t():o(T,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},Z=()=>{const t=i["right-icon"];if(e.rightIcon||t)return o("div",{class:u("right-icon"),onClick:U},[t?t():o(T,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},p=()=>{if(e.showWordLimit&&e.maxlength){const t=F(m());return o("div",{class:u("word-limit")},[o("span",{class:u("word-num")},[t]),Pe("/"),e.maxlength])}},ee=()=>{if(d&&d.props.showErrorMessage===!1)return;const t=e.errorMessage||l.validateMessage;if(t){const n=i["error-message"],a=f("errorMessageAlign");return o("div",{class:u("error-message",a)},[n?n({message:t}):t])}},te=()=>{const t=f("colon")?":":"";if(i.label)return[i.label(),t];if(e.label)return o("label",{id:`${s}-label`,for:j()},[e.label+t])},ne=()=>[o("div",{class:u("body")},[Q(),O.value&&o(T,{name:e.clearIcon,class:u("clear"),onTouchstart:Y},null),Z(),i.button&&o("div",{class:u("button")},[i.button()])]),p(),ee()];return Se({blur:V,focus:$,validate:E,formValue:P,resetValidation:h}),ke(ge,{customValue:S,resetValidation:h,validateWithTrigger:w}),Me(()=>e.modelValue,()=>{b(m()),h(),w("onChange"),I(y)}),Te(()=>{b(m(),e.formatTrigger),I(y)}),()=>{const t=f("disabled"),n=f("labelAlign"),a=te(),c=X();return o(Ce,{size:e.size,icon:e.leftIcon,class:u({error:L.value,disabled:t,[`label-${n}`]:n}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:J.value,valueClass:u("value"),titleClass:[u("label",[n,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:c?()=>c:null,title:a?()=>a:null,value:ne,extra:i.extra})}}});const Ge=ye(We);export{Ge as F,Oe as f};
