// import { getWeather } from "./weatherApiMod";
// import { weatherData } from "./weatherApiMod";

const apiKey = "5ac36be232f53df626408888c0e28c2e";
const weatherData = "";

async function getWeather(location, unit, apiKey) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`,
      { mode: "cors" }
    );
    console.log(response);
    weatherData = await response.json();
    console.log(weatherData.name);
    console.log(`weatherData: ${weatherData.weather[0].main}`);
    console.log(`Temp: ${weatherData.main.temp}`);
    console.log(`Feels Like: ${weatherData.main.feels_like}`);
    console.log(`Humidity: ${weatherData.main.humidity}`);
    console.log(`Wind: ${weatherData.wind.speed} MPH`);
  } catch {
    console.log("error");
  }
}

getWeather("London", "Imperial", apiKey);

// const coordinates = document.createElement("div");
// coordinates.textContent = weatherData;
// mainBody.appendChild(coordinates);
console.log("from index" + weatherData);
