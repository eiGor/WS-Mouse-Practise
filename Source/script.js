"use strict";

var result = 0;

function moveRect() {
    var rect = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
    }
    console.log(rect.x + " + " + rect.y);

    var rect_ = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
    }

    var DOMrect_ = $("#rect_");
    DOMrect_.css("margin-left", rect_.x);
    DOMrect_.css("margin-top", rect_.y);

    var a_ = Math.random() * 40 + 40;
    DOMrect_.css("height", a_);
    DOMrect_.css("width", a_);

    var r_ = Math.round(Math.random() * 128);
    var g_ = Math.round(Math.random() * 4);
    var b_ = Math.round(Math.random() * 128);

    DOMrect_.css("background-color", "rgb(" + r_ + ", " + g_ + ", " + b_ + ")");

    var DOMrect = $("#rect");
    DOMrect.css("margin-left", rect.x);
    DOMrect.css("margin-top", rect.y);

    var a = Math.random() * 40 + 40;
    DOMrect.css("height", a);
    DOMrect.css("width", a);

    var r = Math.round(Math.random() * 128);
    var g = Math.round(Math.random() * 128);
    var b = Math.round(Math.random() * 4);

    DOMrect.css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
}

$("#rect, #rect_").mouseover(function () {
    moveRect();
    result++;
});

setInterval(function () {
    alert("Your result is " + result + " points");
    result = 0;
}, 15000);