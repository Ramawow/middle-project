// Async function to fetch the weather data from API
const getWeatherData = async (API) =>{
    const response = await fetch(API);
    if(response.status === 404) return
    const data = await response.json();
    return data;
}

// Function to convert F to C since the default data for temperature is in F.
export const kelvinToCelcius = (kelvin) => Math.floor(kelvin - 273.15);
export const celciusToFahrenheit = (celcius) => Math.floor((celcius * 9/ 5) + 32);
export const fahrenheitToKelvin  = (fahrenheit) => Math.floor((fahrenheit - 32) * 5 / 9 + 273.15)
export default getWeatherData