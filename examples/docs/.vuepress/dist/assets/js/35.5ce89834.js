(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{412:function(t,a,s){"use strict";s.r(a);s(13);var e=s(4),r={data:function(){return{percent:[10,20,30,35]}},mounted:function(){var t=this;setInterval((function(){var a,s=Object(e.a)(t.percent);try{for(s.s();!(a=s.n()).done;){var r=a.value;t.$set(t.percent,t.percent.indexOf(r),Math.ceil(100*Math.random()))}}catch(t){s.e(t)}finally{s.f()}}),3e3)}},n=s(0),c=Object(n.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#progressbar-demo"}},[t._v("ProgressBar-DEMO")])]),s("li",[s("a",{attrs:{href:"#default-progressbar"}},[t._v("Default ProgressBar")])]),s("li",[s("a",{attrs:{href:"#indeterminate-progressbar"}},[t._v("Indeterminate ProgressBar")])]),s("li",[s("a",{attrs:{href:"#progressbar-disabled"}},[t._v("ProgressBar Disabled")])]),s("li",[s("a",{attrs:{href:"#progressbar-custom-style"}},[t._v("ProgressBar Custom Style")])]),s("li",[s("a",{attrs:{href:"#propoties"}},[t._v("Propoties")])]),s("li",[s("a",{attrs:{href:"#events"}},[t._v("Events")])])])]),s("p"),t._v(" "),s("h3",{attrs:{id:"progressbar-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#progressbar-demo"}},[t._v("#")]),t._v(" ProgressBar-DEMO")]),t._v(" "),s("fv-ProgressBar"),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fv-ProgressBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fv-ProgressBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"default-progressbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-progressbar"}},[t._v("#")]),t._v(" Default ProgressBar")]),t._v(" "),s("hr"),t._v(" "),s("fv-ProgressBar",{model:{value:t.percent[0],callback:function(a){t.$set(t.percent,0,a)},expression:"percent[0]"}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fv-ProgressBar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("percent[0]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fv-ProgressBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"indeterminate-progressbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indeterminate-progressbar"}},[t._v("#")]),t._v(" Indeterminate ProgressBar")]),t._v(" "),s("hr"),t._v(" "),s("fv-ProgressBar",{attrs:{loading:"true"}}),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fv-ProgressBar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loading")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fv-ProgressBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"progressbar-disabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#progressbar-disabled"}},[t._v("#")]),t._v(" ProgressBar Disabled")]),t._v(" "),s("hr"),t._v(" "),s("ol",[s("li",[t._v("Default\n"),s("fv-ProgressBar",{attrs:{disabled:""},model:{value:t.percent[1],callback:function(a){t.$set(t.percent,1,a)},expression:"percent[1]"}})],1)]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fv-ProgressBar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("percent[1]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("disabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fv-ProgressBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Indeterminate\n"),s("fv-ProgressBar",{attrs:{loading:"true",disabled:""}})],1)]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fv-ProgressBar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loading")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("disabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fv-ProgressBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"progressbar-custom-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#progressbar-custom-style"}},[t._v("#")]),t._v(" ProgressBar Custom Style")]),t._v(" "),s("hr"),t._v(" "),s("ol",[s("li",[t._v("Custom Foreground\n"),s("fv-ProgressBar",{attrs:{foreground:"rgba(0,204,153,1)"},model:{value:t.percent[2],callback:function(a){t.$set(t.percent,2,a)},expression:"percent[2]"}})],1)]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fv-ProgressBar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("percent[2]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("foreground")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rgba(0,204,153,1)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fv-ProgressBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Custom Background\n"),s("fv-ProgressBar",{attrs:{background:"rgba(0,204,153,0.6)"},model:{value:t.percent[3],callback:function(a){t.$set(t.percent,3,a)},expression:"percent[3]"}})],1)]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fv-ProgressBar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("percent[3]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("rgba(0,204,153,0.6)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fv-ProgressBar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"propoties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#propoties"}},[t._v("#")]),t._v(" Propoties")]),t._v(" "),s("hr"),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("属性(attr)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型(type)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("必填(required)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("默认值(default)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明(statement)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[number]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Progressbar value")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("loading")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[boolean]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Is progressbar indeterminate")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("foreground")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[string(color)]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("background")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[string(color)]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("disabled")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("[boolean]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("h3",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("hr"),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("事件名(Name)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型(args)")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明(statement)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("progress-change")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("percent")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("progress-finished")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("percent")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])])],1)}),[],!1,null,null,null);a.default=c.exports}}]);