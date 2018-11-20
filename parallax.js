$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop()


  $('.parallax--bg1').css('background-position', 'center ' + (wScroll * 0.5) + 'px');

  $('.parallax--bg2').css('background-position', 'center ' + (wScroll * 0.4) + 'px');

  $('.parallax--bg3').css('background-position', 'center ' + (wScroll * 0.3) + 'px');

  $('.parallax--bg4').css('background-position', 'center ' + (wScroll * 0.2) + 'px');

  console.log(wScroll);


  $('.parallax--box').css('top', -5 + (wScroll * .005) + 'em')

}
