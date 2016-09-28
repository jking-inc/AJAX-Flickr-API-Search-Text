$(document).ready(function() {


 $('form').submit(function(evt) {
  evt.preventDefault();
  var $searchText = $('#search');
  var $submitButton = $('#submit');
   
   $searchText.prop("disabled", true);
   $submitButton.attr("disabled", true).val("searching...");

    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $searchText.val()
    var flickrOptions = {
      tags: animal,
      format: "json"
      
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $searchText.prop("disabled", false);
      $submitButton.attr("disabled", false).val("search");
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

}); // end form
  
}); // end of ready