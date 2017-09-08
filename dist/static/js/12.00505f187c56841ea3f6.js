webpackJsonp([12,20],{46:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s["default"]={data:function(){return{asideLeft:{show:!1},asideTop:{show:!1},asideRight:{show:!1},asideBottom:{show:!1}}}}},282:function(t,s,a){var i,h;i=a(46);var e=a(311);h=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(h=i=i["default"]),"function"==typeof h&&(h=h.options),h.render=e.render,h.staticRenderFns=e.staticRenderFns,t.exports=i},311:function(t,s){t.exports={render:function(){var t=this;return t._h("section",[[t._m(0)," ",t._h("div",{staticClass:"introduce"},[t._h("z-button",{on:{click:function(s){t.asideLeft.show=!0}}},["Left"])," ",t._h("z-aside",{attrs:{show:t.asideLeft.show,title:"标题",type:"left"},on:{close:function(s){t.asideLeft.show=!1}}},[t._h("h3",["我是Aside-Left"])," ",t._h("div",["组件内部可以自定义HTML结构"])," ",t._h("p",["直接在<aside>标签中写即可"])," ",t._h("div",["内容长度无限制，超过部分可以滚动浏览"])])])," ",t._h("div",{staticClass:"introduce"},[t._h("z-button",{on:{click:function(s){t.asideTop.show=!0}}},["Top"])," ",t._h("z-aside",{attrs:{show:t.asideTop.show,title:"标题",type:"top"},on:{close:function(s){t.asideTop.show=!1}}},[t._h("h3",["我是Aside-Top"])," ",t._h("div",["组件内部可以自定义HTML结构"])," ",t._h("p",["直接在<aside>标签中写即可"])," ",t._h("div",["内容长度无限制，超过部分可以滚动浏览"])])])," ",t._h("div",{staticClass:"introduce"},[t._h("z-button",{on:{click:function(s){t.asideRight.show=!0}}},["Right"])," ",t._h("z-aside",{attrs:{show:t.asideRight.show,title:"标题",type:"right"},on:{close:function(s){t.asideRight.show=!1}}},[t._h("h3",["我是Aside-Right"])," ",t._h("div",["组件内部可以自定义HTML结构"])," ",t._h("p",["直接在<aside>标签中写即可"])," ",t._h("div",["内容长度无限制，超过部分可以滚动浏览"])])])," ",t._h("div",{staticClass:"introduce"},[t._h("z-button",{on:{click:function(s){t.asideBottom.show=!0}}},["Bottom"])," ",t._h("z-aside",{attrs:{show:t.asideBottom.show,title:"标题",type:"bottom"},on:{close:function(s){t.asideBottom.show=!1}}},[t._h("h3",["我是Aside-Bottom"])," ",t._h("div",["组件内部可以自定义HTML结构"])," ",t._h("p",["直接在<aside>标签中写即可"])," ",t._h("div",["内容长度无限制，超过部分可以滚动浏览"])])])]," ",t._m(1)," ",t._h("p",["注：组件标签内可以自定义HTML结构。"])," ",t._h("h3",["API"])," ",[t._h("z-table",{attrs:{ths:["参数","类型","必填","默认值","说明"],trs:[["show","Boolean","是","-","显示状态"],["title","String","否","-","表体的数据"],["type","String","否","left","显示位置(left,top,right,bottom)"],["close-text","String","否","关闭","关闭按钮文字"]]}})]," ",t._h("h3",["EVENT"])," ",[t._h("z-table",{attrs:{ths:["事件名称","说明","回调参数"],trs:[["close","关闭侧边栏时的回调函数","-"]]}})]])},staticRenderFns:[function(){var t=this;return t._h("h2",[t._h("a",{attrs:{href:"#aside"}},["Aside 侧边栏"])])},function(){var t=this;return t._h("pre",[t._h("code",{staticClass:"language-html"},[t._h("span",{staticClass:"hljs-tag"},["<",t._h("span",{staticClass:"hljs-name"},["z-button"])," ",t._h("span",{staticClass:"hljs-attr"},["@click"]),"=",t._h("span",{staticClass:"hljs-string"},['"asideBottom.show = true"']),">"]),"Bottom",t._h("span",{staticClass:"hljs-tag"},["</",t._h("span",{staticClass:"hljs-name"},["z-button"]),">"]),"\n\n",t._h("span",{staticClass:"hljs-tag"},["<",t._h("span",{staticClass:"hljs-name"},["z-aside"]),"\n",t._h("span",{staticClass:"hljs-attr"},[":show"]),"=",t._h("span",{staticClass:"hljs-string"},['"asideBottom.show"']),"\n",t._h("span",{staticClass:"hljs-attr"},[":title"]),"=",t._h("span",{staticClass:"hljs-string"},["\"'标题'\""]),"\n",t._h("span",{staticClass:"hljs-attr"},[":type"]),"=",t._h("span",{staticClass:"hljs-string"},["\"'bottom'\""]),"\n",t._h("span",{staticClass:"hljs-attr"},["@close"]),"=",t._h("span",{staticClass:"hljs-string"},['"asideBottom.show = false"']),">"]),"\n  ",t._h("span",{staticClass:"hljs-comment"},["<!-- 自定义内容 -->"]),"\n",t._h("span",{staticClass:"hljs-tag"},["</",t._h("span",{staticClass:"hljs-name"},["z-aside"]),">"]),"\n"])])}]}},330:function(t,s,a){t.exports=a(282)}});