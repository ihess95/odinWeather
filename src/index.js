import { getWeather } from "./weatherApiMod";

const apiKey = "5ac36be232f53df626408888c0e28c2e";

getWeather("London", "Imperial", apiKey);

const mainDiv = document.querySelector(".mainBody");
