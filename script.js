var lat = 0;
var lon = 0;
var url = null;
var weather = null;


window.onload = function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    lat = Math.floor(position.coords.latitude);
    lon = Math.floor(position.coords.longitude);
    console.log(lat, lon);
    getAPI();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAPI() {
	var randnumb = getRandomInt(0,212);
	url = ''; //your weather API key here
 
  $.getJSON(url).then(function(data) {

    weather = data.weather[0].main;   
    console.log(weather);
    loadImg();
	});
}

function loadImg(){
	if (weather == "Snow"){
		var randnumb = getRandomInt(0,11);
		document.getElementById("title").innerHTML = '<a href="' + theWeather[randnumb][5] +'"target="_blank">' + theWeather[randnumb][2] + '</a>'; //title
		document.getElementById("artist").innerHTML = 'Artist: ' + theWeather[randnumb][3]; //artist
		document.getElementById("date").innerHTML = 'Date: ' + theWeather[randnumb][4] ; //date
		document.getElementById("theweather").innerHTML = "Today's Weather: " + weather ; //weather
		document.getElementById("thebody").innerHTML = '<div id="bg"  style="background-image: url(' + theWeather[randnumb][1] + 'background-repeat: no-repeat; background-attachment: fixed; z-index:-1;"> </div>' //url		
	}
	if (weather == "Clouds"){
		var randnumb = getRandomInt(12,23);
		document.getElementById("title").innerHTML = '<a href="' + theWeather[randnumb][5] +'"target="_blank">' + theWeather[randnumb][2] + '</a>'; //title
		document.getElementById("artist").innerHTML = 'Artist: ' + theWeather[randnumb][3]; //artist
		document.getElementById("date").innerHTML = 'Date: ' + theWeather[randnumb][4]; //date
		document.getElementById("theweather").innerHTML = "Today's Weather: " + weather ; //weather
		document.getElementById("thebody").innerHTML = '<div id="bg"  style="background-image: url(' + theWeather[randnumb][1] + 'background-repeat: no-repeat; background-attachment: fixed; z-index:-1;"> </div>' //url
		
	}
	if (weather == "Rain"){
		var randnumb = getRandomInt(24,29);
		document.getElementById("title").innerHTML = '<a href="' + theWeather[randnumb][5] +'"target="_blank">' + theWeather[randnumb][2] + '</a>'; //title
		document.getElementById("artist").innerHTML = 'Artist: ' + theWeather[randnumb][3]; //artist
		document.getElementById("date").innerHTML = 'Date: ' + theWeather[randnumb][4]; //date
		document.getElementById("theweather").innerHTML = "Today's Weather: " + weather ; //weather
		document.getElementById("thebody").innerHTML = '<div id="bg"  style="background-image: url(' + theWeather[randnumb][1] + 'background-repeat: no-repeat; background-attachment: fixed; z-index:-1;"> </div>' //url
	}
	if (weather == "Clear"){
		var randnumb = getRandomInt(30,38);
		document.getElementById("title").innerHTML = '<a href="' + theWeather[randnumb][5] +'"target="_blank">' + theWeather[randnumb][2] + '</a>'; //title
		document.getElementById("artist").innerHTML = 'Artist: ' + theWeather[randnumb][3]; //artist
		document.getElementById("date").innerHTML = 'Date: ' + theWeather[randnumb][4]; //date
		document.getElementById("theweather").innerHTML = "Today's Weather: " + weather ; //weather
		document.getElementById("thebody").innerHTML = '<div id="bg"  style="background-image: url(' + theWeather[randnumb][1] + 'background-repeat: no-repeat; background-attachment: fixed; z-index:-1;"> </div>' //url
		
	}
	if (weather != "Snow" && weather != "Clouds" && weather != "Rain" && weather != "Clear" || weather == null){
		var randnumb = getRandomInt(39,45);
		document.getElementById("title").innerHTML = '<a href="' + theWeather[randnumb][5] +'"target="_blank">' + theWeather[randnumb][2] + '</a>'; //title
		document.getElementById("artist").innerHTML = 'Artist: ' + theWeather[randnumb][3] //artist
		document.getElementById("date").innerHTML = 'Date: ' + theWeather[randnumb][4] //date
		document.getElementById("theweather").innerHTML = "Today's Weather: " + weather ; //weather
		document.getElementById("thebody").innerHTML = '<div id="bg"  style="background-image: url(' + theWeather[randnumb][1] + 'background-repeat: no-repeat; background-attachment: fixed; z-index:-1;"> </div>' //url
		
	}
}