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
/******/ 	return __webpack_require__(__webpack_require__.s = "./swipeOnly/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@tencent/js-dom-ui-plugin/dist/swipe-only.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@tencent/js-dom-ui-plugin/dist/swipe-only.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("module.exports=function(t,p){for(var e=document.querySelectorAll('[swipeOnly=\"'+t+'\"]'),v=null,n=function(i){var s,l,t=i.querySelector(\"[swipeAppend]\"),r=t&&t.offsetWidth||60,a=0,o=i,u=(window.innerWidth,-(i.offsetWidth+r)),c=0,f=!1,d=!0,h=!0,b=function(t){t<-r||0<t||(this.style.webkitTransform=\"translate3d(\"+t+\"px,0,0)\",a=t)};i.addEventListener(\"touchstart\",function(t){h=!0;var e=p&&p.time||300;if(setTimeout(function(){h=!1},e),null!=v&&v!=i&&b.call(v,0),v=i,1==t.touches.length||d){var n=t.touches[0];s=n.pageX,l=n.pageY,c=a,o.style.webkitTransition=\"\",(new Date).getTime(),d=f=!1}}.bind(this),!1),i.addEventListener(\"touchmove\",function(t){if(h=!1,t.preventDefault(),!d){var e=t.touches[0],n=e.pageX-s,i=e.pageY-l;if(Math.abs(n)>Math.abs(i)){var a=c+(n<r?n:r);a<=0&&u<=a&&(b.call(o,a),f=!0),0<n?\"right\":\"left\"}}}.bind(this),!1),i.addEventListener(\"touchend\",function(t){h&&p&&p.clickCb&&p.clickCb(i.dataset),f&&!d&&(d=!0,o.style.webkitTransition=\"0.3s ease -webkit-transform\",b.call(o,a=-r/2<a?0:-r))}.bind(this),!1)},i=0;i<e.length;i++)n(e[i]);return function(){null!=v&&(v.style.webkitTransform=\"translate3d(0,0,0)\",v=null)}};\n\n//# sourceURL=webpack:///./node_modules/@tencent/js-dom-ui-plugin/dist/swipe-only.js?");

/***/ }),

/***/ "./swipeOnly/index.js":
/*!****************************!*\
  !*** ./swipeOnly/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var swipe = __webpack_require__(/*! @tencent/js-dom-ui-plugin/dist/swipe-only */ \"./node_modules/@tencent/js-dom-ui-plugin/dist/swipe-only.js\")\r\n\r\n// var swipe = require(\"../../src/swipe-only\")\r\nswipe(\"groupId\", {\r\n    clickCb: function(data){\r\n        console.log(\"click\")\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack:///./swipeOnly/index.js?");

/***/ })

/******/ });