(function() {
  'use strict';

  $('#load-more').on('click', function(evt) {

    evt.preventDefault();

    // if($('#article-list article').length < 12) {
      
      $(this).prop('disabled', true).html('exploring the archive').append($('<i/>').addClass('fa fa-circle-o-notch fa-spin'));

      $.getJSON('http://ga-challenge-api-production.herokuapp.com/explorer/posts', function(data) {

        //timeout function to 'fake' server call
        // setTimeout(function(){  
          $.each(data.posts, function(key, value){
            var newArticle = $('<article/>');
            newArticle.append($('<i/>').addClass(value.category+' fa'));
            newArticle.append($('<h2/>').html('From the Archive'));
            newArticle.append($('<h1/>').html(value.title));
            newArticle.append($('<h3/>').html(value.date));
            newArticle.append($('<p/>').html(value.blurb));
            $('#article-list footer').before(newArticle);
            $('#load-more').prop('disabled', false).html('load more');
          });

        // }, 2000);

      }).error(function() {

          $('#load-more').prop('disabled', true).html('something went wrong').append($('<i/>').addClass('fa fa-exclamation-triangle'));
      
      });
    // }
    
    // else {

      // $(this).prop('disabled', true).html('end of archive');
    
    // }

  });

})();