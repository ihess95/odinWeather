(()=>{"use strict";console.log("test");const t="5ac36be232f53df626408888c0e28c2e";document.querySelector(".mainBody").textContent="test",async function(t){const o=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.0718&lon=70.7626&appid=${t}`,{mode:"cors"});console.log(o);const e=await o.json();console.log(`weatherData: ${e}`)}(t),async function(t,o){const e=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=5&appid=${o}`,{mode:"cors"});console.log(e),e.lat,e.lon}(London,t)})();