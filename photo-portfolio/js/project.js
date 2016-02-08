$(document).ready(function(){
  // var navFadeOut = function(){ 
  //   $("header nav, header h1").stop().animate({opacity: 0}, 400);
  // };

  // var navFadeIn = function() {
  //   $("header nav, header h1").stop().animate({opacity: 1}, 400); 
  //   setTimeout(navFadeOut, 5000);
  // }

  // setTimeout(navFadeOut, 5000);

  // $(window).on("scroll", navFadeIn);
  // $(document).on("mousemove", navFadeIn);

  $("#mobile").click(function(){
    $("nav").toggleClass("open");
    $(this).toggleClass("fa-bars fa-close");
  });
});


