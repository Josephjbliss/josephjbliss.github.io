$(document).ready(function() {
  $("#mobile").click(function() {
    $("nav").toggleClass("open");
    $(this).toggleClass("fa-bars fa-close");
  });
});
