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

eval("function getPos(obj) {\r\n    //定义两个变量，并且初始值为0\r\n    var l = 0;\r\n    var t = 0;\r\n    //在这里使用while循环,参数为obj\r\n    // 因为语句执行到最后，obj获取的是body和其父级的距离，而这个值因为body本身是最外层，所以值为0\r\n    // 而为0的时候条件为false，所以函数停止执行\r\n    while (obj) {\r\n        l += obj.offsetLeft;//获取物体离body左边的距离\r\n        t += obj.offsetTop;//获取物体离body顶部的距离\r\n        obj = obj.offsetParent;//最后变量成为其有定位的祖先元素\r\n    }\r\n    return { left: l, top: t };//设置函数返回值(注意是json格式）\r\n}\r\n\r\nfunction getPixal(str){\r\n    if(str.substr(str.length-2) == \"px\") {\r\n        return parseInt(str.substr(0, str.length - 2))\r\n    } else {\r\n        return 0\r\n    }\r\n}\r\n\r\nmodule.exports = function (id, option) {\r\n    var header = document.querySelector(\"[fixable-header='\" + id + \"']\")\r\n    if (header == null) header = document.querySelector(\"[data-fixable-header='\" + id + \"']\")\r\n    var body = document.querySelector(\"[fixable-body='\" + id + \"']\")\r\n    if (body == null) body = document.querySelector(\"[data-fixable-body='\" + id + \"']\")\r\n    var isFixed = false\r\n    var bodyPos = getPos(body).top\r\n    var headerHeight = header.offsetHeight\r\n    header.style.top = 0;\r\n    var toFixed = option && option.toFixed || function(){}\r\n    var toNormal = option && option.toNormal || function(){}\r\n    window.addEventListener(\"touchstart\", function(){\r\n        bodyPos = getPos(body).top\r\n    })\r\n    window.addEventListener(\"scroll\", function () {\r\n        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\r\n        var marginTop = 0;\r\n        if (!isFixed && scrollTop + headerHeight > bodyPos && scrollTop  < bodyPos + body.offsetHeight) {\r\n            body.style.marginTop = getPixal(body.style.marginTop) + headerHeight \r\n            header.style.position = \"fixed\";\r\n            isFixed = true\r\n            toFixed()\r\n        } else if (isFixed && (scrollTop + headerHeight < bodyPos || scrollTop  > bodyPos + body.offsetHeight) ) {\r\n            body.style.marginTop = getPixal(body.style.marginTop) - headerHeight \r\n            header.style.position = \"\";\r\n            isFixed = false\r\n            toNormal()\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///../src/fixable-top.js?");

/***/ }),

