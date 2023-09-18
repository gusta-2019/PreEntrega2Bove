var usuariosRegistrados = {}; // Objeto para almacenar los usuarios registrados
var correosRegistrados = []; // Almacenar los correos electrónicos registrados en un array

// Función para validar un correo electrónico
function validarCorreo(correo) {
    var correoRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return correoRegex.test(correo);
}

// Función para registrar un usuario
function registrarUsuario() {
    var nombre = prompt("Ingrese su nombre:");
    var edad = parseInt(prompt("Ingrese su edad:"));
    var correo;

    do {
        correo = prompt("Ingrese su correo electrónico:");
        if (correo === null) {
            // El usuario hizo clic en "Cancelar", salir del proceso de registro.
            return;
        }
        if (!validarCorreo(correo)) {
            alert("El correo electrónico ingresado no es válido. Por favor, inténtelo nuevamente o haga clic en 'Cancelar' para salir.");
        } else if (correosRegistrados.some(function (c) { return c === correo; })) {
            alert("El correo electrónico ya está en uso. Por favor, use otro o haga clic en 'Cancelar' para salir.");
            correo = null;
        }
    } while (correo === null || !correo);

    if (nombre && !usuariosRegistrados[nombre]) {
        if (edad >= 18) {
            usuariosRegistrados[nombre] = {
                edad: edad,
                correo: correo
            };
            correosRegistrados.push(correo); // Agregar el correo a la lista de correos registrados
            alert("Usuario registrado con éxito.");
        } else {
            alert("Debe ser mayor de 18 años para registrarse.");
        }
    } else if (!nombre) {
        alert("No ingresó un nombre válido.");
    } else {
        alert("El usuario ya existe. Puede acceder a vuelos.");
    }
}

// Función para verificar si el usuario está registrado
function verificarRegistro() {
    var nombre = prompt("Ingrese su nombre:");
    
    if (usuariosRegistrados[nombre]) {
        var usuario = usuariosRegistrados[nombre];
        var edad = usuario.edad;
        if (edad >= 18) {
            alert("Bienvenido, " + nombre + "!");
            window.location.href = "reservas.html"; // Redirecciona a vuelos.html si el usuario está registrado y es mayor de 18 años.
        } else {
            alert("Lo siento, debes ser mayor de 18 años para acceder.");
        }
    } else {
        alert("Usuario no registrado. Regístrese primero.");
    }
}