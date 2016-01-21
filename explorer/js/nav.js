(function() {
  'use strict';
  
  $('#main-nav a').on('click', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#dropdown').slideUp(500);
    } else {
      var sectionToShow = $(this).data('related-panel');
      $('.active').removeClass('active');
      $(this).addClass('active');
      $('#dropdown').slideDown(400);
      $('.nav-panel').hide();
      $('#' + sectionToShow).fadeIn(400);
    }
  });
})();
