// import index from "../../index"
// import { swipeview } from "../../index"
var swipeview = require("js-dom-ui-plugin/dist/swipeview")
swipeview(document.getElementById("swipe-view"), {
  activeClass: "nav-active",
  navItems: document.querySelectorAll("div.nav-item"),
});
