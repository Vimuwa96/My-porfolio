$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $(".navbar-brand").addClass("navbar-brands");
      } else {
        $(".navbar-brand").removeClass("navbar-brands");
      }
    });
  });