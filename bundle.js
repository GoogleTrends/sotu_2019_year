!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}({0:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},13:function(t,e,n){"use strict";n.r(e);var r,i=n(2),o=n.n(i),u={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return u.android()||u.blackberry()||u.ios()||u.opera()||u.windows()}},a=u;var c={init:function(t,e){r=Math.max(document.documentElement.clientWidth,window.innerWidth||0);var n={"American Recovery and Reinvestment Act":"ARRA",Israelis:"Israel","Veteran Affairs":"Veterans"},i=[];for(var o in t){var u=t[o],a=u.entity,c=Object.keys(u).map(function(t){return{year:t,value:u[t],entity:a}}).sort(function(t,e){return e.value-t.value}).filter(function(t){return"entity"!=t.year||""!=t.entity});for(var o in c)i.push(c[o])}var f=d3.nest().key(function(t){return+t.year.slice(-4)}).sortKeys(function(t,e){return e-t}).sortValues(function(t,e){return e.value-t.value}).entries(i).filter(function(t){if(+t.key>2e3)return t}),s=d3.select(".state-wrapper").selectAll("div").data(f).enter().append("div").attr("class","state-item");s.append("div").attr("class","state-name").text(function(t){return t.key});var l=s.selectAll(".entity").data(function(t){return t.values.slice(0,20)}).enter().append("p").attr("class","entity").append("span").text(function(t){return Object.keys(n).indexOf(t.entity)>-1?n[t.entity]:t.entity});l.on("mouseover",function(t){var e=t.entity;l.classed("selected",function(t){return t.entity==e})}),s.each(function(t){0==d3.select(this).node().offsetLeft&&d3.select(this).selectAll(".entity").filter(function(t,e){if(0==e||4==e||9==e||19==e)return t}).append("span").attr("class","label").text(function(t,e){return 0==e?r<600?"#1":"Most-search Topic":1==e?"#5":2==e?"#10":"#20"})})},resize:function(){r=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}},f=d3.select("body"),s=0;function l(){var t=f.node().offsetWidth;s!==t&&(s=t,c.resize())}f.classed("is-mobile",a.any()),window.addEventListener("resize",o()(l,150)),d3.csv("assets/data/indexed_2.csv",function(t){d3.csv("assets/data/entities_2.csv",function(e){c.init(t,e)})})},2:function(t,e,n){(function(e){var n="Expected a function",r=NaN,i="[object Symbol]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=s||l||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return d.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&v.call(t)==i}(t))return r;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=a.test(t);return n||c.test(t)?f(t.slice(2),n?2:8):u.test(t)?r:+t}t.exports=function(t,e,r){var i,o,u,a,c,f,s=0,l=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(n);function g(e){var n=i,r=o;return i=o=void 0,s=e,a=t.apply(r,n)}function j(t){var n=t-f;return void 0===f||n>=e||n<0||d&&t-s>=u}function w(){var t=b();if(j(t))return x(t);c=setTimeout(w,function(t){var n=e-(t-f);return d?y(n,u-(t-s)):n}(t))}function x(t){return c=void 0,v&&i?g(t):(i=o=void 0,a)}function O(){var t=b(),n=j(t);if(i=arguments,o=this,f=t,n){if(void 0===c)return function(t){return s=t,c=setTimeout(w,e),l?g(t):a}(f);if(d)return c=setTimeout(w,e),g(f)}return void 0===c&&(c=setTimeout(w,e)),a}return e=h(e)||0,m(r)&&(l=!!r.leading,u=(d="maxWait"in r)?p(h(r.maxWait)||0,e):u,v="trailing"in r?!!r.trailing:v),O.cancel=function(){void 0!==c&&clearTimeout(c),s=0,i=f=o=c=void 0},O.flush=function(){return void 0===c?a:x(b())},O}}).call(this,n(0))}});