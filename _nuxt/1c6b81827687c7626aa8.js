(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(t,a,n){var i=n(146);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(26).default)("c761a44a",i,!0,{})},145:function(t,a,n){"use strict";var i=n(143);n.n(i).a},146:function(t,a,n){(t.exports=n(25)(!1)).push([t.i,"\n.surah__title[data-v-01aecab8] {\n  font-size: 2rem;\n  width: 80%;\n  float: right;\n  text-align: right;\n}\n.surah__title--latin[data-v-01aecab8] {\n    width: 100%;\n    font-size: 1.5rem;\n}\n.surah__trans[data-v-01aecab8] {\n  text-align: right;\n  font-style: italic;\n  line-height: 2;\n}\n.surah__count[data-v-01aecab8] {\n  text-align: right;\n}\n",""])},153:function(t,a,n){"use strict";n.r(a);n(1),n(2),n(3);var i=n(62),s={name:"PageIndex",data:function(){return{surahInfoArray:[]}},mounted:function(){this.fetchSurahInfo()},methods:{getSurahDetailUrl:function(t,a){return"/".concat(a+1)},fetchSurahInfo:function(){var t=this;fetch(i.a.SURAH_INFO).then(function(t){return t.json()}).then(function(a){t.surahInfoArray=a.surah_info})}}},e=(n(145),n(12)),r=Object(e.a)(s,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{staticClass:"container"},t._l(t.surahInfoArray,function(a,i){return n("nuxt-link",{key:i,staticClass:"surah block_content",attrs:{to:t.getSurahDetailUrl(a,i)}},[n("div",{staticClass:"surah__index tag_index"},[t._v("\n      "+t._s(i+1)+"\n    ")]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__title"},[t._v("\n        "+t._s(a.arabic)+"\n      ")])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(a.latin)+"\n      ")])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__trans"},[t._v("\n        "+t._s(a.translation)+"\n      ")])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__count"},[t._v("\n        "+t._s(a.ayah_count)+" Ayat\n      ")])])])}))},[],!1,null,"01aecab8",null);r.options.__file="index.vue";a.default=r.exports}}]);