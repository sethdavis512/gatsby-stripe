(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0lfv":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return e+"-"+Math.random().toString(36).substr(2,9)}},yCkV:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("n57c"),i=n("soUV"),l=n("Swnh"),u=n("0lfv");t.default=function(e){var t=e.pageContext.product,n=Object(a.useState)(0),o=n[0],s=n[1],m=function(e){return function(){return s(e?o-1:o+1)}},d=Object(l.a)()[1];return r.a.createElement(i.a,null,r.a.createElement("div",null,t&&t.images&&t.images.length?t.images.map((function(e){return r.a.createElement("img",{key:Object(u.a)("product-image"),src:e})})):"No images"),r.a.createElement("div",null,r.a.createElement("h1",null,t.name),t.description&&r.a.createElement("p",null,t.description),t.price&&r.a.createElement("p",null,r.a.createElement("strong",null,"$",t.price/100)),r.a.createElement(c.a,{onClick:m(!0),disabled:0===o},"-"),o,r.a.createElement(c.a,{onClick:m(!1)},"+"),r.a.createElement(c.a,{onClick:function(e){return function(){return d.addToCart(e,o)}}(t),disabled:0===o},"Add ",o," Cart"),"I am a product page ",JSON.stringify(t,null,4)))}}}]);
//# sourceMappingURL=component---src-pages-product-tsx-9a060a16ed9beb18713a.js.map