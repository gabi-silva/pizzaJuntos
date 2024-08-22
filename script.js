

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío predeterminado del formulario
  
    // Obtener los valores de los campos
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('phone').value;
    var invitados = document.getElementById('guests').value;
    var ubicacion = document.getElementById('ubicacion').value;
    var fecha = document.getElementById('fecha').value;
    var mensaje = document.getElementById('mensaje').value;
  
    // Construir el mensaje de WhatsApp con formato mejorado
    var mensajeWhatsApp = 
      "*- DETALLES DEL EVENTO*" + "    " +
      "*- Nombre:* " + nombre + ", " + 
      "*- Email:* " + email + ", " + 
      "*- Teléfono:* " + telefono + ", " + 
      "*- Cantidad de invitados:* " + invitados + ", " + 
      "*- Ubicación:* " + ubicacion + ", " + 
      "*- Fecha:* " + fecha + ". " +
      "*- Mensaje adicional:* " + " " + mensaje;
  
    // Crear la URL para WhatsApp
    var url = "https://wa.me/5493544619403?text=" + encodeURIComponent(mensajeWhatsApp);
  
    // Redirigir a WhatsApp
    window.open(url, '_blank');
  });
  
  