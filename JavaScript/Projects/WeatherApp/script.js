const API_KEY = "f4fb80e51cf03e51717fbfa62965a7e9";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  const { Lattitude, Longitude } = await getGeoLocation(cityName);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  const temperature = data.main.temp - 273.15;
  const feels_like = data.main.feels_like - 273.15;
  const minTemp = data.main.temp_min - 273.15;
  const maxTemp = data.main.temp_max - 273.15;
  const speed = data.wind.speed;
  const humidity = data.main.humidity;
  const main = data.weather[0].main;
  const description = data.weather[0].description;


  document.getElementById("Temperature").innerText = temperature.toFixed(0);
  document.getElementById("feels").innerText = feels_like.toFixed(0);
  document.getElementById("min_temp").innerText = minTemp.toFixed(2);
  document.getElementById("max_temp").innerText = maxTemp.toFixed(1);
  document.getElementById("speed").innerText = speed;
  document.getElementById("humid").innerText = humidity;
  document.getElementById("weather").innerText = main;
  document.getElementById("type").innerText = description;
  
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Lattitude, Longitude };
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key === "Enter") {
    getWeather();
  }
});