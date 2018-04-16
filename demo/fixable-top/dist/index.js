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

eval("// var swipeview = require(\"js-dom-ui-plugin/dist/swipeview\")\r\nvar swipeview = __webpack_require__(/*! @tencent/js-dom-ui-plugin/dist/swipeview */ \"./node_modules/@tencent/js-dom-ui-plugin/dist/swipeview.js\")\r\nvar fixable = __webpack_require__(/*! @tencent/js-dom-ui-plugin/dist/fixable-top */ \"./node_modules/@tencent/js-dom-ui-plugin/dist/fixable-top.js\")\r\n// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏\r\nswipeview(document.getElementById(\"swipe-view\"), {\r\n  activeClass: \"nav-active\",\r\n  navbar: document.getElementById(\"swipe-view-nav\")\r\n});\r\n\r\nfixable(\"id\")\r\n\n\n//# sourceURL=webpack:///./fixable-top/index.js?");

/***/ }),

/***/ "./node_modules/@tencent/js-dom-ui-plugin/dist/fixable-top.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tencent/js-dom-ui-plugin/dist/fixable-top.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("function getPos(e){for(var t=0,o=0;e;)t+=e.offsetLeft,o+=e.offsetTop,e=e.offsetParent;return{left:t,top:o}}module.exports=function(e,t){var o=document.querySelector(\"[fixable-header='\"+e+\"']\");null==o&&(o=document.querySelector(\"[data-fixable-header='\"+e+\"']\"));var r=document.querySelector(\"[fixable-body='\"+e+\"']\");null==r&&(r=document.querySelector(\"[data-fixable-body='\"+e+\"']\"));var l=!1,f=getPos(r).top,n=o.offsetHeight;o.style.top=0,window.addEventListener(\"scroll\",function(){var e=document.documentElement.scrollTop||document.body.scrollTop;!l&&f<e+n&&e<f+r.offsetHeight?(o.style.position=\"fixed\",l=!0):l&&(e+n<f||e>f+r.offsetHeight)&&(o.style.position=\"\",l=!1)})};\n\n//# sourceURL=webpack:///./node_modules/@tencent/js-dom-ui-plugin/dist/fixable-top.js?");

/***/ }),

/***/ "./node_modules/@tencent/js-dom-ui-plugin/dist/swipeview.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tencent/js-dom-ui-plugin/dist/swipeview.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("module.exports=function(e,t){var c=e.querySelector('[swipeView=\"body\"]'),n=c.querySelectorAll('[swipeView=\"item\"]'),i=t&&t.navbar||null,s=null==i?null:i.querySelectorAll('[swipeView=\"nav-item\"]'),a=t&&t.activeClass||\"\",f=0,r=-1,v=1,o={init:void(/(windows)/i.test(navigator.userAgent)||document.addEventListener(\"DOMContentLoaded\",function(){e.style.overflow=\"hidden\",c.style.display=\"-webkit-box\",c.style.width=n.length+\"00%\";for(var t=0;t<n.length;t++)n[t].style.width=\"100%\";o.bindTouchEvent(),o.setNavBar()}.bind(o),!1)),transform:function(t){this.style.webkitTransform=\"translate3d(\"+t+\"px,0,0)\",f=t},setNavBar:function(){null!==s&&\"\"!==a&&(-1!=r&&s[r].classList.remove(a),s[r=v-1].classList.add(a))},bindTouchEvent:function(){var a,r,i=e.offsetWidth,o=-i*(n.length-1),l=0,d=\"left\",u=!1,s=0,h=!0;e.addEventListener(\"touchstart\",function(t){if(1==t.touches.length||h){var e=t.touches[0];a=e.pageX,r=e.pageY,l=f,c.style.webkitTransition=\"\",s=(new Date).getTime(),h=u=!1}return!0}.bind(this),!1),e.addEventListener(\"touchmove\",function(t){if(!h){var e=t.touches[0],n=e.pageX-a,i=e.pageY-r;if(Math.abs(n)>Math.abs(i)){var s=l+n;s<=0&&o<=s&&(this.transform.call(c,s),u=!0),d=0<n?\"right\":\"left\"}return!0}}.bind(this),!1),e.addEventListener(\"touchend\",function(t){var e=0,n=(new Date).getTime()-s;if(u&&!h)return h=!0,c.style.webkitTransition=\"0.3s ease -webkit-transform\",e=n<300?(e=0<(e=\"left\"==d?Math.floor(f/i)*i:Math.ceil(f/i)*i)?0:e)<o?o:e:Math.round(f/i)*i,this.transform.call(c,e),v=Math.round(Math.abs(e)/i)+1,setTimeout(function(){this.setNavBar()}.bind(this),100),!0}.bind(this),!1)}}};\n\n//# sourceURL=webpack:///./node_modules/@tencent/js-dom-ui-plugin/dist/swipeview.js?");

/***/ })

/******/ });