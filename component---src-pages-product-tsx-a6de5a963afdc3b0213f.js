(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0lfv":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e){return e+"-"+Math.random().toString(36).substr(2,9)}},yCkV:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),c=t("n57c"),i=t("soUV"),l=t("Swnh"),u=t("0lfv");n.default=function(e){var n=e.pageContext.product,t=Object(a.useState)(0),o=t[0],m=t[1],s=function(e){return function(){return m(e?o-1:o+1)}},d=Object(l.a)()[1];return r.a.createElement(i.a,null,r.a.createElement("div",null,n&&n.images&&n.images.length?n.images.map((function(e){return r.a.createElement("img",{key:Object(u.a)("product-image"),src:e})})):"No images"),r.a.createElement("div",null,n.name&&r.a.createElement("h1",null,n.name),n.description&&r.a.createElement("p",null,n.description),n.price&&r.a.createElement("p",null,r.a.createElement("strong",null,"$",n.price/100)),r.a.createElement(c.a,{onClick:s(!0),disabled:0===o},"-"),o,r.a.createElement(c.a,{onClick:s(!1)},"+"),r.a.createElement(c.a,{onClick:function(e){return function(){return d.addToCart(e,o)}}(n),disabled:0===o},"Add ",o," Cart"),"I am a product page ",JSON.stringify(n,null,4)))}}}]);
//# sourceMappingURL=component---src-pages-product-tsx-a6de5a963afdc3b0213f.js.map