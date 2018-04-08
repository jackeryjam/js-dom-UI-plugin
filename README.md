# 采用原生js实现的简洁版UI插件

用前先npm install js-dom-ui-plugin --save先
目前有prees，swipe，swipeview三部分

* press是进行长按监听的
* swipe是进行左拉监听，ios左拉出现删除键的效果
* swipeview是左右滑动切换屏幕的效果
  * [效果预览](https://jackeryjam.github.io/js-dom-UI-plugin/index.html)
  * 这部分是参考[H5单页面手势滑屏切换原理](https://www.cnblogs.com/onepixel/p/5300445.html)这篇文章的介绍以及代码完成的，想知道写法可以点进去了解
  * 使用用法可以看demo里面如何引用
  ```js
  // 只require其中一部份能使代码体积变小，这部分仅需不到2K
  var swipeview = require("js-dom-ui-plugin/dist/swipeview")
  // swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏
  swipeview(document.getElementById("swipe-view"), {
    activeClass: "nav-active",
    navItems: document.querySelectorAll("div.nav-item"),
  });
  ```
