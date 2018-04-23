# 采用原生js实现的简洁版UI插件

用前先npm install js-dom-ui-plugin --save先
目前有prees，swipe，swipeview三部分

* press是进行长按监听的
* swipe是进行左拉监听，ios左拉出现删除键的效果
* swipeview是左右滑动切换屏幕的效果
  * [效果预览](https://jackeryjam.github.io/js-dom-UI-plugin/index.html)
  * 这部分是参考[H5单页面手势滑屏切换原理](https://www.cnblogs.com/onepixel/p/5300445.html)这篇文章的介绍以及代码完成的，想知道写法可以点进去了解
  * 使用用法可以看demo里面如何引用
  例如  [swipe-view-top](https://jackeryjam.github.io/js-dom-UI-plugin/demo/swipe-view-top/index.html)
  ```html
  <div class="navbar" style="z-index: 100" swipe-header>
    <div swipe-nav class="nav-item nav-active">专辑</div>
    <div swipe-nav class="nav-item">节目</div>
    <div swipe-nav class="nav-item">列表</div>
  </div>
  <div id="swipe-view" swipe-body>
    <!-- 这个div一定要的，不加这句话的样式就所有的等高 -->
    <div style="align-items: flex-start;">
      <div class="pageview" swipe-item style="background: #3b76c0">
      </div>
      <div swipe-item class="pageview" style="background: #58c03b;">
      </div>
      <div swipe-item class="pageview" style="background: #c03b25;">
      </div>
    </div>
  </div>
  ```
  ```js
  const swipeViewTop = require("js-dom-ui-plugin/dist/swipe-view-top")
  swipeViewTop({
    activeClass: "nav-active"
  });
  ```
