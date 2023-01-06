const weatherData = "";
const lat = 90.92;
const lon = 90.9;
async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
    { mode: "cors" }
  );
  console.log(response);
  response.json().then(function (response) {
    weatherData = response;
  });
}
export { getWeather };
