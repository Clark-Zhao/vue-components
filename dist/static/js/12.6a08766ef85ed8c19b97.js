webpackJsonp([12,18],{7:function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{isShowActionSheet:!1,lis:[{id:998,text:"私聊"},{text:"关注",href:"http://blog.zhaoyuxiang.cn"},{text:"拉入黑名单"}]}},methods:{test:function(){alert("点击了标识为998的item")}}}},234:function(s,t,a){var n,h;n=a(7);var i=a(297);h=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(h=n=n["default"]),"function"==typeof h&&(h=h.options),h.render=i.render,h.staticRenderFns=i.staticRenderFns,s.exports=n},297:function(s,t){s.exports={render:function(){var s=this;return s._h("section",[s._h("h2",["ActionSheet 动作面板"])," ",[s._h("z-button",{attrs:{type:"success"},on:{click:function(t){s.isShowActionSheet=!0}}},["\n  打开动作面板\n  "])," ",s._h("p",[s._h("z-actionsheet",{attrs:{show:s.isShowActionSheet,title:"动作面板展示",lis:s.lis,"close-text":"确定或者取消或者其他"},on:{click998:s.test,close:function(t){s.isShowActionSheet=!1}}})])],s._h("p")," ",s._m(0)," ",s._m(1)," ",s._h("h3",["API"])," ",[s._h("z-table",{attrs:{title:"主要参数",ths:["参数","类型","必填","默认值","说明"],trs:[["show","Boolean","是","-","是否显示动作面板"],["lis","Array","是","-","动作面板中的各项条目"],["title","String","否","-","动作面板的标题"],["close-text","String","否","取消","动作面板关闭按钮的文字"]]}})," ",s._h("p",[s._h("z-table",{attrs:{title:"lis中的参数",ths:["参数","类型","必填","默认值","说明"],trs:[["text","String","是","-","条目显示的文字"],["id","Number","否","-","条目的标识"],["href","String","否","-","条目要跳转到的路径"]]}})])],s._h("p")," ",s._h("h3",["EVENT"])," ",[s._h("div",{staticClass:"introduce-block"},[s._h("z-table",{attrs:{ths:["事件名称","说明","回调参数"],trs:[["close","关闭动作面板时的回调函数","-"],["click + id","点击单个条目时的回调函数","-"]]}})])]," ",s._h("h4",["给条目追加点击事件的方法"])," ",s._h("p",["如果想对某个条目绑定click方法，只需要给该条目一个标识(id),当该条目被点击时，组件会emit一个\"'click' + id\",在父组件接收即可。"])," ",s._m(2)])},staticRenderFns:[function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-html"},[s._h("span",{staticClass:"hljs-tag"},["<",s._h("span",{staticClass:"hljs-name"},["z-button"]),"\n",s._h("span",{staticClass:"hljs-attr"},["type"]),"=",s._h("span",{staticClass:"hljs-string"},['"success"']),"\n",s._h("span",{staticClass:"hljs-attr"},["@click"]),"=",s._h("span",{staticClass:"hljs-string"},['"isShowActionSheet = true"']),">"]),"\n打开动作面板\n",s._h("span",{staticClass:"hljs-tag"},["</",s._h("span",{staticClass:"hljs-name"},["z-button"]),">"]),"\n\n",s._h("span",{staticClass:"hljs-tag"},["<",s._h("span",{staticClass:"hljs-name"},["z-actionsheet"]),"\n",s._h("span",{staticClass:"hljs-attr"},[":show"]),"=",s._h("span",{staticClass:"hljs-string"},['"isShowActionSheet"']),"\n",s._h("span",{staticClass:"hljs-attr"},[":title"]),"=",s._h("span",{staticClass:"hljs-string"},["\"'动作面板展示'\""]),"\n",s._h("span",{staticClass:"hljs-attr"},[":lis"]),"=",s._h("span",{staticClass:"hljs-string"},['"lis"']),"\n",s._h("span",{staticClass:"hljs-attr"},[":close-text"]),"=",s._h("span",{staticClass:"hljs-string"},["\"'确定或者取消或者其他'\""]),"\n",s._h("span",{staticClass:"hljs-attr"},["@click998"]),"=",s._h("span",{staticClass:"hljs-string"},['"test"']),"\n",s._h("span",{staticClass:"hljs-attr"},["@close"]),"=",s._h("span",{staticClass:"hljs-string"},['"isShowActionSheet = false"']),">"]),"\n",s._h("span",{staticClass:"hljs-tag"},["</",s._h("span",{staticClass:"hljs-name"},["z-actionsheet"]),">"]),"\n"])])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-js"},["data() {\n  ",s._h("span",{staticClass:"hljs-keyword"},["return"])," {\n    ",s._h("span",{staticClass:"hljs-attr"},["isShowActionSheet"]),": ",s._h("span",{staticClass:"hljs-literal"},["false"]),",\n    ",s._h("span",{staticClass:"hljs-attr"},["lis"]),": [\n      {\n        ",s._h("span",{staticClass:"hljs-attr"},["id"]),": ",s._h("span",{staticClass:"hljs-number"},["998"]),",\n        ",s._h("span",{staticClass:"hljs-attr"},["text"]),": ",s._h("span",{staticClass:"hljs-string"},["'私聊'"]),"\n      },\n      {\n        ",s._h("span",{staticClass:"hljs-attr"},["text"]),": ",s._h("span",{staticClass:"hljs-string"},["'关注'"]),",\n        ",s._h("span",{staticClass:"hljs-attr"},["href"]),": ",s._h("span",{staticClass:"hljs-string"},["'http://blog.zhaoyuxiang.cn'"]),"\n      },\n      {\n        ",s._h("span",{staticClass:"hljs-attr"},["text"]),": ",s._h("span",{staticClass:"hljs-string"},["'拉入黑名单'"]),"\n      }\n    ]\n  };\n},\n\n",s._h("span",{staticClass:"hljs-attr"},["methods"]),": {\n  test() {\n    alert(",s._h("span",{staticClass:"hljs-string"},["'点击了标识为998的item'"]),")\n  }\n}\n"])])},function(){var s=this;return s._h("p",["比如例子中我们给第一个条目标识为998，那么只需要在父组件",s._h("code",["@click998"]),"即可。"])}]}},302:function(s,t,a){s.exports=a(234)}});