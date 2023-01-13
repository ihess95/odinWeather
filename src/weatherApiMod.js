async function getWeather(location, apiKey) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
    { mode: "cors" }
  );
  console.log(response);
  const weatherData = await response.json();
  console.log(`weatherData: ${JSON.stringify(weatherData)}`);
  return weatherData;
}
export { getWeather };
