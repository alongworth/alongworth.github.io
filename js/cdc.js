$(document).ready(function () {

var menu = $('#stacked-nav');
var origOffsetY = menu.offset().top;

function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
        $('#stacked-nav').addClass('sticky');
    } else {
        $('#stacked-nav').removeClass('sticky');
    }


   }

  document.onscroll = scroll;

});