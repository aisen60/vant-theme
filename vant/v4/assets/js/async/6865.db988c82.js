/*! For license information please see 6865.db988c82.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6865"],{78365:function(s,n,a){"use strict";a.r(n);var t=a("80681");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Rate</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>The rate component is used for rating things.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Rate</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Rate</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;like&quot;</span> <span class="hljs-attr">void-icon</span>=<span class="hljs-string">&quot;like-o&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>\n  <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;25&quot;</span>\n  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ffd21e&quot;</span>\n  <span class="hljs-attr">void-icon</span>=<span class="hljs-string">&quot;star&quot;</span>\n  <span class="hljs-attr">void-color</span>=<span class="hljs-string">&quot;#eee&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="half-star" tabindex="-1">Half Star</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">allow-half</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">2.5</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-count" tabindex="-1">Custom Count</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;6&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="clearable" tabindex="-1">Clearable</h3>\n<p>When the <code>clearable</code> prop is set to <code>true</code>, clicking on the same value again will reset the value to <code>0</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">clearable</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="readonly" tabindex="-1">Readonly</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="readonly-half-star" tabindex="-1">Readonly Half Star</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3.3</span>);\n    <span class="hljs-keyword">return</span> { value };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="change-event" tabindex="-1">Change Event</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;current value:&#x27;</span> + value);\n    <span class="hljs-keyword">return</span> {\n      value,\n      onChange,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Current rate</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>count</td>\n<td>Count</td>\n<td><em>number | string</em></td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Icon size</td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>gutter</td>\n<td>Icon gutter</td>\n<td><em>number | string</em></td>\n<td><code>4px</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>Selected color</td>\n<td><em>string</em></td>\n<td><code>#ee0a24</code></td>\n</tr>\n<tr>\n<td>void-color</td>\n<td>Void color</td>\n<td><em>string</em></td>\n<td><code>#c8c9cc</code></td>\n</tr>\n<tr>\n<td>disabled-color</td>\n<td>Disabled color</td>\n<td><em>string</em></td>\n<td><code>#c8c9cc</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>Selected icon</td>\n<td><em>string</em></td>\n<td><code>star</code></td>\n</tr>\n<tr>\n<td>void-icon</td>\n<td>Void icon</td>\n<td><em>string</em></td>\n<td><code>star-o</code></td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>Icon className prefix</td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>allow-half</td>\n<td>Whether to allow half star</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clearable <code>v4.6.0</code></td>\n<td>Whether to allow clear when click again</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>Whether to be readonly</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable rate</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>touchable</td>\n<td>Whether to allow select rate by touch gesture</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Parameters</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>Emitted when rate changed</td>\n<td><em>currentValue: number</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">RateProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-rate-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-rate-icon-gutter</td>\n<td><em>var(--van-padding-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-rate-icon-void-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-rate-icon-full-color</td>\n<td><em>var(--van-danger-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-rate-icon-disabled-color</td>\n<td><em>var(--van-gray-5)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);