///// VARIABLES GLOBALES

// Preguntas
let preg = document.querySelector("#p");
let preguntaActual; 
let preguntasSeleccionadas = []; // Guarda las 10 preguntas 
let indicePreguntaActual = 0; // Para ir pasando las preguntas

// Respuestas
let resp = document.querySelector("#r");
let opciones = document.querySelectorAll("#r li");

// Botón jugar
let jugar = document.querySelector("#jugar");

// Puntos
let puntos = document.querySelector("#puntos");

let puntosJ = 0; // Puntos jugador
let nombreJ = ""; // Para Tabla de posiciones

//Errores
let erroresP = document.querySelector("#errores");

let erroresJ = 0;

// Timer
let timer = document.querySelector("#tiempo");

let tiempo = 0;
let limite = 40;
let intervalo; // Variable global para manejar el temporizador

// Preguntas y respuestas con utilización de la IA
const preguntasyRespuestas = [
  {
    pregunta: "¿Cómo se llama la madrina de Fleabag?",
    respuestas: ["Sarah", "No se sabe", "Anne"],
    correcta: "No se sabe"
  },
  {
    pregunta: "¿Qué tipo de negocio tiene Fleabag?",
    respuestas: ["Una cafetería temática de conejillos de Indias", "Una librería que tambien es un café", "Un restaurante con temática de hamsters"],
    correcta: "Una cafetería temática de conejillos de Indias"
  },
  {
    pregunta: "¿Cómo se llama la hermana de Fleabag?",
    respuestas: ["Olivia", "Claire", "Sophie"],
    correcta: "Claire"
  },
  {
    pregunta: "¿Qué objeto inusual es central en la historia de la primera temporada?",
    respuestas: ["Un cuadro", "Una estatua", "Un diario"],
    correcta: "Una estatua"
  },
  {
    pregunta: "¿Cómo se llama el personaje interpretado por Andrew Scott?",
    respuestas: ["The Priest", "The Teacher", "The Doctor"],
    correcta: "The Priest"
  },
  {
    pregunta: "¿Qué animal simboliza el caos en la segunda temporada?",
    respuestas: ["Un perro", "Un zorro", "Un gato"],
    correcta: "Un zorro"
  },
  {
    pregunta: "¿Qué significa la palabra 'Fleabag'?",
    respuestas: ["Una expresión de cariño", "Una persona desordenada y problemática", "Un tipo de bolso"],
    correcta: "Una persona desordenada y problemática"
  },
  {
    pregunta: "¿Dónde se conocieron Fleabag y el 'Hot Priest'?",
    respuestas: ["En una cena", "En la iglesia", "En una fiesta"],
    correcta: "En una cena"
  },
  {
    pregunta: "¿Qué famoso escritor menciona Fleabag en la primera temporada?",
    respuestas: ["Virginia Woolf", "Ernest Hemingway", "Jane Austen"],
    correcta: "Virginia Woolf"
  },
  {
    pregunta: "¿Cómo rompe Fleabag la cuarta pared?",
    respuestas: ["Usando voz en off", "Mirando directamente a la cámara y hablando con el público", "Escribiendo en un diario"],
    correcta: "Mirando directamente a la cámara y hablando con el público"
  },
  {
    pregunta: "¿Cuál es el verdadero nombre de Fleabag en la serie?",
    respuestas: ["No se menciona", "Elizabeth", "Frances"],
    correcta: "No se menciona"
  },
  {
    pregunta: "¿Qué frase dice el sacerdote cuando Fleabag rompe la cuarta pared por primera vez frente a él?",
    respuestas: ["¿Qué fue eso?", "¿A quién mirás?", "¿Por qué hiciste eso?"],
    correcta: "¿Qué fue eso?"
  },
  {
    pregunta: "¿Qué instrumento musical toca Claire?",
    respuestas: ["Violín", "Clarinete", "Piano"],
    correcta: "Clarinete"
  },
  {
    pregunta: "¿Por qué Claire no se corta el cabello cuando Fleabag la lleva a la peluquería?",
    respuestas: ["Porque decide esperar a que crezca más", "Porque su esposo la obliga a mantenerlo largo", "Porque el peluquero se niega a cortarlo"],
    correcta: "Porque el peluquero se niega a cortarlo"
  },
  {
    pregunta: "¿Cómo se llama el amante finlandés de Claire?",
    respuestas: ["Arttu", "Klare", "Klareance"],
    correcta: "Klareance"
  },
  {
    pregunta: "¿Qué personaje dice la frase 'Hair is everything'?",
    respuestas: ["Fleabag", "Claire", "El peluquero"],
    correcta: "Fleabag"
  },
  {
    pregunta: "¿Quién roba la estatua en la primera temporada?",
    respuestas: ["Fleabag", "Claire", "Martin"],
    correcta: "Fleabag"
  },
  {
    pregunta: "¿Cómo se llama el padrastro de Fleabag?",
    respuestas: ["No tiene nombre en la serie", "Edward", "Jonathan"],
    correcta: "No tiene nombre en la serie"
  },
  {
    pregunta: "¿Qué comida lleva Claire a la entrega de premios y termina en el suelo?",
    respuestas: ["Una tarta de queso", "Una caja de donas", "Un pastel de chocolate"],
    correcta: "Una tarta de queso"
  },
  {
    pregunta: "¿Qué regalo le da Fleabag a Claire para su cumpleaños?",
    respuestas: ["Un masaje", "Un viaje de spa", "Un libro"],
    correcta: "Un viaje de spa"
  },
  {
    pregunta: "¿Cómo se llama la mujer con la que Fleabag tiene una breve relación en la segunda temporada?",
    respuestas: ["Belinda", "Eleanor", "Jessica"],
    correcta: "Belinda"
  },
  {
    pregunta: "¿Qué personaje dice 'Love is awful'?",
    respuestas: ["La madrina", "El sacerdote", "Fleabag"],
    correcta: "El sacerdote"
  },
  {
    pregunta: "¿Cómo describe el sacerdote a Fleabag cuando le dice que no pueden estar juntos?",
    respuestas: ["Como alguien que 'trae el caos'", "Como la persona más complicada que ha conocido", "Como una tentación"],
    correcta: "Como alguien que 'trae el caos'"
  },
  {
    pregunta: "¿Qué tiene tatuado Martin en el cuerpo?",
    respuestas: ["El nombre de Claire", "Una telaraña en la espalda", "Un dragón en el brazo"],
    correcta: "Una telaraña en la espalda"
  },
  {
    pregunta: "¿Qué libro lee Fleabag en el último episodio?",
    respuestas: ["El amor en los tiempos del cólera", "Las olas", "Mujer en punto cero"],
    correcta: "Las olas"
  }
];

