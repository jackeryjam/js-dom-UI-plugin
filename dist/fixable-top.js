"use strict";function getPos(e){for(var t=0,o=0;e;)t+=e.offsetLeft,o+=e.offsetTop,e=e.offsetParent;return{left:t,top:o}}function getPixal(e){return"px"==e.substr(e.length-2)?parseInt(e.substr(0,e.length-2)):0}module.exports=function(e,t){var o=document.querySelector("[fixable-header='"+e+"']");null==o&&(o=document.querySelector("[data-fixable-header='"+e+"']"));var n=document.querySelector("[fixable-body='"+e+"']");null==n&&(n=document.querySelector("[data-fixable-body='"+e+"']"));var r=!1,l=getPos(n).top,i=o.offsetHeight;o.style.top=0;var s=t&&t.toFixed||function(){},a=t&&t.toNormal||function(){};window.addEventListener("scroll",function(){var e=document.documentElement.scrollTop||document.body.scrollTop;!r&&l<e+i&&e<l+n.offsetHeight?(n.style.marginTop=getPixal(n.style.marginTop)+i,o.style.position="fixed",r=!0,s()):r&&(e+i<l||e>l+n.offsetHeight)&&(n.style.marginTop=getPixal(n.style.marginTop)-i,o.style.position="",r=!1,a())})};