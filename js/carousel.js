document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    if (gallery) {
        const carousel = new Flowbite.Carousel(gallery, {
            defaultPosition: 1, // Empieza desde la segunda imagen
            interval: 3000, // Cambia cada 3 segundos
        });

        // Botón "Anterior"
        document.querySelector("[data-carousel-prev]").addEventListener("click", () => {
            carousel.prev();
        });

        // Botón "Siguiente"
        document.querySelector("[data-carousel-next]").addEventListener("click", () => {
            carousel.next();
        });
    }
});