(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{406:function(t,s,a){"use strict";a.r(s);var v=a(14),e=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"v-if与v-show的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if与v-show的区别"}},[t._v("#")]),t._v(" v-if与v-show的区别")]),t._v(" "),s("p",[s("code",[t._v("v-if")]),t._v("指令与"),s("code",[t._v("v-show")]),t._v("指令都可以根据值动态控制"),s("code",[t._v("DOM")]),t._v("元素显示隐藏，"),s("code",[t._v("v-if")]),t._v("和"),s("code",[t._v("v-show")]),t._v("属于"),s("code",[t._v("Vue")]),t._v("的内部常用的指令，指令的职责是当表达式的值改变时把某些特殊的行为应用到"),s("code",[t._v("DOM")]),t._v("上。")]),t._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("h3",{attrs:{id:"v-if"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if"}},[t._v("#")]),t._v(" v-if")]),t._v(" "),s("p",[s("code",[t._v("v-if")]),t._v("指令用于条件性地渲染一块内容，这块内容只会在指令的表达式返回"),s("code",[t._v("truthy")]),t._v("值的时候被渲染。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("show"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hide"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"v-show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show"}},[t._v("#")]),t._v(" v-show")]),t._v(" "),s("p",[s("code",[t._v("v-show")]),t._v("指令用法大致一样，不同的是带有"),s("code",[t._v("v-show")]),t._v("指令的元素始终会被渲染并保留在"),s("code",[t._v("DOM")]),t._v("中，"),s("code",[t._v("v-show")]),t._v("只是简单地切换元素的"),s("code",[t._v("CSS property display")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-show")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("show"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),s("ul",[s("li",[t._v("实现方式: "),s("code",[t._v("v-if")]),t._v("是动态的向"),s("code",[t._v("DOM")]),t._v("树内添加或者删除"),s("code",[t._v("DOM")]),t._v("元素，"),s("code",[t._v("v-show")]),t._v("是通过设置"),s("code",[t._v("DOM")]),t._v("元素的"),s("code",[t._v("display")]),t._v("样式属性控制显隐。")]),t._v(" "),s("li",[t._v("编译过程: "),s("code",[t._v("v-if")]),t._v("切换有一个局部编译卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件，"),s("code",[t._v("v-show")]),t._v("只是简单的基于"),s("code",[t._v("CSS")]),t._v("切换。")]),t._v(" "),s("li",[t._v("编译条件: "),s("code",[t._v("v-if")]),t._v("是惰性的，如果初始条件为假，则什么也不做，只有在条件第一次变为真时才开始局部编译， "),s("code",[t._v("v-show")]),t._v("是在任何条件下都被编译，然后被缓存，而且"),s("code",[t._v("DOM")]),t._v("元素保留。")]),t._v(" "),s("li",[t._v("性能消耗: "),s("code",[t._v("v-if")]),t._v("有更高的切换消耗，"),s("code",[t._v("v-show")]),t._v("有更高的初始渲染消耗。")]),t._v(" "),s("li",[t._v("使用场景: "),s("code",[t._v("v-if")]),t._v("适合条件不太可能改变的情况，"),s("code",[t._v("v-show")]),t._v("适合条件频繁切换的情况。")])]),t._v(" "),s("h2",{attrs:{id:"每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://github.com/WindrunnerMax/EveryDay\n")])])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://cn.vuejs.org/v2/guide/conditional.html#v-if\nhttps://www.cnblogs.com/dengyao-blogs/p/11378228.html\nhttps://cn.vuejs.org/v2/guide/conditional.html#v-show\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);