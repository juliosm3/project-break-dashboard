document.addEventListener('DOMContentLoaded', () => {
  const cuerpo2 = document.body;
  const imagenes = [
    '/project-break-dashboard/img/astronauta-nasa.jpg',
    '/project-break-dashboard/img/huella.jpg',
    '/project-break-dashboard/img/nubes.jpg',
    '/project-break-dashboard/img/space.jpg',
    '/project-break-dashboard/img/via-lactea.jpg'
];

  const cambiarFondo = () => {
      const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
      const nuevoFondo = imagenes[indiceAleatorio];
      cuerpo2.style.backgroundImage = `url(${nuevoFondo})`;
      cuerpo2.style.backgroundSize = 'cover';
      cuerpo2.style.backgroundRepeat = 'no-repeat';
      cuerpo2.style.backgroundPosition = 'center';
  };

  setInterval(() => {
      cambiarFondo();
  }, 15000);

  cambiarFondo();

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
      <div class="current-data">
        <div class="current-grades">
          <img class="weather-icon" src="https:${datos.current.condition.icon}" alt="${datos.current.condition.text}">
          <p>${datos.current.temp_c}°C</p>
        </div>
        <ul>
          <p>Precipitación: ${datos.current.precip_mm} mm</p>
          <p>Humedad: ${datos.current.humidity}%</p>
          <p>Viento: ${datos.current.wind_kph} km/h</p>
        </ul>
      </div>
    `;
  }

  function actualizarPronosticoPorHoras(horas) {
      const pronostico = document.getElementById("pronostico");
      pronostico.innerHTML = "";

      horas.forEach((hora) => {
          const elemento = document.createElement("li");
          elemento.innerHTML = `
          <li class="forecast-grades">
            <p>${hora.time.split(" ")[1]}</p>
            <img class="weather-icon" src="https:${hora.condition.icon}" alt="${hora.condition.text}">
            <p>${hora.temp_c}°C</p>
          </li>
        `;
          pronostico.appendChild(elemento);
      });
  }

  obtenerClima();
});
