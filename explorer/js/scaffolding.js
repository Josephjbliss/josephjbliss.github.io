(function() {

  'use strict';

  $(window).on('scroll', function() {
    var $socialLinkTab = $('.social-link-tab');
    var articleListOffset = $('#article-list').offset().top;
    var scrollTop = $(this).scrollTop();

    if( scrollTop > articleListOffset ) {
      $socialLinkTab.addClass('scrolled');
    } else {
      $socialLinkTab.removeClass('scrolled');
    }
  });

})();
