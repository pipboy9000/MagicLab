!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=4)}([function(n,r,e){var t=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(t(o,a),o.locals?o.locals:{});n.exports=i},function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function l(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],o=0;o<n.length;o++){var a=n[o],s=r.base?a[0]+r.base:a[0],d=e[s]||0,c="".concat(s," ").concat(d);e[s]=d+1;var p=l(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:c,updater:h(u,r),references:1}),t.push(c)}return t}function d(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var c,p=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function u(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=p(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function g(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,x=0;function h(n,r){var e,t,o;if(r.singleton){var a=x++;e=f||(f=d(r)),t=u.bind(null,e,a,!1),o=u.bind(null,e,a,!0)}else e=d(r),t=g.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=l(e[t]);i[o].references--}for(var a=s(n,r),d=0;d<e.length;d++){var c=l(e[d]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}e=a}}}},function(n,r,e){(r=e(3)(!1)).push([n.i,"body, html{\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  background: black;\r\n  max-height: 100vh;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 9px;\r\n  height: 9px;\r\n}\r\n::-webkit-scrollbar-button {\r\n  width: 7px;\r\n  height: 7px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: #e1e1e1;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #ffffff;\r\n}\r\n::-webkit-scrollbar-thumb:active {\r\n  background: #000000;\r\n}\r\n::-webkit-scrollbar-track {\r\n  background: #666666;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n::-webkit-scrollbar-track:hover {\r\n  background: #666666;\r\n}\r\n::-webkit-scrollbar-track:active {\r\n  background: #333333;\r\n}\r\n::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}\r\n\r\ninput[type=range] {\r\n  width: 70%;\r\n}\r\n\r\ninput[type=range].slider {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  margin: 0.7px 0;\r\n}\r\ninput[type=range].slider:focus {\r\n  outline: none;\r\n}\r\ninput[type=range].slider::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  background: #484d4d;\r\n  border-radius: 0px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range].slider::-webkit-slider-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  margin-top: -0.7px;\r\n}\r\ninput[type=range].slider:focus::-webkit-slider-runnable-track {\r\n  background: #4a5050;\r\n}\r\ninput[type=range].slider::-moz-range-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n  background: #484d4d;\r\n  border-radius: 0px;\r\n  border: 0px solid #010101;\r\n}\r\ninput[type=range].slider::-moz-range-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n}\r\ninput[type=range].slider::-ms-track {\r\n  width: 100%;\r\n  height: 25.6px;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border-color: transparent;\r\n  color: transparent;\r\n}\r\ninput[type=range].slider::-ms-fill-lower {\r\n  background: #464a4a;\r\n  border: 0px solid #010101;\r\n  border-radius: 0px;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\ninput[type=range].slider::-ms-fill-upper {\r\n  background: #484d4d;\r\n  border: 0px solid #010101;\r\n  border-radius: 0px;\r\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n}\r\ninput[type=range].slider::-ms-thumb {\r\n  box-shadow: 0px 0px 1px #670000, 0px 0px 0px #810000;\r\n  border: 0px solid #ff1e00;\r\n  height: 27px;\r\n  width: 18px;\r\n  border-radius: 0px;\r\n  background: rgba(255, 67, 95, 0.93);\r\n  cursor: pointer;\r\n  height: 25.6px;\r\n}\r\ninput[type=range].slider:focus::-ms-fill-lower {\r\n  background: #484d4d;\r\n}\r\ninput[type=range].slider:focus::-ms-fill-upper {\r\n  background: #4a5050;\r\n}\r\n\r\ncanvas {\r\n  width: 100%;\r\n  height: auto;\r\n  max-height: 100%;\r\n  display: inline-block;\r\n  border-radius: 7px;\r\n  /* box-sizing: border-box; */\r\n}\r\n\r\nlabel {\r\n  padding: 10px;\r\n  color: #feffff;\r\n  font-family: sans-serif;\r\n  display: block;\r\n}\r\n\r\n.potions {\r\n  display: flex;\r\n  max-width: 100%;\r\n  margin-top: 5px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.potions > button {\r\n  color: #0000009e;\r\n  width: 50px;\r\n  height: 50px;\r\n  font-weight: bold;\r\n  border-radius: 50px;\r\n  padding: 10px;\r\n  transition: transform 50ms, box-shadow 50ms;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  margin: 10px;\r\n  user-select: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.potions > button > i {\r\n  font-size: 20px;\r\n}\r\n\r\n.potions > .blue {\r\n  background: #2d90f6;\r\n  border: 5px solid #217cbd;\r\n  box-shadow: 0px 0px 0px 3px #2d90f6, 0px 8px 0px 3px #17639a;\r\n}\r\n\r\n.potions > .blue:active{\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #2d90f6, 0px 2px 0px 3px #17639a;\r\n}\r\n\r\n.potions > .red {\r\n  background: #ff1a1a;\r\n  border: 5px solid #cf1717;\r\n  box-shadow: 0px 0px 0px 3px #ff1a1a, 0px 8px 0px 3px #7b1414;\r\n}\r\n\r\n.potions > .red:active {\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #ff1a1a, 0px 2px 0px 3px #7b1414;\r\n}\r\n\r\n.potions > .green{\r\n  background: #13c418;\r\n  border: 5px solid #129a16;\r\n  box-shadow: 0px 0px 0px 3px #13c418, 0px 8px 0px 3px #0a6e0d;\r\n}\r\n\r\n.potions > .green:active {\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #13c418, 0px 2px 0px 3px #0a6e0d;\r\n}\r\n\r\n.potions > .orange{\r\n  background: hsl(30, 100%, 55%);\r\n  border: 5px solid hsla(0, 0%, 0%, 0.15);\r\n  box-shadow: 0px 0px 0px 3px hsl(30, 100%, 57%), 0px 8px 0px 3px hsl(30, 83%, 31%);\r\n}\r\n\r\n.potions > .orange:active {\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px hsl(30, 100%, 57%), 0px 2px 0px 3px hsl(30, 83%, 31%);\r\n}\r\n\r\n\r\n#restart{\r\n  user-select: none;\r\n  margin-bottom: 20px;\r\n  background: #e8e8e8;\r\n  color: #6f6f6f;\r\n  width: 80px;\r\n  height: 60px;\r\n  font-weight: bold;\r\n  border: 5px solid #939393;\r\n  border-radius: 50px;\r\n  padding: 10px;\r\n  margin-top: 20px;\r\n  box-shadow: 0px 0px 0px 3px #e5e5e5, 0px 8px 0px 3px #b0b0b0;\r\n  transition: transform 50ms, box-shadow 50ms;\r\n  font-size: 30px;\r\n  font-family: cursive;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  line-height: 0;\r\n}\r\n\r\n#restart:active{\r\n  transform: translate(0px, 6px);\r\n  box-shadow: 0px 0px 0px 3px #e5e5e5, 0px 2px 0px 3px #b0b0b0;\r\n}\r\n\r\n#recipe{\r\n  box-shadow: #141414 0px 6px;\r\n  min-height: 52px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px;\r\n  box-sizing: border-box;\r\n  background: #232323;\r\n  border-radius: 30px;\r\n  max-width: 100%;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  width: fit-content;\r\n}\r\n\r\n#recipe > i {\r\n  font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 8px;\r\n    border-radius: 50px;\r\n    margin: 3px;\r\n    color: #00000099;\r\n}\r\n\r\n#recipe > .blue {\r\n  background: #3e9dff;;\r\n}\r\n\r\n#recipe > .red {\r\n  background: #ff1d1d;\r\n}\r\n\r\n#recipe > .green {\r\n  background: #23ef29;\r\n}\r\n\r\n#recipe > .orange {\r\n  background: #ff9426;\r\n}\r\n\r\n#recipe > .grey {\r\n  background: #888;\r\n}\r\n\r\n#ui {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.target {\r\n  /* background: #0004; */\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-size: contain;\r\n  background-position: center;\r\n  transition: all 200ms;\r\n  opacity: 0.5;\r\n}\r\n\r\n.target-large{\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 1;\r\n}\r\n\r\n#ui > #msg {\r\n  width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#win{\r\n  color : #ffffff8f;\r\n  font-size : 220px;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  filter: blur(1px);\r\n  text-shadow: 0 0 10px #00ff2b00, 0 0 30px #ff005f;\r\n  opacity: 0;\r\n  transition: opacity .5s;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  max-width: 800px;\r\n  height: 60px;\r\n  display: block;\r\n}\r\n\r\nheader > i {\r\n  float: right;\r\n  width: 60px;\r\n  height: 60px;\r\n  color: white;\r\n  font-size: 30px;\r\n  display: flex !important;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.screen {\r\n  max-height: calc(100vh - 287px);\r\n  max-width: calc(100vh - 287px);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#levelSelect {\r\n  position: absolute;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  min-height: 360px;\r\n  box-sizing: border-box;\r\n  overflow-y: auto;\r\n  flex-direction: column;\r\n}\r\n\r\n#levelSelect > div.arrows{\r\n  font-size: 40px;\r\n  display: flex;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  justify-content: space-around;\r\n  color: white;\r\n  z-index: 2;\r\n  background: #0008;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#levelSelect > div.arrows > div.arrow{\r\n  width: 100%;\r\n  text-align: center;\r\n  transition: background-color 500ms;\r\n}\r\n\r\n#levelSelect > div.arrows > div.arrow{\r\n  width: 100%;\r\n  text-align: center;\r\n  transition: background-color 500ms;\r\n}\r\n\r\n#levelSelect > div.arrows > div.arrow:hover{\r\n  background: #ffffff2e;\r\n}\r\n\r\n#levelSelect > div.bg {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #0008;\r\n  z-index: 0;\r\n}\r\n\r\n#levelsList {\r\n  max-width: 500px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n    background: #070707c4;\r\n  box-shadow: black 0px 20px 40px;\r\n  z-index: 1;\r\n}\r\n\r\n.levelsItem {\r\n  width: 150px;\r\n  height: 150px;\r\n  background-size: contain;\r\n  transition: background-color 500ms;\r\n}\r\n\r\n.levelsItem:hover {\r\n  background-color: #1919198c;\r\n}\r\n\r\n.bottom {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n@keyframes fade-in{\r\n  from {opacity: 0;}\r\n  to {opacity: 1;}\r\n  }\r\n\r\n.fade-in {\r\n  animation-name: fade-in;\r\n  animation-iteration-count: 1;\r\n  animation-duration: 500ms;\r\n}\r\n\r\n@keyframes fade-out{\r\n  from {opacity: 1;}\r\n  to {opacity: 0;}\r\n}\r\n\r\n.fade-out{\r\n    animation-name: fade-in;\r\n    animation-iteration-count: 1;\r\n    animation-duration: 500ms;\r\n}",""]),n.exports=r},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(i=t,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,l,s;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},function(n,r,e){"use strict";e.r(r);let t=document.getElementById("recipe"),o=[],a=3,i=!1;function l(n){o.length<a&&o.push(n),o.length===a&&(i=!0),d()}function s(){o=[],i=!1,d()}function d(){t.innerHTML="";for(let n=0;n<a;n++){let r=document.createElement("i");n<o.length?r.classList="fas fa-vial  "+o[n]:r.classList="fas fa-vial  grey",t.appendChild(r)}}let c,p=[{color:320,availableColors:["red","green","blue"],levels:[{targetLength:305,targetRad:1,targetCornerAngle:1.5707963267948966,potionsNum:3},{targetLength:5,targetRad:151,targetCornerAngle:1.5707963267948966,potionsNum:3},{targetLength:105,targetRad:51,targetCornerAngle:2.019595277307724,potionsNum:3},{targetLength:105,targetRad:51,targetCornerAngle:2.4683942278205517,potionsNum:4},{targetLength:305,targetRad:1,targetCornerAngle:2.019595277307724,potionsNum:4},{targetLength:105,targetRad:151,targetCornerAngle:2.9171931783333793,potionsNum:7},{targetLength:305,targetRad:151,targetCornerAngle:2.9171931783333793,potionsNum:9},{targetLength:305,targetRad:1,targetCornerAngle:2.9171931783333793,potionsNum:6},{targetLength:405,targetRad:51,targetCornerAngle:3.365992128846207,potionsNum:9}]},{color:0,availableColors:["red","green","blue","orange"],levels:[{targetCornerAngle:2.4683942278205517,targetRad:1,targetLength:205,potionsNum:3},{targetCornerAngle:2.4683942278205517,targetRad:51,targetLength:405,potionsNum:5},{targetCornerAngle:3.365992128846207,targetRad:51,targetLength:405,potionsNum:5},{targetCornerAngle:2.019595277307724,targetRad:51,targetLength:405,potionsNum:5},{targetCornerAngle:2.019595277307724,targetRad:201,targetLength:105,potionsNum:5},{targetCornerAngle:3.365992128846207,targetRad:101,targetLength:105,potionsNum:5},{targetCornerAngle:4.263590029871862,targetRad:51,targetLength:405,potionsNum:7},{targetCornerAngle:5.161187930897517,targetRad:51,targetLength:105,potionsNum:7}]}],u=document.getElementById("levelSelect"),g=document.getElementById("levelsList"),f=document.querySelector("#levelSelect > div.bg"),x=document.querySelector("#levelSelect > div.arrows > div#left"),h=document.querySelector("#levelSelect > div.arrows > div#right"),b=0,m=0,v=0;function y(){c=p[b].levels,g.innerHTML="",c.forEach((n,r)=>{let e=document.createElement("div");e.classList.add("levelsItem"),e.style.backgroundImage=`url(static/stage${b}/level_${r}.png)`,e.onclick=()=>{v=r,w(b,r),M()},g.appendChild(e)})}function w(n,r){let e=p[n];c=e.levels;let t=e.levels[r];!function(n,r){Q=Date.now(),cn=n,X=r.color,un()}(t,e),function({potionsNum:n}){a=n,s()}(t),function(n,r){E&&P();R.style.backgroundImage=`url(static/stage${n}/level_${r}.png)`,R.classList.add("target-large"),setTimeout(()=>{R.classList.remove("target-large")},1500),I.innerHTML="",p[n].availableColors.forEach(n=>{let r=document.createElement("button");r.className="potion "+n,r.onclick=()=>{!function(n){if(i)return;switch(n){case"red":!function(){if(i)return;fn(H+100),l("red"),bn("red"),pn()}();break;case"green":!function(){if(i)return;xn(D+50),l("green"),bn("green"),pn()}();break;case"blue":!function(){if(i)return;hn(G+Math.PI/7),bn("blue"),l("blue"),pn()}();break;case"orange":!function(){if(i)return;l("orange");let n=o.reduce((n,r)=>(n[r]?n[r]+=1:n[r]=1,n),{}),r=n.orange;n.red&&fn(H+r*n.red*100);n.green&&xn(D+r*n.green*50);n.blue&&hn(G+r*n.blue*Math.PI/7);pn()}()}}(n)};let e=document.createElement("i");e.className="fas fa-vial",r.appendChild(e),I.appendChild(r)})}(n,r),m=n,v=r,b=m,document.body.style.background=`radial-gradient(circle at center, #391030, hsl(${e.color},70%,70%)`,y()}function k(){u.style.display="flex"}function M(){u.style.display="none"}window.addEventListener("load",(function(){c=p[m].levels,f.onclick=()=>{M()},x.onclick=()=>{b>0&&(b--,y())},h.onclick=()=>{b<p.length-1&&(b++,y())},y()}));let C=document.getElementById("win"),L=document.getElementById("ui"),S=document.getElementById("canvas"),R=document.getElementById("target"),I=document.getElementById("potions"),E=!1,N=!1;function j(){R.classList.add("target-large"),N=!0}function A(){R.classList.remove("target-large"),N=!1}function P(){C.style.opacity="0",C.style.pointerEvents="none",E=!1}R.onmouseenter=()=>{j()},R.onmouseout=()=>{A()},R.onclick=()=>{N?A():j()},C.onclick=()=>{v<p[m].levels.length-1?w(m,v+1):m<p.length-1&&w(m+1,0)},window.addEventListener("load",(function(){L.style.width=S.clientWidth+"px",L.style.height=S.clientHeight+"px"}));let T=document.getElementById("canvas"),z=T.getContext("2d"),B=T.width,O=T.height,_=B/2,$=O/2;z.fillStyle="black",z.strokeStyle="#29ff7e",z.lineWidth=5,z.lineCap="round";let q,H,U,W,D,F,J,G,K,Q,V=0,X=20,Y=.07,Z=320,nn=350,rn=[],en=[],tn=320,on=320,an=350,ln=350,sn=!0,dn=!1,cn={};function pn(){if(dn)return;let n=Math.abs(cn.targetLength-H)/cn.targetLength,r=Math.abs(cn.targetRad-D)/cn.targetRad,e=Math.abs(cn.targetCornerAngle-G)/cn.targetCornerAngle;0==n&&0==r&&0==e&&(dn=!0),Y=(n+r+e)/3,Y=Math.min(Math.max(Y,.05),.95)}function un(){dn=!1,sn=!0,Z=320,nn=350,V=0,Y=.99,q=15,H=5,U=0,W=1,D=1,F=0,J=1.5707963267948966,G=1.5707963267948966,K=0,on=320,ln=350,tn=320,an=350,z.setTransform(1,0,0,1,-tn+_,-an+$),bn("white"),s(),P()}function gn(){if(z.save(),z.globalAlpha=Y,z.globalCompositeOperation="destination-out",z.fillStyle="#000",z.fillRect(-_+tn,-$+an,B,O),z.restore(),!sn)return;let n=q+Math.random()*U,r=Z+Math.cos(V)*n,e=nn+Math.sin(V)*n,t=V+Math.random()*K+J,o=Math.random()*F+W,a=r+Math.cos(V+Math.PI/2)*o,i=e+Math.sin(V+Math.PI/2)*o;en.push({x:a,y:i}),en.length>10&&en.shift();let l=X%360;z.shadowBlur=20,z.shadowColor=`hsl(${l},70%,70%`,z.strokeStyle=`hsl(${l},100%,50%`,z.lineWidth=7,z.beginPath(),z.moveTo(Z,nn),z.lineTo(r,e),z.stroke(),z.beginPath(),z.arc(a,i,o,V-Math.PI/2,t-Math.PI/2,!1),z.stroke(),z.lineWidth=5,z.strokeStyle="white",z.beginPath(),z.moveTo(Z,nn),z.lineTo(r,e),z.stroke(),z.beginPath(),z.arc(a,i,o,V-Math.PI/2,t-Math.PI/2,!1),z.stroke(),Z=a+Math.cos(t-Math.PI/2)*o,nn=i+Math.sin(t-Math.PI/2)*o,rn.push({x:Z,y:nn}),rn.length>70&&rn.shift(),V=t,rn.push({x:r,y:e}),rn.length>70&&rn.shift();let s=function(){let n=rn.reduce((n,r,e)=>(n.x+=r.x,n.y+=r.y,n),{x:0,y:0});return n.x/=rn.length,n.y/=rn.length,n}();!function(n,r){on=n,ln=r}(s.x,s.y),function(){let n=(on-tn)/10,r=(ln-an)/10;Math.sqrt(n*n+r*r)<1||(tn+=n,an+=r,z.setTransform(1,0,0,1,-tn+_,-an+$))}(),(Z>B+100||Z<-100||nn>O+100||nn<-100)&&un()}function fn(n){H=n}function xn(n){D=n}function hn(n){G=n}function bn(n){switch(n){case"blue":z.save(),z.fillStyle="#aaf2",z.fillRect(-_+tn,-$+an,B,O),z.restore();break;case"green":z.save(),z.fillStyle="#afa2",z.fillRect(-_+tn,-$+an,B,O),z.restore();break;case"red":z.save(),z.fillStyle="#faa2",z.fillRect(-_+tn,-$+an,B,O),z.restore();break;case"white":z.save(),z.fillStyle="#fff2",z.fillRect(-_+tn,-$+an,B,O),z.restore();break;case"orange":z.save(),z.fillStyle="#faf2",z.fillRect(-_+tn,-$+an,B,O),z.restore()}}un(),function n(r){gn(),requestAnimationFrame(n);let e=(G-J)/60;J+=e,K=Math.abs(20*e),e<5e-4&&(J=G);let t=(D-W)/60*2;W+=t,F=Math.abs(10*t),t<.02&&(W=D);let o=(H-q)/60*2;if(q+=o,U=Math.abs(10*o),o<.1&&(q=H),dn&&(J===G&&W===D&&q===H)&&!E){C.style.opacity="1",C.style.pointerEvents="unset",E=!0;let n=Math.floor((Date.now()-Q)/1e3);ga("send","event","Progress","Win","stage-"+m+" level-"+v,n)}}();e(0);function mn(){un(),s()}window.addEventListener("load",(function(){document.getElementById("levelsBtn").addEventListener("click",k),document.getElementById("restart").addEventListener("mousedown",mn),w(m,v),ga("create","UA-76187604-22","auto")}))}]);