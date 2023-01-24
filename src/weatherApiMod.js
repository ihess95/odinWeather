async function getWeather(location, unit, apiKey) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${apiKey}`,
      { mode: "cors" }
    );
    console.log(response);
    const weatherData = await response.json();
    console.log(weatherData.name);
    console.log(`weatherData: ${weatherData.weather[0].main}`);
    console.log(`Temp: ${weatherData.main.temp}`);
    console.log(`Feels Like: ${weatherData.main.feels_like}`);
    console.log(`Humidity: ${weatherData.main.humidity}`);
    console.log(`Wind: ${weatherData.wind.speed} MPH`);
    const weatherInfo = {
      type: weatherData.weather[0].main,
      temp: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      humidity: weatherData.main.humidity,
    };

    const rootDiv = document.querySelector(".mainBody");
    rootDiv.textContent = "test";

    typeDiv.classList.add("typeDiv");
    typeDiv.textContent = weatherInfo.type;
    weatherDiv.classList.add("weatherDiv");

    tempDiv.classList.add("tempDiv");
    tempDiv.textContent = weatherInfo.temp;

    const feelsDiv = document.createElement("div");
    feelsDiv.classList.add("feelsDiv");
    feelsDiv.textContent = weatherInfo.feelsLike;

    const humidityDiv = document.createElement("div");
    humidityDiv.classList.add("humidityDiv");
    humidityDiv.textContent = weatherInfo.humidity;

    weatherDiv.appendChild(typeDiv);
    weatherDiv.appendChild(feelsDiv);
    weatherDiv.appendChild(humidityDiv);

    rootDiv.appendChild(weatherDiv);
  } catch {
    console.log("error");
  }
}
export { getWeather };
