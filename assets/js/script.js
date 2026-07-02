const btnEntrar = document.getElementById("btnEntrar");
const bienvenida = document.getElementById("bienvenida");
const musica = document.getElementById("musica");

btnEntrar.addEventListener("click", () => {
    musica.play().catch(() => {});
    bienvenida.classList.add("ocultar");
});

/* CUENTA REGRESIVA */
const fechaEvento = new Date("July 18, 2026 16:00:00").getTime();

function actualizarContador(){
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);
actualizarContador();
setInterval(actualizarContador, 1000);

/* ============================
   CARRUSEL AUTOMÁTICO
============================ */

const carrusel = document.querySelector(".galeria-carrusel");

if (carrusel) {

    let posicion = 0;

    setInterval(() => {

        const ancho = carrusel.clientWidth * 0.82;

        posicion += ancho;

        if (posicion >= carrusel.scrollWidth - carrusel.clientWidth) {
            posicion = 0;
        }

        carrusel.scrollTo({
            left: posicion,
            behavior: "smooth"
        });

    }, 3500);

}
