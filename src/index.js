import { getWeather } from "./weatherApiMod";

const apiKey = "5ac36be232f53df626408888c0e28c2e";

getWeather("London", "Imperial", apiKey);

const mainDiv = document.querySelector(".mainBody");

const headerDiv = document.createElement("div");
headerDiv.classList.add("headerDiv");

const headerH1 = document.createElement("h1");
headerDiv.appendChild(headerH1);
headerH1.textContent = "Weather App";

const searchDiv = document.createElement("div");
headerDiv.appendChild(searchDiv);

const searchLabel = document.createElement("p");
searchLabel.textContent = "Enter your city: ";
searchDiv.appendChild(searchLabel);

const search = document.createElement("textarea");
search.placeholder = "Example: London";
searchDiv.appendChild(search);

const searchBtn = document.createElement("button");
searchBtn.textContent = "Get the Weather!";
searchDiv.appendChild(searchBtn);

mainDiv.appendChild(headerDiv);
