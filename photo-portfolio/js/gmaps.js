var map;

var center = {lat: 40.7230, lng: -73.9691};

var initMap = function() {
  map = new google.maps.Map(document.getElementById('gmap'), {
    center: center,
    zoom: 12,
    disableDefaultUI: true, 
    scrollwheel: false, 
    zoomControl: true,
    styles: [{'featureType':'water','elementType':'geometry','stylers':[{'color':'#e9e9e9'},{'lightness':17}]},{'featureType':'landscape','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':20}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#ffffff'},{'lightness':17}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#ffffff'},{'lightness':29},{'weight':0.2}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':18}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#ffffff'},{'lightness':16}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#f5f5f5'},{'lightness':21}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#dedede'},{'lightness':21}]},{'elementType':'labels.text.stroke','stylers':[{'visibility':'on'},{'color':'#ffffff'},{'lightness':16}]},{'elementType':'labels.text.fill','stylers':[{'saturation':36},{'color':'#333333'},{'lightness':40}]},{'elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'transit','elementType':'geometry','stylers':[{'color':'#f2f2f2'},{'lightness':19}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#fefefe'},{'lightness':20}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#fefefe'},{'lightness':17},{'weight':1.2}]}, {"featureType": "road", "elementType": "labels","stylers": [{"hue": "#ffffff"},{"saturation": -100},{"lightness": 100},{"visibility": "off"}]},{"featureType": "water","elementType": "labels","stylers": [{"hue": "#000000"},{"saturation": -100},{"lightness": -100},{"visibility": "off"}]}]
  });

  google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(center);
  });

  var stores = [
    ['Long Island City', 40.7458677, -73.9501725, "Try-hard craft beer pickled asymmetrical street art. Mixtape four dollar toast authentic cold-pressed. Banjo flannel gluten-free pop-up slow-carb, sustainable tilde. Vice mlkshk helvetica, +1 celiac hoodie chartreuse cardigan. Chia pop-up affogato mlkshk, art party tattooed 8-bit synth actually bicycle rights. Keffiyeh photo booth salvia, street art gastropub skateboard marfa. Mlkshk post-ironic microdosing banjo wolf food truck.", "123 Fake Street <br> New York, NY 10011", "lic@wanderlust.co"],
    ['Greenpoint', 40.7303796, -73.9598666, "Stumptown hella austin, 90's hammock quinoa tattooed cronut four dollar toast fashion axe. Ennui next level listicle, austin fashion axe umami craft beer chartreuse 3 wolf moon cardigan chicharrones. Cronut blue bottle trust fund, hashtag DIY affogato typewriter kogi. Celiac locavore sustainable, godard narwhal tofu street art art party drinking vinegar hoodie ugh intelligentsia before they sold out poutine", "123 Fake Street <br> New York, NY 10011", "puntaverde@wanderlust.co"],
    ['Clinton Hill', 40.6843924, -73.9680999, "Mixtape synth keffiyeh gastropub pitchfork. Migas disrupt deep v master cleanse kinfolk, neutra dreamcatcher chambray austin fashion axe scenester. Authentic you probably haven't heard of them kogi gentrify squid, green juice church-key hammock helvetica bitters kombucha retro. Scenester listicle hashtag put a bird on it helvetica, tattooed celiac gochujang blog occupy thundercats master cleanse keytar wolf. Selfies bitters helvetica pork belly, butcher health goth typewriter man braid ", "123 Fake Street <br> New York, NY 10011", "clintonhill@wanderlust.co"],
    ['Nolita', 40.7230376, -73.9940332, "Taxidermy chillwave tote bag, listicle williamsburg kogi organic four dollar toast flannel ethical church-key kale chips 3 wolf moon cardigan. Thundercats blog tumblr slow-carb, ennui mustache PBR&B. Humblebrag chartreuse tote bag swag, letterpress disrupt chambray sartorial plaid meditation drinking vinegar +1. IPhone photo booth organic, swag truffaut vegan taxidermy intelligentsia. Actually bitters everyday carry, meggings occupy chambray whatever taxidermy fixie +1 williamsburg twee hoodie microdosing leggings", "123 Fake Street <br> New York, NY 10011", "nolita@wanderlust.co"]
  ];

  var image = 'images/map.png';

  for (var i = 0; i < stores.length; i++) {
    var store = stores[i];

    var marker = new google.maps.Marker({
      position: {lat: store[1], lng: store[2]},
      map: map,
      icon: image,
      title: store[0],
      content: store[3],
      address: store[4], 
      contact: store[5]
    });
    
    marker.addListener('click', function() {
      $('#overlay-wrapper').html("").append($("<h3/>").html(this.title)).append($("<p/>").html(this.content));
      $('#overlay-wrapper').append($("<footer/>").append($("<h4/>").html("Contact Us")).append($("<p/>").html(this.address).append("<br>").append($('<a/>').attr('href', 'mailto:'+this.contact).html(this.contact))));
      $('#overlay').fadeIn(200);
    });
  }
}

var closeOverlay =  function() {
  $('#overlay').fadeOut(200);
}

$('#close').on('click', closeOverlay);

$(document).keyup(function(e) {
   if (e.keyCode == 27) {
      closeOverlay();
  }
});
