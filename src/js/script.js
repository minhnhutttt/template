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


  

$(function () {

  var $array_1 = [];
  var $array_2 = [];
  var $position = 1.3;
  var $classArray = [];

  $classArray.push($(".p-fadeinup"));
  $(".p-fadeinup").css("visibility", "hidden");

  $classArray.push($(".p-fadein"));
  $(".p-fadein").css("visibility", "hidden");

  $classArray.push($(".p-width"));
  $(".p-width").css("visibility", "hidden");

  $classArray.push($(".p-fadeinblur"));
  $(".p-fadeinblur").css("visibility", "hidden");

  $classArray.push($(".p-fadeinscale"));
  $(".p-fadeinscale").css("visibility", "hidden");

  $classArray.push($(".p-height"));
  $(".p-height").css("visibility", "hidden");

  $classArray.push($(".p-fadeinleft"));
  $(".p-fadeinleft").css("visibility", "hidden");


  for (var i in $classArray) {
    $.each($classArray[i], function (index, element) {
      $array_1.push(element);
    });
    $array_2.push($array_1);
    $array_1 = [];
  }


  //CSS Animation
  $(window).on("load scroll", function () {
    for (var i in $classArray) {

      $.each($classArray[i], function (index, element) {
        aniFunc($(this), index, i);
      });
    }
  });

  function aniFunc($target, junban, type) {
    var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop(),
      adjustHeight = (windowHeight / $position).toFixed(0),
      targetPosition;

    $target.each(function () {
      targetPosition = $target.offset().top;

      if (topWindow > targetPosition - adjustHeight) {
        if (type == 0) { $($array_2[type][junban]).addClass("p-ani-fadeInUp"); } else if (type == 1) { $($array_2[type][junban]).addClass("p-ani-fadeIn"); } else if (type == 2) { $($array_2[type][junban]).addClass("p-ani-width"); } else if (type == 3) { $($array_2[type][junban]).addClass("p-ani-fadeInBlur"); } else if (type == 4) { $($array_2[type][junban]).addClass("p-ani-fadeInScale"); } else if (type == 5) { $($array_2[type][junban]).addClass("p-ani-height"); } else if (type == 6) { $($array_2[type][junban]).addClass("p-ani-fadeInLeft"); }

      }
    });
  }
});

$(document).ready(function () {
  $(".toggle").on("click", function () {
    $(this).toggleClass("is-active");
    var menu = $(".c-header__menu");
    menu.slideToggle("is-active");
    $("body").toggleClass("is-active");
  });

  $(".at-drop-down").on("click", function (e) {
    if (Modernizr.mq("screen and (max-width:1024px)")) {
      e.preventDefault();
      $(this).next($(".menu-sub")).slideToggle();
    }
  });

  $(window).resize(function () {
    $(".menu-sub").attr("style", "");
  });

  $("#mvSlider").slick({
    infinite: true,
    fade: true,
    speed: 700,
    autoplay: false,
    dots: true,
    arrows: false,
  });
});
