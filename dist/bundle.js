!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=4)}([function(n,r,e){var t=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(t(o,a),o.locals?o.locals:{});n.exports=i},function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function d(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function p(n,r){for(var e={},t=[],o=0;o<n.length;o++){var a=n[o],p=r.base?a[0]+r.base:a[0],s=e[p]||0,l="".concat(p," ").concat(s);e[p]=s+1;var c=d(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==c?(i[c].references++,i[c].updater(u)):i.push({identifier:l,updater:b(u,r),references:1}),t.push(l)}return t}function s(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var l,c=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function u(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=c(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function f(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var x=null,h=0;function b(n,r){var e,t,o;if(r.singleton){var a=h++;e=x||(x=s(r)),t=u.bind(null,e,a,!1),o=u.bind(null,e,a,!0)}else e=s(r),t=f.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=p(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=d(e[t]);i[o].references--}for(var a=p(n,r),s=0;s<e.length;s++){var l=d(e[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=a}}}},function(n,r,e){(r=e(3)(!1)).push([n.i,"body, html{\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  background: black;\r\n  max-height: 100vh;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 9px;\r\n  height: 9px;\r\n}\r\n::-webkit-scrollbar-button {\r\n  width: 7px;\r\n  height: 7px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: #e1e1e1;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #ffffff;\r\n}\r\n::-webkit-scrollbar-thumb:active {\r\n  background: #000000;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background: #666666;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n::-webkit-scrollbar-track:hover {\r\n  background: #666666;\r\n}\r\n::-webkit-scrollbar-track:active {\r\n  background: #333333;\r\n}\r\n::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}\r\n\r\ninput[type=range] {\r\n  width: 70%;\r\n}\r\n\r\ninput[type=range].slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  margin: 0.7px 0;\r\n}\r\ninput[type=range].slider:focus {\r\n  outline: none;\r\n}\r\ninput[type=range].slider::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  background: #484d4d;\r\n  border-radius: 0px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range].slider::-webkit-slider-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  margin-top: -0.7px;\r\n}\r\ninput[type=range].slider:focus::-webkit-slider-runnable-track {\r\n  background: #4a5050;\r\n}\r\ninput[type=range].slider::-moz-range-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  background: #484d4d;\r\n  border-radius: 0px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range].slider::-moz-range-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n}\r\ninput[type=range].slider::-ms-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border-color: transparent;\r\n  color: transparent;\r\n}\r\ninput[type=range].slider::-ms-fill-lower {\r\n  background: #464a4a;\r\n  border: 0px solid #010101;\r\n  border-radius: 0px;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\ninput[type=range].slider::-ms-fill-upper {\r\n  background: #484d4d;\r\n  border: 0px solid #010101;\r\n  border-radius: 0px;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\ninput[type=range].slider::-ms-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n  height: 25.6px;\r\n}\r\ninput[type=range].slider:focus::-ms-fill-lower {\r\n  background: #484d4d;\r\n}\r\ninput[type=range].slider:focus::-ms-fill-upper {\r\n  background: #4a5050;\r\n}\r\n\r\ncanvas {\r\n  width: 100%;\r\n  height: auto;\r\n  max-height: 100%;\r\n  display: inline-block;\r\n  border: 3px solid white;\r\n  border-radius: 7px;\r\n  /* box-sizing: border-box; */\r\n}\r\n\r\nlabel {\r\n  padding: 10px;\r\n  color: #feffff;\r\n  font-family: sans-serif;\r\n  display: block;\r\n}\r\n\r\n.potions {\r\n  display: flex;\r\n  width: 100%;\r\n  margin-top: 15px;\r\n}\r\n\r\n.potions > button {\r\n  color: #ffffff;\r\n  width: 180px;\r\n  height: 50px;\r\n  font-weight: bold;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  transition: transform 50ms, box-shadow 50ms;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  margin: 10px;\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.potions > button > i {\r\n  font-size: 20px;\r\n}\r\n\r\n#addBlue {\r\n  background: #2d90f6;\r\n  border: 5px solid #217cbd;\r\n  box-shadow: 0px 0px 0px 3px #2d90f6, 0px 8px 0px 3px #17639a;\r\n}\r\n\r\n#addBlue:active{\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #2d90f6, 0px 2px 0px 3px #17639a;\r\n}\r\n\r\n#addRed {\r\n  background: #ff1a1a;\r\n  border: 5px solid #cf1717;\r\n  box-shadow: 0px 0px 0px 3px #ff1a1a, 0px 8px 0px 3px #7b1414;\r\n}\r\n\r\n#addRed:active {\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #ff1a1a, 0px 2px 0px 3px #7b1414;\r\n}\r\n\r\n#addGreen{\r\n  background: #13c418;\r\n  border: 5px solid #129a16;\r\n  box-shadow: 0px 0px 0px 3px #13c418, 0px 8px 0px 3px #0a6e0d;\r\n}\r\n\r\n#addGreen:active {\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #13c418, 0px 2px 0px 3px #0a6e0d;\r\n}\r\n\r\n\r\n#restart{\r\n  margin-bottom: 20px;\r\n  background: #e8e8e8;\r\n  color: #6f6f6f;\r\n  width: 110px;\r\n  height: 60px;\r\n  font-weight: bold;\r\n  border: 5px solid #939393;\r\n  border-radius: 50px;\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  box-shadow: 0px 0px 0px 3px #e5e5e5, 0px 8px 0px 3px #b0b0b0;\r\n  transition: transform 50ms, box-shadow 50ms;\r\n}\r\n\r\n#restart:active{\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #e5e5e5, 0px 2px 0px 3px #b0b0b0;\r\n}\r\n\r\n#recipe{\r\n  box-shadow: #141414 0px 6px;\r\n  min-height: 52px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px;\r\n  box-sizing: border-box;\r\n  background: #232323;\r\n  border-radius: 30px;\r\n  margin-top: 20px;\r\n}\r\n\r\n#recipe > i {\r\n  font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 8px;\r\n    border-radius: 50px;\r\n    margin: 3px;\r\n    color: #00000099;\r\n}\r\n\r\n#recipe > .blue {\r\n  background: #3e9dff;;\r\n}\r\n\r\n#recipe > .red {\r\n  background: #ff1d1d;\r\n}\r\n\r\n#recipe > .green {\r\n  background: #23ef29;\r\n}\r\n\r\n#recipe > .grey {\r\n  background: #888;\r\n}\r\n\r\n#ui {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#target {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-size: contain;\r\n  transition: width 200ms, height 200ms;\r\n  opacity: 0.5;\r\n}\r\n\r\n#target:hover{\r\n  width: 250px;\r\n  height: 250px;\r\n  opacity: 1;\r\n}\r\n\r\n#ui > #msg {\r\n  width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n",""]),n.exports=r},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(i=t,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(p," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,d,p;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);t&&o[p[0]]||(e&&(p[2]?p[2]="".concat(e," and ").concat(p[2]):p[2]=e),r.push(p))}},r}},function(n,r,e){"use strict";e.r(r);let t=document.getElementById("recipe"),o=[],a=10,i=!1;function d(n){o.length<a&&o.push(n),o.length===a&&(i=!0),s()}function p(){o=[],i=!1,s()}function s(){t.innerHTML="";for(let n=0;n<a;n++){let r=document.createElement("i");n<o.length?r.classList="fas fa-vial  "+o[n]:r.classList="fas fa-vial  grey",t.appendChild(r)}}let l=document.getElementById("msg"),c=document.getElementById("ui"),u=document.getElementById("canvas"),f=!1;window.addEventListener("load",(function(){c.style.width=u.clientWidth+"px",c.style.height=u.clientHeight+"px"}));let x=document.getElementById("canvas"),h=x.getContext("2d"),b=x.width,g=x.height,m=b/2,y=g/2;h.fillStyle="black",h.strokeStyle="#29ff7e",h.lineWidth=3,h.lineCap="round";let v,w,k,M,E,I,S,L,B,P=0,T=200,j=.07,C=320,R=350,O=[],z=[],_=320,A=320,N=350,F=350,H=!0,U=!1,q={green:3,blue:1,red:1};function W(){const n=document.createElement("a");document.body.appendChild(n),n.href=x.toDataURL(),n.download="target-potion.png",n.click(),document.body.removeChild(n)}function G(){if(U)return;let n=Object.keys(q).reduce((n,r)=>{let e=o.filter(n=>n===r).length;return n+=Math.min(e/q[r],1)/a*q[r]},0);U=1===n,console.log(n),j=1-Math.min(Math.max(n,.02),.95),j=o.length/a}function D(){U=!1,H=!0,C=320,R=350,P=0,T=200,j=.99,v=15,w=5,k=0,M=1,E=1,I=0,S=1.5707963267948966,L=1.5707963267948966,B=0,A=320,F=350,_=320,N=350,h.setTransform(1,0,0,1,-_+m,-N+y),X("white"),p(),l.innerHTML="",f=!1}function J(){if(h.save(),h.globalAlpha=j,h.globalCompositeOperation="destination-out",h.fillStyle="#FFF",h.fillRect(-m+_,-y+N,b,g),h.restore(),!H)return;let n=v+Math.random()*k,r=C+Math.cos(P)*n,e=R+Math.sin(P)*n,t=P+Math.random()*B+S,o=Math.random()*I+M,a=r+Math.cos(P+Math.PI/2)*o,i=e+Math.sin(P+Math.PI/2)*o;z.push({x:a,y:i}),z.length>10&&z.shift();let d=T%360;h.shadowBlur=20,h.shadowColor=`hsl(${d},70%,70%`,h.strokeStyle=`hsl(${d},100%,50%`,h.lineWidth=5,h.beginPath(),h.moveTo(C,R),h.lineTo(r,e),h.stroke(),h.beginPath(),h.arc(a,i,o,P-Math.PI/2,t-Math.PI/2,!1),h.stroke(),h.lineWidth=3,h.strokeStyle="white",h.beginPath(),h.moveTo(C,R),h.lineTo(r,e),h.stroke(),h.beginPath(),h.arc(a,i,o,P-Math.PI/2,t-Math.PI/2,!1),h.stroke(),C=a+Math.cos(t-Math.PI/2)*o,R=i+Math.sin(t-Math.PI/2)*o,O.push({x:C,y:R}),O.length>70&&O.shift(),P=t,O.push({x:r,y:e}),O.length>70&&O.shift();let p=function(){let n=O.reduce((n,r,e)=>(n.x+=r.x,n.y+=r.y,n),{x:0,y:0});return n.x/=O.length,n.y/=O.length,n}();!function(n,r){A=n,F=r}(p.x,p.y),function(n,r){h.beginPath(),h.arc(n,r,20,0,2*Math.PI),h.stroke()}(p.x,p.y),function(){let n=(A-_)/10,r=(F-N)/10;Math.sqrt(n*n+r*r)<1||(_+=n,N+=r,h.setTransform(1,0,0,1,-_+m,-N+y))}(),(C>b+50||C<-50||R>g+50||R<-50)&&D();let s=performance.now();for(;s<z.length-1;){let n=z[s],r=z[s+1],e=Math.sqrt(Math.pow(r.y-n.y,2)+Math.pow(r.x-n.x,2));e=Math.floor(e/b*2*15),h.strokeStyle="#ffff",h.beginPath(),h.moveTo(n.x,n.y),h.lineTo(r.x,r.y),h.stroke(),s++,h.fillStyle="#fff"+parseInt(Math.floor(16*Math.random()),16),h.beginPath(),h.arc(r.x,r.y,5,0,2*Math.PI),h.fill()}}function $(){console.log("seg length: "+w+" |cornder rad: "+E+" |corner angle: "+L)}function K(n){w=n,$()}function Q(n){E=n,$()}function V(n){L=n,$()}function X(n){switch(n){case"blue":h.save(),h.fillStyle="#aaf2",h.fillRect(-m+_,-y+N,b,g),h.restore();break;case"green":h.save(),h.fillStyle="#afa2",h.fillRect(-m+_,-y+N,b,g),h.restore();break;case"red":h.save(),h.fillStyle="#faa2",h.fillRect(-m+_,-y+N,b,g),h.restore();break;case"white":h.save(),h.fillStyle="#fff8",h.fillRect(-m+_,-y+N,b,g),h.restore()}}D(),function n(r){J(),requestAnimationFrame(n);let e=(L-S)/50;S+=e,B=Math.abs(20*e),e<5e-4&&(S=L);let t=(E-M)/50;M+=t,I=Math.abs(10*t),t<.02&&(M=E);let o=(w-v)/50;v+=o,k=Math.abs(10*o),o<.05&&(v=w);let a=S===L&&M===E&&v===w;console.log(e,t,o),U&&a&&!f&&(l.style.color="#ff4d4da6",l.style.fontSize="220px",l.innerHTML='<i class="fas fa-heart"></i>',f=!0)}();var Y=e.p+"images/283448e8d6f79206d70a1b98b4b127d9.png";document.getElementById("target").style.backgroundImage="url("+Y+")";e(0);function Z(n){K(n.target.value)}function nn(n){Q(n.target.value)}function rn(n){V(n.target.value)}function en(n){var r;r=n.target.value,T=+r}function tn(n){var r;r=n.target.value,j=+r/255}function on(){D(),p()}function an(){i||i||(K(w+100),d("blue"),X("blue"),G())}function dn(){i||(Q(E+50),d("red"),X("red"),G())}function pn(){i||(V(L+Math.PI/7),X("green"),d("green"),G())}window.addEventListener("load",(function(){document.getElementById("segLength").addEventListener("input",Z),document.getElementById("cornerRad").addEventListener("input",nn),document.getElementById("cornerAngle").addEventListener("input",rn),document.getElementById("color").addEventListener("input",en),document.getElementById("fade").addEventListener("input",tn),document.getElementById("restart").addEventListener("mousedown",on),document.getElementById("addBlue").addEventListener("mousedown",an),document.getElementById("addRed").addEventListener("mousedown",dn),document.getElementById("addGreen").addEventListener("mousedown",pn),document.getElementById("downloadCanvas").addEventListener("click",W)}))}]);