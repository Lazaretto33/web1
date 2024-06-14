// Funcion para el boton "User" que te envia a la pestaña LOGIN.
document.getElementById("button_user").addEventListener("click", function() {
  // Redireccion a login.html
  window.location.href = "login.html";
});

// Funcion para el boton "Home" que te envia a la pestaña Home.
document.getElementById("button_home").addEventListener("click", function() {
  // Redireccion a login.html
  window.location.href = "home.html";
});

// Funcion para el boton "Mi Musica" que te envia a la pestaña Musica.
document.getElementById("button_musica").addEventListener("click", function() {
  // Redireccion a login.html
  window.location.href = "musica.html";
});

// Funcion para que el header me siga en la web.
var prevScrollpos = window.pageYOffset;
var headerHeight = document.getElementById("header").offsetHeight;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var header = document.getElementById("header");
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = `-${headerHeight}px`; // Oculta completamente el header al moverlo fuera de la pantalla
  }
  prevScrollpos = currentScrollPos;
}

// Función para desplazarse suavemente hacia arriba de la página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mostrar o ocultar el botón de volver arriba de la página según la posición del scroll
window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 300) { // ajusta este valor según tu preferencia
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

//Boton contacto Header.
document.addEventListener('DOMContentLoaded', function() {
  // Capturar el botón de contacto
  const contactoBtn = document.querySelector('.item_contacto');
  
  // Añadir un evento de clic al botón
  contactoBtn.addEventListener('click', function() {
      // Encontrar el contenedor de contacto
      const contactoSection = document.getElementById('contacto');
      
      // Desplazarse suavemente al contenedor de contacto
      contactoSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Obtención de los elementos del DOM
document.getElementById('submitBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const notification = document.getElementById('notification');

  // Comprobar si todos los campos están llenos
  if (name && email && subject && message) {
    // Mostrar notificación de éxito
    notification.className = 'notification success'; // Añadir clase de éxito
    notification.innerText = 'Formulario enviado exitosamente!';
    notification.style.display = 'block'; // Mostrar la notificación
    setTimeout(() => {
      notification.style.display = 'none'; // Ocultar la notificación después de 3 segundos
    }, 3000);

    // Simulación de envío del formulario
    setTimeout(() => {
      // Limpiar los campos del formulario
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
    }, 3000);
  } else {
    // Mostrar notificación de error
    notification.className = 'notification error'; // Añadir clase de error
    notification.innerText = 'No se han completado los campos';
    notification.style.display = 'block'; // Mostrar la notificación
    setTimeout(() => {
      notification.style.display = 'none'; // Ocultar la notificación después de 3 segundos
    }, 3000);
  }
})