!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.5083b1e5.js","i8kKm":"no-poster-available1.dcec566b.jpg","8FMua":"no-poster-available.c6ce9600.jpg","8EQ5y":"Nastya Ovcharenko.17780b78.jpg","4ZOQT":"Iryna.e1b41250.jpg","4xPaQ":"Kuts Mykola1.ddafc7bd.jpg","hnuL6":"Nataliia Matsko2.ed1f7f9d.jpg","ddD0R":"Ruslan.6e7f52f7.jpg","8oGwI":"Vadym.301aaf00.jpg","o3Z9z":"Anastasiia.85c546c2.jpg","5UbS1":"index.d4b8d662.css","2hvCh":"index.ef3dc62d.js"}')),a("f8BaH"),a("5xtVg"),a("8a2Wa");var s=a("joACZ");a("1zWNb"),document.querySelector(".collection"),new(0,s.default);a("68nu4"),a("e9aZl");var i=a("bpxeT"),c=a("2TvXO"),l=a("68nu4"),u=(i=a("bpxeT"),c=a("2TvXO"),l=a("68nu4"),a("6JpON")),d=new(0,(s=a("joACZ")).default),p="",f=document.querySelector(".form"),y=document.querySelector(".header_search-input");function g(){return(g=t(i)(t(c).mark((function e(n){var r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),p=y.value.trim()){e.next=4;break}return e.abrupt("return",t(u).Notify.failure("Please enter a search query for the movie"));case 4:return e.prev=4,d.searchQuery=p,e.next=8,d.getSearchMovie(p);case 8:if(0!==(r=e.sent.data).results.length){e.next=12;break}return t(u).Notify.failure("Sorry, there are no films matching your search query. Please try again."),e.abrupt("return");case 12:t(u).Notify.success("Hooray! We found something interesting for you :)"),(0,l.default)(r.results),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),t(u).Notify.failure("Search result not successfull. Enter the correct movie name."),console.log(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}f.addEventListener("submit",(function(e){return g.apply(this,arguments)}));var v,h=new(0,(s=a("joACZ")).default),x={collection:document.querySelector(".collection"),pagination:document.querySelector(".pagination"),btnLeft:document.querySelector(".btn-left"),secondLeft:document.querySelector(".second-left"),firstLeft:document.querySelector(".first-left"),current:document.querySelector(".current"),firstRight:document.querySelector(".first-right"),secondRight:document.querySelector(".second-right"),btnRight:document.querySelector(".btn-right")};function m(){return(m=t(i)(t(c).mark((function e(){var n;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.pagination.style.display="none",e.prev=1,e.next=4,h.getTrendMovies();case 4:n=e.sent.data,v=n.total_pages,(0,l.default)(n.results),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),e.abrupt("return");case 13:x.pagination.style.display="flex",x.btnLeft.style.display="none",x.secondLeft.style.display="none",x.firstLeft.style.display="none";case 17:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function b(){return(b=t(i)(t(c).mark((function e(n){var r,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.collection.innerHTML="",x.pagination.style.display="none",h.page=Number(x.current.textContent)-1,h.searchQuery=p,p){e.next=19;break}return e.prev=5,e.next=8,h.getTrendMovies();case 8:r=e.sent.data,v=r.total_pages,(0,l.default)(r.results),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(5),console.log(e.t0.message),e.abrupt("return");case 17:e.next=31;break;case 19:return e.prev=19,e.next=22,h.getSearchMovie(p);case 22:o=e.sent.data,v=o.total_pages,(0,l.default)(o.results),e.next=31;break;case 27:return e.prev=27,e.t1=e.catch(19),console.log(e.t1.message),e.abrupt("return");case 31:x.current.textContent=h.page,x.firstLeft.textContent=Number(x.current.textContent)-1,x.firstRight.textContent=Number(x.current.textContent)+1,x.secondLeft.textContent=Number(x.current.textContent)-2,x.secondRight.textContent=Number(x.current.textContent)+2,x.pagination.style.display="flex",x.firstRight.style.display="flex",x.secondRight.style.display="flex",x.btnRight.style.display="flex",x.firstLeft.style.display="flex",x.secondLeft.style.display="flex",x.btnLeft.style.display="flex",1===h.page?(x.btnLeft.style.display="none",x.secondLeft.style.display="none",x.firstLeft.style.display="none"):2===h.page?x.secondLeft.style.display="none":h.page===v-1&&(x.secondRight.style.display="none");case 44:case"end":return e.stop()}}),e,null,[[5,13],[19,27]])})))).apply(this,arguments)}function L(){return(L=t(i)(t(c).mark((function e(n){var r,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.collection.innerHTML="",x.pagination.style.display="none",h.page=Number(x.current.textContent)+1,h.searchQuery=p,p){e.next=19;break}return e.prev=5,e.next=8,h.getTrendMovies();case 8:r=e.sent.data,v=r.total_pages,(0,l.default)(r.results),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(5),console.log(e.t0.message),e.abrupt("return");case 17:e.next=31;break;case 19:return e.prev=19,e.next=22,h.getSearchMovie(p);case 22:o=e.sent.data,v=o.total_pages,(0,l.default)(o.results),e.next=31;break;case 27:return e.prev=27,e.t1=e.catch(19),console.log(e.t1.message),e.abrupt("return");case 31:x.current.textContent=h.page,x.firstLeft.textContent=Number(x.current.textContent)-1,x.firstRight.textContent=Number(x.current.textContent)+1,x.secondLeft.textContent=Number(x.current.textContent)-2,x.secondRight.textContent=Number(x.current.textContent)+2,x.pagination.style.display="flex",x.firstRight.style.display="flex",x.secondRight.style.display="flex",x.btnRight.style.display="flex",x.firstLeft.style.display="flex",x.secondLeft.style.display="flex",x.btnLeft.style.display="flex",h.page===h.total_pages?(x.btnRight.style.display="none",x.secondRight.style.display="none",x.firstRight.style.display="none"):h.page===v-1?x.secondRight.style.display="none":2===h.page&&(x.secondLeft.style.display="none");case 44:case"end":return e.stop()}}),e,null,[[5,13],[19,27]])})))).apply(this,arguments)}function R(e){return E.apply(this,arguments)}function E(){return(E=t(i)(t(c).mark((function e(n){var r,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.collection.innerHTML="",x.pagination.style.display="none",h.page=Number(n.currentTarget.textContent),h.searchQuery=p,p){e.next=19;break}return e.prev=5,e.next=8,h.getTrendMovies();case 8:r=e.sent.data,v=r.total_pages,(0,l.default)(r.results),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(5),console.log(e.t0.message),e.abrupt("return");case 17:e.next=31;break;case 19:return e.prev=19,e.next=22,h.getSearchMovie(p);case 22:o=e.sent.data,v=o.total_pages,(0,l.default)(o.results),e.next=31;break;case 27:return e.prev=27,e.t1=e.catch(19),console.log(e.t1.message),e.abrupt("return");case 31:x.current.textContent=h.page,x.firstLeft.textContent=Number(x.current.textContent)-1,x.firstRight.textContent=Number(x.current.textContent)+1,x.secondLeft.textContent=Number(x.current.textContent)-2,x.secondRight.textContent=Number(x.current.textContent)+2,x.pagination.style.display="flex",x.firstRight.style.display="flex",x.secondRight.style.display="flex",x.btnRight.style.display="flex",x.firstLeft.style.display="flex",x.secondLeft.style.display="flex",x.btnLeft.style.display="flex",1===h.page?(x.firstLeft.style.display="none",x.secondLeft.style.display="none",x.btnLeft.style.display="none"):2===h.page?x.secondLeft.style.display="none":h.page===v?(x.firstRight.style.display="none",x.secondRight.style.display="none",x.btnRight.style.display="none"):h.page===v-1&&(x.secondRight.style.display="none");case 44:case"end":return e.stop()}}),e,null,[[5,13],[19,27]])})))).apply(this,arguments)}x.btnLeft.addEventListener("click",(function(e){return b.apply(this,arguments)})),x.btnRight.addEventListener("click",(function(e){return L.apply(this,arguments)})),x.firstLeft.addEventListener("click",R),x.firstRight.addEventListener("click",R),x.secondLeft.addEventListener("click",R),x.secondRight.addEventListener("click",R),function(){m.apply(this,arguments)}();var _;_=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("i8kKm");var k;k=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8FMua");var w;w=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8EQ5y");var C;C=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4ZOQT");var H;H=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4xPaQ");var N;N=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("hnuL6");var S;S=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ddD0R");var q;q=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8oGwI");var M;M=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("o3Z9z");var O=[{id:1,name:"Stanislav Zaliskyi",photoPreview:"".concat(t(_)),photo:"".concat(t(k)),position:"Team Lead"},{id:2,name:"Nastya Ovcharenko",photoPreview:"".concat(t(w)),photo:"".concat(t(k)),position:"Scrum Master"},{id:3,name:"Serhii Lytvynenko",photoPreview:"".concat(t(_)),photo:"".concat(t(k)),position:"Developer"},{id:4,name:"Iryna Borysova",photoPreview:"".concat(t(C)),photo:"".concat(t(k)),position:"Developer"},{id:5,name:"Mykola Kuts",photoPreview:"".concat(t(H)),photo:"".concat(t(k)),position:"Developer"},{id:6,name:"Nataliia Matsko",photoPreview:"".concat(t(N)),photo:"".concat(t(k)),position:"Developer"},{id:7,name:"Ruslan Borysevych",photoPreview:"".concat(t(S)),photo:"".concat(t(k)),position:"Developer"},{id:8,name:"Alona Neshodym",photoPreview:"".concat(t(_)),photo:"".concat(t(k)),position:"Developer"},{id:9,name:"Vadym Kolisnyk",photoPreview:"".concat(t(q)),photo:"".concat(t(k)),position:"Developer"},{id:10,name:"Anastasiia Berehovyh",photoPreview:"".concat(t(M)),photo:"".concat(t(k)),position:"Developer"},{id:11,name:"Taras Fedak",photoPreview:"".concat(t(_)),photo:"".concat(t(k)),position:"Developer"},{id:12,name:"Tetiana Asadova",photoPreview:"".concat(t(_)),photo:"".concat(t(k)),position:"Developer"},{id:13,name:"Oleksii Mikhieiev",photoPreview:"".concat(t(_)),photo:"".concat(t(k)),position:"Developer"}],T={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-team-backdrop"),galleryTeam:document.querySelector(".gallery__team")};function A(){window.removeEventListener("keydown",P),document.body.classList.remove("show-modal")}function P(e){"Escape"===e.code&&A()}T.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",P),document.body.classList.add("show-modal"),t=O,n=t.reduce((function(e,t){var n=t.name,r=t.photoPreview,o=t.position;return t.photo,e+' <li class="dev__item">\n               <a class="dev__link" >\n                <img src="'.concat(r,'" alt="').concat(n,'" class="dev__img"/>\n                  <div class="dev__info">\n                    <div class="dev__content">\n                        <h2 class="dev__name">').concat(n,'</h2>                  \n                        <p class="dev__position">').concat(o,"</p>\n                    </div>\n                  </div>\n              </a>\n            </li>\n          ")}),""),T.galleryTeam.innerHTML=n;var t,n})),T.closeModalBtn.addEventListener("click",A),T.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&A()}))}();
//# sourceMappingURL=index.5083b1e5.js.map
