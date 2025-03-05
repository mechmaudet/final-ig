document.getElementById("form").addEventListener("submit", function(event) {
    let valid = true;

    // Obtener valores
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Expresión regular para validar email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validación de email
    if (!emailPattern.test(email)) {
        document.getElementById("error-email").classList.remove("hidden");
        valid = false;
    } else {
        document.getElementById("error-email").classList.add("hidden");
    }

    // Validación de asunto (mínimo 3 caracteres)
    if (subject.length < 3) {
        document.getElementById("error-subject").classList.remove("hidden");
        valid = false;
    } else {
        document.getElementById("error-subject").classList.add("hidden");
    }

    // Validación de mensaje (mínimo 10 caracteres)
    if (message.length < 10) {
        document.getElementById("error-message").classList.remove("hidden");
        valid = false;
    } else {
        document.getElementById("error-message").classList.add("hidden");
    }

    // Si hay algún error, evitar el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});