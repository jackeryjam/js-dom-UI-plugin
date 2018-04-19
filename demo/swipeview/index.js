// var swipeview = require("js-dom-ui-plugin/dist/swipeview")
var swipeview = require("../../src/swipeview")
// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏
swipeview({
  activeClass: "nav-active",
});