// Ocultar todo
p.style.visibility = "hidden";
r.style.visibility = "hidden";

///////////////////// EVENTOS

// Boton jugar para empezar juego
jugar.addEventListener("click", function(){ 
  iniciarJuego();
  nombreJ = prompt("Escribí tu nombre", "");

  if(nombreJ){

  // Ocultar boton de jugar
  jugar.style.visibility = "hidden";

  tiempo = 0; // Reinicia el tiempo
  timer.innerHTML = tiempo; // Muestra el tiempo inicial

  // Mostrar preguntas y respuestas
  preg.style.visibility = "visible";
  resp.style.visibility = "visible";

  clearInterval(intervalo); // Elimina cualquier intervalo previo

  intervalo = setInterval(function() {
      tiempo++;
      timer.innerHTML = `00:${tiempo.toString().padStart(2, "0")}`; // padstart se asegura que siempre se tengan 2 cifras
      tiempoLimite();
  }, 1000);} else { //si no ponen un nombre no pueden jugar
    alert("Porfavor ingrese un nombre para jugar");}

  // ALMACENAMIENTO DE NOMBRE
  localStorage.setItem("nombreJ", nombreJ);
});

// Para pasar a la siguiente pregunta cuando se elige una opción
for (let i = 0; i < opciones.length; i++) {
  opciones[i].addEventListener("click", function () {
    let opcionSeleccionada = opciones[i];
    let respuestaCorrecta = preguntasSeleccionadas[indicePreguntaActual].correcta;

    if (opcionSeleccionada.innerText === respuestaCorrecta) {
        opcionSeleccionada.style.backgroundColor = "green";
        puntosJ++;
        puntos.innerHTML = `${puntosJ} puntos`;
    } else {
        opcionSeleccionada.style.backgroundColor = "red";
        erroresJ++;
        erroresP.innerHTML = `${erroresJ} errores`;

        // Resalta la respuesta correcta en verde
        for (let j = 0; j < opciones.length; j++) {
          if (opciones[j].innerText === respuestaCorrecta) {
            opciones[j].style.backgroundColor = "green";
          }
        }
    }

  // Deshabilita temporalmente los clics en las opciones
  for (let j = 0; j < opciones.length; j++) {
    opciones[j].style.pointerEvents = "none";
  }

    // Pasar a la siguiente pregunta después de un segundo
    setTimeout(() => {
      indicePreguntaActual++;
      resetearColores();
      mostrarNuevaPregunta();

    // Habilitar nuevamente los clics en las opciones
    for (let j = 0; j < opciones.length; j++) {
      opciones[j].style.pointerEvents = "auto";
    }
    }, 1000);
  });
}

