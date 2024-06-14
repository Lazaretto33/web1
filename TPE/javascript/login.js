const captcha = document.querySelector(".captcha"),
      reloadBtn = document.querySelector(".reload-btn"),
      inputField = document.querySelector(".input-area input"),
      checkBtn = document.querySelector(".check-btn"),
      statusTxt = document.querySelector(".status-text"),
      buttonLogin = document.getElementById("button_login"),
      nombreUsuario = document.getElementById("nombreUsuario"),
      contraseña = document.getElementById("contraseña");

// Pongo todos los caracteres del captcha en un array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Generar el captcha
function getCaptcha() {
  captcha.innerText = ''; // Limpiar captcha antes de generar uno nuevo
  for (let i = 0; i < 6; i++) { // Tomo 6 digitos del array
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; // Paso los 6 codigos random al innerText
  }
}
getCaptcha(); // Llamamos al getCaptcha

// Llamamos a getCaptcha y a removeContent en el botón de actualizar captcha
reloadBtn.addEventListener("click", () => {
  removeContent();
  getCaptcha();
});

checkBtn.addEventListener("click", e => {
  e.preventDefault();
  statusTxt.style.display = "block";
  // Agregando espacio después de cada carácter de los valores ingresados por el usuario porque agregué espacios al generar captcha
  let inputVal = inputField.value.split('').join(' ');
  if (inputVal == captcha.innerText.trim()) { // Si el captcha es correcto
    statusTxt.style.color = "rgb(17 252 0)";
    statusTxt.innerText = "No sos un Robot.";
    setTimeout(() => { // Llamando a removeContent y getCaptcha despues de 2 segundos
      removeContent();
      getCaptcha();
    }, 2000);
  } else {
    statusTxt.style.color = "red";
    statusTxt.innerText = "Por favor, vuelve a intentarlo.";
  }
});

function removeContent() {
  inputField.value = "";
  captcha.innerText = "";
  statusTxt.style.display = "none";
}

// Validar campos y captcha antes de permitir el inicio de sesión
buttonLogin.addEventListener("click", () => {
  if (nombreUsuario.value === '' || contraseña.value === '' || statusTxt.innerText !== "No sos un Robot.") {
    statusTxt.innerText = "Por favor, rellena todos los campos y verifica el captcha.";
  } else {
    // Redireccion a home.html si todo es correcto
    window.location.href = "home.html";
  }
});