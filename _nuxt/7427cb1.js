(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return new Date(t).toLocaleDateString()}},239:function(t,e,n){"use strict";n.r(e);n(17);var r=n(2),c=n(33),o=n(221),l=Object(c.defineComponent)({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").only(["title","slug","path","date","excerpt","description"]).sortBy("date","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{blogPosts:r});case 5:case"end":return e.stop()}}),e)})))()},head:{},setup:function(){return Object(c.useMeta)({title:"Wiwa - Blog"}),{printDate:o.a}}}),d=n(26),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-screen-md mx-auto p-4 space-y-5"},t._l(t.blogPosts,(function(e){return n("section",{key:e.slug,staticClass:"flex flex-col space-y-2"},[n("div",[n("span",{staticClass:"font-normal mr-2"},[t._v(t._s(t.printDate(e.date)))]),t._v(" "),n("nuxt-link",{staticClass:"bloglist-title",attrs:{to:e.path}},[n("span",[t._v(t._s(e.title))])])],1),t._v(" "),e.excerpt?n("nuxt-content",{attrs:{document:{body:e.excerpt}}}):e.description?n("p",[t._v(t._s(e.description))]):t._e()],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);