// var swipeview = require("js-dom-ui-plugin/dist/swipeview")
var swipeview = require("@tencent/js-dom-ui-plugin/dist/swipeview")
var fixable = require("@tencent/js-dom-ui-plugin/dist/fixable-top")
// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏
swipeview(document.getElementById("swipe-view"), {
  activeClass: "nav-active",
  navbar: document.getElementById("swipe-view-nav")
});

fixable("id",{
  toFixed: function(data){
    console.log("toFixed")
  },
  toNormal: function(data){
    console.log("toNormal")
  }
})
