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
    };

    const weatherDiv = document.createElement("div");
    weatherDiv.classList.add("weatherDiv");
    weatherDiv.textContent = JSON.parse(weatherData);
  } catch {
    console.log("error");
  }
}
export { getWeather };
