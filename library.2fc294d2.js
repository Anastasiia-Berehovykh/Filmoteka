function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o.register("eBpwN",(function(t,n){var i=o("igFtQ"),d=o("7Y9D8"),r=o("HjIAx");const a={btnWatched:document.querySelector("#btnWatched"),btnQueued:document.querySelector("#btnQueued"),pgntPanel:document.querySelector(".pagination-l")},l=document.querySelector(".collection");console.log(a.btnWatched),console.log(a.btnQueued),a.btnQueued.addEventListener("click",(function(){if(a.btnQueued.classList.add("active-btn"),a.btnWatched.classList.remove("active-btn"),l.innerHTML="",!s||0===s.length)return a.pgntPanel.classList.add("hidden"),void e(d).Notify.failure("Sorry, there are no films.");a.pgntPanel.classList.remove("hidden"),e(d).Notify.success("Hooray! There are something interesting for you :)"),(0,i.default)(s)})),a.btnWatched.addEventListener("click",(function(){if(a.btnQueued.classList.remove("active-btn"),a.btnWatched.classList.add("active-btn"),l.innerHTML="",!c||0===c.length)return a.pgntPanel.classList.add("hidden"),void e(d).Notify.failure("Sorry, there are no films.");a.pgntPanel.classList.remove("hidden"),e(d).Notify.success("You already watched it :)"),(0,i.default)(c)}));const s=r.default.load("queue-movies"),c=r.default.load("watched-films");if(!c||0===c.length)return a.pgntPanel.classList.add("hidden"),void e(d).Notify.failure("Sorry, there are no films.");(0,i.default)(c)})),o("dZ4pE"),o("bTcpz"),o("6Xkfo"),o("lnOJN"),o("5Hs0o"),o("eBpwN"),o("kjqXt");
//# sourceMappingURL=library.2fc294d2.js.map
