const claveAPI = "16cbaa1e7acb4072810120436241212";
const ciudad = "Madrid";

async function obtenerClima() {
  try {
    const respuesta = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${claveAPI}&q=${ciudad}&days=1&aqi=no&alerts=no`
    );
    const datos = await respuesta.json();

    actualizarClimaActual(datos);
    actualizarPronosticoPorHoras(datos.forecast.forecastday[0].hour);
  } catch (error) {
    console.error("Error al obtener los datos del clima:", error);
  }
}

function actualizarClimaActual(datos) {
  const tiempoActual = document.getElementById("tiempoActual");

  tiempoActual.innerHTML = `
    <h1>${datos.location.name}, ${datos.location.country}</h1>
    <p>${datos.current.condition.text}</p>
    <img src="https:${datos.current.condition.icon}" alt="${datos.current.condition.text}">
    <p>${datos.current.temp_c}°C</p>
    <p>Precipitación: ${datos.current.precip_mm} mm</p>
    <p>Humedad: ${datos.current.humidity}%</p>
    <p>Viento: ${datos.current.wind_kph} km/h</p>
  `;
}

function actualizarPronosticoPorHoras(horas) {
  const pronostico = document.getElementById("pronostico");
  pronostico.innerHTML = "";

  horas.forEach((hora) => {
    const elemento = document.createElement("li");
    elemento.innerHTML = `
      <p>${hora.time.split(" ")[1]}</p>
      <img src="https:${hora.condition.icon}" alt="${hora.condition.text}">
      <p>${hora.temp_c}°C</p>
    `;
    pronostico.appendChild(elemento);
  });
}

obtenerClima();

