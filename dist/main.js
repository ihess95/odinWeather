(()=>{"use strict";const o="5ac36be232f53df626408888c0e28c2e";document.querySelector(".mainBody").textContent="test",async function(o,t){const e=(await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${t}`,{mode:"cors"})).json();console.log("data"+JSON.stringify(e));const n=e.lat;console.log("lat"+n);const a=e.lon;console.log("lon"+a)}(0,o),async function(o){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.0718&lon=70.7626&appid=${o}`,{mode:"cors"});console.log(t);const e=await t.json();console.log(`weatherData: ${JSON.stringify(e)}`)}(o)})();