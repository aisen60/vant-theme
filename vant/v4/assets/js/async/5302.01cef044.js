/*! For license information please see 5302.01cef044.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5302"],{46898:function(s,n,a){"use strict";a.r(n);var t=a("80681");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Switch</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to switch between open and closed states.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Switch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Switch</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="loading" tabindex="-1">Loading</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">loading</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-size" tabindex="-1">Custom Size</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;22px&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">&quot;#dcdee0&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-node" tabindex="-1">Custom Node</h3>\n<p>Using <code>node</code> slot to custom the content of the node.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">node</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;icon-wrapper&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;checked ? &#x27;success&#x27; : &#x27;cross&#x27;&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-switch</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.icon-wrapper</span> {\n    <span class="hljs-attribute">display</span>: flex;\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n    <span class="hljs-attribute">justify-content</span>: center;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;\n  }\n\n  <span class="hljs-selector-class">.icon-wrapper</span> <span class="hljs-selector-class">.van-icon-success</span> {\n    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">32px</span>;\n    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-blue);\n  }\n\n  <span class="hljs-selector-class">.icon-wrapper</span> <span class="hljs-selector-class">.van-icon-cross</span> {\n    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">32px</span>;\n    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--van-gray-<span class="hljs-number">5</span>);\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="async-control" tabindex="-1">Async Control</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">update:model-value</span>=<span class="hljs-string">&quot;onUpdateValue&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showConfirmDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onUpdateValue</span> = (<span class="hljs-params">newValue</span>) =&gt; {\n      <span class="hljs-title function_">showConfirmDialog</span>({\n        <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Confirm&#x27;</span>,\n        <span class="hljs-attr">message</span>: <span class="hljs-string">&#x27;Are you sure to toggle switch?&#x27;</span>,\n      }).<span class="hljs-title function_">then</span>(<span class="hljs-function">() =&gt;</span> {\n        checked.<span class="hljs-property">value</span> = newValue;\n      });\n    };\n\n    <span class="hljs-keyword">return</span> {\n      checked,\n      onUpdateValue,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="inside-a-cell" tabindex="-1">Inside a Cell</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Check status of Switch</td>\n<td><em>ActiveValue | InactiveValue</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Whether to show loading icon</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Whether to disable switch</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>Size of switch button</td>\n<td><em>number | string</em></td>\n<td><code>26px</code></td>\n</tr>\n<tr>\n<td>active-color</td>\n<td>Background color when active</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>inactive-color</td>\n<td>Background color when inactive</td>\n<td><em>string</em></td>\n<td><code>rgba(120, 120, 128, 0.16)</code></td>\n</tr>\n<tr>\n<td>active-value</td>\n<td>Value when active</td>\n<td><em>any</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>inactive-value</td>\n<td>Value when inactive</td>\n<td><em>any</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Parameters</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>Emitted when check status changed</td>\n<td><em>value: any</em></td>\n</tr>\n<tr>\n<td>click</td>\n<td>Emitted when component is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>node</td>\n<td>Custom the content of node</td>\n<td>-</td>\n</tr>\n<tr>\n<td>background</td>\n<td>Custom the background of switch</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwitchProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-switch-size</td>\n<td><em>26px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-switch-width</td>\n<td><em>calc(1.8em + 4px)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-switch-height</td>\n<td><em>calc(1em + 4px)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-switch-node-size</td>\n<td><em>1em</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-switch-node-background</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-switch-node-shadow</td>\n<td><em>0 3px 1px 0 rgba(0, 0, 0, 0.05)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-switch-background</td>\n<td><em>rgba(120, 120, 128, 0.16)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-switch-on-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-switch-duration</td>\n<td><em>var(--van-duration-base)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-switch-disabled-opacity</td>\n<td><em>var(--van-disabled-opacity)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);