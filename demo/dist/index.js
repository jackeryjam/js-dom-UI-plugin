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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/swipeview.js":
/*!****************************!*\
  !*** ../dist/swipeview.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("module.exports=function(t,e){var c=t.querySelector('[swipeView=\"box\"]'),n=c.querySelectorAll('[swipeView=\"item\"]'),i=e&&e.navbar||null,a=null==i?null:i.querySelectorAll('[swipeView=\"nav-item\"]'),s=e&&e.activeClass||\"\",f=0,o=-1,v=1,r={init:void(/(windows)/i.test(navigator.userAgent)||document.addEventListener(\"DOMContentLoaded\",function(){t.style.overflow=\"hidden\",c.style.display=\"-webkit-box\",c.style.width=n.length+\"00%\",n.forEach(function(t){return t.style.width=\"100%\"}),r.bindTouchEvent(),r.setNavBar()}.bind(r),!1)),transform:function(t){this.style.webkitTransform=\"translate3d(\"+t+\"px,0,0)\",f=t},setNavBar:function(){null!==a&&\"\"!==s&&(-1!=o&&a[o].classList.remove(s),a[o=v-1].classList.add(s))},bindTouchEvent:function(){var s,o,i=t.offsetWidth,r=-i*(n.length-1),l=0,u=\"left\",d=!1,a=0,h=!0;t.addEventListener(\"touchstart\",function(t){if(1==t.touches.length||h){var e=t.touches[0];s=e.pageX,o=e.pageY,l=f,c.style.webkitTransition=\"\",a=(new Date).getTime(),h=d=!1}}.bind(this),!1),t.addEventListener(\"touchmove\",function(t){if(t.preventDefault(),!h){var e=t.touches[0],n=e.pageX-s,i=e.pageY-o;if(Math.abs(n)>Math.abs(i)){var a=l+n;a<=0&&r<=a&&(this.transform.call(c,a),d=!0),u=0<n?\"right\":\"left\"}}}.bind(this),!1),t.addEventListener(\"touchend\",function(t){var e=0,n=(new Date).getTime()-a;d&&!h&&(h=!0,c.style.webkitTransition=\"0.3s ease -webkit-transform\",e=n<300?(e=0<(e=\"left\"==u?Math.floor(f/i)*i:Math.ceil(f/i)*i)?0:e)<r?r:e:Math.round(f/i)*i,this.transform.call(c,e),v=Math.round(Math.abs(e)/i)+1,setTimeout(function(){this.setNavBar()}.bind(this),100))}.bind(this),!1)}}};\n\n//# sourceURL=webpack:///../dist/swipeview.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var swipeview = require(\"js-dom-ui-plugin/dist/swipeview\")\r\nvar swipeview = __webpack_require__(/*! ../dist/swipeview */ \"../dist/swipeview.js\")\r\n// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏\r\nswipeview(document.getElementById(\"swipe-view\"), {\r\n  activeClass: \"nav-active\",\r\n  navbar: document.getElementById(\"swipe-view-nav\")\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });