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

function generarContraseña() {
    const inputElement = document.getElementById('longitudContraseña');
    const longitudContraseña = parseInt(inputElement.value);

    if (longitudContraseña < 12 || longitudContraseña > 50) {
        alert("La contraseña debe tener entre 12 y 50 caracteres.");
        return;
    }

    const password = contraseñaAleatoria(longitudContraseña);
    const contraseñaObtenida = document.getElementById('contraseñaObtenida');

    if (contraseñaObtenida) {
        contraseñaObtenida.textContent = `Contraseña Generada: ${password}`;
    } else {
        console.error("No se encontró el elemento con ID 'contraseñaObtenida'");
    }


}

function contraseñaAleatoria(value) {
    const mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnñopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()-_=+';

    let password = '';

    password += obtenerCaracterAleatorio(mayusculas);
    password += obtenerCaracterAleatorio(minusculas);
    password += obtenerCaracterAleatorio(numeros);
    password += obtenerCaracterAleatorio(simbolos);

    for (let i = password.length; i < value; i++) {
        const caracteres = mayusculas + minusculas + numeros + simbolos;
        password += obtenerCaracterAleatorio(caracteres);
    }

    return password;
}

function obtenerCaracterAleatorio(caracteres) {
    const aleatorio = Math.floor(Math.random() * caracteres.length);
    return caracteres.charAt(aleatorio);
}


