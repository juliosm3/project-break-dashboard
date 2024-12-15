document.addEventListener('DOMContentLoaded', () => {
const bodyElement = document.body;
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
    cuerpo.style.backgroundImage = `url(${nuevoFondo})`;
    cuerpo.style.backgroundSize = 'cover';
    cuerpo.style.backgroundRepeat = 'no-repeat';
    cuerpo.style.backgroundPosition = 'center';
};

setInterval(() => {
    cambiarFondo();
}, 15000);

cambiarFondo();
});
