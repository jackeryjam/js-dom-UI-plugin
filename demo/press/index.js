var press = require("js-dom-ui-plugin/dist/press")

// swipeview有两个参数，一个是要滑动的部分的dom节点，这部分必须保证 后面可选部分是导航栏
press(document.getElementById("pressbox"), function(data){
  console.log("长按触发的函数")
  console.log(data)
}, {
  time: 500 //超过多少毫秒才认为是长按，默认是800ms，少于该值认为是点击，触发第一个函数
});
