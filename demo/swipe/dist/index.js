!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([,,function(t,e){t.exports=function(t,e){var n=t.querySelector('[swipe="append"]'),r=n&&n.offsetWidth||60,o=0,i={transform:function(t){t<-r||t>0||(this.style.webkitTransform="translate3d("+t+"px,0,0)",o=t)},bindTouchEvent:function(){var n,a,c=t,s=(window.innerWidth,-(t.offsetWidth+r)),u=0,f=!1,l=!0,d=!0;t.addEventListener("touchstart",function(t){if(d=!0,setTimeout(function(){d=!1},300),1==t.touches.length||l){var e=t.touches[0];n=e.pageX,a=e.pageY,u=o,c.style.webkitTransition="",(new Date).getTime(),f=!1,l=!1}}.bind(this),!1),t.addEventListener("touchmove",function(t){if(t.preventDefault(),!l){var e=t.touches[0],o=e.pageX-n,i=e.pageY-a;if(Math.abs(o)>Math.abs(i)){var d=u+(o<r?o:r);d<=0&&d>=s&&(this.transform.call(c,d),f=!0),o>0?"right":"left"}}}.bind(this),!1),t.addEventListener("touchend",function(t){d&&e&&e.clickCb&&e.clickCb(this.dataset),f&&!l&&(l=!0,c.style.webkitTransition="0.3s ease -webkit-transform",o=o>-r/2?0:-r,i.transform.call(c,o)),!0},!1)}};i.bindTouchEvent()}},function(t,e,n){var r=n(2);document.querySelectorAll(".item").forEach(t=>r(t,{clickCb:t=>console.log(t)}))}]);