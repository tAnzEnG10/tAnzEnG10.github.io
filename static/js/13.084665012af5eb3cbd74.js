webpackJsonp([13],{"3EqQ":function(t,e){},rugd:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("mtWM"),l=o.n(n),a={name:"admin_study",data:function(){return{article_study:[]}},methods:{handleEdit:function(t,e){var o=e.study_id,n=this;l.a.get("https://www.lvliao.xyz/WxTourChat/Study?condition=getStudyById&id="+o).then(function(t){var e=t.data[0];n.$router.push({name:"admin_add",params:{DATA:e,dif:"study"}})}).catch(function(t){console.log(t)})},handleDelete:function(t,e){var o=this,n=e.study_id;l.a.get("https://www.lvliao.xyz/WxTourChat/Study?condition=delStudy&id="+n).then(function(t){o.$options.created(),console.log(t)}).catch(function(t){console.log(t)})}},created:function(){var t=this;l.a.get("https://www.lvliao.xyz/WxTourChat/Study?condition=getStudy").then(function(e){t.$data.article_study=e.data,console.log(e)}).catch(function(t){console.log(t)})}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-container",{staticStyle:{height:"700px",border:"1px solid #eee"}},[o("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[o("el-dropdown",[o("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[t._v("查看")]),t._v(" "),o("el-dropdown-item",[t._v("新增")]),t._v(" "),o("el-dropdown-item",[t._v("删除")])],1)],1),t._v(" "),o("span",{staticStyle:{"font-size":"15px"}},[t._v("管理")])],1),t._v(" "),o("el-main",[o("el-table",{attrs:{data:t.article_study}},[o("el-table-column",{attrs:{prop:"title",label:"标题","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"description",label:"描述","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"content",label:"内容","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"date",label:"日期",width:"120","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"tag",label:"标签",width:"140","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"study_id",label:"文章id",width:"140","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑\n          ")]),t._v(" "),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])]}}])})],1)],1)],1)},staticRenderFns:[]};var d=o("VU/8")(a,i,!1,function(t){o("3EqQ")},"data-v-196d0a54",null);e.default=d.exports}});