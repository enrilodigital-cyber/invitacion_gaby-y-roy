// ==========================
// ELEMENTOS
// ==========================

const botonAbrir = document.getElementById("abrir");

const bienvenida = document.getElementById("bienvenida");

const contenido = document.getElementById("contenido");

const musica = document.getElementById("musica");

// ==========================
// ABRIR INVITACIÓN
// ==========================

botonAbrir.addEventListener("click", () => {

    // Reproducir música
    musica.play().catch(() => {});

    // Animación de salida
    bienvenida.style.opacity = "0";

    bienvenida.style.transition = "1s";

    setTimeout(() => {

        bienvenida.style.display = "none";

        contenido.style.display = "block";

        contenido.style.animation = "fadeIn 1.5s";

    },1000);

});