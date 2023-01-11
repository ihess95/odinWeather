async function geoCoder(location, apiKey) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`,
    { mode: "cors" }
  );
  console.log(response);
  const lat = response.lat;
  const lon = response.lon;
}

export { geoCoder };
