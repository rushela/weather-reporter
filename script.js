const API_KEY = "196627be29c744489ff112040251606"; // Replace with your key
function fetchWeather() {
  const city = document.getElementById("cityInput").value || "Colombo";
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  // Show loader
  document.getElementById("loader").style.display = "block";
  document.getElementById("weather").style.display = "none";

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const current = data.current;

      document.getElementById("location").textContent = data.location.name + ", " + data.location.country;
      document.getElementById("temp").textContent = current.temp_c;
      document.getElementById("feels").textContent = current.feelslike_c;
      document.getElementById("humidity").textContent = current.humidity;
      document.getElementById("wind").textContent = current.wind_kph;
      document.getElementById("uv").textContent = current.uv;
      document.getElementById("vis").textContent = current.vis_km;
      document.getElementById("updated").textContent = current.last_updated;
      document.getElementById("conditionText").textContent = current.condition.text;
      document.getElementById("conditionIcon").src = "https:" + current.condition.icon;

      // Show weather, hide loader
      document.getElementById("loader").style.display = "none";
      document.getElementById("weather").style.display = "block";
    })
    .catch(error => {
      alert("Error: " + error.message);
      document.getElementById("loader").style.display = "none";
    });
}

// Fetch Colombo on page load
window.onload = fetchWeather;