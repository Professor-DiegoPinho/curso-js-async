const OPEN_WEATHER_API = "e333ec48ef9ab8469f526f37dbe272f3";

const getUserLocation = () => {
  if ("geolocation" in navigator) {
    const geolocationOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(getCoords, handleError, geolocationOptions);
  } else {
    console.error("Geolocalização não é suportada neste navegador.");
  }
};

const getCoords = (position) => {
  const { latitude, longitude, accuracy } = position.coords;
  console.log(`Latitude: ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log(`Precisão: ${accuracy} metros`);


  const baseURL = `https://api.openweathermap.org/data/2.5/weather`;
  const options = `?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API}`;
  const url = `${baseURL}${options}`;


  fetch(url).then(data => data.json()).then(data => {
    console.log(data);
  });

};

const handleError = (error) => {
  const errorMessages = {
    [error.PERMISSION_DENIED]: "Permissão negada pelo usuário.",
    [error.POSITION_UNAVAILABLE]: "Informações de localização indisponíveis.",
    [error.TIMEOUT]: "Tempo de solicitação esgotado.",
  };
  console.error(errorMessages[error.code] || "Erro desconhecido.");
};

getUserLocation();
