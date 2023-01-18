import { getWeather } from "./weatherApiMod";

const apiKey = "5ac36be232f53df626408888c0e28c2e";

const mainBody = document.querySelector(".mainBody");
mainBody.textContent = "test";

getWeather("London", "imperial", apiKey);
const coordinates = document.createElement("div");
coordinates.textContent = weatherData;
mainBody.appendChild(coordinates);
