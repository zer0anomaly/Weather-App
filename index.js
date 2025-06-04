cityinput = document.getElementById('city-input');
getbutton = document.getElementById('getbutton');
showplace = document.getElementById('weather-card');
apiKey = "552748c868e5472189965809250406"


getbutton.addEventListener('click',() => {
	fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityinput.value}`)
	.then(response => {
		if (!response.ok){
			showplace.textContent = "City not found"
			throw new Error('City not found')
		}
		return response.json();
	})
	.then(data => {
		showplace.textContent = data.current.temp_c + " C" + data.current.condition.text
	})
})