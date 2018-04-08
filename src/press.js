module.exports = function (dom, pressCb, option) {
    var opt = {}
    opt.time = option && option.time || 600;
    opt.preventBubble = option && option.preventBubble || false;
    opt.useCapture = option && option.useCapture || true;
    var clickCb = option && option.clickCb || function(){}
    var timeOutEvent=0;//定时器   
    var click = true

    
    dom.addEventListener('contextmenu', function(e){
        e.preventDefault();
    });

    dom.addEventListener("touchstart", function (e) {
        var task = pressCb || function(){}
        var data = this.dataset
        click = true
        timeOutEvent = setTimeout(function(){ 
            click = false
            task(data)
        }, opt.time);
        return opt.preventBubble
    });

    dom.addEventListener("touchmove", function (e) {  
        clearTimeout(timeOutEvent);//清除定时器   
        timeOutEvent = 0;   
        return opt.preventBubble
    }, opt.useCapture);

    dom.addEventListener("touchend", function (e) {
        if(click) clickCb(this.dataset)
        clearTimeout(timeOutEvent);//清除定时器
        return opt.preventBubble;  
    }, opt.useCapture);
}
