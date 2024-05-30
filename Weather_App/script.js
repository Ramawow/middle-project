import getWeatherData, {kelvinToCelcius, celciusToFahrenheit} from './modules.js'
// Variables
const API_KEY = '78162c84562798ab0c076737a1255d3e';
const ICON = `http://openweathermap.org/img/wn/`;
const OPEN_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?`;
const temperatureDescription = document.querySelector('.temperature-description');
const temperatureDegree = document.querySelector('.temperature-degree');
const temperatureSection = document.querySelector('.temperature-section')
const temperatureSpan = temperatureSection.children[1]
const locationTimezone = document.querySelector('.location-timezone');
const locationIcon = document.querySelector('.location img');
const cityInput = document.querySelector('input');
const searchButton = document.querySelector('button');
let temperature = 0;
let longitude;
let latitude;

// Function to set the display
const setupDisplay = (timezone, temp, description, icon) =>{
  locationTimezone.textContent = timezone;
  temperatureDegree.textContent = Math.floor(temp);
  temperatureSpan.textContent = 'K'
  temperatureDescription.textContent = description;
  locationIcon.src = `${ICON}${icon}@2x.png`;
}

const changeDegree = (temperature) =>{
  let celcius = kelvinToCelcius(temperature);
  let fahrenheit = celciusToFahrenheit(celcius);  
  if(temperatureSpan.textContent === 'K'){
    temperatureDegree.textContent = celcius;
    temperatureSpan.textContent = 'C';
  }
  else if(temperatureSpan.textContent === 'C'){
    temperatureDegree.textContent = fahrenheit;
    temperatureSpan.textContent = 'F';
  }
  else{
    temperatureDegree.textContent = Math.floor(temperature);
    temperatureSpan.textContent = 'K';
  }
}

// Trigger search button click when user press enter while focusing on input.
cityInput.onkeypress = (e) =>{
  if(e.which === 13)
    searchButton.click();
}

// When browser is loading, fire event
window.addEventListener('load', () =>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;
      const OPEN_WEATHER_APP = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
      getWeatherData(OPEN_WEATHER_APP).then(data =>{
        const {timezone} = data;
        const {temp} = data.current;
        const {description, icon} = data.current.weather[0];
        temperature = temp
        setupDisplay(timezone, temp, description, icon);
      });
    });
  }
});

searchButton.addEventListener('click', () =>{
  const searchValue = cityInput.value;
  const COMPLETE_API = `${OPEN_WEATHER_API}q=${searchValue}&appid=${API_KEY}`;
  cityInput.value = '';
  getWeatherData(COMPLETE_API).then(data =>{
    const {name} = data;
    const {temp} = data.main;
    const {description, icon} = data.weather[0];
    temperature = temp
    setupDisplay(name, temp, description, icon);
  }).catch(err => alert('City not found!'));
});

temperatureSection.addEventListener('click', () => changeDegree(temperature))