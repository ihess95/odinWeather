import { getWeather } from "./weatherApiMod";
import { geoCoder } from "./geocodingMod";
console.log("test");

const apiKey = "5ac36be232f53df626408888c0e28c2e";

const mainBody = document.querySelector(".mainBody");
mainBody.textContent = "test";

getWeather(apiKey);
geoCoder("London", apiKey);
