document.addEventListener('DOMContentLoaded', () => {
    const enlaceInput = document.getElementById('nombre');
    const urlInput = document.getElementById('url');
    const añadirEnlaceBtn = document.getElementById('añadir-enlace');
    const linksList = document.getElementById('links');


    function cargarEnlaces() {
        const enlacesGuardados = JSON.parse(localStorage.getItem('enlaces')) || [];
        enlacesGuardados.forEach(enlace => {
            crearEnlaceDOM(enlace);
        });
    }


    function guardarEnlace(enlace) {
        const enlacesGuardados = JSON.parse(localStorage.getItem('enlaces')) || [];
        enlacesGuardados.push(enlace);
        localStorage.setItem('enlaces', JSON.stringify(enlacesGuardados));
    }


    function eliminarEnlaceDeLocalStorage(nombre) {
        const enlacesGuardados = JSON.parse(localStorage.getItem('enlaces')) || [];
        const nuevosEnlaces = enlacesGuardados.filter(enlace => enlace.nombre !== nombre);
        localStorage.setItem('enlaces', JSON.stringify(nuevosEnlaces));
    }

    function crearEnlaceDOM(enlace) {
        const li = document.createElement('li');
        li.classList.add('link-item');

        const a = document.createElement('a');
        a.textContent = enlace.nombre;
        a.href = enlace.url;
        a.target = '_blank';
        li.appendChild(a);

        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.classList.add('eliminar-enlace');
        eliminarBtn.addEventListener('click', () => {
            li.remove();
            eliminarEnlaceDeLocalStorage(enlace.nombre);
        });
        li.appendChild(eliminarBtn);

        linksList.appendChild(li);
    }

    añadirEnlaceBtn.addEventListener('click', () => {
        const nombre = enlaceInput.value.trim();
        const url = urlInput.value.trim();

        if (nombre && url) {
            const enlace = { nombre, url };
            crearEnlaceDOM(enlace);
            guardarEnlace(enlace);
            enlaceInput.value = '';
            urlInput.value = '';
        } else {
            alert('Por favor, completa ambos campos para añadir un enlace.');
        }
    });
    
    cargarEnlaces();
});
