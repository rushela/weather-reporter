const API_KEY = "196627be29c744489ff112040251606"; // Replace with your key
const city = "Colombo";
const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById("temp").textContent = data.current.temp_c;
    document.getElementById("humidity").textContent = data.current.humidity;
    document.getElementById("wind").textContent = data.current.wind_kph;
    document.getElementById("uv").textContent = data.current.uv;
  })
  .catch(error => {
    console.error("Error fetching weather:", error);
  });
