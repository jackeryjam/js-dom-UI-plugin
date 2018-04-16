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

/***/ "../src/fixable-top.js":
/*!*****************************!*\
  !*** ../src/fixable-top.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getPos(obj) {\r\n    //定义两个变量，并且初始值为0\r\n    var l = 0;\r\n    var t = 0;\r\n    //在这里使用while循环,参数为obj\r\n    // 因为语句执行到最后，obj获取的是body和其父级的距离，而这个值因为body本身是最外层，所以值为0\r\n    // 而为0的时候条件为false，所以函数停止执行\r\n    while (obj) {\r\n        l += obj.offsetLeft;//获取物体离body左边的距离\r\n        t += obj.offsetTop;//获取物体离body顶部的距离\r\n        obj = obj.offsetParent;//最后变量成为其有定位的祖先元素\r\n    }\r\n    return { left: l, top: t };//设置函数返回值(注意是json格式）\r\n}\r\n\r\nfunction getPixal(str){\r\n    if(str.substr(str.length-2) == \"px\") {\r\n        return parseInt(str.substr(0, str.length - 2))\r\n    } else {\r\n        return 0\r\n    }\r\n}\r\n\r\nmodule.exports = function (id, option) {\r\n    var header = document.querySelector(\"[fixable-header='\" + id + \"']\")\r\n    if (header == null) header = document.querySelector(\"[data-fixable-header='\" + id + \"']\")\r\n    var body = document.querySelector(\"[fixable-body='\" + id + \"']\")\r\n    if (body == null) body = document.querySelector(\"[data-fixable-body='\" + id + \"']\")\r\n    var isFixed = false\r\n    var bodyPos = getPos(body).top\r\n    var headerHeight = header.offsetHeight\r\n    header.style.top = 0;\r\n    var toFixed = option && option.toFixed || function(){}\r\n    var toNormal = option && option.toNormal || function(){}\r\n    window.addEventListener(\"scroll\", function () {\r\n        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\r\n        var marginTop = 0;\r\n        if (!isFixed && scrollTop + headerHeight > bodyPos && scrollTop  < bodyPos + body.offsetHeight) {\r\n            body.style.marginTop = getPixal(body.style.marginTop) + headerHeight \r\n            header.style.position = \"fixed\";\r\n            isFixed = true\r\n            toFixed()\r\n        } else if (isFixed && (scrollTop + headerHeight < bodyPos || scrollTop  > bodyPos + body.offsetHeight) ) {\r\n            body.style.marginTop = getPixal(body.style.marginTop) - headerHeight \r\n            header.style.position = \"\";\r\n            isFixed = false\r\n            toNormal()\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///../src/fixable-top.js?");

/***/ }),

/***/ "./fixable-top/index.js":
/*!******************************!*\
  !*** ./fixable-top/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var swipeview = require(\"js-dom-ui-plugin/dist/swipeview\")\r\nvar swipeview = __webpack_require__(/*! @tencent/js-dom-ui-plugin/dist/swipeview */ \"./node_modules/@tencent/js-dom-ui-plugin/dist/swipeview.js\")\r\nvar fixable = __webpack_require__(/*! ../../src/fixable-top */ \"../src/fixable-top.js\")\r\n// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏\r\nswipeview(document.getElementById(\"swipe-view\"), {\r\n  activeClass: \"nav-active\",\r\n  navbar: document.getElementById(\"swipe-view-nav\")\r\n});\r\n\r\nfixable(\"id\",{\r\n  toFixed: function(data){\r\n    console.log(\"toFixed\")\r\n  },\r\n  toNormal: function(data){\r\n    console.log(\"toNormal\")\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack:///./fixable-top/index.js?");

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