/***/ "../src/swipeview.js":
/*!***************************!*\
  !*** ../src/swipeview.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 传入\r\n * @param {Object} swipeView dom对象\r\n * @param {Object} options\r\n * @param {Object} [options.navbar] 导航栏dom对象\r\n * @param {string} [options.activeClass] 导航栏活跃时候的css类名称\r\n */\r\nmodule.exports = function (swipeView, options) {\r\n    var viewport = swipeView.querySelector('[swipeView=\"body\"]');\r\n    var viewportItems = viewport.querySelectorAll('[swipeView=\"item\"]')\r\n    var navbar = options && options.navbar || null;\r\n    var navItems = navbar == null ? null : navbar.querySelectorAll('[swipeView=\"nav-item\"]')\r\n    var activeClassName = options && options.activeClass || '';\r\n    var currentPosition = 0; //记录当前页面位置\r\n    var currentNav = -1;   //记录当导航栏的位置\r\n    var pageNow = 1;   //当前页码\r\n\r\n    var app = {\r\n        init: function () {\r\n            // 判断如果是移动端才加监听\r\n            if (!/(windows)/i.test(navigator.userAgent)) {\r\n                document.addEventListener('DOMContentLoaded', function () {\r\n                    swipeView.style.overflow = \"hidden\"\r\n                    viewport.style.display = \"flex\"\r\n                    // 设置viewport的长度为下面items的倍数\r\n                    viewport.style.width = viewportItems.length + \"00%\"\r\n                    for(var i = 0; i < viewportItems.length; i++) {\r\n                        viewportItems[i].style.flex = \"1\" \r\n                    }\r\n                    app.setHeight()\r\n                    app.bindTouchEvent(); //绑定触摸事件\r\n                    app.setNavBar();     //设置导航item\r\n                }.bind(app), false);\r\n            }\r\n        }(),\r\n\r\n\r\n        //页面平移\r\n        transform: function (translate) {\r\n            this.style.webkitTransform = \"translate3d(\" + translate + \"px,0,0)\";\r\n            currentPosition = translate;\r\n        },\r\n\r\n        /**\r\n         * 设置导航栏\r\n         */\r\n        setNavBar: function () {\r\n            // 没有导航栏就直接结束\r\n            if (navItems === null || activeClassName === \"\") return\r\n            if (currentNav != -1) {\r\n                navItems[currentNav].classList.remove(activeClassName);\r\n            }\r\n            currentNav = pageNow - 1;\r\n            navItems[currentNav].classList.add(activeClassName);\r\n        },\r\n\r\n        /**\r\n         * 设置高度\r\n         */\r\n        setHeight: function () {\r\n            // 没有导航栏就直接结束\r\n            currentNav = pageNow - 1;\r\n            var height = viewportItems[currentNav].offsetHeight\r\n            swipeView.style.height = height\r\n        },\r\n\r\n        /**\r\n         * 绑定触摸事件\r\n         */\r\n        bindTouchEvent: function () {\r\n            var pageWidth = swipeView.offsetWidth; //页面宽度\r\n            var maxWidth = - pageWidth * (viewportItems.length - 1); //页面滑动最后一页的位置\r\n            var startX, startY;\r\n            var initialPos = 0;  // 手指按下的屏幕位置\r\n            var direction = \"left\"; //滑动的方向\r\n            var isMove = false; //是否发生左右滑动\r\n            var startT = 0; //记录手指按下去的时间\r\n            var isTouchEnd = true; //标记当前滑动是否结束(手指已离开屏幕) \r\n\r\n            /*手指放在屏幕上*/\r\n            swipeView.addEventListener(\"touchstart\", function (e) {\r\n                // e.preventDefault();\r\n                //单手指触摸或者多手指同时触摸，禁止第二个手指延迟操作事件\r\n                if (e.touches.length == 1 || isTouchEnd) {\r\n                    var touch = e.touches[0];\r\n                    startX = touch.pageX;\r\n                    startY = touch.pageY;\r\n                    initialPos = currentPosition;   //本次滑动前的初始位置\r\n                    viewport.style.webkitTransition = \"\"; //取消动画效果\r\n                    startT = new Date().getTime(); //记录手指按下的开始时间\r\n                    isMove = false; //是否产生滑动\r\n                    isTouchEnd = false; //当前滑动开始\r\n                }\r\n                return true\r\n            }.bind(this), false);\r\n\r\n            /*手指在屏幕上滑动，页面跟随手指移动*/\r\n            swipeView.addEventListener(\"touchmove\", function (e) {\r\n                //e.preventDefault();\r\n\r\n                //如果当前滑动已结束，不管其他手指是否在屏幕上都禁止该事件\r\n                if (isTouchEnd) return;\r\n\r\n                var touch = e.touches[0];\r\n                var deltaX = touch.pageX - startX;\r\n                var deltaY = touch.pageY - startY;\r\n                //如果X方向上的位移大于Y方向，则认为是左右滑动\r\n                if (Math.abs(deltaX) > Math.abs(deltaY)) {\r\n                    var translate = initialPos + deltaX; //当前需要移动到的位置\r\n                    //如果translate>0 或 < maxWidth,则表示页面超出边界\r\n                    if (translate <= 0 && translate >= maxWidth) {\r\n                        this.transform.call(viewport, translate);\r\n                        isMove = true;\r\n                    }\r\n                    direction = deltaX > 0 ? \"right\" : \"left\"; //判断手指滑动的方向\r\n                }\r\n                return true\r\n\r\n            }.bind(this), false);\r\n\r\n            /*手指离开屏幕时，计算最终需要停留在哪一页*/\r\n            swipeView.addEventListener(\"touchend\", function (e) {\r\n                // e.preventDefault();\r\n                var translate = 0;\r\n                //计算手指在屏幕上停留的时间\r\n                var deltaT = new Date().getTime() - startT;\r\n                //发生了滑动，并且当前滑动事件未结束\r\n                if (isMove && !isTouchEnd) {\r\n                    isTouchEnd = true; //标记当前完整的滑动事件已经结束 \r\n\r\n                    //使用动画过渡让页面滑动到最终的位置\r\n                    viewport.style.webkitTransition = \"0.3s ease -webkit-transform\";\r\n                    if (deltaT < 300) { //如果停留时间小于300ms,则认为是快速滑动，无论滑动距离是多少，都停留到下一页\r\n                        translate = direction == 'left' ?\r\n                            Math.floor(currentPosition / pageWidth) * pageWidth\r\n                            : Math.ceil(currentPosition / pageWidth) * pageWidth;\r\n                        //如果最终位置超过边界位置，则停留在边界位置\r\n                        translate = translate > 0 ? 0 : translate; //左边界\r\n                        translate = translate < maxWidth ? maxWidth : translate; //右边界\r\n                    } else {\r\n                        //停留位置左右靠，小于一般向左边，大于向右边\r\n                        translate = Math.round(currentPosition / pageWidth) * pageWidth;\r\n                    }\r\n\r\n                    //执行滑动，让页面完整的显示到屏幕上\r\n                    this.transform.call(viewport, translate);\r\n                    //计算当前的页码\r\n                    pageNow = Math.round(Math.abs(translate) / pageWidth) + 1;\r\n\r\n                    setTimeout(function () {\r\n                        //设置导航栏，DOM操作需要放到异步队列中，否则会出现卡顿\r\n                        this.setNavBar();\r\n                        this.setHeight()\r\n                    }.bind(this), 100);\r\n                    return true\r\n                }\r\n            }.bind(this), false);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///../src/swipeview.js?");

/***/ }),

/***/ "./fixable-top/index.js":
/*!******************************!*\
  !*** ./fixable-top/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var swipeview = require(\"js-dom-ui-plugin/dist/swipeview\")\r\nvar swipeview = __webpack_require__(/*! ../../src/swipeview */ \"../src/swipeview.js\")\r\nvar fixable = __webpack_require__(/*! ../../src/fixable-top */ \"../src/fixable-top.js\")\r\n// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏\r\nswipeview(document.getElementById(\"swipe-view\"), {\r\n  activeClass: \"nav-active\",\r\n  navbar: document.getElementById(\"swipe-view-nav\")\r\n});\r\n\r\nfixable(\"id\")\r\n\n\n//# sourceURL=webpack:///./fixable-top/index.js?");

/***/ })

/******/ });