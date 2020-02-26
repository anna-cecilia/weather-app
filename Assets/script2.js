var APIKey = "166a433c57516f51dfab1f7edaed8413";
        
$("#zipButton").click(function(){
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q="+$("#formValueId").val()+"&units=imperial&appid=" + APIKey;
$.ajax({
    url: queryURL,
    method: "GET"
})
    
    .then(function (response) {
        
        $("#location").html("<h3>" + response.name + " </h3>");
        $(".num").text(response.main.temp);
        $(".description").text(response.weather.main);

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".tempF").text("Temperature (Kelvin) " + tempF);
        console.log(response.weather.description);
    });
})