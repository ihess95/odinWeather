(()=>{"use strict";document.createElement("div").classList.add("weatherDiv"),document.createElement("div").classList.add("typeDiv"),document.createElement("div").classList.add("tempDiv"),document.createElement("div").classList.add("feelsDiv"),document.createElement("div").classList.add("humidityDiv"),async function(e,t,i){try{const e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=Imperial&appid=5ac36be232f53df626408888c0e28c2e",{mode:"cors"});console.log(e);const t=await e.json();console.log(t.name),console.log(`weatherData: ${t.weather[0].main}`),console.log(`Temp: ${t.main.temp}`),console.log(`Feels Like: ${t.main.feels_like}`),console.log(`Humidity: ${t.main.humidity}`),console.log(`Wind: ${t.wind.speed} MPH`);const i={type:t.weather[0].main,temp:t.main.temp,feelsLike:t.main.feels_like,humidity:t.main.humidity},a=document.querySelector(".mainBody");a.textContent="test";const n=document.createElement("div");n.classList.add("typeDiv"),n.textContent=i.type,weatherDiv.classList.add("weatherDiv");const d=document.createElement("div");d.classList.add("tempDiv"),d.textContent=i.temp;const s=document.createElement("div");s.classList.add("feelsDiv"),s.textContent=i.feelsLike;const o=document.createElement("div");o.classList.add("humidityDiv"),o.textContent=i.humidity,weatherDiv.appendChild(n),weatherDiv.appendChild(s),weatherDiv.appendChild(o),a.appendChild(weatherDiv)}catch{console.log("error")}}(),document.querySelector(".mainBody")})();