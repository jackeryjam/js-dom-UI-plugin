"use strict";module.exports=function(t,n,e,i){var l={};l.domWidth=i&&i.domWidth||window.innerWidth,l.appendWidth=i&&i.appendWidth||60;var v=0,a={transform:function(t){t<-l.appendWidth||0<t||(this.style.webkitTransform="translate3d("+t+"px,0,0)",v=t)},bindTouchEvent:function(){var d,o,r=t,s=(window.innerWidth,-(l.domWidth+l.appendWidth)),h=0,p=0,u=!1,c=!0,f=!0,e=!0;t.addEventListener("touchstart",function(t){e=!0,setTimeout(function(){e=!1},300)}.bind(this),!1),t.addEventListener("touchmove",function(t){if(f){if(f=!1,1==t.touches.length||c){var e=t.touches[0];d=e.pageX,o=e.pageY,h=v,r.style.webkitTransition="",(new Date).getTime(),c=u=!1}}else{if(t.preventDefault(),c)return;var n=(e=t.touches[0]).pageX-d,i=e.pageY-o;if(Math.abs(n)>Math.abs(i)){p=n<l.appendWidth?n:l.appendWidth;var a=h+p;a<=0&&s<=a&&(this.transform.call(r,a),u=!0),0<n?"right":"left"}}}.bind(this),!1),t.addEventListener("touchend",function(t){e&&n&&n(),u&&!c&&(c=!0,r.style.webkitTransition="0.3s ease -webkit-transform",v=v>-l.appendWidth/2?0:-l.appendWidth,a.transform.call(r,v)),f=!0},!1)}};a.bindTouchEvent()};