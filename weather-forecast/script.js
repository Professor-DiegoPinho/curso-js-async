const OPEN_WEATHER_API = "e333ec48ef9ab8469f526f37dbe272f3";

function getUserLocation() {
  if ("geolocation" in navigator) {
    const geolocationOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(getCoords, handleError, geolocationOptions);
  } else {
    console.error("Geolocation is not available.");
  }
};

async function getCoords(position) {
  const { latitude, longitude } = position.coords;
  console.log(`Latitude: ${latitude}`);
  console.log(`Longitude: ${longitude}`);

  const baseURL = `https://api.openweathermap.org/data/2.5/weather`;
  const options = `lang=pt_br&units=metric`;
  const params = `?lat=${latitude}&lon=${longitude}&${options}&appid=${OPEN_WEATHER_API}`;
  const url = `${baseURL}${params}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }
    const weatherData = await response.json();
    renderWeatherData(weatherData);
  } catch (error) {
    alert("Something went wrong. Please try again later.");
    console.error("Error fetching weather data:", error);
  }
}

function renderWeatherData(weatherData) {
  const forecastEl = document.querySelector(".forecast");
  forecastEl.innerHTML = `A temperatura em ${weatherData.name} é de ${weatherData.main.temp}°C`;
}

function handleError(error) {
  const errorMessages = {
    [error.PERMISSION_DENIED]: "Permission denied by the user.",
    [error.POSITION_UNAVAILABLE]: "Location information is unavailable.",
    [error.TIMEOUT]: "Timeout.",
  };

  alert("Something went wrong. Please try again later.");
  console.error(errorMessages[error.code] || "Unknown error.");
};

getUserLocation();
