let botonT = document.querySelector("#todosB");
let botonI = document.querySelector("#indumentariaB");
let botonTa = document.querySelector("#tazasB");
let botonL = document.querySelector("#librosB");
let botonO = document.querySelector("#otrosB");

// Selecciona TODOS los elementos de cada categoría
let indumentaria = document.querySelectorAll(".indumentaria");
let tazas = document.querySelectorAll(".tazas");
let libros = document.querySelectorAll(".libros");
let otros = document.querySelectorAll(".otros");

// Función para ocultar todo
function ocultarTodo() {
    document.querySelectorAll(".indumentaria, .tazas, .libros, .otros").forEach(el => {
        el.style.display = "none";
    });
}

// Mostrar solo la categoría seleccionada
function mostrarCategoria(categoria) {
    ocultarTodo();
    categoria.forEach(el => {
        el.style.display = "block"; 
    });
}

// Eventos para cada botón
botonI.addEventListener("click", () => mostrarCategoria(indumentaria));
botonTa.addEventListener("click", () => mostrarCategoria(tazas));
botonL.addEventListener("click", () => mostrarCategoria(libros));
botonO.addEventListener("click", () => mostrarCategoria(otros));

// Mostrar todos los elementos
botonT.addEventListener("click", () => {
    document.querySelectorAll(".indumentaria, .tazas, .libros, .otros").forEach(el => {
        el.style.display = "block"; 
    });
});


