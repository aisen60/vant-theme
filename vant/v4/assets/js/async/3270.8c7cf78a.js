/*! For license information please see 3270.8c7cf78a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3270"],{50712:function(s,n,a){"use strict";a.r(n);var t=a("80681");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>RollingText \u7FFB\u6EDA\u6587\u672C\u52A8\u6548</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u6587\u672C\u7FFB\u6EDA\u52A8\u6548\uFF0C\u53EF\u4EE5\u7FFB\u6EDA\u6570\u5B57\u548C\u5176\u4ED6\u7C7B\u578B\u6587\u672C\u3002\u8BF7\u5347\u7EA7 <code>vant</code> \u5230 &gt;= 4.6.0 \u7248\u672C\u6765\u4F7F\u7528\u8BE5\u7EC4\u4EF6\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RollingText</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RollingText</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>start-num</code> \u8BBE\u7F6E\u8D77\u59CB\u6570\u503C\uFF0C<code>target-num</code> \u8BBE\u7F6E\u76EE\u6807\u6570\u503C\u3002RollingText \u7EC4\u4EF6\u4F1A\u81EA\u52A8\u5F00\u59CB\u52A8\u753B\uFF0C\u4ECE\u8D77\u59CB\u6570\u503C\u7FFB\u6EDA\u5230\u76EE\u6807\u6570\u503C\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;123&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="she-zhi-fan-gun-fang-xiang" tabindex="-1">\u8BBE\u7F6E\u7FFB\u6EDA\u65B9\u5411</h3>\n<p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>direction</code> \u5C5E\u6027\u8BBE\u7F6E\u6570\u5B57\u7684\u7FFB\u6EDA\u65B9\u5411\uFF0C\u9ED8\u8BA4\u4E3A\u5411\u4E0B\u7FFB\u6EDA\uFF0C\u8BBE\u7F6E\u4E3A <code>up</code> \u5373\u53EF\u5411\u4E0A\u7FFB\u6EDA\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;432&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="she-zhi-ge-shu-wei-ting-zhi-shun-xu" tabindex="-1">\u8BBE\u7F6E\u5404\u6570\u4F4D\u505C\u6B62\u987A\u5E8F</h3>\n<p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>stop-order</code> \u5C5E\u6027\u8BBE\u7F6E\u52A8\u753B\u5404\u4E2A\u6570\u4F4D\u7684\u505C\u6B62\u5148\u540E\u987A\u5E8F\u3002\u9ED8\u8BA4\u5148\u505C\u6B62\u9AD8\u4F4D\uFF0C\u8BBE\u7F6E\u4E3A <code>rtl</code> \u53EF\u4EE5\u5148\u4ECE\u4E2A\u4F4D\u505C\u6B62\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span> <span class="hljs-attr">stop-order</span>=<span class="hljs-string">&quot;rtl&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="fan-zhuan-fei-shu-zi-nei-rong" tabindex="-1">\u7FFB\u8F6C\u975E\u6570\u5B57\u5185\u5BB9</h3>\n<p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>text-list</code> \u5C5E\u6027\u8BBE\u7F6E\u975E\u6570\u5B57\u5185\u5BB9\u7684\u7FFB\u8F6C\u3002\u7EC4\u4EF6\u4F1A\u4ECE\u6570\u7EC4\u7684\u7B2C\u4E00\u9879\u7FFB\u8F6C\u5230\u6700\u540E\u4E00\u9879\uFF0C\u8BF7\u786E\u4FDD\u6570\u7EC4\u957F\u5EA6\u5927\u4E8E\u7B49\u4E8E 2\uFF0C\u4EE5\u53CA\u6BCF\u4E00\u9879\u7684\u957F\u5EA6\u4E00\u81F4\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span> <span class="hljs-attr">:text-list</span>=<span class="hljs-string">&quot;textList&quot;</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> textList = <span class="hljs-title function_">ref</span>([\n      <span class="hljs-string">&#x27;aaaaa&#x27;</span>,\n      <span class="hljs-string">&#x27;bbbbb&#x27;</span>,\n      <span class="hljs-string">&#x27;ccccc&#x27;</span>,\n      <span class="hljs-string">&#x27;ddddd&#x27;</span>,\n      <span class="hljs-string">&#x27;eeeee&#x27;</span>,\n      <span class="hljs-string">&#x27;fffff&#x27;</span>,\n      <span class="hljs-string">&#x27;ggggg&#x27;</span>,\n    ]);\n    <span class="hljs-keyword">return</span> { textList };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">\u81EA\u5B9A\u4E49\u6837\u5F0F</h3>\n<p>RollingText \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B CSS \u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u8986\u76D6\u8FD9\u4E9B\u53D8\u91CF\u6765\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u7EC4\u4EF6\u7684\u6837\u5F0F\u3002\u6B64\u5916\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7 <code>height</code> \u5C5E\u6027\u8BBE\u7F6E\u6570\u5B57\u9AD8\u5EA6\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-rolling-text&quot;</span>\n  <span class="hljs-attr">:height</span>=<span class="hljs-string">&quot;54&quot;</span>\n  <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;12345&quot;</span>\n  <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-css"><span class="hljs-selector-class">.my-rolling-text</span> {\n  <span class="hljs-attr">--van-rolling-text-background</span>: <span class="hljs-number">#1989fa</span>;\n  <span class="hljs-attr">--van-rolling-text-color</span>: white;\n  <span class="hljs-attr">--van-rolling-text-font-size</span>: <span class="hljs-number">24px</span>;\n  <span class="hljs-attr">--van-rolling-text-gap</span>: <span class="hljs-number">6px</span>;\n  <span class="hljs-attr">--van-rolling-text-item-border-radius</span>: <span class="hljs-number">5px</span>;\n  <span class="hljs-attr">--van-rolling-text-item-width</span>: <span class="hljs-number">40px</span>;\n}\n</code></pre>\n</div><div class="van-doc-card"><h3 id="shou-dong-kong-zhi" tabindex="-1">\u624B\u52A8\u63A7\u5236</h3>\n<p>\u901A\u8FC7 ref \u83B7\u53D6\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u540E\uFF0C\u4F60\u53EF\u4EE5\u8C03\u7528 <code>start</code>\u3001<code>reset</code> \u65B9\u6CD5\uFF0C<code>start</code> \u65B9\u6CD5\u7528\u4E8E\u5F00\u59CB\u52A8\u753B\uFF0C<code>reset</code> \u65B9\u6CD5\u7528\u4E8E\u91CD\u7F6E\u52A8\u753B\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rolling-text</span>\n  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;rollingTextRef&quot;</span>\n  <span class="hljs-attr">:start-num</span>=<span class="hljs-string">&quot;0&quot;</span>\n  <span class="hljs-attr">:target-num</span>=<span class="hljs-string">&quot;54321&quot;</span>\n  <span class="hljs-attr">:auto-start</span>=<span class="hljs-string">&quot;false&quot;</span>\n/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">clickable</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;play-circle-o&quot;</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;start&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;start&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;replay&quot;</span> <span class="hljs-attr">:text</span>=<span class="hljs-string">&quot;reset&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> rollingTextRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">start</span> = (<span class="hljs-params"></span>) =&gt; {\n      rollingTextRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">start</span>();\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">reset</span> = (<span class="hljs-params"></span>) =&gt; {\n      rollingTextRef.<span class="hljs-property">value</span>.<span class="hljs-title function_">reset</span>();\n    };\n    <span class="hljs-keyword">return</span> { rollingTextRef, start, reset };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start-num</td>\n<td>\u8D77\u59CB\u6570\u503C</td>\n<td><em>number</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>target-num</td>\n<td>\u76EE\u6807\u6570\u503C</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>text-list</td>\n<td>\u5185\u5BB9\u6570\u7EC4\uFF0C\u7528\u4E8E\u7FFB\u8F6C\u975E\u6570\u5B57\u5185\u5BB9</td>\n<td><em>string[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u4E3A\u79D2</td>\n<td><em>number</em></td>\n<td><code>2</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>\u6587\u672C\u7FFB\u6EDA\u65B9\u5411\uFF0C\u503C\u4E3A <code>down</code> \u548C <code>up</code></td>\n<td><em>string</em></td>\n<td><code>down</code></td>\n</tr>\n<tr>\n<td>auto-start</td>\n<td>\u662F\u5426\u81EA\u52A8\u5F00\u59CB\u52A8\u753B</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>stop-order</td>\n<td>\u5404\u4E2A\u6570\u4F4D\u52A8\u753B\u505C\u6B62\u5148\u540E\u987A\u5E8F\uFF0C\u503C\u4E3A <code>ltr</code> \u548C <code>rtl</code></td>\n<td><em>string</em></td>\n<td><code>ltr</code></td>\n</tr>\n<tr>\n<td>height</td>\n<td>\u6570\u5B57\u9AD8\u5EA6\uFF0C\u5355\u4F4D\u4E3A <code>px</code></td>\n<td><em>number</em></td>\n<td><code>40</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fang-fa" tabindex="-1">\u65B9\u6CD5</h3>\n<p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 RollingText \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u8BE6\u89C1<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">\u7EC4\u4EF6\u5B9E\u4F8B\u65B9\u6CD5</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u65B9\u6CD5\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u53C2\u6570</th>\n<th>\u8FD4\u56DE\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>start</td>\n<td>\u5F00\u59CB\u52A8\u753B</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>\u91CD\u7F6E\u52A8\u753B</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">RollingTextProps</span>,\n  <span class="hljs-title class_">RollingTextInstance</span>,\n  <span class="hljs-title class_">RollingTextDirection</span>,\n  <span class="hljs-title class_">RollingTextStopOrder</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>RollingTextInstance</code> \u662F\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u7C7B\u578B\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RollingTextInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> rollingTextRef = ref&lt;<span class="hljs-title class_">RollingTextInstance</span>&gt;();\n\nrollingTextRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">start</span>();\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-rolling-text-background</td>\n<td><em>inherit</em></td>\n<td>\u5355\u4E2A\u6570\u4F4D\u80CC\u666F\u8272</td>\n</tr>\n<tr>\n<td>--van-rolling-text-color</td>\n<td><em>var(--van-text-color)</em></td>\n<td>\u6570\u5B57\u989C\u8272</td>\n</tr>\n<tr>\n<td>--van-rolling-text-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>\u5B57\u4F53\u5927\u5C0F</td>\n</tr>\n<tr>\n<td>--van-rolling-text-gap</td>\n<td><em>0px</em></td>\n<td>\u6570\u4F4D\u4E4B\u95F4\u7684\u95F4\u9694</td>\n</tr>\n<tr>\n<td>--van-rolling-text-item-width</td>\n<td><em>15px</em></td>\n<td>\u5355\u4E2A\u6570\u4F4D\u5BBD\u5EA6</td>\n</tr>\n<tr>\n<td>--van-rolling-text-item-border-radius</td>\n<td><em>0px</em></td>\n<td>\u5355\u4E2A\u6570\u4F4D\u8FB9\u6846\u5706\u89D2</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);