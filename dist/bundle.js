!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=4)}([function(n,r,e){var t=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(t(o,a),o.locals?o.locals:{});n.exports=i},function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function d(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function l(n,r){for(var e={},t=[],o=0;o<n.length;o++){var a=n[o],l=r.base?a[0]+r.base:a[0],s=e[l]||0,c="".concat(l," ").concat(s);e[l]=s+1;var p=d(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:c,updater:g(u,r),references:1}),t.push(c)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var c,p=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function u(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=p(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function x(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,h=0;function g(n,r){var e,t,o;if(r.singleton){var a=h++;e=f||(f=s(r)),t=u.bind(null,e,a,!1),o=u.bind(null,e,a,!0)}else e=s(r),t=x.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=l(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=d(e[t]);i[o].references--}for(var a=l(n,r),s=0;s<e.length;s++){var c=d(e[s]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}e=a}}}},function(n,r,e){(r=e(3)(!1)).push([n.i,"body, html{\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  background: black;\r\n  max-height: 100vh;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 9px;\r\n  height: 9px;\r\n}\r\n::-webkit-scrollbar-button {\r\n  width: 7px;\r\n  height: 7px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: #e1e1e1;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #ffffff;\r\n}\r\n::-webkit-scrollbar-thumb:active {\r\n  background: #000000;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background: #666666;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n::-webkit-scrollbar-track:hover {\r\n  background: #666666;\r\n}\r\n::-webkit-scrollbar-track:active {\r\n  background: #333333;\r\n}\r\n::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}\r\n\r\ninput[type=range] {\r\n  width: 70%;\r\n}\r\n\r\ninput[type=range].slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  margin: 0.7px 0;\r\n}\r\ninput[type=range].slider:focus {\r\n  outline: none;\r\n}\r\ninput[type=range].slider::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  background: #484d4d;\r\n  border-radius: 0px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range].slider::-webkit-slider-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  margin-top: -0.7px;\r\n}\r\ninput[type=range].slider:focus::-webkit-slider-runnable-track {\r\n  background: #4a5050;\r\n}\r\ninput[type=range].slider::-moz-range-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  background: #484d4d;\r\n  border-radius: 0px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range].slider::-moz-range-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n}\r\ninput[type=range].slider::-ms-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border-color: transparent;\r\n  color: transparent;\r\n}\r\ninput[type=range].slider::-ms-fill-lower {\r\n  background: #464a4a;\r\n  border: 0px solid #010101;\r\n  border-radius: 0px;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\ninput[type=range].slider::-ms-fill-upper {\r\n  background: #484d4d;\r\n  border: 0px solid #010101;\r\n  border-radius: 0px;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\ninput[type=range].slider::-ms-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n  height: 25.6px;\r\n}\r\ninput[type=range].slider:focus::-ms-fill-lower {\r\n  background: #484d4d;\r\n}\r\ninput[type=range].slider:focus::-ms-fill-upper {\r\n  background: #4a5050;\r\n}\r\n\r\ncanvas {\r\n  width: 100%;\r\n  height: auto;\r\n  max-height: 100%;\r\n  display: inline-block;\r\n  border-radius: 7px;\r\n  /* box-sizing: border-box; */\r\n}\r\n\r\nlabel {\r\n  padding: 10px;\r\n  color: #feffff;\r\n  font-family: sans-serif;\r\n  display: block;\r\n}\r\n\r\n.potions {\r\n  display: flex;\r\n  max-width: 100%;\r\n  margin-top: 5px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.potions > button {\r\n  color: #0000009e;\r\n  width: 50px;\r\n  height: 50px;\r\n  font-weight: bold;\r\n  border-radius: 50px;\r\n  padding: 10px;\r\n  transition: transform 50ms, box-shadow 50ms;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  margin: 10px;\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.potions > button > i {\r\n  font-size: 20px;\r\n}\r\n\r\n#addBlue {\r\n  background: #2d90f6;\r\n  border: 5px solid #217cbd;\r\n  box-shadow: 0px 0px 0px 3px #2d90f6, 0px 8px 0px 3px #17639a;\r\n}\r\n\r\n#addBlue:active{\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #2d90f6, 0px 2px 0px 3px #17639a;\r\n}\r\n\r\n#addRed {\r\n  background: #ff1a1a;\r\n  border: 5px solid #cf1717;\r\n  box-shadow: 0px 0px 0px 3px #ff1a1a, 0px 8px 0px 3px #7b1414;\r\n}\r\n\r\n#addRed:active {\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #ff1a1a, 0px 2px 0px 3px #7b1414;\r\n}\r\n\r\n#addGreen{\r\n  background: #13c418;\r\n  border: 5px solid #129a16;\r\n  box-shadow: 0px 0px 0px 3px #13c418, 0px 8px 0px 3px #0a6e0d;\r\n}\r\n\r\n#addGreen:active {\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #13c418, 0px 2px 0px 3px #0a6e0d;\r\n}\r\n\r\n#addOrange{\r\n  background: hsla(60, 82%, 42%, 1);\r\n  border: 5px solid hsla(60, 83%, 34%, 1);\r\n  box-shadow: 0px 0px 0px 3px hsla(60, 82%, 42%, 1), 0px 8px 0px 3px hsla(60, 83%, 24%, 1);\r\n}\r\n\r\n#addOrange:active {\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px hsla(60, 82%, 42%, 1), 0px 2px 0px 3px hsla(60, 83%, 24%, 1);\r\n}\r\n\r\n\r\n#restart{\r\n  user-select: none;\r\n  margin-bottom: 20px;\r\n  background: #e8e8e8;\r\n  color: #6f6f6f;\r\n  width: 80px;\r\n  height: 60px;\r\n  font-weight: bold;\r\n  border: 5px solid #939393;\r\n  border-radius: 50px;\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n  box-shadow: 0px 0px 0px 3px #e5e5e5, 0px 8px 0px 3px #b0b0b0;\r\n  transition: transform 50ms, box-shadow 50ms;\r\n  font-size: 30px;\r\n  font-family: cursive;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  line-height: 0;\r\n}\r\n\r\n#restart:active{\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #e5e5e5, 0px 2px 0px 3px #b0b0b0;\r\n}\r\n\r\n#recipe{\r\n  box-shadow: #141414 0px 6px;\r\n  min-height: 52px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px;\r\n  box-sizing: border-box;\r\n  background: #232323;\r\n  border-radius: 30px;\r\n  max-width: 100%;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  width: fit-content;\r\n}\r\n\r\n#recipe > i {\r\n  font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 8px;\r\n    border-radius: 50px;\r\n    margin: 3px;\r\n    color: #00000099;\r\n}\r\n\r\n#recipe > .blue {\r\n  background: #3e9dff;;\r\n}\r\n\r\n#recipe > .red {\r\n  background: #ff1d1d;\r\n}\r\n\r\n#recipe > .green {\r\n  background: #23ef29;\r\n}\r\n\r\n#recipe > .grey {\r\n  background: #888;\r\n}\r\n\r\n#ui {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.target {\r\n  background: #0004;\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-size: contain;\r\n  background-position: center;\r\n  transition: all 200ms;\r\n  opacity: 0.5;\r\n}\r\n\r\n.target-large{\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 1;\r\n}\r\n\r\n#ui > #msg {\r\n  width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#win{\r\n  color : #ff4d4da6;\r\n  font-size : 220px;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  max-width: 800px;\r\n  height: 60px;\r\n  display: block;\r\n}\r\n\r\nheader > i {\r\n  float: right;\r\n  width: 60px;\r\n  height: 60px;\r\n  color: white;\r\n  font-size: 30px;\r\n  display: flex !important;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.screen {\r\n  max-height: calc(100vh - 287px);\r\n  max-width: calc(100vh - 287px);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#levelSelect {\r\n  position: absolute;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  min-height: 360px;\r\n  box-sizing: border-box;\r\n  overflow-y: auto;\r\n}\r\n\r\n#levelsList {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n    background: #070707c4;\r\n  box-shadow: black 0px 20px 40px;\r\n}\r\n\r\n.levelsItem {\r\n  width: 150px;\r\n  height: 150px;\r\n  background-size: contain;\r\n  transition: background-color 500ms;\r\n}\r\n\r\n.levelsItem:hover {\r\n  background-color: #1919198c;\r\n}\r\n\r\n.bottom {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}",""]),n.exports=r},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(i=t,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(l," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,d,l;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},function(n,r,e){"use strict";e.r(r);let t=document.getElementById("recipe"),o=[],a=3,i=!1;function d(n){o.length<a&&o.push(n),o.length===a&&(i=!0),s()}function l(){o=[],i=!1,s()}function s(){t.innerHTML="";for(let n=0;n<a;n++){let r=document.createElement("i");n<o.length?r.classList="fas fa-vial  "+o[n]:r.classList="fas fa-vial  grey",t.appendChild(r)}}var c=[{blue:3},{red:3},{blue:1,red:1,green:1},{blue:3,green:1},{blue:3,red:1,green:3},{blue:1,red:3,green:1},{blue:3,green:3}];let p=document.getElementById("levelSelect"),u=document.getElementById("levelsList"),x=c,f=0;function h(){u.innerHTML="",x.forEach((n,r)=>{let e=document.createElement("div");e.classList.add("levelsItem"),e.style.backgroundImage="url(static/level_"+r+".png)",e.onclick=()=>{f=r,g(r),p.style.display="none"},u.appendChild(e)})}function g(n){var r;r=x[n],rn=r,on(),function(n){let r=Object.keys(n).reduce((r,e)=>r+=n[e],0);a=r,l()}(x[n]),function(n){w.style.backgroundImage=`url(static/level_${n}.png)`,w.classList.add("target-large"),setTimeout(()=>{w.classList.remove("target-large")},1500)}(n),f=n}function b(){p.style.display="flex"}window.addEventListener("load",(function(){x=c,h()}));let m=document.getElementById("win"),y=document.getElementById("ui"),v=document.getElementById("canvas"),w=document.getElementById("target"),k=!1,M=!1;function E(){w.classList.add("target-large"),M=!0}function I(){w.classList.remove("target-large"),M=!1}function L(){m.style.display="flex",m.onclick=()=>{g((f+1)%x.length)},k=!0}w.onmouseenter=()=>{E()},w.onmouseout=()=>{I()},w.onclick=()=>{M?I():E()},window.addEventListener("load",(function(){y.style.width=v.clientWidth+"px",y.style.height=v.clientHeight+"px"}));let j=document.getElementById("canvas"),B=j.getContext("2d"),S=j.width,P=j.height,C=S/2,T=P/2;B.fillStyle="black",B.strokeStyle="#29ff7e",B.lineWidth=3,B.lineCap="round";let O,R,z,_,A,N,F,U,H,q=0,W=200,G=.07,$=320,D=350,J=[],K=[],Q=320,V=320,X=350,Y=350,Z=!0,nn=!1,rn={};function en(){const n=document.createElement("a");document.body.appendChild(n),n.href=j.toDataURL(),n.download="target-potion.png",n.click(),document.body.removeChild(n)}function tn(){if(nn)return;let n=Object.keys(rn).reduce((n,r)=>{let e=o.filter(n=>n===r).length;return n+=Math.min(e/rn[r],1)/a*rn[r]},0);nn=1===n,G=1-Math.min(Math.max(n,.01),.95),console.log(G)}function on(){nn=!1,Z=!0,$=320,D=350,q=0,W=307,G=.99,O=15,R=5,z=0,_=1,A=1,N=0,F=1.5707963267948966,U=1.5707963267948966,H=0,V=320,Y=350,Q=320,X=350,B.setTransform(1,0,0,1,-Q+C,-X+T),pn("white"),l(),m.style.display="none",k=!1}function an(){if(B.save(),B.globalAlpha=G,B.globalCompositeOperation="destination-out",B.fillStyle="#FFF",B.fillRect(-C+Q,-T+X,S,P),B.restore(),!Z)return;let n=O+Math.random()*z,r=$+Math.cos(q)*n,e=D+Math.sin(q)*n,t=q+Math.random()*H+F,o=Math.random()*N+_,a=r+Math.cos(q+Math.PI/2)*o,i=e+Math.sin(q+Math.PI/2)*o;K.push({x:a,y:i}),K.length>10&&K.shift();let d=W%360;B.shadowBlur=20,B.shadowColor=`hsl(${d},70%,70%`,B.strokeStyle=`hsl(${d},100%,50%`,B.lineWidth=5,B.beginPath(),B.moveTo($,D),B.lineTo(r,e),B.stroke(),B.beginPath(),B.arc(a,i,o,q-Math.PI/2,t-Math.PI/2,!1),B.stroke(),B.lineWidth=3,B.strokeStyle="white",B.beginPath(),B.moveTo($,D),B.lineTo(r,e),B.stroke(),B.beginPath(),B.arc(a,i,o,q-Math.PI/2,t-Math.PI/2,!1),B.stroke(),$=a+Math.cos(t-Math.PI/2)*o,D=i+Math.sin(t-Math.PI/2)*o,J.push({x:$,y:D}),J.length>70&&J.shift(),q=t,J.push({x:r,y:e}),J.length>70&&J.shift();let l=function(){let n=J.reduce((n,r,e)=>(n.x+=r.x,n.y+=r.y,n),{x:0,y:0});return n.x/=J.length,n.y/=J.length,n}();!function(n,r){V=n,Y=r}(l.x,l.y),function(n,r){B.beginPath(),B.arc(n,r,20,0,2*Math.PI),B.stroke()}(l.x,l.y),function(){let n=(V-Q)/10,r=(Y-X)/10;Math.sqrt(n*n+r*r)<1||(Q+=n,X+=r,B.setTransform(1,0,0,1,-Q+C,-X+T))}(),($>S+50||$<-50||D>P+50||D<-50)&&on();let s=performance.now();for(;s<K.length-1;){let n=K[s],r=K[s+1],e=Math.sqrt(Math.pow(r.y-n.y,2)+Math.pow(r.x-n.x,2));e=Math.floor(e/S*2*15),B.strokeStyle="#ffff",B.beginPath(),B.moveTo(n.x,n.y),B.lineTo(r.x,r.y),B.stroke(),s++,B.fillStyle="#fff"+parseInt(Math.floor(16*Math.random()),16),B.beginPath(),B.arc(r.x,r.y,5,0,2*Math.PI),B.fill()}}function dn(){console.log("seg length: "+R+" |cornder rad: "+A+" |corner angle: "+U)}function ln(n){R=n,dn()}function sn(n){A=n,dn()}function cn(n){U=n,dn()}function pn(n){switch(n){case"blue":B.save(),B.fillStyle="#aaf2",B.fillRect(-C+Q,-T+X,S,P),B.restore();break;case"green":B.save(),B.fillStyle="#afa2",B.fillRect(-C+Q,-T+X,S,P),B.restore();break;case"red":B.save(),B.fillStyle="#faa2",B.fillRect(-C+Q,-T+X,S,P),B.restore();break;case"white":B.save(),B.fillStyle="#fff8",B.fillRect(-C+Q,-T+X,S,P),B.restore()}}on(),function n(r){an(),requestAnimationFrame(n);let e=(U-F)/50;F+=e,H=Math.abs(20*e),e<5e-4&&(F=U);let t=(A-_)/50;_+=t,N=Math.abs(10*t),t<.02&&(_=A);let o=(R-O)/50;O+=o,z=Math.abs(10*o),o<.05&&(O=R),nn&&(F===U&&_===A&&O===R)&&!k&&L()}();e(0);function un(n){ln(n.target.value)}function xn(n){sn(n.target.value)}function fn(n){cn(n.target.value)}function hn(n){var r;r=n.target.value,W=+r}function gn(n){var r;r=n.target.value,G=+r/255}function bn(){on(),l()}function mn(){i||i||(ln(R+100),d("blue"),pn("blue"),tn())}function yn(){i||(sn(A+50),d("red"),pn("red"),tn())}function vn(){i||(cn(U+Math.PI/7),pn("green"),d("green"),tn())}window.addEventListener("load",(function(){document.getElementById("segLength").addEventListener("input",un),document.getElementById("cornerRad").addEventListener("input",xn),document.getElementById("cornerAngle").addEventListener("input",fn),document.getElementById("color").addEventListener("input",hn),document.getElementById("fade").addEventListener("input",gn),document.getElementById("restart").addEventListener("mousedown",bn),document.getElementById("addBlue").addEventListener("mousedown",mn),document.getElementById("addRed").addEventListener("mousedown",yn),document.getElementById("addGreen").addEventListener("mousedown",vn),document.getElementById("downloadCanvas").addEventListener("click",en),document.getElementById("levelsBtn").addEventListener("click",b),g(f)}))}]);