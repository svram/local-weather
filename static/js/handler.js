var isTempInCelcius = true;

$("#getButton").click(function(){
	$('.weatherInfo').css('display','none');
	$('.loader').css('display','block');
	
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        
        $('#country').text("Geolocation is not supported by this browser.");
		
    }
})

$('#temperature').click(function(){
	
	var currentTemp = parseFloat($(this).text());
	
	if(isTempInCelcius)
	{
		//display temperature in fanrenheit
		
		var tempInFahrenheit = 1.8 * currentTemp + 32;
		$('#temperature').text(tempInFahrenheit.toFixed(2) + " °F");

	}
	else
	{
		
		var tempInCelsius = (currentTemp - 32)/1.8;
		$('#temperature').text(tempInCelsius.toFixed(2) + " °C");
	}
	
	isTempInCelcius = !isTempInCelcius;
})

function showPosition(position){
	
	var url = 'https://fcc-weather-api.glitch.me/api/current?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
	$.get(url, function(data){

		$('.loader').css('display','none');
		$('.weatherInfo').css('display','block');

		$('#country').text(getCountryName(data['sys']['country']));
		$('#area').text(data['name']);
		$('#temperature').text(data['main']['temp'] + " °C");
		$('#description').text(data['weather'][0]['description']);
		$('#icon').attr('src', data['weather'][0]['icon'])
	});

}