document.addEventListener('DOMContentLoaded', function () {
  let tiempoTranscurrido = 120;

  // Función para obtener la hora actual en formato hh:mm:ss
 function obtenerHoraActual() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  }

  // Función para actualizar el conteo de la etiqueta y le boton cada 120 segundos
  function actualizarLabel() {
    const conteoElemento = document.getElementById('conteo');

    conteoElemento.textContent = tiempoTranscurrido;

    if (tiempoTranscurrido <= 0) {
      tiempoTranscurrido = 120; // Reiniciar a 120 segundos
      actualizarBoton(); // Actualizar la hora del botón
    } else {
      tiempoTranscurrido--;
    }
  }

function actualizarBoton(){
    const horaActualElemento = document.getElementById('horaActual');
    const horaActual = obtenerHoraActual();

    horaActualElemento.textContent = horaActual;

}

  // Actualizar el contenido de la etiqueta y la hora del botón al cargar la página
  actualizarLabel();
  actualizarBoton();

  // Actualizar el contenido de la etiqueta cada segundo
  setInterval(actualizarLabel, 1000);

  // Agregar un evento de clic al botón para reiniciar el contador y actualizar la hora
  const inboxButton = document.getElementById('inboxButton');
  inboxButton.addEventListener('click', function () {
    tiempoTranscurrido = 120; // Reiniciar a 120 segundos
    actualizarLabel();
    actualizarBoton();
  });
});




  