/////////// FUNCIONES

// TIMER
function tiempoLimite() {
    if(tiempo >= limite){
        clearInterval(intervalo); // Detiene el temporizador al llegar al límite

        let finDelTiempo = confirm("Se acabo el tiempo! Quiere volver a comenzar?");
         
        if (finDelTiempo){
            reset();
        } else {
            window.location.href = "../pagina/index.html"; // Te lleva al home si no queres seguir jugando 
        }
    }
}

// Mezcla las preguntas y selecciona las primeras 10
function iniciarJuego() {
  // Guarda en el array vacío las 10 preguntas
  preguntasSeleccionadas = preguntasyRespuestas.sort(() => Math.random() - 0.5).slice(0, 10);
  indicePreguntaActual = 0;
  puntosJ = 0;
  erroresJ = 0;
  mostrarNuevaPregunta(); 
}


function mostrarNuevaPregunta() {
  // Lee si ya se hicieron las 10 preguntas
  if (indicePreguntaActual >= preguntasSeleccionadas.length) {
    clearInterval(intervalo); // Detiene el temporizador al finalizar el juego
    alert(`Juego terminado. ${nombreJ} tu puntaje final es: ${puntosJ} puntos. Tuviste ${erroresJ} errores.`);
    reset();
    return;
  }

  // Muestra las preguntas en la pantalla
  preguntaActual = preguntasSeleccionadas[indicePreguntaActual];
  preg.innerText = preguntaActual.pregunta;

  // Asignar opciones a cada li
  for (let i = 0; i < opciones.length; i++) {
      opciones[i].innerText = preguntaActual.respuestas[i];
  }
}

// Función para resetear colores antes de la siguiente pregunta
function resetearColores() {
  for (let i = 0; i < opciones.length; i++) {
      opciones[i].style.backgroundColor = ""; // Vuelve al color original
  }
}

// Resetear juego 
function reset(){
  clearInterval(intervalo); // Detiene el temporizador antes de reiniciar el juego

  if (nombreJ) {
    // Guardar el resultado en el localStorage
    let tabla = JSON.parse(localStorage.getItem("tablaPosiciones")) || [];
    
    // Agregar el nuevo resultado
    tabla.push({ nombre: nombreJ, puntos: puntosJ, errores: erroresJ });
    
    // Guardar en el localStorage
    localStorage.setItem("tablaPosiciones", JSON.stringify(tabla));

    mostrarTablaPosiciones();
  }

  // Reiniciar variables
  puntosJ = 0;
  erroresJ = 0;
  indicePreguntaActual = 0;
  tiempo = 0;
  
  // Ocultar preguntas y respuestas
  preg.style.visibility = "hidden";
  resp.style.visibility = "hidden";
  
  // Mostrar nuevamente el botón de jugar
  jugar.style.visibility = "visible";

  // Reiniciar el puntaje en pantalla
  puntos.innerHTML = "0 puntos";
  erroresP.innerHTML = "0 errores";
  timer.innerHTML = "00:00";
}

///////////// TABLA DE POSICIONES
function mostrarTablaPosiciones() {
  let tabla = JSON.parse(localStorage.getItem("tablaPosiciones")) || [];

  tabla.sort((a, b) => {
    if (b.puntos !== a.puntos) {
        return b.puntos - a.puntos; // Ordenar por puntos de mayor a menor
    }
    return a.errores - b.errores; // En caso de empate, ordenar por errores de menor a mayor
  });

  // Iterar sobre las filas de la tabla (de 1 a 5 jugadores)
  for (let i = 0; i < 5; i++) {
    let nombreTabla = document.getElementById(`nombreJ${i + 1}`);
    let puntosTabla = document.getElementById(`puntos${i + 1}`);
    let erroresTabla = document.getElementById(`errores${i + 1}`);

    if (tabla[i]) {
      nombreTabla.innerText = tabla[i].nombre;
      puntosTabla.innerText = tabla[i].puntos;
      erroresTabla.innerText = tabla[i].errores || 0; // Mostrar 0 si no hay errores registrados
    } else {
      nombreTabla.innerText = "";
      puntosTabla.innerText = "";
      erroresTabla.innerText = "";
    }
  }
}

// Llamar a mostrarTabla() al cargar la página
document.addEventListener("DOMContentLoaded", mostrarTablaPosiciones);