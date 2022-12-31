var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn(1200);
  } else {
    $backToTop.fadeOut(1200);
  }
});

$backToTop.on('click', function(e) {
  $("html,body").animate({scrollTop: 0}, 500);
});






