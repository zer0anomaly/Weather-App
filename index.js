cityinput = document.getElementById('city-input');
getbutton = document.getElementById('getbutton');
showplace = document.getElementById('weather-card');
apiKey = "c6254746c0bcc7aa13cf81aa46099051"


getbutton.addEventListener('click',() => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=${apiKey}&units=metric`)
	.then(response => {
		if (!response.ok){
			showplace.textContent = "City not found"
			throw new Error('City not found')
		}
		return response.json();
	})
	.then(data => {
		showplace.textContent = data.main.temp + " C" + data.weather[0].description
	})
})