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
