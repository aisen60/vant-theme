/*! For license information please see 8201.ff1d9b9a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["8201"],{49871:function(t,n,s){"use strict";s.r(n);var a=s("80681");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Calendar</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Calendar component for selecting dates or date ranges.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Calendar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Calendar</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="select-single-date" tabindex="-1">Select Single Date</h3>\n<p>The <code>confirm</code> event will be emitted after the date selection is completed.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Single Date&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;date&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> date = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatDate</span> = (<span class="hljs-params">date</span>) =&gt; <span class="hljs-string">`<span class="hljs-subst">${date.getMonth() + <span class="hljs-number">1</span>}</span>/<span class="hljs-subst">${date.getDate()}</span>`</span>;\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">value</span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      date.<span class="hljs-property">value</span> = <span class="hljs-title function_">formatDate</span>(value);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      date,\n      show,\n      onConfirm,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="select-multiple-date" tabindex="-1">Select Multiple Date</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Multiple Date&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;text&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;multiple&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">dates</span>) =&gt; {\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      text.<span class="hljs-property">value</span> = <span class="hljs-string">`\u9009\u62E9\u4E86 <span class="hljs-subst">${dates.length}</span> \u4E2A\u65E5\u671F`</span>;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      text,\n      show,\n      onConfirm,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="select-date-range" tabindex="-1">Select Date Range</h3>\n<p>You can select a date range after setting <code>type</code> to<code>range</code>. In range mode, the date returned by the <code>confirm</code> event is an array, the first item in the array is the start time and the second item is the end time.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Date Range&quot;</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;date&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> date = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;&#x27;</span>);\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatDate</span> = (<span class="hljs-params">date</span>) =&gt; <span class="hljs-string">`<span class="hljs-subst">${date.getMonth() + <span class="hljs-number">1</span>}</span>/<span class="hljs-subst">${date.getDate()}</span>`</span>;\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">values</span>) =&gt; {\n      <span class="hljs-keyword">const</span> [start, end] = values;\n      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      date.<span class="hljs-property">value</span> = <span class="hljs-string">`<span class="hljs-subst">${formatDate(start)}</span> - <span class="hljs-subst">${formatDate(end)}</span>`</span>;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      date,\n      show,\n      onConfirm,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="quick-select" tabindex="-1">Quick Select</h3>\n<p>Set <code>show-confirm</code> to <code>false</code> to hide the confirm button. In this case, the <code>confirm</code> event will be emitted immediately after the selection is completed.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:show-confirm</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3>\n<p>Use <code>color</code> prop to custom calendar color.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-date-range" tabindex="-1">Custom Date Range</h3>\n<p>Use <code>min-date</code> and <code>max-date</code> to custom date range.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span> <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n\n    <span class="hljs-keyword">return</span> {\n      show,\n      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2010</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),\n      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2010</span>, <span class="hljs-number">0</span>, <span class="hljs-number">31</span>),\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-confirm-text" tabindex="-1">Custom Confirm Text</h3>\n<p>Use <code>confirm-text</code> and <code>confirm-disabled-text</code> to custom confirm text.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span>\n  <span class="hljs-attr">confirm-text</span>=<span class="hljs-string">&quot;OK&quot;</span>\n  <span class="hljs-attr">confirm-disabled-text</span>=<span class="hljs-string">&quot;Select End Time&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-day-text" tabindex="-1">Custom Day Text</h3>\n<p>Use <code>formatter</code> to custom day text.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">day</span>) =&gt; {\n      <span class="hljs-keyword">const</span> month = day.<span class="hljs-property">date</span>.<span class="hljs-title function_">getMonth</span>() + <span class="hljs-number">1</span>;\n      <span class="hljs-keyword">const</span> date = day.<span class="hljs-property">date</span>.<span class="hljs-title function_">getDate</span>();\n\n      <span class="hljs-keyword">if</span> (month === <span class="hljs-number">5</span>) {\n        <span class="hljs-keyword">if</span> (date === <span class="hljs-number">1</span>) {\n          day.<span class="hljs-property">topInfo</span> = <span class="hljs-string">&#x27;Labor Day&#x27;</span>;\n        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (date === <span class="hljs-number">4</span>) {\n          day.<span class="hljs-property">topInfo</span> = <span class="hljs-string">&#x27;Youth Day&#x27;</span>;\n        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (date === <span class="hljs-number">11</span>) {\n          day.<span class="hljs-property">text</span> = <span class="hljs-string">&#x27;Today&#x27;</span>;\n        }\n      }\n\n      <span class="hljs-keyword">if</span> (day.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;start&#x27;</span>) {\n        day.<span class="hljs-property">bottomInfo</span> = <span class="hljs-string">&#x27;In&#x27;</span>;\n      } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (day.<span class="hljs-property">type</span> === <span class="hljs-string">&#x27;end&#x27;</span>) {\n        day.<span class="hljs-property">bottomInfo</span> = <span class="hljs-string">&#x27;Out&#x27;</span>;\n      }\n\n      <span class="hljs-keyword">return</span> day;\n    };\n\n    <span class="hljs-keyword">return</span> {\n      formatter,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-position" tabindex="-1">Custom Position</h3>\n<p>Use <code>position</code> to custom popup position, can be set to <code>top</code>\u3001<code>left</code>\u3001<code>right</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:round</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="max-range" tabindex="-1">Max Range</h3>\n<p>When selecting a date range, you can use the <code>max-range</code> prop to specify the maximum number of selectable days.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">:max-range</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;500px&#x27; }&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="custom-first-day-of-week" tabindex="-1">Custom First Day Of Week</h3>\n<p>Use <code>first-day-of-week</code> to custom the start day of week</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">first-day-of-week</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="tiled-display" tabindex="-1">Tiled display</h3>\n<p>Set <code>poppable</code> to <code>false</code>, the calendar will be displayed directly on the page instead of appearing as a popup</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Calendar&quot;</span>\n  <span class="hljs-attr">:poppable</span>=<span class="hljs-string">&quot;false&quot;</span>\n  <span class="hljs-attr">:show-confirm</span>=<span class="hljs-string">&quot;false&quot;</span>\n  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#x27;500px&#x27; }&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>Type, can be set to <code>range</code> <code>multiple</code></td>\n<td><em>string</em></td>\n<td><code>single</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>Title of calendar</td>\n<td><em>string</em></td>\n<td><code>Calendar</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>Color for the bottom button and selected date</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>min-date</td>\n<td>Min date</td>\n<td><em>Date</em></td>\n<td>Today</td>\n</tr>\n<tr>\n<td>max-date</td>\n<td>Max date</td>\n<td><em>Date</em></td>\n<td>Six months after the today</td>\n</tr>\n<tr>\n<td>default-date</td>\n<td>Default selected date</td>\n<td><em>Date | Date[] | null</em></td>\n<td>Today</td>\n</tr>\n<tr>\n<td>row-height</td>\n<td>Row height</td>\n<td><em>number | string</em></td>\n<td><code>64</code></td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>Day formatter</td>\n<td><em>(day: Day) =&gt; Day</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>poppable</td>\n<td>Whether to show the calendar inside a popup</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>Whether to enable lazy render</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-mark</td>\n<td>Whether to show background month mark</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-title</td>\n<td>Whether to show title</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-subtitle</td>\n<td>Whether to show subtitle</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-confirm</td>\n<td>Whether to show confirm button</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>Whether to be readonly</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>confirm-text</td>\n<td>Confirm button text</td>\n<td><em>string</em></td>\n<td><code>Confirm</code></td>\n</tr>\n<tr>\n<td>confirm-disabled-text</td>\n<td>Confirm button text when disabled</td>\n<td><em>string</em></td>\n<td><code>Confirm</code></td>\n</tr>\n<tr>\n<td>first-day-of-week</td>\n<td>Set the start day of week</td>\n<td><em>0-6</em></td>\n<td><code>0</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="calendar-poppable-props" tabindex="-1">Calendar Poppable Props</h3>\n<p>Following props are supported when the poppable is true</p>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model:show</td>\n<td>Whether to show calendar</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Popup position, can be set to <code>top</code> <code>right</code> <code>left</code></td>\n<td><em>string</em></td>\n<td><code>bottom</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to show round corner</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-popstate</td>\n<td>Whether to close when popstate</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>close-on-click-overlay</td>\n<td>Whether to close when overlay is clicked</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-top</td>\n<td>Whether to enable top safe area adaptation</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>safe-area-inset-bottom</td>\n<td>Whether to enable bottom safe area adaptation</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>Specifies a target element where Calendar will be mounted</td>\n<td><em>string | Element</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="calendar-range-props" tabindex="-1">Calendar Range Props</h3>\n<p>Following props are supported when the type is range</p>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>max-range</td>\n<td>Number of selectable days</td>\n<td><em>number | string</em></td>\n<td>Unlimited</td>\n</tr>\n<tr>\n<td>range-prompt</td>\n<td>Error message when exceeded max range</td>\n<td><em>string</em></td>\n<td><code>Choose no more than xx days</code></td>\n</tr>\n<tr>\n<td>show-range-prompt</td>\n<td>Whether prompt error message when exceeded max range</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>allow-same-day</td>\n<td>Whether the start and end time of the range is allowed on the same day</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="calendar-multiple-props" tabindex="-1">Calendar Multiple Props</h3>\n<p>Following props are supported when the type is multiple</p>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>max-range</td>\n<td>Max count of selectable days</td>\n<td><em>number | string</em></td>\n<td>Unlimited</td>\n</tr>\n<tr>\n<td>range-prompt</td>\n<td>Error message when exceeded max count</td>\n<td><em>string</em></td>\n<td><code>Choose no more than xx days</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="data-structure-of-day" tabindex="-1">Data Structure of Day</h3>\n<table>\n<thead>\n<tr>\n<th>Key</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>date</td>\n<td>Date</td>\n<td><em>Date</em></td>\n</tr>\n<tr>\n<td>type</td>\n<td>Type, can be set to <code>selected</code>\u3001<code>start</code>\u3001<code>middle</code>\u3001<code>end</code>\u3001<code>disabled</code></td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>text</td>\n<td>Text</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>topInfo</td>\n<td>Top info</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>bottomInfo</td>\n<td>Bottom info</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Extra className</td>\n<td><em>string</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>select</td>\n<td>Emitted when date is selected</td>\n<td><em>value: Date | Date[]</em></td>\n</tr>\n<tr>\n<td>confirm</td>\n<td>Emitted after date selection is complete, if <code>show-confirm</code> is <code>true</code>, it is Emitted after clicking the confirm button</td>\n<td><em>value: Date | Date[]</em></td>\n</tr>\n<tr>\n<td>open</td>\n<td>Emitted when opening Popup</td>\n<td>-</td>\n</tr>\n<tr>\n<td>close</td>\n<td>Emitted when closing Popup</td>\n<td>-</td>\n</tr>\n<tr>\n<td>opened</td>\n<td>Emitted when Popup is opened</td>\n<td>-</td>\n</tr>\n<tr>\n<td>closed</td>\n<td>Emitted when Popup is closed</td>\n<td>-</td>\n</tr>\n<tr>\n<td>unselect</td>\n<td>Emitted when unselect date when type is multiple</td>\n<td><em>value: Date</em></td>\n</tr>\n<tr>\n<td>month-show</td>\n<td>Emitted when a month enters the visible area</td>\n<td><em>value: { date: Date, title: string }</em></td>\n</tr>\n<tr>\n<td>over-range</td>\n<td>Emitted when exceeded max range</td>\n<td>-</td>\n</tr>\n<tr>\n<td>click-subtitle</td>\n<td>Emitted when clicking the subtitle</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>click-disabled-date <code>v4.7.0</code></td>\n<td>Emitted when clicking disabled date</td>\n<td><em>value: Date | Date[]</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>SlotProps</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>Custom title</td>\n<td>-</td>\n</tr>\n<tr>\n<td>subtitle</td>\n<td>Custom subtitle</td>\n<td><em>{ text: string, date?: Date }</em></td>\n</tr>\n<tr>\n<td>month-title <code>v4.0.9</code></td>\n<td>Custom title of every month</td>\n<td><em>{ text: string, date: Date }</em></td>\n</tr>\n<tr>\n<td>footer</td>\n<td>Custom footer</td>\n<td>-</td>\n</tr>\n<tr>\n<td>confirm-text</td>\n<td>Custom confirm text</td>\n<td><em>{ disabled: boolean }</em></td>\n</tr>\n<tr>\n<td>top-info</td>\n<td>Custom top info of day</td>\n<td><em>day: Day</em></td>\n</tr>\n<tr>\n<td>bottom-info</td>\n<td>Custom bottom info of day</td>\n<td><em>day: Day</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3>\n<p>Use <a href="https://vuejs.org/guide/essentials/template-refs.html" target="_blank">ref</a> to get Calendar instance and call instance methods.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Attribute</th>\n<th>Return value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>reset</td>\n<td>Reset selected date, will reset to default date when no params passed</td>\n<td><em>date?: Date | Date[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>scrollToDate</td>\n<td>Scroll to date</td>\n<td><em>date: Date</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>getSelectedDate</td>\n<td>get selected date</td>\n<td>-</td>\n<td><em>Date | Date[] | null</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">CalendarType</span>,\n  <span class="hljs-title class_">CalendarProps</span>,\n  <span class="hljs-title class_">CalendarDayItem</span>,\n  <span class="hljs-title class_">CalendarDayType</span>,\n  <span class="hljs-title class_">CalendarInstance</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n<p><code>CalendarInstance</code> is the type of component instance:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CalendarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> calendarRef = ref&lt;<span class="hljs-title class_">CalendarInstance</span>&gt;();\n\ncalendarRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">reset</span>();\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-calendar-background</td>\n<td><em>var(--van-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-popup-height</td>\n<td><em>80%</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-header-shadow</td>\n<td><em>0 2px 10px rgba(125, 126, 128, 0.16)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-header-title-height</td>\n<td><em>44px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-header-title-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-header-subtitle-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-weekdays-height</td>\n<td><em>30px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-weekdays-font-size</td>\n<td><em>var(--van-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-month-title-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-month-mark-color</td>\n<td><em>fade(var(--van-gray-2), 80%)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-month-mark-font-size</td>\n<td><em>160px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-day-height</td>\n<td><em>64px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-day-font-size</td>\n<td><em>var(--van-font-size-lg)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-day-margin-bottom</td>\n<td><em>4px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-range-edge-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-range-edge-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-range-middle-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-range-middle-background-opacity</td>\n<td><em>0.1</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-selected-day-size</td>\n<td><em>54px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-selected-day-color</td>\n<td><em>var(--van-white)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-info-font-size</td>\n<td><em>var(--van-font-size-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-info-line-height</td>\n<td><em>var(--van-line-height-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-selected-day-background</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-day-disabled-color</td>\n<td><em>var(--van-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-confirm-button-height</td>\n<td><em>36px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-calendar-confirm-button-margin</td>\n<td><em>7px 0</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);