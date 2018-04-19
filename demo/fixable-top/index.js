// var swipeview = require("@tencent/js-dom-ui-plugin/dist/swipeview")
// var fixable = require("@tencent/js-dom-ui-plugin/dist/fixable-top")
var swipeview = require("../../src/swipeview")
var fixable = require("../../src/fixable-top")
// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏
swipeview({
  activeClass: "nav-active",
  touchendCb: fixable({
    headerTag: 'swipe-header',
    bodyTag: 'swipe-body'
  })
});

