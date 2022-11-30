$(function() {
  var topBtn = $('#pageTop');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
    topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
    });
});


$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });


$(document).ready(function () {
  var hamburger = $(".menu-toggle");
  var menu = $(".c-menu");
  var toggle = $(".hamburger-lines");
  hamburger.click(function () {
    menu.fadeToggle();
    toggle.toggleClass('is-active');
  })
})