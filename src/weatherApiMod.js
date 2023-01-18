async function getWeather(location, unit, apiKey) {
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
  return weatherData;
}
export { getWeather };
