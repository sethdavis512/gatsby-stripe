(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Djrt:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return C}));var a=n("q1tI"),r=n.n(a),c=n("vOnD"),i=n("dAgT"),o=n("MCUY"),d=n("soUV"),l=n("Swnh"),m=n("0lfv"),u=c.c.div.withConfig({displayName:"StripePriceproduct__name__ProductRow",componentId:"sc-1a9fhhd-0"})(["display:flex;margin:0 auto;"]),p=c.c.div.withConfig({displayName:"StripePriceproduct__name__ProductImage",componentId:"sc-1a9fhhd-1"})(["flex:1 0 auto;"]),s=c.c.div.withConfig({displayName:"StripePriceproduct__name__ProductDetails",componentId:"sc-1a9fhhd-2"})(["flex:1 0 auto;"]),h=c.c.div.withConfig({displayName:"StripePriceproduct__name__CartControls",componentId:"sc-1a9fhhd-3"})([""]),f=c.c.div.withConfig({displayName:"StripePriceproduct__name__QuantityControls",componentId:"sc-1a9fhhd-4"})(["margin-bottom:1rem;"]),_=c.c.h4.withConfig({displayName:"StripePriceproduct__name__Price",componentId:"sc-1a9fhhd-5"})(["font-size:2rem;margin:1rem 0;"]),g=c.c.span.withConfig({displayName:"StripePriceproduct__name__Quantity",componentId:"sc-1a9fhhd-6"})(["padding:0 1rem;font-weight:bold;"]),w=Object(c.c)(i.a).withConfig({displayName:"StripePriceproduct__name__AddToCartButton",componentId:"sc-1a9fhhd-7"})(["background-color:",";border-color:",";:hover{background-color:green;border-color:green;}"],(function(e){return e.theme.tertiary}),(function(e){return e.theme.tertiary})),C="3543429004";t.default=function(e){var t=e.data.stripePrice.product,n=Object(a.useState)(0),c=n[0],C=n[1],b=function(e){return function(){return C(e?c-1:c+1)}},y=Object(l.a)()[1];return r.a.createElement(d.a,null,r.a.createElement(o.a,null,r.a.createElement(u,null,r.a.createElement(p,null,t&&t.images&&t.images.length?t.images.map((function(e){return r.a.createElement("img",{key:Object(m.b)("product-image"),src:e,width:"100"})})):"No images"),r.a.createElement(s,null,t&&t.name&&r.a.createElement("h1",null,t.name),t&&t.description&&r.a.createElement("p",null,t.description),t&&t.price&&r.a.createElement(_,null,"$",t.price/100),r.a.createElement(h,null,r.a.createElement(f,null,r.a.createElement(i.a,{onClick:b(!0),disabled:0===c},"-"),r.a.createElement(g,null,c),r.a.createElement(i.a,{onClick:b(!1)},"+")),r.a.createElement(w,{onClick:function(e){return function(){return y.addToCart(e,c)}}(t),disabled:0===c},"Add ",c," to cart"))))))}}}]);
//# sourceMappingURL=component---src-pages-products-stripe-price-product-name-tsx-e1f8b2c696bc94305c9c.js.map