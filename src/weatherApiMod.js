const lat = "43.0718";
const lon = "70.7626";
async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    { mode: "cors" }
  );
  console.log(response);
  const weatherData = await response.json();
  console.log(`weatherData: ${weatherData}`);
  return weatherData;
}
export { getWeather };
