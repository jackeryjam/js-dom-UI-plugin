"use strict";module.exports=function(t,v){var e=document.querySelectorAll('[swipeOnly="'+t+'"]');0==e.length&&(e=document.querySelectorAll('[data-swipeOnly="'+t+'"]'));for(var b=null,n=function(i){var t=i.querySelector("[swipeAppend]");null==t&&(t=i.querySelector("[data-swipeAppend]"));var l=t&&t.offsetWidth||60;l=v&&v.offsetWidth||l;var r,s,a=0,o=i,u=(window.innerWidth,-(i.offsetWidth+l)),c=0,d=!1,f=!0,h=!0,p=function(t){t<-l||0<t||(this.style.webkitTransform="translate3d("+t+"px,0,0)",a=t)};i.addEventListener("touchstart",function(t){h=!0;var e=v&&v.time||300;if(setTimeout(function(){h=!1},e),null!=b&&b!=i&&p.call(b,0),b=i,1==t.touches.length||f){var n=t.touches[0];r=n.pageX,s=n.pageY,c=a,o.style.webkitTransition="",(new Date).getTime(),f=d=!1}}.bind(this),!1),i.addEventListener("touchmove",function(t){if(h=!1,t.preventDefault(),!f){var e=t.touches[0],n=e.pageX-r,i=e.pageY-s;if(Math.abs(n)>Math.abs(i)){var a=c+(n<l?n:l);a<=0&&u<=a&&(p.call(o,a),d=!0),0<n?"right":"left"}}}.bind(this),!1),i.addEventListener("touchend",function(t){h&&v&&v.clickCb&&v.clickCb(i.dataset),d&&!f&&(f=!0,o.style.webkitTransition="0.3s ease -webkit-transform",p.call(o,a=-l/2<a?0:-l))}.bind(this),!1)},i=0;i<e.length;i++)n(e[i]);return function(){null!=b&&(b.style.webkitTransform="translate3d(0,0,0)",b=null)}};