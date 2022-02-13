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

  $(".toggle").on("click", function () {
    $(this).toggleClass("is-active");
    var menu = $(".c-header__menu");
    menu.slideToggle("is-active");
    $("body").toggleClass("is-active");
  });

  $(".at-drop-down").on("click", function (e) {
    if (Modernizr.mq("screen and (max-width:1500px)")) {
      e.preventDefault();
      $(this).next($(".menu-sub")).slideToggle();
    }
  });

  $(window).resize(function () {
    $(".menu-sub").attr("style", "");
  });