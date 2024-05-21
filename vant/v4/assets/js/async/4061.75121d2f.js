/*! For license information please see 4061.75121d2f.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4061"],{60699:function(s,n,a){"use strict";a.r(n);var t=a("80681");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useScrollParent</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u83B7\u53D6\u5143\u7D20\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, watch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useScrollParent, useEventListener } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();\n    <span class="hljs-keyword">const</span> scrollParent = <span class="hljs-title function_">useScrollParent</span>(root);\n\n    <span class="hljs-title function_">useEventListener</span>(\n      <span class="hljs-string">&#x27;scroll&#x27;</span>,\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;scroll&#x27;</span>);\n      },\n      { <span class="hljs-attr">target</span>: scrollParent },\n    );\n\n    <span class="hljs-keyword">return</span> { root };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> <span class="hljs-title function_">useScrollParent</span>(<span class="hljs-params">\n  element: Ref&lt;Element | <span class="hljs-literal">undefined</span>&gt;,\n</span>): <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">Element</span> | <span class="hljs-title class_">Window</span> | <span class="hljs-literal">undefined</span>&gt;;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="can-shu" tabindex="-1">\u53C2\u6570</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>element</td>\n<td>\u5F53\u524D\u5143\u7D20</td>\n<td><em>Ref&lt;Element&gt;</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">\u8FD4\u56DE\u503C</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>scrollParent</td>\n<td>\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20</td>\n<td><em>Ref&lt;Element&gt;</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);