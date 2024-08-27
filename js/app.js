// Selecciona el elemento textarea con la clase "texto" y lo asigna a la variable 'campo_text'
const campo_text = document.querySelector(".texto");

// Selecciona el elemento textarea con la clase "mostrar__texto" y lo asigna a la variable 'mensaje'
const mensaje = document.querySelector(".mostrar__texto");

/**
 * Función para encriptar el texto introducido en el campo de entrada.
 * Valida primero si el texto cumple con las restricciones establecidas.
 * Si la validación falla, muestra un mensaje de alerta y no encripta.
 * Si la validación es exitosa, encripta el texto y lo muestra en el textarea de salida.
 */
function btnEncriptar() {
  const esValido = validarTexto(); // Valida el texto antes de proceder

  if (!esValido) {
    return; // Detiene la función si la validación falla
  }

  let textoValidado = campo_text.value.trim(); // Elimina espacios en blanco del texto

  if (textoValidado === "") {
    alert("Corrige los errores primero antes de encriptar el texto."); // Mensaje si el texto está vacío
  } else {
    let textoEncriptado = encriptacion(textoValidado); // Encripta el texto

    mensaje.style.backgroundImage = "none"; // Quita la imagen de fondo del textarea de salida
    mensaje.removeAttribute("readonly"); // Permite que el textarea de salida sea editable
    mensaje.style.cursor = "text"; // Cambia el cursor a modo de texto
    mensaje.focus(); // Coloca el cursor dentro del textarea de salida
    mensaje.value = textoEncriptado; // Muestra el texto encriptado en el textarea de salida
  }
}

/**
 * Función para desencriptar el texto introducido en el campo de entrada.
 * Toma el texto del campo de entrada, lo desencripta y lo muestra en el textarea de salida.
 */
function btnDesencriptar() {
  let textoValidado = campo_text.value.trim(); // Elimina espacios en blanco del texto
  let textoDesencriptado = desencriptacion(textoValidado); // Desencripta el texto
  mensaje.removeAttribute("readonly"); // Permite que el textarea de salida sea editable
  mensaje.style.cursor = "text"; // Cambia el cursor a modo de texto
  mensaje.focus(); // Coloca el cursor dentro del textarea de salida
  mensaje.value = textoDesencriptado; // Muestra el texto desencriptado en el textarea de salida
}

/**
 * Función para copiar el texto desencriptado del textarea de salida al portapapeles.
 * Selecciona el texto dentro del textarea, lo copia y muestra una alerta de confirmación.
 */
function btnCopiar() {
  mensaje.select(); // Selecciona el texto dentro del textarea de salida
  document.execCommand("copy"); // Copia el texto seleccionado al portapapeles
  alert("¡Texto copiado al portapapeles!"); // Muestra un mensaje de confirmación
}

/**
 * Función para validar el texto ingresado en el campo de entrada.
 * Solo permite letras, números y espacios, y elimina cualquier carácter especial.
 * Si se detectan caracteres especiales, muestra una alerta y elimina los caracteres inválidos.
 * Retorna 'true' si la validación es exitosa y 'false' si falla.
 */
function validarTexto() {
  const valor = campo_text.value; // Obtiene el valor del campo de entrada

  // Expresión regular que solo permite letras, números y espacios
  const regex = /^[a-zA-Z0-9\s]*$/;

  if (!regex.test(valor)) {
    alert("No se aceptan caracteres especiales."); // Muestra una alerta si el texto contiene caracteres especiales
    campo_text.value = valor.replace(/[^a-zA-Z0-9\s]/g, ""); // Elimina los caracteres especiales del texto
    return false; // Retorna 'false' si la validación falla
  }

  return true; // Retorna 'true' si la validación es exitosa
}

/**
 * Función para encriptar un texto dado.
 * Reemplaza ciertas vocales en el texto con secuencias de caracteres específicas.
 * Retorna el texto encriptado.
 */
function encriptacion(StringDesencriptado) {
  let matrizMensaje = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  StringDesencriptado = StringDesencriptado.toLowerCase(); // Convierte el texto a minúsculas

  // Recorre la matriz de reemplazos y aplica la encriptación
  for (let i = 0; i < matrizMensaje.length; i++) {
    if (StringDesencriptado.includes(matrizMensaje[i][0])) {
      StringDesencriptado = StringDesencriptado.replaceAll(
        matrizMensaje[i][0],
        matrizMensaje[i][1]
      );
    }
  }

  return StringDesencriptado; // Retorna el texto encriptado
}

/**
 * Función para desencriptar un texto dado.
 * Reemplaza las secuencias de caracteres específicas con sus correspondientes vocales.
 * Retorna el texto desencriptado.
 */
function desencriptacion(StringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  StringEncriptado = StringEncriptado.toLowerCase(); // Convierte el texto a minúsculas

  // Recorre la matriz de reemplazos y aplica la desencriptación
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (StringEncriptado.includes(matrizCodigo[i][1])) {
      StringEncriptado = StringEncriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return StringEncriptado; // Retorna el texto desencriptado
}
