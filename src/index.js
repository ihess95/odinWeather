import { getWeather } from "./weatherApiMod";

const apiKey = "5ac36be232f53df626408888c0e28c2e";

const weatherDiv = document.createElement("div");
weatherDiv.classList.add("weatherDiv");

const typeDiv = document.createElement("div");
typeDiv.classList.add("typeDiv");

const tempDiv = document.createElement("div");
tempDiv.classList.add("tempDiv");

const feelsDiv = document.createElement("div");
feelsDiv.classList.add("feelsDiv");

const humidityDiv = document.createElement("div");
humidityDiv.classList.add("humidityDiv");

getWeather("London", "Imperial", apiKey);

const mainDiv = document.querySelector(".mainBody");
