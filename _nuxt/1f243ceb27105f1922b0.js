(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{164:function(t,n,e){var content=e(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(46).default)("e1e25854",content,!0,{sourceMap:!1})},221:function(t,n,e){"use strict";var o=e(164);e.n(o).a},222:function(t,n,e){(t.exports=e(45)(!1)).push([t.i,".aboutMe-component[data-v-dae9d3f0]{width:1200px;margin:0 auto;min-height:800px;display:flex;flex-direction:row}.aboutMe-navigator-container[data-v-dae9d3f0]{width:880px;margin-left:20px}.aboutMe-container[data-v-dae9d3f0]{width:880px;background-color:#fff;min-height:800px;margin-top:10px;padding:10px}.cebianlan[data-v-dae9d3f0]{display:flex;flex-direction:column;margin-top:30px;margin-left:20px}.navi_shouye[data-v-dae9d3f0]{text-decoration:none;color:#1f7199}.navi_shouye[data-v-dae9d3f0]:hover{color:#deb887}.navi_pageCurrent[data-v-dae9d3f0]{color:#000;font-size:16px}",""])},450:function(t,n,e){"use strict";e.r(n);var o=e(0),c=e(152),d=e.n(c),r=o.a.component("LastestComment",function(t){setTimeout(function(){e.e(3).then(function(){var n=[e(454)];t.apply(null,n)}.bind(this)).catch(e.oe)},200)}),l={components:{tag:o.a.component("tag",function(t){setTimeout(function(){e.e(2).then(function(){var n=[e(460)];t.apply(null,n)}.bind(this)).catch(e.oe)},200)}),query:o.a.component("query",function(t){setTimeout(function(){e.e(5).then(function(){var n=[e(156)];t.apply(null,n)}.bind(this)).catch(e.oe)},200)}),LastestComment:r,Sayofday:o.a.component("Sayofday",function(t){setTimeout(function(){e.e(1).then(function(){var n=[e(459)];t.apply(null,n)}.bind(this)).catch(e.oe)},200)})},data:function(){return{aboutMe:""}},created:function(){window.scrollTo(0,0);var t=this;d.a.get("https://www.lvliao.xyz/api/Living?condition=getLivingById&id=1").then(function(n){t.$data.aboutMe=n.data[0]}).catch(function(t){})}},f=(e(221),e(17)),component=Object(f.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"aboutMe-component"},[e("div",{staticClass:"aboutMe-navigator-container"},[e("div",{staticClass:"re-lable"},[e("nuxt-link",{staticClass:"navi_shouye",attrs:{to:"/"}},[t._v("首页")]),t._v("\n        ->  \n      "),e("label",{staticClass:"navi_pageCurrent"},[t._v("关于我")])],1),t._v(" "),e("div",{staticClass:"aboutMe-container"},[e("main",[e("span",{domProps:{innerHTML:t._s(t.aboutMe.content)}})])])]),t._v(" "),e("div",{staticClass:"cebianlan"},[e("query"),t._v(" "),e("tag"),t._v(" "),e("LastestComment"),t._v(" "),e("sayofday")],1)])},[],!1,null,"dae9d3f0",null);n.default=component.exports}}]);