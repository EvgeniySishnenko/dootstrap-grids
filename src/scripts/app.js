var humberger = require('./common/humburger');
var blockRight = require('./common/block-right');
var tabs = require('./common/tabs');
var overlay = require('./common/overlay');
var slider = require('./common/slider');
if(document.querySelector('.block-menu__gamb')) {
    humberger();
}
if (document.querySelector('.block-left')) {
    blockRight();
}
if (document.querySelector('.tabs')) {
    tabs();
}
if (document.querySelector('.zoom-overlay')) {
    overlay();
}
if (document.querySelector('.slider-wrp')) {
    slider();
}