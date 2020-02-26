//run IP locater function on page load
$(document).ready(function(){
    getIP();
});

// get location info from ip address
function getIP() {
  $.getJSON('http://ipinfo.io', function(ip){
    var city = ip.city + "," + ip.country;
    weatherApp(city);
  });
};

//get weather API
function weatherApp(location) {
   var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=3e9afa5dc09c07a394a599812226d9c2";
   $.getJSON(weatherUrl)
     .done(generate)
     .fail(error);
};

// weather API
function generate(data) {
  var fahrenheit = Math.round(data.main.temp * 9/5 - 459.67);
  var units = "F";
  $(".units").html('&deg;F');
  
  $(".location").html(data.name + ", " + data.sys.country);
  getIcon(data.weather[0].icon);
  $(".num").html(fahrenheit);
  $(".other").html(data.weather[0].description);
  
};

// error
function error() {
  alert("Unfortunately we can't retrieve data right now. Please try again later.");
};

//get weather from zipcode
function zipcode(zip) {
  var zipUrl = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=3e9afa5dc09c07a394a599812226d9c2";
  $.getJSON(zipUrl)
     .done(generate)
     .fail(error);
  $('.custom').show();
}

//run zipcode weather function on click or submit
$(document).ready(function() {
    $('#zipButton').click(function() {
      zipcode($('#formValueId').val());
    });
});



  