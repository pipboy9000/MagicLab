!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=4)}([function(n,r,e){var t=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(t(o,a),o.locals?o.locals:{});n.exports=i},function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function d(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function u(n,r){for(var e={},t=[],o=0;o<n.length;o++){var a=n[o],u=r.base?a[0]+r.base:a[0],c=e[u]||0,l="".concat(u," ").concat(c);e[u]=c+1;var s=d(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(i[s].references++,i[s].updater(p)):i.push({identifier:l,updater:x(p,r),references:1}),t.push(l)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var l,s=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function p(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=s(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function f(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var h=null,b=0;function x(n,r){var e,t,o;if(r.singleton){var a=b++;e=h||(h=c(r)),t=p.bind(null,e,a,!1),o=p.bind(null,e,a,!0)}else e=c(r),t=f.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=u(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=d(e[t]);i[o].references--}for(var a=u(n,r),c=0;c<e.length;c++){var l=d(e[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=a}}}},function(n,r,e){(r=e(3)(!1)).push([n.i,"body, html{\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  background: black;\r\n  max-height: 100vh;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 9px;\r\n  height: 9px;\r\n}\r\n::-webkit-scrollbar-button {\r\n  width: 7px;\r\n  height: 7px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: #e1e1e1;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #ffffff;\r\n}\r\n::-webkit-scrollbar-thumb:active {\r\n  background: #000000;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background: #666666;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n::-webkit-scrollbar-track:hover {\r\n  background: #666666;\r\n}\r\n::-webkit-scrollbar-track:active {\r\n  background: #333333;\r\n}\r\n::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}\r\n\r\ninput[type=range] {\r\n  width: 100%;\r\n}\r\n\r\ninput[type=range].slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  margin: 0.7px 0;\r\n}\r\ninput[type=range].slider:focus {\r\n  outline: none;\r\n}\r\ninput[type=range].slider::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  background: #484d4d;\r\n  border-radius: 0px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range].slider::-webkit-slider-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  margin-top: -0.7px;\r\n}\r\ninput[type=range].slider:focus::-webkit-slider-runnable-track {\r\n  background: #4a5050;\r\n}\r\ninput[type=range].slider::-moz-range-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  background: #484d4d;\r\n  border-radius: 0px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range].slider::-moz-range-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n}\r\ninput[type=range].slider::-ms-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border-color: transparent;\r\n  color: transparent;\r\n}\r\ninput[type=range].slider::-ms-fill-lower {\r\n  background: #464a4a;\r\n  border: 0px solid #010101;\r\n  border-radius: 0px;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\ninput[type=range].slider::-ms-fill-upper {\r\n  background: #484d4d;\r\n  border: 0px solid #010101;\r\n  border-radius: 0px;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\ninput[type=range].slider::-ms-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n  height: 25.6px;\r\n}\r\ninput[type=range].slider:focus::-ms-fill-lower {\r\n  background: #484d4d;\r\n}\r\ninput[type=range].slider:focus::-ms-fill-upper {\r\n  background: #4a5050;\r\n}\r\n\r\ncanvas {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  height: auto;\r\n  max-height: 100%;\r\n  display: inline-block;\r\n  border: 3px solid white;\r\n  margin: 10px;\r\n  border-radius: 7px;\r\n  box-sizing: border-box;\r\n}\r\n\r\nlabel {\r\n  padding: 10px;\r\n  color: #feffff;\r\n  font-family: sans-serif;\r\n  display: block;\r\n}\r\n\r\n.controls{\r\n  display: inline-block;\r\n  width: 100vw;\r\n  max-width: 300px;\r\n  background: #202020;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  margin: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 830px) {\r\n  .controls{\r\n    height: calc(45vh - 20px);\r\n    width: calc(100vw - 20px);\r\n    overflow: auto;\r\n    max-width: unset;\r\n  }\r\n  \r\n  canvas {\r\n    height: 50vh;\r\n    width: auto;\r\n  }\r\n}",""]),n.exports=r},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(i=t,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(u," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,d,u;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);t&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),r.push(u))}},r}},function(n,r,e){"use strict";e.r(r);let t=document.getElementById("canvas"),o=t.getContext("2d"),a=t.width,i=t.height,d=a/2,u=i/2;o.fillStyle="black",o.strokeStyle="#29ff7e",o.lineWidth=10,o.lineCap="round",o.fillRect(0,0,a,i);let c=.7853981634*(Math.floor(9*Math.random())-4),l=30,s=0,p=20,f=0,h=.7853981634,b=0,x=50,g=.07,m=288,v=245,y=[];var w=288,k=300,M=245,E=300;function I(){o.shadowColor="transparent",o.fillStyle="rgba(0,0,0,"+g+")",o.fillRect(-d+w,-u+M,a,i);let n=l+Math.random()*s,r=performance.now()/x%360;o.shadowBlur=20,o.shadowColor=`hsl(${r},100%,70%`;let e=m+Math.cos(c)*n,t=v+Math.sin(c)*n;o.strokeStyle="white",o.beginPath(),o.moveTo(m,v),o.lineTo(e,t),o.stroke();let I=c+Math.random()*b+h,S=Math.random()*f+p,j=e+Math.cos(c+Math.PI/2)*S,C=t+Math.sin(c+Math.PI/2)*S;o.beginPath(),o.arc(j,C,S,c-Math.PI/2,I-Math.PI/2,!1),o.stroke(),m=j+Math.cos(I-Math.PI/2)*S,v=C+Math.sin(I-Math.PI/2)*S,c=I,y.push({x:e,y:t}),y.length>30&&y.shift();let L=function(){let n=y.reduce((n,r,e)=>(n.x+=r.x,n.y+=r.y,n),{x:0,y:0});return n.x/=y.length,n.y/=y.length,console.log(n),n}();!function(n,r){k=n,E=r}(L.x,L.y),function(n,r){o.beginPath(),o.arc(n,r,15,0,2*Math.PI),o.stroke()}(L.x,L.y),w+=(k-w)/3,M+=(E-M)/3,o.setTransform(1,0,0,1,-w+d,-M+u),(m>a+200||m<-200||v>i+200||v<-200)&&(m=288,v=245,c=.7853981634*(Math.floor(9*Math.random())-4))}!function n(r){I(),requestAnimationFrame(n),b>0&&(b*=.99),f>0&&(f*=.99),s>0&&(s*=.99)}();e(0);function S(n){var r;r=n.target.value,s=50*Math.abs(+r-l),l=+r}function j(n){var r;r=n.target.value,s=+r}function C(n){var r;r=n.target.value,x=+r}function L(n){var r;r=n.target.value,g=+r/255}function P(n){var r;r=n.target.value,f=50*Math.abs(+r-p),p=+r}function B(n){var r;r=n.target.value,f=+r}function T(n){var r;r=n.target.value,b=50*Math.abs(+r-h),h=+r}function O(n){var r;r=n.target.value,b=+r}window.addEventListener("load",(function(){document.getElementById("minSegmentLength").addEventListener("input",S),document.getElementById("randSegmentLength").addEventListener("input",j),document.getElementById("colorChangeRate").addEventListener("input",C),document.getElementById("fade").addEventListener("input",L),document.getElementById("minJointRadius").addEventListener("input",P),document.getElementById("randJointRadius").addEventListener("input",B),document.getElementById("minJointAngle").addEventListener("input",T),document.getElementById("randJointAngle").addEventListener("input",O)}))}]);