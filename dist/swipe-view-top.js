"use strict";var swipeview=require("./swipeview"),fixable=require("./fixable-top");module.exports=function(e){var a=e||{};a.id=a.id||"",a.activeClass=a.activeClass||"",a.headerTag=a.headerTag||"swipe-header",a.bodyTag=a.bodyTag||"swipe-body",swipeview({activeClass:a.activeClass,id:a.id,touchendCb:fixable({headerTag:a.headerTag,bodyTag:a.bodyTag,id:a.id})})};