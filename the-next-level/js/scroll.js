$(function() {
  'use strict';

  var offset1 = $("#slide1").offset().top;
  var offset2 = $("#slide2").offset().top;
  var offset3 = $("#slide3").offset().top;
  var offset4 = $("#slide4").offset().top;

  $('aside a').on('click', function(e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    // Why do I have to add 1 to this. .5 px animation??
    $('html, body').stop().animate({ scrollTop: target.offset().top + 1 }, 500);
  });

  var checkDots = function() {
    if ($(window).scrollTop() < offset2) {
      selectDot(0);
    } else if ($(window).scrollTop() < offset3) {
      selectDot(1);
    } else if ($(window).scrollTop() < offset4) {
      selectDot(2);
    } else if ($(window).scrollTop() >= offset4) {
      selectDot(3);
    }
  };

  var selectDot = function(e) {
    $('aside a.fa-circle').removeClass('fa-circle').addClass('fa-circle-o');
    $('aside a').eq(e).removeClass('fa-circle-o').addClass('fa-circle');
  }

  var resetOffsets = function() {
    offset1 = $("#slide1").offset().top;
    offset2 = $("#slide2").offset().top;
    offset3 = $("#slide3").offset().top;
    offset4 = $("#slide4").offset().top;
  };

  var resizeTimer;

  $(window).on('resize', function(e) {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

      // Run code here, resizing has "stopped"
      resetOffsets();
      checkDots();
      console.log("resize happens");

    }, 250);
  });

  $(window).scroll(function() {
    checkDots();
  });
});
