$(function() {
  'use strict';
  
  $('#mobile').on('click', function() {
    $('nav').toggleClass('open');
    $(this).toggleClass('fa-bars fa-close');
  });
});
