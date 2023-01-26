import { getWeather } from "./weatherApiMod";

const apiKey = "5ac36be232f53df626408888c0e28c2e";
let location = "London";

getWeather(location, "Imperial", apiKey);

const mainDiv = document.querySelector(".mainBody");

const headerDiv = document.createElement("div");
headerDiv.classList.add("headerDiv");

const headerH1 = document.createElement("h1");
headerDiv.appendChild(headerH1);
headerH1.textContent = "Weather App";

const searchDiv = document.createElement("div");
searchDiv.classList.add("searchDiv");
headerDiv.appendChild(searchDiv);

const searchLabel = document.createElement("p");
searchLabel.textContent = "Enter your city: ";
searchDiv.appendChild(searchLabel);

const search = document.createElement("textarea");
search.placeholder = "Example: London";
searchDiv.appendChild(search);

const unitDiv = document.createElement("div");
unitDiv.classList.add("unitDiv");
searchDiv.appendChild(unitDiv);

const fLabel = document.createElement("p");
fLabel.textContent = "Fahrenheit";
unitDiv.appendChild(fLabel);
const fah = document.createElement("input");
fah.type = "radio";
fah.setAttribute("name", "unit");
fah.setAttribute("value", "F");
fah.setAttribute("checked", "true");
unitDiv.appendChild(fah);

const cLabel = document.createElement("p");
cLabel.textContent = "Celcius";
unitDiv.appendChild(cLabel);
const cel = document.createElement("input");
cel.type = "radio";
cel.setAttribute("name", "unit");
cel.setAttribute("value", "C");
unitDiv.appendChild(cel);

const searchBtn = document.createElement("button");
searchBtn.textContent = "Get the Weather!";
searchBtn.addEventListener("click", function () {
  searchFunc(search.value);
});
searchDiv.appendChild(searchBtn);

function searchFunc(keyword) {
  const weatherDiv = document.querySelector(".weatherDiv");
  mainDiv.className = "mainBody";
  let unitType = "";
  if (fah.checked) {
    unitType = "Imperial";
  } else {
    unitType = "Metric";
  }
  if (keyword) {
    if (weatherDiv) {
      weatherDiv.remove();
      getWeather(keyword, unitType, apiKey);
    } else {
      getWeather(keyword, unitType, apiKey);
    }
  } else {
    search.placeholder = "Please enter a valid City";
    alert("Please Enter a valid City.");
  }
}
mainDiv.appendChild(headerDiv);
