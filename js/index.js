// By Boost New Media https://codepen.io/boostnewmedia/pen/wuFyC?q=click%20scroll&order=popularity&depth=everything&show_forks=false


var offset = 188;

function navScroll(href, offset) {
  $('body,html').animate({scrollTop: $(href).offset().top-offset}, "slow");
}

$("a").click(function () {
  
  navScroll($(this).attr("href"), offset);
});