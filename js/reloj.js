document.addEventListener('DOMContentLoaded', () => {
const cuerpo = document.body;
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

const actualizarHora = () => {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    let ceroHoras = horas < 10 ? '0' + horas : horas;
    let ceroMinutos = minutos < 10 ? '0' + minutos : minutos;
    let ceroSegundos = segundos < 10 ? '0' + segundos : segundos;

    const horaString = `${ceroHoras}:${ceroMinutos}:${ceroSegundos}`;

    const elementoHora = document.getElementById('hora');
    const elementoFecha = document.getElementById('fecha');
    const elementoMensaje = document.getElementById('mensaje');

    if (elementoHora) elementoHora.innerText = horaString;

    if (elementoFecha) {
        const fechaString = fechaFormateada(ahora);
        elementoFecha.innerText = fechaString;
    }

    if (elementoMensaje) {
        const mensaje = obtenerMensaje(horas);
        elementoMensaje.innerText = mensaje;
    }
};

const fechaFormateada = (fecha) => {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();

    let ceroDia = dia < 10 ? '0' + dia : dia;
    let ceroMes = mes < 10 ? '0' + mes : mes;

    return `${ceroDia}/${ceroMes}/${año}`;
};

const obtenerMensaje = (horas) => {
    if (horas >= 0 && horas <= 7) {
        return 'Es hora de descansar. Apaga y sigue mañana';
    } else if (horas > 7 && horas <= 12) {
        return 'Buenos días, desayuna fuerte y a darle al código!';
    } else if (horas > 12 && horas <= 14) {
        return 'Echa un rato más pero no olvides comer';
    } else if (horas > 14 && horas <= 16) {
        return 'Espero que hayas comido. Un cafelito y a seguir!';
    } else if (horas > 16 && horas <= 18) {
        return 'Buenas tardes, el último empujón';
    } else if (horas > 18 && horas <= 22) {
        return 'Esto ya son horas extras, piensa en parar pronto';
    } else {
        return 'Buenas noches, es hora de pensar en parar y descansar';
    }
};

setInterval(actualizarHora, 1000);
actualizarHora();

});
