(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(26),i=n.n(s),r=(n(90),n(91),n(80)),o=n(20),d=n(145),l=n(134),j=n(49),b=n.n(j),u=n(27),O=n(75),h=n(15),p=(n(93),n(148)),v=n(3),m=n(78),g=n.n(m),x=(n(94),n(146)),f=n(14),S=n(28),w=n(147),k="https://www.omdbapi.com/?apikey=".concat("6bc0eaa3"),C=n(41),y=n.n(C),N=n(5),T=n(149),P=n(2);var I=function(e){var t=Object(c.useState)(""),n=Object(h.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)([]),r=Object(h.a)(i,2),o=r[0],d=r[1],l=Object(c.useState)(void 0),j=Object(h.a)(l,2),b=j[0],O=j[1],v=Object(c.useState)(!1),m=Object(h.a)(v,2),g=m[0],C=m[1],I=Object(N.d)(),J=new URLSearchParams(Object(N.e)().search),R=J.get("n")?JSON.parse(J.get("n")):[];return Object(P.jsxs)(x.a,{onClose:function(){return e.setIsOpen(!1)},closeable:!0,isOpen:e.isOpen,animate:!0,autoFocus:!0,size:f.c.default,role:f.b.dialog,children:[Object(P.jsx)(S.f,{children:"Nominate Movie"}),Object(P.jsxs)(S.e,{children:[Object(P.jsx)(w.a,{value:a,onChange:function(e){s(e.target.value),C(!0),clearTimeout(b),O(setTimeout((function(){var t;(t=e.target.value,y.a.get("".concat(k,"&s=").concat(t,"&type=movie"),{headers:{"Content-Type":"application/json"}})).then((function(e){C(!1),"True"===e.data.Response?d(e.data.Search):d([])}))}),1e3))},placeholder:"Movie",clearOnEscape:!0}),g?Object(P.jsx)("div",{class:"spin",children:Object(P.jsx)(T.a,{})}):0!==o.length&&Object(P.jsx)("div",{id:"movies-wrap",children:o.sort((function(e,t){return t.Year-e.Year})).map((function(t,n){return Object(P.jsxs)(p.a,{onClick:function(){var c=Object(u.a)(o);c.splice(n,1),d(c),R.push(t.imdbID),I.push("/?n=".concat(JSON.stringify(Object(u.a)(new Set(R))))),R.length>=5&&e.setIsOpen(!1)},disabled:R.includes(t.imdbID),children:[Object(P.jsx)("div",{children:t.Title}),Object(P.jsx)("div",{children:t.Year})]},n)}))})]})]})},J=n(144),R=n(22),F=n(81),L=n(32);var Y=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(h.a)(s,2),r=i[0],o=i[1],d=Object(c.useState)(!0),l=Object(h.a)(d,2),j=l[0],m=l[1],x=Object(c.useState)({}),f=Object(h.a)(x,2),S=f[0],w=f[1],C=Object(N.d)(),T=Object(N.e)();return Object(c.useEffect)((function(){window.onscroll=function(){m(!(document.body.scrollTop>50||document.documentElement.scrollTop>50))}}),[]),Object(c.useEffect)((function(){Object(O.a)(b.a.mark((function e(){var t,n,c,a,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new URLSearchParams(T.search),n=Object(u.a)(new Set(t.get("n")?JSON.parse(t.get("n")):[])).reverse(),c=[],a=0;case 4:if(!(a<n.length)){e.next=19;break}if(!S[n[a]]){e.next=9;break}c.push(S[n[a]]),e.next=16;break;case 9:return e.next=11,r=n[a],y.a.get("".concat(k,"&i=").concat(r,"&type=movie"),{headers:{"Content-Type":"application/json"}});case 11:"True"===(s=e.sent).data.Response&&c.push(s.data),(i=S)[n[a]]=s.data,w(i);case 16:a++,e.next=4;break;case 19:o(c),L.b.dark("Updated",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),c.length>=5&&L.b.dark("\ud83e\udd84 You've selected 5 nominations!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 22:case"end":return e.stop()}var r}),e)})))()}),[T]),Object(P.jsxs)("div",{className:"dashboard-host",children:[Object(P.jsxs)("div",{class:"header ".concat(j?"":"down"),children:[Object(P.jsx)("div",{id:"title",children:"Your Nominations"}),Object(P.jsx)("div",{style:{flexGrow:999}}),Object(P.jsx)("div",{id:"add-button",children:Object(P.jsx)(p.a,{onClick:function(){a(!0)},size:v.c.default,shape:v.b.circle,kind:j?v.a.primary:v.a.secondary,disabled:r.length>=5,children:Object(P.jsx)(g.a,{})})})]}),Object(P.jsx)("div",{id:"items-grid",children:0===r.length?Object(P.jsx)("div",{id:"nonebox",children:"No Movies Nominated"}):Object(P.jsx)(F.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:r.map((function(e,t){return Object(P.jsx)("div",{class:"movie-item",children:Object(P.jsxs)(J.a,{overrides:{Root:{style:{width:"100%"}}},headerImage:"N/A"===e.Poster?"default.jpg":e.Poster,title:e.Title,children:[Object(P.jsx)(R.b,{children:e.Year}),Object(P.jsx)(R.a,{children:Object(P.jsx)(p.a,{onClick:function(){var t=new URLSearchParams(T.search),n=t.get("n")?JSON.parse(t.get("n")):[];n.splice(n.indexOf(e.imdbID),1),C.push("/?n=".concat(JSON.stringify(Object(u.a)(new Set(n)))))},children:"Remove"})})]})},t)}))})}),Object(P.jsx)(I,{isOpen:n,setIsOpen:a})]})},B=n(39);n(131);var E=function(){var e=new r.a;return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(o.Provider,{value:e,children:Object(P.jsx)(d.a,{theme:l.a,children:Object(P.jsxs)(B.a,{children:[Object(P.jsx)(Y,{}),Object(P.jsx)(L.a,{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(E,{})}),document.getElementById("root")),D()},90:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[133,1,2]]]);
//# sourceMappingURL=main.bdf12220.chunk.js.map