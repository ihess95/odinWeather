(()=>{"use strict";const e=document.querySelector(".mainBody");e.textContent="test",async function(e,t,a){const o=await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=5ac36be232f53df626408888c0e28c2e",{mode:"cors"});console.log(o),weatherData=await o.json(),console.log(weatherData.name),console.log(`weatherData: ${weatherData.weather[0].main}`),console.log(`Temp: ${weatherData.main.temp}`),console.log(`Feels Like: ${weatherData.main.feels_like}`),console.log(`Humidity: ${weatherData.main.humidity}`),console.log(`Wind: ${weatherData.wind.speed} MPH`),weatherData}();const t=document.createElement("div");t.textContent="",e.appendChild(t),console.log("from index"+"".name)})();