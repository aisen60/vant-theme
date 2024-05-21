/*! For license information please see 6900.68f65886.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6900"],{21451:function(s,n,a){"use strict";a.r(n);var t=a("80681");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ContactCard</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Display contact information in the form of cards.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactCard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactCard</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="add-contact" tabindex="-1">Add Contact</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;add&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onAdd&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;add&#x27;</span>);\n    <span class="hljs-keyword">return</span> {\n      onAdd,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="edit-contact" tabindex="-1">Edit Contact</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;edit&quot;</span> <span class="hljs-attr">:tel</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;name&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onEdit&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> tel = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;13000000000&#x27;</span>);\n    <span class="hljs-keyword">const</span> name = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;John Snow&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;edit&#x27;</span>);\n\n    <span class="hljs-keyword">return</span> {\n      tel,\n      name,\n      onEdit,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="uneditable" tabindex="-1">Uneditable</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-card</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;edit&quot;</span>\n  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;John Snow&quot;</span>\n  <span class="hljs-attr">tel</span>=<span class="hljs-string">&quot;13000000000&quot;</span>\n  <span class="hljs-attr">:editable</span>=<span class="hljs-string">&quot;false&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>Can be set to <code>edit</code></td>\n<td><em>string</em></td>\n<td><code>add</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>Name</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>tel</td>\n<td>Phone</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>add-text</td>\n<td>Add card text</td>\n<td><em>string</em></td>\n<td><code>Add contact info</code></td>\n</tr>\n<tr>\n<td>editable</td>\n<td>Whether to allow editing of contacts</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when component is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactCardType</span>, <span class="hljs-title class_">ContactCardProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-contact-card-padding</td>\n<td><em>var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-card-add-icon-size</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-card-add-icon-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-card-title-line-height</td>\n<td><em>var(--van-line-height-md)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);