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

const fLabel = document.createElement("p");
fLabel.textContent = "Fahrenheit";
searchDiv.appendChild(fLabel);
const fah = document.createElement("input");
fah.type = "radio";
fah.setAttribute("name", "unit");
fah.setAttribute("value", "F");
fah.setAttribute("checked", "true");
searchDiv.appendChild(fah);

const cLabel = document.createElement("p");
cLabel.textContent = "Celcius";
searchDiv.appendChild(cLabel);
const cel = document.createElement("input");
cel.type = "radio";
cel.setAttribute("name", "unit");
cel.setAttribute("value", "C");
searchDiv.appendChild(cel);

const searchBtn = document.createElement("button");
searchBtn.textContent = "Get the Weather!";
searchBtn.addEventListener("click", function () {
  console.log(search.value);
  searchFunc(search.value);
});
searchDiv.appendChild(searchBtn);

function searchFunc(keyword) {
  const weatherDiv = document.querySelector(".weatherDiv");
  let unitType = "";
  if (
    mainDiv.classList.contains("Clear", "Snow", "Drizzle", "Rain", "Clouds")
  ) {
    console.log("weather contained");
    mainDiv.classList.remove(...mainDiv.classList);
    mainDiv.classList.add("mainBody");
  } else {
    if (fah.checked) {
      console.log("fah");
      unitType = "Imperial";
    } else {
      console.log("cel");
      unitType = "Metric";
    }
    if (keyword) {
      if (weatherDiv) {
        weatherDiv.remove();
        getWeather(keyword, unitType, apiKey);
      } else {
        console.log(keyword);
        getWeather(keyword, unitType, apiKey);
      }
    } else {
      search.placeholder = "Please enter a valid City";
      alert("Please Enter a valid City.");
    }
  }
}
mainDiv.appendChild(headerDiv);
