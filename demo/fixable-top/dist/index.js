/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./fixable-top/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fixable-top/index.js":
/*!******************************!*\
  !*** ./fixable-top/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var swipeview = __webpack_require__(/*! @tencent/js-dom-ui-plugin/dist/swipeview */ \"./node_modules/@tencent/js-dom-ui-plugin/dist/swipeview.js\")\r\nvar fixable = __webpack_require__(/*! @tencent/js-dom-ui-plugin/dist/fixable-top */ \"./node_modules/@tencent/js-dom-ui-plugin/dist/fixable-top.js\")\r\n// var swipeview = require(\"../../src/swipeview\")\r\n// var fixable = require(\"../../src/fixable-top\")\r\n// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏\r\nswipeview(document.getElementById(\"swipe-view\"), {\r\n  activeClass: \"nav-active\",\r\n  navbar: document.getElementById(\"swipe-view-nav\")\r\n});\r\n\r\nfixable(\"id\")\r\n\n\n//# sourceURL=webpack:///./fixable-top/index.js?");

/***/ }),

/***/ "./node_modules/@tencent/js-dom-ui-plugin/dist/fixable-top.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tencent/js-dom-ui-plugin/dist/fixable-top.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("function getPos(t){for(var e=0,o=0;t;)e+=t.offsetLeft,o+=t.offsetTop,t=t.offsetParent;return{left:e,top:o}}function getPixal(t){return\"px\"==t.substr(t.length-2)?parseInt(t.substr(0,t.length-2)):0}module.exports=function(t,e){var o=document.querySelector(\"[fixable-header='\"+t+\"']\");null==o&&(o=document.querySelector(\"[data-fixable-header='\"+t+\"']\"));var n=document.querySelector(\"[fixable-body='\"+t+\"']\");null==n&&(n=document.querySelector(\"[data-fixable-body='\"+t+\"']\"));var r=!1,l=getPos(n).top,i=o.offsetHeight;o.style.top=0;var s=e&&e.toFixed||function(){},a=e&&e.toNormal||function(){};window.addEventListener(\"touchstart\",function(){l=getPos(n).top}),window.addEventListener(\"scroll\",function(){var t=document.documentElement.scrollTop||document.body.scrollTop;!r&&l<t+i&&t<l+n.offsetHeight?(n.style.marginTop=getPixal(n.style.marginTop)+i,o.style.position=\"fixed\",r=!0,s()):r&&(t+i<l||t>l+n.offsetHeight)&&(n.style.marginTop=getPixal(n.style.marginTop)-i,o.style.position=\"\",r=!1,a())})};\n\n//# sourceURL=webpack:///./node_modules/@tencent/js-dom-ui-plugin/dist/fixable-top.js?");

/***/ }),

/***/ "./node_modules/@tencent/js-dom-ui-plugin/dist/swipeview.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tencent/js-dom-ui-plugin/dist/swipeview.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("module.exports=function(n,t){var d=n.querySelector('[swipeView=\"body\"]'),e=d.querySelectorAll('[swipeView=\"item\"]'),i=t&&t.navbar||null,a=null==i?null:i.querySelectorAll('[swipeView=\"nav-item\"]'),s=t&&t.activeClass||\"\",c=0,r=-1,v=1,o={init:void(/(windows)/i.test(navigator.userAgent)||document.addEventListener(\"DOMContentLoaded\",function(){n.style.overflow=\"hidden\",d.style.display=\"flex\",d.style.width=e.length+\"00%\";for(var t=0;t<e.length;t++)e[t].style.flex=\"1\";o.setHeight(),o.bindTouchEvent(),o.setNavBar(),o.bindNavBar()}.bind(o),!1)),transform:function(t){this.style.webkitTransform=\"translate3d(\"+t+\"px,0,0)\",c=t},toPage:function(){var t=n.offsetWidth,e=-(v-1)*t;o.transform.call(d,e)},setNavBar:function(){null!==a&&\"\"!==s&&(-1!=r&&a[r].classList.remove(s),a[r=v-1].classList.add(s))},bindNavBar:function(){if(console.log(a),null!==a)for(var t=function(e){a[e].addEventListener(\"click\",function(t){v=e+1,o.setNavBar(),o.toPage(),o.setHeight()})},e=0;e<a.length;e++)t(e)},setHeight:function(){var t=e[r=v-1].offsetHeight;n.style.height=t},bindTouchEvent:function(){var s,r,i=n.offsetWidth,o=-i*(e.length-1),l=0,h=\"left\",f=!1,a=0,u=!0;n.addEventListener(\"touchstart\",function(t){if(1==t.touches.length||u){var e=t.touches[0];s=e.pageX,r=e.pageY,l=c,d.style.webkitTransition=\"\",a=(new Date).getTime(),u=f=!1}return!0}.bind(this),!1),n.addEventListener(\"touchmove\",function(t){if(!u){var e=t.touches[0],n=e.pageX-s,i=e.pageY-r;if(Math.abs(n)>Math.abs(i)){var a=l+n;a<=0&&o<=a&&(this.transform.call(d,a),f=!0),h=0<n?\"right\":\"left\"}return!0}}.bind(this),!1),n.addEventListener(\"touchend\",function(t){var e=0,n=(new Date).getTime()-a;if(f&&!u)return u=!0,d.style.webkitTransition=\"0.3s ease -webkit-transform\",e=n<300?(e=0<(e=\"left\"==h?Math.floor(c/i)*i:Math.ceil(c/i)*i)?0:e)<o?o:e:Math.round(c/i)*i,this.transform.call(d,e),v=Math.round(Math.abs(e)/i)+1,setTimeout(function(){this.setNavBar(),this.setHeight()}.bind(this),100),!0}.bind(this),!1)}}};\n\n//# sourceURL=webpack:///./node_modules/@tencent/js-dom-ui-plugin/dist/swipeview.js?");

/***/ })

/******/ });