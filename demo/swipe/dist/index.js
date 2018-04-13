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
/******/ 	return __webpack_require__(__webpack_require__.s = "./swipe/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-dom-ui-plugin/dist/swipe.js":
/*!*****************************************************!*\
  !*** ./node_modules/js-dom-ui-plugin/dist/swipe.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("module.exports=function(t,e){var n=t.querySelector('[swipe=\"append\"]'),d=n&&n.offsetWidth||60,i=0,s={transform:function(t){t<-d||0<t||(this.style.webkitTransform=\"translate3d(\"+t+\"px,0,0)\",i=t)},bindTouchEvent:function(){var a,o,r=t,c=(window.innerWidth,-(t.offsetWidth+d)),f=0,h=!1,u=!0,n=!0;t.addEventListener(\"touchstart\",function(t){if(n=!0,setTimeout(function(){n=!1},300),1==t.touches.length||u){var e=t.touches[0];a=e.pageX,o=e.pageY,f=i,r.style.webkitTransition=\"\",(new Date).getTime(),u=h=!1}}.bind(this),!1),t.addEventListener(\"touchmove\",function(t){if(t.preventDefault(),!u){var e=t.touches[0],n=e.pageX-a,i=e.pageY-o;if(Math.abs(n)>Math.abs(i)){var s=f+(n<d?n:d);s<=0&&c<=s&&(this.transform.call(r,s),h=!0),0<n?\"right\":\"left\"}}}.bind(this),!1),t.addEventListener(\"touchend\",function(t){n&&e&&e.clickCb&&e.clickCb(this.dataset),h&&!u&&(u=!0,r.style.webkitTransition=\"0.3s ease -webkit-transform\",i=-d/2<i?0:-d,s.transform.call(r,i)),!0},!1)}};s.bindTouchEvent()};\n\n//# sourceURL=webpack:///./node_modules/js-dom-ui-plugin/dist/swipe.js?");

/***/ }),

/***/ "./swipe/index.js":
/*!************************!*\
  !*** ./swipe/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var swipe = __webpack_require__(/*! js-dom-ui-plugin/dist/swipe */ \"./node_modules/js-dom-ui-plugin/dist/swipe.js\")\r\n// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏\r\n\r\ndocument.querySelectorAll(\".item\").forEach(item => swipe(item, {\r\n  clickCb: data => console.log(data)\r\n}))\r\n\n\n//# sourceURL=webpack:///./swipe/index.js?");

/***/ })

/******/ });