(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{402:function(t,e,a){"use strict";a.r(e);var n={data:function(){return{visible:!0,theme:0}},methods:{toggle:function(){this.visible^=!0}},computed:{$theme:function(){return this.theme?"dark":"light"},divStyle:function(){return"light"==this.$theme?{backgroundColor:"#fff",padding:"20px",color:"#000"}:{backgroundColor:"#000",padding:"20px",color:"#fff"}}}},s=a(0),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#drawer"}},[t._v("Drawer")])]),a("li",[a("a",{attrs:{href:"#propoties"}},[t._v("Propoties")])]),a("li",[a("a",{attrs:{href:"#events"}},[t._v("Events")])])])]),a("p"),t._v(" "),a("h3",{attrs:{id:"drawer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drawer"}},[t._v("#")]),t._v(" Drawer")]),t._v(" "),a("div",{style:t.divStyle},[t._v("\nTHEME:"),a("fv-toggle-switch",{attrs:{on:t.$theme,off:t.$theme,theme:t.$theme},model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}})],1),t._v(" "),a("fv-button",{attrs:{theme:t.$theme},on:{click:t.toggle}},[t._v("Show/Hide")]),t._v(" "),a("fv-drawer",{attrs:{visible:t.visible,theme:t.$theme},on:{"update:visible":function(e){t.visible=e}}}),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fv-drawer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":visible.sync")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("visible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":theme")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fv-drawer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"propoties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#propoties"}},[t._v("#")]),t._v(" Propoties")]),t._v(" "),a("hr"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性(attr)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型(type)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必填(required)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值(default)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明(statement)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("theme")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("['system','dark','light','custom']")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'system'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("主题色")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("visible")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("[boolean]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否可视")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("length")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("[number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("300")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("focusTrap")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("[boolen]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否聚焦")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("[boolean]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否禁用选项框")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("position")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("['bottom','left','top','right']")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'bottom'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("位置")])])])]),t._v(" "),a("h3",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("hr"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("事件名(Name)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("参数类型(args)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明(statement)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);