module.exports = function (dom, option) {
    var opt = {}
    var append = dom.querySelector('[swipe="append"]')
    var appendWidth = append && append.offsetWidth || 60
    var currentPosition = 0; //记录当前页面位置

    var app = {
        //页面平移
        transform: function (translate) {
            if (translate < - appendWidth || translate > 0) return
            this.style.webkitTransform = "translate3d(" + translate + "px,0,0)";
            currentPosition = translate;
        },

        /**
         * 绑定触摸事件
         */
        bindTouchEvent: function () {
            var viewport = dom;
            var pageWidth = window.innerWidth; //页面宽度
            var maxWidth = - (dom.offsetWidth + appendWidth);
            var startX, startY;
            var initialPos = 0;  // 手指按下的屏幕位置
            var moveLength = 0;  // 手指当前滑动的距离
            var direction = "left"; //滑动的方向
            var isMove = false; //是否发生左右滑动
            var startT = 0; //记录手指按下去的时间
            var isTouchEnd = true; //标记当前滑动是否结束(手指已离开屏幕) 
            var first = true
            var click = true

            dom.addEventListener("touchstart", function (e) {
                click = true
                setTimeout(function () {
                    click = false
                }, 300)

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
            }.bind(this), false)

            /*手指在屏幕上滑动，页面跟随手指移动*/
            dom.addEventListener("touchmove", function (e) {
                e.preventDefault();
                //如果当前滑动已结束，不管其他手指是否在屏幕上都禁止该事件
                if (isTouchEnd) return;
                var touch = e.touches[0];
                var deltaX = touch.pageX - startX;
                var deltaY = touch.pageY - startY;
                //如果X方向上的位移大于Y方向，则认为是左右滑动
                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    moveLength = deltaX < appendWidth ? deltaX : appendWidth;
                    var translate = initialPos + moveLength; //当前需要移动到的位置
                    //如果translate>0 或 < maxWidth,则表示页面超出边界
                    if (translate <= 0 && translate >= maxWidth) {
                        this.transform.call(viewport, translate);
                        isMove = true;
                    }
                    direction = deltaX > 0 ? "right" : "left"; //判断手指滑动的方向
                }
            }.bind(this), false);

            dom.addEventListener("touchend", function (e) {
                if (click && option && option.clickCb) option.clickCb(this.dataset)
                //发生了滑动，并且当前滑动事件未结束
                if (isMove && !isTouchEnd) {
                    isTouchEnd = true;
                    viewport.style.webkitTransition = "0.3s ease -webkit-transform";
                    currentPosition = currentPosition > - appendWidth / 2 ? 0 : - appendWidth;
                    app.transform.call(viewport, currentPosition);
                }
                first = true
            }, false);
        }
    }
    app.bindTouchEvent(); //绑定触摸事件
}
