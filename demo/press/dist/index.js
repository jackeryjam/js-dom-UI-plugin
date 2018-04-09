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
/******/ 	return __webpack_require__(__webpack_require__.s = "./press/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-dom-ui-plugin/dist/press.js":
/*!*****************************************************!*\
  !*** ./node_modules/js-dom-ui-plugin/dist/press.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("module.exports=function(t,i,e){var u={};u.time=e&&e.time||800;var n=e&&e.clickCb||function(){},o=0,c=!0;t.addEventListener(\"touchstart\",function(t){var e=i||function(){},n=this.dataset;return c=!0,o=setTimeout(function(){c=!1,e(n)},u.time),!0}),t.addEventListener(\"touchmove\",function(t){clearTimeout(o),o=0}),t.addEventListener(\"touchend\",function(t){return c&&n(this.dataset),clearTimeout(o),!1})};\n\n//# sourceURL=webpack:///./node_modules/js-dom-ui-plugin/dist/press.js?");

/***/ }),

/***/ "./press/index.js":
/*!************************!*\
  !*** ./press/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var press = __webpack_require__(/*! js-dom-ui-plugin/dist/press */ \"./node_modules/js-dom-ui-plugin/dist/press.js\")\r\n\r\n// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏\r\npress(document.getElementById(\"pressbox\"), function(data){\r\n  console.log(\"长按触发的函数\")\r\n  console.log(data)\r\n}, {\r\n  time: 500 //超过多少毫秒才认为是长按，默认是800ms，少于该值认为是点击，触发第一个函数\r\n});\r\n\n\n//# sourceURL=webpack:///./press/index.js?");

/***/ })

/******/ });