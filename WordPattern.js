function encuentraPosicionPalabraEncriptada(palabrasEncriptadas, patron) {
  // Convertimos el patrón a una lista de diferencias de caracteres
  let diferencias = [];
  for (let i = 1; i < patron.length; i++) {
      diferencias.push(patron.charCodeAt(i) - patron.charCodeAt(i - 1));
  }
  console.log(diferencias)
  // Recorremos cada palabra en el array de palabras encriptadas
  for (let i = 0; i < palabrasEncriptadas.length; i++) {
      let palabra = palabrasEncriptadas[i];
      
      // Verificamos si la palabra sigue el patrón dado
      if (palabra.length === patron.length) {
          let esPatronValido = true;
          for (let j = 1; j < palabra.length; j++) {
              // Calculamos la diferencia entre los caracteres adyacentes
              let diferenciaActual = palabra.charCodeAt(j) - palabra.charCodeAt(j - 1);
              // Comparamos la diferencia calculada con el patrón
              if (diferenciaActual !== diferencias[j - 1]) {
                  esPatronValido = false;
                  break;
              }
          }
          if (esPatronValido) {
              return i;
          }
      }
  }

  // Si no se encuentra ninguna palabra que siga el patrón, retornamos -1
  return -1;
}

// Ejemplo de uso
let palabrasEncriptadas = ["xrncfxl", "rcncdtc", "fgjkc"];
let patron = "palabra";
let posicion = encuentraPosicionPalabraEncriptada(palabrasEncriptadas, patron);
console.log("La posición de la palabra encriptada es:", posicion);
