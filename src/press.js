module.exports = function (dom, pressCb, option) {
    var opt = {}
    opt.time = option && option.time || 800;
    var clickCb = option && option.clickCb || function(){}
    var timeOutEvent=0;//定时器   
    var click = true

    dom.addEventListener("touchstart", function (e) {
        var task = pressCb || function(){}
        var data = this.dataset
        click = true
        timeOutEvent = setTimeout(function(){ 
            click = false
            task(data)
        }, opt.time);
        return true
    });

    dom.addEventListener("touchmove", function (e) {  
        clearTimeout(timeOutEvent);//清除定时器   
        timeOutEvent = 0;   
    });

    dom.addEventListener("touchend", function (e) {
        if(click) clickCb(this.dataset)
        clearTimeout(timeOutEvent);//清除定时器
        return false;  
    });
}
