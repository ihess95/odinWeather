async function geoCoder(location, apiKey) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location},uk&limit=5&appid=${apiKey}`,
    { mode: "cors" }
  );
  console.log(response);
  const locationData = response;
  console.log("data: " + JSON.stringify(response));
  const lat = locationData.lat;
  console.log("lat: " + lat);
  const lon = locationData.lon;
  console.log("lon: " + lon);
}

export { geoCoder };
