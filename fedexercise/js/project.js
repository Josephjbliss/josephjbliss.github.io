var getPhotos = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1';
var getTags = 'https://api.flickr.com/services/rest/?method=flickr.tags.getListPhoto&api_key=a5e95177da353f58113fd60296e1d250&format=json&nojsoncallback=1&photo_id=';
var imgList = [];

$.getJSON(getPhotos, function(data) {
  $.each(data.photos.photo, function(key, value){
    var imgURL = 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret + '.jpg';
    var tagList = $("<div/>").addClass("tags");

    $.getJSON(getTags+value.id, function(data) {
        var tagArray = data.photo.tags.tag;
      
      $.each(tagArray, function(i){
        tagList.append($("<span/>").html(tagArray[i].raw));
      });
      $('body').append($('<div/>').addClass("").append($('<img/>').attr('src', imgURL)).append(tagList));
    });
  });
});

var createTags = function(list) {
  console.log(list);
};
