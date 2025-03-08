const hamburgerButton = document.getElementById("hamburgerButton");
const contenedorDerecha = document.getElementById("contenedor-derecha");

// Por defecto, en pantallas pequeñas (CSS) #contenedor-derecha tendrá display: none
// Al hacer clic, lo mostramos/ocultamos con toggle
hamburgerButton.addEventListener("click", () => {
    // Si está oculto, lo mostramos
    if (contenedorDerecha.style.display === "none" || contenedorDerecha.style.display === "") {
        contenedorDerecha.style.display = "flex";
    } else {
        contenedorDerecha.style.display = "none";
    }
});