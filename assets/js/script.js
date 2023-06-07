document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario
    var formulario = document.getElementById('formulario');
  
    // Agregar un evento de escucha para el envío del formulario
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      // Obtener los valores de los campos del formulario
      var nombre = document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var email = document.getElementById('email').value;
      var telefono = document.getElementById('telefono').value;
      var comentario = document.getElementById('comentario').value;
  
      // Construir el mensaje de alerta con la información del formulario
      var mensaje = 'Información Registrada:\n\n';
      mensaje += 'Nombre: ' + nombre + '\n';
      mensaje += 'Apellido: ' + apellido + '\n';
      mensaje += 'Email: ' + email + '\n';
      mensaje += 'Teléfono: ' + telefono + '\n';
      mensaje += 'Comentario: ' + comentario;
  
      // Mostrar la alerta con el mensaje
      alert(mensaje);
    });
  });
  