"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[108],{320:function(e,t,n){n.d(t,{LI:function(){return h},VQ:function(){return u},l2:function(){return c},mo:function(){return d},s_:function(){return p}});var r=n(861),a=n(311),s=n.n(a),i="abf5df7d75a67bd02b3b1e4ead1fc14d";function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},108:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(791),a=n(689),s=n(439),i=n(320),c="MovieDetails_moviePoster__M1O9z",o="MovieDetails_goback__2b9LH",u="MovieDetails_movieContainer__78Fk4",l="MovieDetails_movieInfo__XAfDM",p="MovieDetails_movieTitle__qwoTW",f="MovieDetails_movieText__Iyrlb",d=n(494),v=n(184),h=function(){var e=(0,a.TH)()||"",t=(0,a.s0)(),n=(0,r.useState)(null),h=(0,s.Z)(n,2),m=h[0],x=h[1],_=(0,a.UO)().movieId,j=function(e){return e.map((function(e){return e.name})).join(", ")};(0,r.useEffect)((function(){(0,i.VQ)(Number(_)).then((function(e){x(e)}))}),[_]);return m&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("button",{className:o,type:"button",onClick:function(){var n;t((null===(n=e.state)||void 0===n?void 0:n.from)||"/")},children:[(0,v.jsx)(d.cWV,{})," Go back"]}),(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)("img",{className:c,src:"https://image.tmdb.org/t/p/w500".concat(m.poster_path),alt:m.title}),(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h2",{className:p,children:"".concat(m.title," (").concat(m.release_date.slice(0,4),")")}),(0,v.jsx)("p",{className:f,children:"User score: ".concat(m.vote_average&&parseInt(10*m.vote_average),"%")}),(0,v.jsx)("h3",{className:f,children:m.overview&&"Overview"}),(0,v.jsx)("p",{className:f,children:m.overview}),(0,v.jsx)("h3",{className:f,children:j(m.genres)&&"Genres"}),(0,v.jsx)("p",{className:f,children:j(m.genres)})]})]})]})},m="AditionalInfo_AditionalInfo__QP00w",x="AditionalInfo_aditionLink__2w97t",_="AditionalInfo_activeAditionalLink__JSabY",j=n(87),b=function(){var e,t,n,r,s=(0,a.TH)(),i=function(e){return e.isActive?_:""};return(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("p",{children:"Aditional Info"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{className:x,children:(0,v.jsx)(j.OL,{className:i,state:{from:null!==(e=null===(t=s.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"},to:"cast",children:"Cast"})}),(0,v.jsx)("li",{className:x,children:(0,v.jsx)(j.OL,{className:i,state:{from:null!==(n=null===(r=s.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/"},to:"reviews",children:"Reviews"})})]})]})},w=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{}),(0,v.jsx)(b,{}),(0,v.jsx)(r.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=108.8c914987.chunk.js.map