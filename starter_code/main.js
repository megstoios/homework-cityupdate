$(document).ready(function() {

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

cities.forEach(function(city) {
  $("#city-type").append("<option>" + city + "</option>");
  });

var updatePic = function(event) {
  var city = $(event.target).val();

  if (city === "ATX") {
    $("body").css("background-image", "url(images/austin.jpg");
  } else if (city === "SYD") {
    $("body").css("background-image", "url(images/sydney.jpg");
  } else {
    $("body").css("background-image", "url(images/" + city + ".jpg");
  }

};

$("#city-type").change(updatePic);

});
