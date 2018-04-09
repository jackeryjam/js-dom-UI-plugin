var swipe = require("@tencent/js-dom-ui-plugin/dist/swipe-only")

// var swipe = require("../../src/swipe-only")
swipe("groupId", {
    clickCb: function(data){
        console.log("click")
    }
})
