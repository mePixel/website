$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop()


  $('.parallax--bg1').css('background-position', 'center ' + (wScroll * 0.04) + 'px');

  $('.parallax--bg2').css('background-position', 'center ' + (wScroll * 0.03) + 'px');

  $('.parallax--bg3').css('background-position', 'center ' + (wScroll * 0.02) + 'px');

  $('.parallax--bg4').css('background-position', 'center ' + (wScroll * 0.01) + 'px');

  console.log(wScroll);


  $('.parallax--box').css('top', -5 + (wScroll * .005) + 'em')

}
