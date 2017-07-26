webpackJsonp([1],{127:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e(137),s=e.n(o),n=e(138),r=e.n(n),i=e(12);a.default={data:function(){return{displayedMessage:""}},firebase:{movies:i.a.ref("movies")},methods:{removeMovie:function(t){var a=this;i.a.ref("movies").child(t[".key"]).remove(),this.displayedMessage="app-message-info-deleted",setTimeout(function(){a.displayedMessage=""},4e3)},restoreMovie:function(t){var a=this;i.a.ref("movies").child(t[".key"]).update({watched:!1}),this.displayedMessage="app-message-restored",setTimeout(function(){a.displayedMessage=""},4e3)}},components:{appMessageInfoDeleted:s.a,appMessageRestored:r.a}}},129:function(t,a,e){a=t.exports=e(1)(),a.push([t.i,".message[data-v-178bc174]{padding:.75rem 1.25rem;margin-bottom:2rem;color:#fff;font-family:Lato,sans-serif;font-weight:300}.message-info[data-v-178bc174]{background-color:#03a9f4}",""])},132:function(t,a,e){a=t.exports=e(1)(),a.push([t.i,"@media(max-width:992px){.container[data-v-3d542b34]{width:60%!important}}@media(max-width:768px){li:hover img[data-v-3d542b34]{transform:scale(3)!important}.container[data-v-3d542b34]{width:70%!important}}@media(max-width:576px){.container[data-v-3d542b34]{width:90%!important}img[data-v-3d542b34]{display:none}li[data-v-3d542b34]{height:80px!important}}.container[data-v-3d542b34]{font-family:Lato,sans-serif;width:50%}h2[data-v-3d542b34]{font-weight:300}img[data-v-3d542b34]{height:40px;width:auto;position:relative;float:right;transition:all .5s ease-in-out}li:hover img[data-v-3d542b34]{transform:scale(5);z-index:10000;border-radius:3px}ul[data-v-3d542b34]{border:1px solid #f2f2f2;border-bottom:none;list-style:none;padding:0;margin:0;box-shadow:0 12px 30px -12px rgba(0,0,0,.75);-webkit-box-shadow:0 12px 30px -12px rgba(0,0,0,.75);-moz-box-shadow:0 12px 30px -12px rgba(0,0,0,.75)}li[data-v-3d542b34]{height:40px;color:#423f3f;line-height:40px;font-weight:300}li[data-v-3d542b34]:nth-child(2n){background-color:#f2f2f2}li:hover span[data-v-3d542b34]{width:40px;opacity:1;transition:.3s ease-in-out;cursor:pointer}.button[data-v-3d542b34]{height:40px;text-align:center;color:#fff;width:0;display:inline-block;transition:.3 ease-in-out;opacity:0}.button--delete[data-v-3d542b34]{background-color:#e50000}.button--restore[data-v-3d542b34]{background-color:#ffa000;margin-left:-5px;margin-right:15px}.button--delete[data-v-3d542b34]:hover{background-color:#bf0000}.button--restore[data-v-3d542b34]:hover{background-color:#dd8c02}.appear-enter-active[data-v-3d542b34]{animation:appear-in-data-v-3d542b34 .7s ease-in forwards}.appear-leave-active[data-v-3d542b34]{animation:appear-out-data-v-3d542b34 .7s ease-out forwards}@keyframes appear-in-data-v-3d542b34{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes appear-out-data-v-3d542b34{0%{transform:translateY(0);opacity:1}to{transform:translateY(20px);opacity:0}}",""])},133:function(t,a,e){a=t.exports=e(1)(),a.push([t.i,".message[data-v-3f5e27fd]{padding:.75rem 1.25rem;margin-bottom:2rem;color:#fff;font-family:Lato,sans-serif;font-weight:300}.message-info[data-v-3f5e27fd]{background-color:#03a9f4}a[data-v-3f5e27fd]{color:#fff;text-decoration:none}a[data-v-3f5e27fd]:hover{text-decoration:underline}",""])},137:function(t,a,e){function o(t){e(147)}var s=e(2)(null,e(140),o,"data-v-178bc174",null);t.exports=s.exports},138:function(t,a,e){function o(t){e(151)}var s=e(2)(null,e(144),o,"data-v-3f5e27fd",null);t.exports=s.exports},140:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message message-info",attrs:{role:"alert"}},[e("strong",[e("i",{staticClass:"fa fa-info",attrs:{"aria-hidden":"true"}}),t._v(" Info")]),t._v(" Movie was successfully "),e("u",[t._v("removed")]),t._v(" from our database.\n")])}]}},143:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("transition",{attrs:{name:"appear",mode:"out-in"}},[e(t.displayedMessage,{tag:"component"})],1),t._v(" "),e("h2",[t._v("You have already seen:")]),t._v(" "),e("hr"),t._v(" "),e("ul",[t._l(t.movies,function(a,o){return[0!=a.watched?e("li",[e("span",{staticClass:"button button--delete",on:{click:function(e){t.removeMovie(a)}}},[e("i",{staticClass:"fa fa-trash"})]),t._v(" "),e("span",{staticClass:"button button--restore",on:{click:function(e){t.restoreMovie(a)}}},[e("i",{staticClass:"fa fa-repeat"})]),t._v("\n  \t\t\t\t "+t._s(a.title)+" ("+t._s(a.year)+") | You rated: "+t._s(a.userRating)+"\n  \t\t\t\t "),e("img",{attrs:{src:a.img,alt:"small_movie_poster"}})]):t._e()]})],2)],1)])])},staticRenderFns:[]}},144:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message message-info",attrs:{role:"alert"}},[t._m(0),t._v(" Movie was successfully restored to your "),e("router-link",{attrs:{to:"/movies"}},[e("a",{staticClass:"alert-link"},[t._v("DASHBOARD")])]),t._v(".\n")],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("strong",[e("i",{staticClass:"fa fa-info",attrs:{"aria-hidden":"true"}}),t._v(" Info")])}]}},147:function(t,a,e){var o=e(129);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(3)("37b99396",o,!0)},150:function(t,a,e){var o=e(132);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(3)("4992cd6a",o,!0)},151:function(t,a,e){var o=e(133);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(3)("e9de1a1a",o,!0)},43:function(t,a,e){function o(t){e(150)}var s=e(2)(e(127),e(143),o,"data-v-3d542b34",null);t.exports=s.exports}});
//# sourceMappingURL=1.build.js.map