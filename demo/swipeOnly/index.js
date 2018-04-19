var swipe = require("../../dist/swipe-only")

swipe("groupId", {
    clickCb: function(data){
        console.log("click")
    }
})
