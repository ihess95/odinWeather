(()=>{"use strict";console.log("test"),document.querySelector(".mainBody").textContent="test",async function(){const t=await fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.0718&lon=70.7626&appid=5ac36be232f53df626408888c0e28c2e",{mode:"cors"});console.log(t);const e=await t.json();console.log(`weatherData: ${e}`)}()})();