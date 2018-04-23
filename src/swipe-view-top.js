const swipeview = require("./swipeview")
const fixable = require("./fixable-top")

module.exports = function (options) {
    let opt = options || {}
    opt.id = opt.id || ''
    opt.activeClass = opt.activeClass || ''
    opt.headerTag = opt.headerTag || 'swipe-header'
    opt.bodyTag = opt.bodyTag || 'swipe-body'
    swipeview({
        activeClass: opt.activeClass,
        id: opt.id,
        touchendCb: fixable({
            headerTag: opt.headerTag,
            bodyTag: opt.bodyTag,
            id: opt.id
        })
    });
}