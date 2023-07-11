/* document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario
    let formulario = document.getElementById('formulario');
  
    // Agregar un evento de escucha para el envío del formulario
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      // Obtener los valores de los campos del formulario
      let nombre = document.getElementById('nombre').value;
      let apellido = document.getElementById('apellido').value;
      let email = document.getElementById('email').value;
      let telefono = document.getElementById('telefono').value;
      let comentario = document.getElementById('comentario').value;
  
      // Construir el mensaje de alerta con la información del formulario
      let mensaje = 'Información Registrada:\n\n';
      mensaje += 'Nombre: ' + nombre + '\n';
      mensaje += 'Apellido: ' + apellido + '\n';
      mensaje += 'Email: ' + email + '\n';
      mensaje += 'Teléfono: ' + telefono + '\n';
      mensaje += 'Comentario: ' + comentario;
  
      // Mostrar la alerta con el mensaje
      alert(mensaje);
    });
  }); */


//otra validacion 
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('formulario').addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();

  let nombre = document.getElementById('nombre').value;
  if (usuario.length == 0) return alert('No has escrito nada en el nombre');

  let apellido = document.getElementById('apellido').value;
  if (apellido.length == 0) return alert('No has escrito nada en el nombre');

  let email = document.getElementById('email').value;
  if (email.length == 0) return alert('No has escrito nada en el correo electronico');
  if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) return false;
  
  let telefono = document.getElementById("telefono").value;
  if (!(/^\d{9}$/.test(telefono))) return false;



  this.submit();  //envia el formulario
}