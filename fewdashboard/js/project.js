$(function() {
  'use strict';

  $('.accordion-heading').on('click', function(){
    $(this).next().slideToggle(500);
    $(this).find('.fa').toggleClass('fa-plus').toggleClass('fa-minus');
  });

});
