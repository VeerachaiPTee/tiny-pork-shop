(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{492:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(501),c=r(486),o=r(508),l=Object(n.a)({apiKey:"AIzaSyCnkV6sgTfJhF4MuVc0ZRxsvt1kNG59Iys",authDomain:"tiny-shop-8c1ae.firebaseapp.com",projectId:"tiny-shop-8c1ae",storageBucket:"tiny-shop-8c1ae.appspot.com",messagingSenderId:"745842333522",appId:"1:745842333522:web:e1f831be4c81a523168c8b"}),d=Object(c.f)(l);Object(o.a)(l)},595:function(t,e,r){"use strict";r.r(e);var n=r(482),c=r(481),o=r(478),l=r(599),d=r(590),f=r(572),h=r(168),O=r(589),v=r(477),m=r(509),j=(r(25),r(216),r(9),r(12),r(16),r(17),r(11),r(34)),x=r(2),w=(r(114),r(68),r(5),r(8),r(88)),y=r(486),I=(r(524),r(492));function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){Object(x.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var k={data:function(){return{dialogp:!1,productData:[],page:1,itemsPerPage:10,pageCount:0,search:"",headers:[{text:"ลำดับ",value:"index",align:"left",width:"80px"},{text:"รายการ",value:"PRODUCTNAME",align:"left",width:"150px"},{text:"ราคา",value:"PRICE",align:"left",width:"80px"},{text:"รายละเอียด",value:"DETAIL",align:"left",width:"150px"},{text:"รูปภาพ",value:"FILE",align:"left",width:"250px"}]}},created:function(){this.SET_LOGIN(!0),this.listProduct()},computed:{itemsWithIndex:function(){return this.productData.map((function(t,e){return _(_({},t),{},{index:e+1})}))}},methods:_(_({},Object(w.c)({SET_LOGIN:"users/SET_LOGIN"})),{},{addPromotion:function(){this.dialogp=!0},listProduct:function(){var t=this;return Object(j.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(y.g)(Object(y.b)(I.a,"product"),Object(y.i)("PROMOTION","==",1)),e.next=3,Object(y.e)(r);case 3:e.sent.forEach((function(e){var r=e.data();r.refId=e.id,t.productData.some((function(t){return t.refId===r.refId}))||t.productData.push(r)})),console.log(t.productData);case 6:case"end":return e.stop()}}),e)})))()}})},D=r(80),component=Object(D.a)(k,(function(){var t=this,e=t._self._c;return e("div",{},[e(l.a,[e(v.a,[e(o.a,{attrs:{cols:"6"}},[e("h2",[t._v("ดูรายการที่จัดโปรโมชั่น")])])],1),t._v(" "),e(v.a,{attrs:{justify:"center"}},[e(f.a,{attrs:{width:"500px"},model:{value:t.dialogp,callback:function(e){t.dialogp=e},expression:"dialogp"}},[e(n.a,[e(c.c,[t._v("เพิ่มรายการโปรโมชั่น")]),t._v(" "),e(c.b)],1)],1)],1),t._v(" "),e(v.a,[e(o.a,{attrs:{cols:"6"}},[e(m.a,{attrs:{label:"ค้นหารายการสินค้า",dense:"",outlined:"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e(d.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.itemsWithIndex,search:t.search,page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":"","mobile-breakpoint":"0"},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.FILE",fn:function(t){var r=t.item;return[e(h.a,{attrs:{width:"150",height:"100px",src:r.FILE}})]}}],null,!0)})],1)],1),t._v(" "),e(v.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{cols:"8",md:"4"}},[e("div",{staticClass:"text-center pt-2"},[e(O.a,{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);