(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(7),i=c.n(s),a=(c(14),c(9)),n=c(2),l=c(1),r=(c(15),c(16),c(17),c(0)),j=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(r.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(j,{movie:e},e.imdbID)}))})},d=c(8),m=c(6),b=c.n(m);c(20);function u(e){return fetch("".concat("https://www.omdbapi.com/?i=tt3896198&apikey=fc0e54a9&t=").concat(e)).then((function(e){return e.json()}))}var v=function(e){var t=e.movies,c=e.setMovies,s=Object(l.useState)(null),i=Object(n.a)(s,2),a=i[0],o=i[1],m=Object(l.useState)(""),v=Object(n.a)(m,2),h=v[0],O=v[1],x=Object(l.useState)(!1),f=Object(n.a)(x,2),p=f[0],N=f[1],g=Object(l.useState)(!1),y=Object(n.a)(g,2),w=y[0],k=y[1],S=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(h);case 3:(t=e.sent).Title&&o(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),o(null),N(!0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input",value:h,onChange:function(e){O(e.target.value)}})}),p&&Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"}),w&&Object(r.jsx)("p",{className:"help is-danger",children:"Movie is already added."})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-light",onClick:S,children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){a&&(o(null),!t.find((function(e){return e.imdbID===a.imdbID}))?c(a):k(!0))},children:"Add to the list"})})]})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),a&&Object(r.jsx)(j,{movie:a})]})]})},h=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(v,{movies:c,setMovies:function(e){s([].concat(Object(a.a)(c),[e]))}})})]})};i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.703feb9c.chunk.js.map