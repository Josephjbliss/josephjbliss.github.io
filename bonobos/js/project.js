$(function() {
  'use strict';

  var wrapper = $('#wrapper');

  var vHeight;
  var vWidth;

  var setUp = function() {
    $('#wrapper img').remove();
    vHeight = $(window).height();
    vWidth = $(window).width();
    (vHeight > vWidth) ? wrapper.removeClass('wide').addClass('tall'): wrapper.removeClass('tall').addClass('wide');
    makeImage();
  };

  var makeURL = function(h, w) {
    return 'https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=' + h + '&w=' + w;
  }

  var makeImage = function() {
    $('<img/>').attr('src', makeURL(3 * vHeight, 3 * vWidth)).insertBefore('#wrapper nav');
  }

  var centerImage = function() {
    if ($('#wrapper img').hasClass('expanded')) {
      if (wrapper.hasClass('wide')) {
        wrapper.scrollTop(vHeight);
        wrapper.scrollLeft(($('#wrapper img').width() - wrapper.width()) / 2)
      } else {
        wrapper.scrollTop(($('#wrapper img').height() - wrapper.height()) / 2);
        wrapper.scrollLeft(vWidth);
      }
    }
  }

  $('#zoomin').on('click', function(evt) {
    evt.preventDefault();
    $('#wrapper img').addClass('expanded');
    centerImage();
  });

  $('#zoomout').on('click', function(evt) {
    evt.preventDefault();
    $('#wrapper img').removeClass('expanded');
  });

  var prevY;
  var prevX;

  wrapper.on('mousedown', function(evt) {
    evt.preventDefault();
    prevY = evt.clientY;
    prevX = evt.clientX;
    $(this).addClass('panning');
  }).on('mousemove', function(evt) {
    if ($(this).hasClass('panning')) {
      evt.preventDefault();
      wrapper.scrollTop((prevY - evt.clientY) + wrapper.scrollTop());
      wrapper.scrollLeft((prevX - evt.clientX) + wrapper.scrollLeft());
      prevY = evt.clientY;
      prevX = evt.clientX;
    }
  });

  $(document).on('mouseup', function() {
    wrapper.removeClass('panning');
  });

  $('#intro').on('click', function() {
    setUp();
    $(this).fadeOut(300);
    $('nav').fadeIn(300);
  });

  //'Debounce' resize event
  var resizeTimer;

  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      setUp();
    }, 100);
  });

});
