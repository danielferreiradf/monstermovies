(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){e.exports=t.p+"static/media/logo.9504a2dc.png"},35:function(e,a,t){e.exports=t.p+"static/media/spinner.ac447129.gif"},36:function(e,a,t){e.exports=t(71)},66:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(29),o=t.n(r),i=t(4),l=t(5),s=t(7),m=t(6),u=t(8),p=t(73),v=t(76),d=t(74),h=t(75),E=t(11),g=t(12),f=t(33),b=t(15),O={nowPlayingMovies:[],popularMovies:[],topRatedMovies:[],upcomingMovies:[]},N=Object(g.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_NOW_PLAYING_MOVIES":return Object(b.a)({},e,{nowPlayingMovies:a.payload});case"GET_POPULAR_MOVIES":return Object(b.a)({},e,{popularMovies:a.payload});case"GET_UPCOMING_MOVIES":return Object(b.a)({},e,{upcomingMovies:a.payload});case"GET_TOP_RATED_MOVIES":return Object(b.a)({},e,{topRatedMovies:a.payload});default:return e}}}),_=[f.a],y=Object(g.e)(N,Object(g.d)(g.a.apply(void 0,_),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),j=t(72),M=t(34),w=t.n(M);var k=function(e){var a=e.link,t=e.item;return c.a.createElement("li",{className:"navbar__menu-item"},c.a.createElement(j.a,{to:a,className:"navbar__menu-item-link"},t))},P=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"navbar__content"},c.a.createElement(j.a,{to:"/"},c.a.createElement("img",{src:w.a,className:"navbar__logo"})),c.a.createElement("ul",{className:"navbar__menu"},c.a.createElement(k,{link:"movies",item:"Movies"}),c.a.createElement(k,{link:"series",item:"Series"})))))}}]),a}(n.Component);var T=function(){return c.a.createElement("div",{className:"movies"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"movies__content p-10"},c.a.createElement("h1",{className:"heading-1"},"Find Movies"),c.a.createElement("h3",{className:"heading-2"},c.a.createElement("span",{className:"heading-2-hover"},c.a.createElement("i",{className:"fa fa-bullhorn"})," Now Playing")),c.a.createElement("h3",{className:"heading-2"},c.a.createElement("span",{className:"heading-2-hover"},c.a.createElement("i",{className:"fa fa-arrow-circle-right"})," Popular")),c.a.createElement("h3",{className:"heading-2"},c.a.createElement("span",{className:"heading-2-hover"},c.a.createElement("i",{className:"fa fa-bolt"})," UpComing")),c.a.createElement("h3",{className:"heading-2"},c.a.createElement("span",{className:"heading-2-hover"},c.a.createElement("i",{className:"fa fa-star"})," Top Rated")),c.a.createElement("hr",{className:"bar"}))))},S=t(14),R=t.n(S),I=t(35),U=t.n(I);var C=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:U.a,alt:""}))},G=(t(63),t(20)),D=function(e){var a=e.title,t=e.poster,n=e.release;return c.a.createElement("div",{className:"moviescard"},c.a.createElement("div",{className:"moviescard__content"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:"Poster",className:"moviescard__image"}),c.a.createElement("h1",{className:"moviescard__title"},a),c.a.createElement("p",{className:"moviescard__subtitle"},"Release Date: ",n)))},V=function(e){var a=e.data.map(function(e){return c.a.createElement(G.LatteItem,{key:e.id},c.a.createElement("div",null,c.a.createElement(D,{title:e.title,poster:e.poster_path,release:e.release_date,score:e.vote_average})))});return c.a.createElement("div",{className:""},c.a.createElement(G.LatteCarousel,{options:{count:1,touch:!0,buttons:!0,rewind:!0,autoplay:0,animation:500,responsive:{0:{count:2,buttons:!1},480:{count:2,buttons:!1},768:{count:4},1440:{count:5}}}},a))},L=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getNowPlayingMovies()}},{key:"render",value:function(){var e,a=this.props.nowPlayingMovies.movies.nowPlayingMovies;return null===a||void 0===a?e=c.a.createElement(C,null):Object.keys(a).length>0&&(e=c.a.createElement(V,{data:a})),c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"heading-3 p-10"},c.a.createElement("i",{className:"fa fa-film"})," ",this.props.title),e)}}]),a}(n.Component),A=Object(E.b)(function(e){return{nowPlayingMovies:e}},{getNowPlayingMovies:function(){return function(e){R.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("13b2f4931d749cbb5d5f3463a5c423a3","&language=en-US&page=1")).then(function(a){return e({type:"GET_NOW_PLAYING_MOVIES",payload:a.data.results})}).catch(function(e){return console.log(e)})}}})(L),x=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getPopularMovies()}},{key:"render",value:function(){var e,a=this.props.popularMovies.movies.popularMovies;return null===a||void 0===a?e=c.a.createElement(C,null):Object.keys(a).length>0&&(e=c.a.createElement(V,{data:a})),c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"heading-3 p-10"},c.a.createElement("i",{className:"fa fa-film"})," ",this.props.title),e)}}]),a}(n.Component),F=Object(E.b)(function(e){return{popularMovies:e}},{getPopularMovies:function(){return function(e){R.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("13b2f4931d749cbb5d5f3463a5c423a3","&language=en-US&page=1")).then(function(a){return e({type:"GET_POPULAR_MOVIES",payload:a.data.results})}).catch(function(e){return console.log(e)})}}})(x),W=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getUpcomingMovies()}},{key:"render",value:function(){var e,a=this.props.upcomingMovies.movies.upcomingMovies;return null===a||void 0===a?e=c.a.createElement(C,null):Object.keys(a).length>0&&(e=c.a.createElement(V,{data:a})),c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"heading-3 p-10"},c.a.createElement("i",{className:"fa fa-film"})," ",this.props.title),e)}}]),a}(n.Component),X=Object(E.b)(function(e){return{upcomingMovies:e}},{getUpcomingMovies:function(){return function(e){R.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("13b2f4931d749cbb5d5f3463a5c423a3","&language=en-US&page=1")).then(function(a){return e({type:"GET_UPCOMING_MOVIES",payload:a.data.results})}).catch(function(e){return console.log(e)})}}})(W),B=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getTopRatedMovies()}},{key:"render",value:function(){var e,a=this.props.topRatedMovies.movies.topRatedMovies;return null===a||void 0===a?e=c.a.createElement(C,null):Object.keys(a).length>0&&(e=c.a.createElement(V,{data:a})),c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"heading-3 p-10"},c.a.createElement("i",{className:"fa fa-film"})," ",this.props.title),e)}}]),a}(n.Component),J=Object(E.b)(function(e){return{topRatedMovies:e}},{getTopRatedMovies:function(){return function(e){R.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat("13b2f4931d749cbb5d5f3463a5c423a3","&language=en-US&page=1")).then(function(a){return e({type:"GET_TOP_RATED_MOVIES",payload:a.data.results})}).catch(function(e){return console.log(e)})}}})(B);var Y=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(A,{title:"Now Playing Movies"}),c.a.createElement(F,{title:"Popular Movies"}),c.a.createElement(J,{title:"Top Rated Movies"}),c.a.createElement(X,{title:"Upcoming Movies"}))},$=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(T,null),c.a.createElement(Y,null))}}]),a}(n.Component),q=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"series"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"movies__content p-10"},c.a.createElement("h1",{className:"heading-1"},"Find Series"),c.a.createElement("h3",{className:"heading-2"},c.a.createElement("span",{className:"heading-2-hover"},c.a.createElement("i",{className:"fa fa-bullhorn"})," Now Playing")),c.a.createElement("h3",{className:"heading-2"},c.a.createElement("span",{className:"heading-2-hover"},c.a.createElement("i",{className:"fa fa-arrow-circle-right"})," Popular")),c.a.createElement("h3",{className:"heading-2"},c.a.createElement("span",{className:"heading-2-hover"},c.a.createElement("i",{className:"fa fa-bolt"})," UpComing")),c.a.createElement("h3",{className:"heading-2"},c.a.createElement("span",{className:"heading-2-hover"},c.a.createElement("i",{className:"fa fa-star"})," Top Rated")),c.a.createElement("hr",{className:"bar"}))))}}]),a}(n.Component),z=(t(66),t(68),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(E.a,{store:y},c.a.createElement(p.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(P,null),c.a.createElement(v.a,null,c.a.createElement(d.a,{exact:!0,path:"/",to:"/movies"}),c.a.createElement(h.a,{exact:!0,path:"/movies",component:$}),c.a.createElement(h.a,{exact:!0,path:"/series",component:q})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.82200183.chunk.js.map