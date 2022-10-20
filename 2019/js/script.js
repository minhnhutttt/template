$(function () {
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

$(document).ready(function () {

  $(".preview a").on("click", function () {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    var picture = $(this).data();

    event.preventDefault(); //prevents page from reloading every time you click a thumbnail

    $(".full img").fadeOut(100, function () {
      $(".full img").attr("src", picture.full);
      $(".full").attr("href", picture.full);
      $(".full").attr("title", picture.title);

    }).fadeIn();

  });// end on click

});//end doc ready


$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
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
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
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


  // ﾃｩ窶ｦﾂ催･ﾋ�汎�堋ｵﾄθ陳ｳﾄθ停汎θ陳ｫ
  //var $classArray = [$(".p-ani_"+1), $(".p-ani_2")];

  // ﾃｩ窶ｦﾂ催･ﾋ�� pushﾄ�堋ｵﾄθ陳ｳﾄθ停汎θ陳ｫ
  // for (var i = 1; i <= 6; i++) {
  //   $classArray.push($(".p-ani-fadeinup_" + i));
  //   $(".p-ani-fadeinup_" + i).css("visibility", "hidden");
  // }

  // ﾃｩ窶ｦﾂ催･ﾋ�杷orﾃｦ窶凪｡ﾄ�堋ｵﾄθ陳ｳﾄθ停汎θ陳ｫ
  /*for (var i in $hoge[index]) {}*/


  //classArrayﾄδ�ｫﾄ�堋ｯﾄθ陳ｩﾄ�堋ｹﾃ･ﾂ青催ｨﾂｿﾂｽﾃ･ﾂ� 
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



  //classArrayﾄδ�ｮﾃｩ窶ｦﾂ催･ﾋ�氾･ﾋ��ﾃ､ﾂｻﾂ｣ﾃ･窶ｦﾂ･
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
        // console.log(element);
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
