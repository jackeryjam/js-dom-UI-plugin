!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}({10:function(e,t,n){"use strict";e.exports=function(e,t,n){var r={};r.time=n&&n.time||600,r.preventBubble=n&&n.preventBubble||!1,r.useCapture=n&&n.useCapture||!0;var u=n&&n.clickCb||function(){},o=0,i=!0;e.addEventListener("contextmenu",function(e){e.preventDefault()}),e.addEventListener("touchstart",function(e){var n=t||function(){},u=this.dataset;return i=!0,o=setTimeout(function(){i=!1,n(u)},r.time),r.preventBubble}),e.addEventListener("touchmove",function(e){return clearTimeout(o),o=0,r.preventBubble},r.useCapture),e.addEventListener("touchend",function(e){return i&&u(this.dataset),clearTimeout(o),r.preventBubble},r.useCapture)}},11:function(e,t,n){n(10)(document.getElementById("pressbox"),function(e){console.log("长按触发的函数"),console.log(e)},{time:500})}});