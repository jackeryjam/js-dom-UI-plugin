var swipeview = require("js-dom-ui-plugin/dist/swipeview")
// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏
swipeview(document.getElementById("swipe-view"), {
  activeClass: "nav-active",
  navbar: document.getElementById("swipe-view-nav")
});