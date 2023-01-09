async function geoCoder() {
  const response = await fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}",
    { mode: "cors" }
  );
  const lat = response.lat;
  const lon = response.lon;
}

export { geoCoder };
