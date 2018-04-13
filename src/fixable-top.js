function getPos(obj) {
    //定义两个变量，并且初始值为0
    var l = 0;
    var t = 0;
    //在这里使用while循环,参数为obj
    // 因为语句执行到最后，obj获取的是body和其父级的距离，而这个值因为body本身是最外层，所以值为0
    // 而为0的时候条件为false，所以函数停止执行
    while (obj) {
        l += obj.offsetLeft;//获取物体离body左边的距离
        t += obj.offsetTop;//获取物体离body顶部的距离
        obj = obj.offsetParent;//最后变量成为其有定位的祖先元素
    }
    return { left: l, top: t };//设置函数返回值(注意是json格式）
}

module.exports = function (id, option) {
    var header = document.querySelector("[fixable-header='" + id + "']")
    if (header == null) header = document.querySelector("[data-fixable-header='" + id + "']")
    var body = document.querySelector("[fixable-body='" + id + "']")
    if (body == null) body = document.querySelector("[data-fixable-body='" + id + "']")
    var isFixed = false
    var bodyPos = getPos(body).top
    var headerHeight = header.offsetHeight
    header.style.top = 0;
    window.addEventListener("scroll", function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var marginTop = 0;
        if (!isFixed && scrollTop + headerHeight > bodyPos && scrollTop  < bodyPos + body.offsetHeight + headerHeight) {
            header.style.position = "fixed";
            isFixed = true
        } else if (isFixed && (scrollTop + headerHeight < bodyPos || scrollTop  > bodyPos + body.offsetHeight + headerHeight) ) {
            header.style.position = "";
            isFixed = false
        }
    });
}
