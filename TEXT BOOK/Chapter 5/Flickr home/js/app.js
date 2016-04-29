var main = function() {
  "use strict";

  console.log("Hello World!");
  var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=vancouver&format=json&jsoncallback=?";

  $.getJSON(url, function(flickrResponse) {
    flickrResponse.items.forEach(function(photo) {
      console.log(photo.media.m);
    });
  });

  $.getJSON(url, function (flickrResponse) {
    flickrResponse.items.forEach(function(photo){
      var $img = $("<img>").hide();
      $img.attr("src", photo.media.m);
      $("main .photos").append($img);
      $img.fadeIn();
    });
  });
};

$(document).ready(main);
