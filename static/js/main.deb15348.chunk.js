(this["webpackJsonpdynamic-pagination"]=this["webpackJsonpdynamic-pagination"]||[]).push([[0],{44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(17),r=n.n(a),s=n(7),i=n.n(s),o=n(8),u=n(18),l=n(5),j=n(19),f=n.n(j),d=n(2);var b=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(1),s=Object(l.a)(r,2),j=s[0],b=s[1],p=Object(c.useState)(!1),O=Object(l.a)(p,2),m=O[0],g=O[1],h=Object(c.useRef)(),v=function(t){t.target.scrollHeight-t.target.scrollTop===t.target.offsetHeight&&b((function(t){return t+1}))};return Object(c.useEffect)((function(){return h.current.addEventListener("scroll",v),function(){h.current.removeEventListener("scroll",v)}}),[]),Object(c.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var e,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.next=3,f.a.get("https://jsonplaceholder.typicode.com/photos?_limit=10&_page=".concat(j));case 3:e=t.sent,c=e.data,a([].concat(Object(o.a)(n),Object(o.a)(c))),g(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[j]),Object(d.jsxs)("div",{ref:h,className:"container",children:[n.map((function(t){return Object(d.jsx)("div",{className:"data-card",children:Object(d.jsx)("img",{src:t.url,alt:"img"})},t.id)})),m?Object(d.jsx)("div",{className:"center",children:"loading..."}):null]})};n(44);r.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.deb15348.chunk.js.map