import { getWeather } from "./weatherApiMod";
import { geoCoder } from "./geocodingMod";
console.log("test");

const mainBody = document.querySelector(".mainBody");
mainBody.textContent = "test";

getWeather();
geoCoder();
