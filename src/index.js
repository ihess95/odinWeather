// import { getWeather } from "./weatherApiMod";

const apiKey = "5ac36be232f53df626408888c0e28c2e";
let weatherData = "";

async function getWeather(location, unit, apiKey) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`,
      { mode: "cors" }
    );
    console.log(response);
    weatherData = await response.json();
    const weatherTest = weatherData;
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

const mainDiv = document.querySelector(".mainBody");
const weatherOutput = document.createElement("div");
weatherOutput.className = "weatherOutput";
weatherOutput.textContent = weatherTest;

mainDiv.appendChild(weatherOutput);
