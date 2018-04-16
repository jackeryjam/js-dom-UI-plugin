/**
 * 传入
 * @param {Object} swipeView dom对象
 * @param {Object} options
 * @param {Object} [options.navbar] 导航栏dom对象
 * @param {string} [options.activeClass] 导航栏活跃时候的css类名称
 */
module.exports = function (swipeView, options) {
    var viewport = swipeView.querySelector('[swipeView="body"]');
    var viewportItems = viewport.querySelectorAll('[swipeView="item"]')
    var navbar = options && options.navbar || null;
    var navItems = navbar == null ? null : navbar.querySelectorAll('[swipeView="nav-item"]')
    var activeClassName = options && options.activeClass || '';
    var currentPosition = 0; //记录当前页面位置
    var currentNav = -1;   //记录当导航栏的位置
    var pageNow = 1;   //当前页码

    var app = {
        init: function () {
            // 判断如果是移动端才加监听
            if (!/(windows)/i.test(navigator.userAgent)) {
                document.addEventListener('DOMContentLoaded', function () {
                    swipeView.style.overflow = "hidden"
                    viewport.style.display = "-webkit-box"
                    // 设置viewport的长度为下面items的倍数
                    viewport.style.width = viewportItems.length + "00%"
                    for(var i = 0; i < viewportItems.length; i++) {
                        viewportItems[i].style.width = "100%" 
                    }

                    app.bindTouchEvent(); //绑定触摸事件
                    app.setNavBar();     //设置导航item
                }.bind(app), false);
            }
        }(),


        //页面平移
        transform: function (translate) {
            this.style.webkitTransform = "translate3d(" + translate + "px,0,0)";
            currentPosition = translate;
        },

        /**
         * 设置导航栏
         */
        setNavBar: function () {
            // 没有导航栏就直接结束
            if (navItems === null || activeClassName === "") return
            if (currentNav != -1) {
                navItems[currentNav].classList.remove(activeClassName);
            }
            currentNav = pageNow - 1;
            navItems[currentNav].classList.add(activeClassName);
        },

        /**
         * 绑定触摸事件
         */
        bindTouchEvent: function () {
            var pageWidth = swipeView.offsetWidth; //页面宽度
            var maxWidth = - pageWidth * (viewportItems.length - 1); //页面滑动最后一页的位置
            var startX, startY;
            var initialPos = 0;  // 手指按下的屏幕位置
            var direction = "left"; //滑动的方向
            var isMove = false; //是否发生左右滑动
            var startT = 0; //记录手指按下去的时间
            var isTouchEnd = true; //标记当前滑动是否结束(手指已离开屏幕) 

            /*手指放在屏幕上*/
            swipeView.addEventListener("touchstart", function (e) {
                // e.preventDefault();
                //单手指触摸或者多手指同时触摸，禁止第二个手指延迟操作事件
                if (e.touches.length == 1 || isTouchEnd) {
                    var touch = e.touches[0];
                    startX = touch.pageX;
                    startY = touch.pageY;
                    initialPos = currentPosition;   //本次滑动前的初始位置
                    viewport.style.webkitTransition = ""; //取消动画效果
                    startT = new Date().getTime(); //记录手指按下的开始时间
                    isMove = false; //是否产生滑动
                    isTouchEnd = false; //当前滑动开始
                }
                return true
            }.bind(this), false);

            /*手指在屏幕上滑动，页面跟随手指移动*/
            swipeView.addEventListener("touchmove", function (e) {
                //e.preventDefault();

                //如果当前滑动已结束，不管其他手指是否在屏幕上都禁止该事件
                if (isTouchEnd) return;

                var touch = e.touches[0];
                var deltaX = touch.pageX - startX;
                var deltaY = touch.pageY - startY;
                //如果X方向上的位移大于Y方向，则认为是左右滑动
                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    var translate = initialPos + deltaX; //当前需要移动到的位置
                    //如果translate>0 或 < maxWidth,则表示页面超出边界
                    if (translate <= 0 && translate >= maxWidth) {
                        this.transform.call(viewport, translate);
                        isMove = true;
                    }
                    direction = deltaX > 0 ? "right" : "left"; //判断手指滑动的方向
                }
                return true

            }.bind(this), false);

            /*手指离开屏幕时，计算最终需要停留在哪一页*/
            swipeView.addEventListener("touchend", function (e) {
                // e.preventDefault();
                var translate = 0;
                //计算手指在屏幕上停留的时间
                var deltaT = new Date().getTime() - startT;
                //发生了滑动，并且当前滑动事件未结束
                if (isMove && !isTouchEnd) {
                    isTouchEnd = true; //标记当前完整的滑动事件已经结束 

                    //使用动画过渡让页面滑动到最终的位置
                    viewport.style.webkitTransition = "0.3s ease -webkit-transform";
                    if (deltaT < 300) { //如果停留时间小于300ms,则认为是快速滑动，无论滑动距离是多少，都停留到下一页
                        translate = direction == 'left' ?
                            Math.floor(currentPosition / pageWidth) * pageWidth
                            : Math.ceil(currentPosition / pageWidth) * pageWidth;
                        //如果最终位置超过边界位置，则停留在边界位置
                        translate = translate > 0 ? 0 : translate; //左边界
                        translate = translate < maxWidth ? maxWidth : translate; //右边界
                    } else {
                        //停留位置左右靠，小于一般向左边，大于向右边
                        translate = Math.round(currentPosition / pageWidth) * pageWidth;
                    }

                    //执行滑动，让页面完整的显示到屏幕上
                    this.transform.call(viewport, translate);
                    //计算当前的页码
                    pageNow = Math.round(Math.abs(translate) / pageWidth) + 1;

                    setTimeout(function () {
                        //设置导航栏，DOM操作需要放到异步队列中，否则会出现卡顿
                        this.setNavBar();
                    }.bind(this), 100);
                    return true
                }
            }.bind(this), false);
        }
    }
}
