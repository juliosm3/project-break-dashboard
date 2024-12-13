const cuerpo = document.body;
const imagenes = [
    './img/astronauta-nasa.jpg',
    './img/bali.jpg',
    './img/bambu.jpg',
    './img/huella.jpg',
    './img/lago-montaña.jpg',
    './img/montaña-cielo.jpg',
    './img/nubes.jpg',
    './img/paisaje-galaxia.jpg',
    './img/sabana.jpg',
    './img/valle.jpg',
    './img/via-lactea.jpg'
];

const cambiarFondo = () => {
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  const nuevoFondo = imagenes[indiceAleatorio];
  cuerpo.style.backgroundImage = `url(${nuevoFondo})`;
};

setInterval(() => {
  cambiarFondo();
}, 15000);

cambiarFondo();
