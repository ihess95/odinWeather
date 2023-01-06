import { getWeather } from "./weatherApiMod";
console.log("test");

const mainBody = document.querySelector(".mainBody");
mainBody.textContent = "test";

getWeather();
