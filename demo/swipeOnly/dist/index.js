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

/***/ "./node_modules/js-dom-ui-plugin/dist/swipe-only.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-dom-ui-plugin/dist/swipe-only.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("module.exports=function(t,e){var n=document.querySelectorAll('[swipeOnly=\"'+t+'\"]');console.log(n);var b=null;n.forEach(function(t){return function(n){var s,o,t=n.querySelector(\"[swipeAppend]\"),r=t&&t.offsetWidth||60,i=0,c=n,l=(window.innerWidth,-(n.offsetWidth+r)),u=0,d=!1,f=!0,a=!0,h=function(t){t<-r||0<t||(this.style.webkitTransform=\"translate3d(\"+t+\"px,0,0)\",i=t)};n.addEventListener(\"touchstart\",function(t){if(a=!0,setTimeout(function(){a=!1},300),null!=b&&b!=n&&h.call(b,0),b=n,1==t.touches.length||f){var e=t.touches[0];s=e.pageX,o=e.pageY,u=i,c.style.webkitTransition=\"\",(new Date).getTime(),f=d=!1}}.bind(this),!1),n.addEventListener(\"touchmove\",function(t){if(t.preventDefault(),!f){var e=t.touches[0],n=e.pageX-s,i=e.pageY-o;if(Math.abs(n)>Math.abs(i)){var a=u+(n<r?n:r);a<=0&&l<=a&&(h.call(c,a),d=!0)}}}.bind(this),!1),n.addEventListener(\"touchend\",function(t){a&&e&&e.clickCb&&e.clickCb(n.dataset),d&&!f&&(f=!0,c.style.webkitTransition=\"0.3s ease -webkit-transform\",h.call(c,i=-r/2<i?0:-r))}.bind(this),!1)}(t)})};\n\n//# sourceURL=webpack:///./node_modules/js-dom-ui-plugin/dist/swipe-only.js?");

/***/ }),

/***/ "./swipeOnly/index.js":
/*!****************************!*\
  !*** ./swipeOnly/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var swipe = __webpack_require__(/*! js-dom-ui-plugin/dist/swipe-only */ \"./node_modules/js-dom-ui-plugin/dist/swipe-only.js\")\r\n\r\n// var swipe = require(\"../../src/swipe-only\")\r\nswipe(\"groupId\", {\r\n    clickCb: function(data){\r\n        console.log(\"click\")\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack:///./swipeOnly/index.js?");

/***/ })

/******/ });