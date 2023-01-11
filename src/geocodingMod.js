async function geoCoder(location, apiKey) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`,
    { mode: "cors" }
  );
  const locationData = response.json();
  console.log("data" + JSON.stringify(locationData));
  const lat = locationData.lat;
  console.log("lat" + lat);
  const lon = locationData.lon;
  console.log("lon" + lon);
}

export { geoCoder };
