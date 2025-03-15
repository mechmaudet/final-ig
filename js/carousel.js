document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    if (gallery) {
        const carousel = new Flowbite.Carousel(gallery, {
            defaultPosition: 1, // Empieza desde la segunda imagen
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