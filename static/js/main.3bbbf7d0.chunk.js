(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{31:function(e,t,n){e.exports={movie:"Movie_movie__3C7Nf",movie__img:"Movie_movie__img__1aTAV",movie__title:"Movie_movie__title__2tkbB",movie__year:"Movie_movie__year__1XD_j",movie__genres:"Movie_movie__genres__2L85y"}},32:function(e,t,n){e.exports={container:"Home_container__303Np",loader:"Home_loader__1BOZw",movies:"Home_movies__2bgtf"}},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(17),s=n.n(i),o=n(10),a=n(2),j=n(8),u=n.n(j),_=n(11),m=n(1);var v=function(){var e=Object(a.f)().id,t=function(){var t=Object(_.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){t()}),[]),Object(m.jsx)("h1",{children:"Detail"})},l=n(15);n(31);var b=function(e){var t=e.id,n=e.coverImg,r=e.title,c=e.year,i=e.summary,s=e.genres;return Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:n,alt:r}),Object(m.jsx)("h2",{children:Object(m.jsxs)(o.b,{to:"/movie/".concat(t),children:[r," (",c,")"]})}),Object(m.jsx)("p",{children:i.length>235?"".concat(i.slice(0,235)):i}),Object(m.jsx)("ul",{children:s.map((function(e){return Object(m.jsx)("li",{children:e},e)}))})]})};n(32);var d=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),s=Object(l.a)(i,2),o=s[0],a=s[1],j=function(){var e=Object(_.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,a(t.data.movies),c(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){j()}),[]),Object(m.jsx)("div",{children:n?Object(m.jsx)("h1",{children:"Loading..."}):Object(m.jsx)("div",{children:o.map((function(e){return Object(m.jsx)(b,{id:e.id,coverImg:e.medium_cover_image,title:e.title,year:e.year,summary:e.summary,genres:e.genres},e.id)}))})})};var h=function(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)(a.c,{children:[Object(m.jsx)(a.a,{path:"/hello",children:Object(m.jsx)("h1",{children:"Hello"})}),Object(m.jsx)(a.a,{path:"/movie/:id",children:Object(m.jsx)(v,{})}),Object(m.jsx)(a.a,{path:"/",children:Object(m.jsx)(d,{})})]})})};n(33);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3bbbf7d0.chunk.js.map