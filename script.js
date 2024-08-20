// Cierra el menú al hacer clic en cualquier enlace de navegación
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});

// Cierra el menú al hacer clic en cualquier parte fuera del menú
document.addEventListener('click', function(event) {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const isClickInside = navbarCollapse.contains(event.target);
  const isMenuToggle = event.target.closest('.navbar-toggler');

  // Si haces clic fuera del menú o vuelves a tocar el botón de menú
  if (!isClickInside || isMenuToggle) {
    navbarCollapse.classList.remove('show');
  }
});

// Array de imágenes
const images = [
  './img/nosotros/mozos01.jpg',
  './img/nosotros/mozos02.jpg',
  './img/nosotros/mozos03.jpg',
  './img/nosotros/mozos04.jpg',
  './img/nosotros/mozos05.jpg',
  './img/nosotros/mozos06.jpg',
  './img/nosotros/mozos07.jpg'
];

const imgElement = document.getElementById('dynamic-image');

function changeImage() {
  // Desvanecer la imagen actual
  imgElement.classList.add('fade-out');

  // Esperar hasta que la animación de desvanecimiento termine
  setTimeout(() => {
    // Cambiar la imagen a una nueva de forma aleatoria
    const randomImage = images[Math.floor(Math.random() * images.length)];
    imgElement.src = randomImage;

    // Desvanecer la imagen nueva
    imgElement.classList.remove('fade-out');
    imgElement.classList.add('fade-in');
  }, 1000); // Coincide con el tiempo de animación de fadeOut
}

// Cambiar la imagen cada 5 segundos
setInterval(changeImage, 3000);


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
  
  