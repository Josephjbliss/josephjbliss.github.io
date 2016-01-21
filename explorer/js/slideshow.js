(function() {
  'use strict';

  $('#prev').prop('disabled', true);

  $.getJSON('slideshow.json', function(data) {
    $.each(data.slideshow, function(key, value){
      var newImage = $('<img/>').attr('src', value.image).attr('title', value.caption).attr('alt', value.caption);
      $('#caption').before(newImage);
    });
    $('#gallery img').first().addClass('current');
    $('#caption').text($('#gallery img').first().attr("title"));
  });

  var currentPosition = 0;

  $('#next').on('click', nextImage);
  $('#prev').on('click', previousImage);

  function nextImage(e){
    e.preventDefault();

    currentPosition += 1;
    $('#prev').prop('disabled', false);
    $('#gallery img.current').removeClass('current');
    $('#gallery img').eq(currentPosition).addClass('current');
    $('#caption').text($('#gallery img').eq(currentPosition).attr('title'));
    
    if (currentPosition === $('#gallery img').length - 1) {
      $('#next').prop('disabled', true);
    }
  }

  function previousImage(e){
    e.preventDefault();

    currentPosition -= 1;
    $('#next').prop('disabled', false);
    $('#gallery img.current').removeClass('current');
    $('#gallery img').eq(currentPosition).addClass('current');
    $('#caption').text($('#gallery img').eq(currentPosition).attr('title'));

    if (currentPosition === 0 ) {
      $('#prev').prop('disabled', true);
    }
  }
})();
