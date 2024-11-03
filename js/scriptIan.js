//---------------------CONTADOR DE TIEMPO-----------------------------------------------

// Fecha objetivo (29 de diciembre del año actual)
const countdownDate = new Date(new Date().getFullYear(), 11, 29, 0, 0, 0).getTime();

// Actualizar la cuenta regresiva cada segundo
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = countdownDate - now;

  // Cálculo de días, horas, minutos y segundos
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Mostrar valores en HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Detener la cuenta regresiva al llegar a cero
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = "<h1>¡Felicidades por su boda!</h1>";
  }
}, 1000);




//---------------MUSICA---------------------------------------------------------

const audio = document.querySelector('audio');

audio.volume = 0.2;
const playPauseButton = document.querySelector('.play-pause-btn');
const currentTimeSpan = document.querySelector('.current-time');
const totalTimeSpan = document.querySelector('.total-time');

// Cargar el tiempo total al cargar el audio
audio.addEventListener('loadedmetadata', () => {
  totalTimeSpan.textContent = formatTime(audio.duration);
  audio.currentTime = 6;
});

// Reproducir o pausar el audio al hacer clic en el botón
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    playPauseButton.querySelector('path').setAttribute('d', 'M6 4h2v16H6zm6 0h2v16h-2z'); // Cambiar a pausa
  } else {
    audio.volume = 0.2;
    audio.pause();
    playPauseButton.querySelector('path').setAttribute('d', 'M18 12L0 24V0'); // Cambiar a play
  }
});

// Actualizar el tiempo actual y el progreso
audio.addEventListener('timeupdate', () => {
  currentTimeSpan.textContent = formatTime(audio.currentTime);
  const progress = (audio.currentTime / audio.duration) * 100;
  document.getElementById('progress-pin').style.left = `${progress}%`;
});

// Formatear el tiempo en minutos y segundos
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}



/*-----------------------------FORMULARIO------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos todos los enlaces con la clase .btnConfirmacion
  const btnConfirmaciones = document.querySelectorAll('.btnConfirmacion');
  const asisitireDiv = document.querySelector('.asisitireDiv');
  const closeForm = document.querySelector('.close-form');

  // Crear el fondo overlay
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  // Agregamos el evento click a cada botón de confirmación
  btnConfirmaciones.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault(); // Evita que el enlace recargue la página
      asisitireDiv.classList.add('active');
      overlay.classList.add('active');
    });
  });

  // Cerrar el div y el fondo al hacer clic en el icono de cerrar o en el overlay
  closeForm.addEventListener('click', function () {
    asisitireDiv.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', function () {
    asisitireDiv.classList.remove('active');
    overlay.classList.remove('active');
  });
});



/*----------PLAYLIST-------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  const btnMusica = document.querySelector('.btnMusica');
  const musicaForm = document.querySelector('.musicaForm');
  const closeMusica = document.querySelector('.close-musica');
  const overlayMusica = document.createElement('div');
  overlayMusica.className = 'overlay-musica';
  document.body.appendChild(overlayMusica);

  // Mostrar la ventana emergente al hacer clic en "SUGERIR MUSICA"
  btnMusica.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar que el enlace recargue la página
    musicaForm.classList.add('active');
    overlayMusica.classList.add('active');
  });

  // Cerrar la ventana emergente al hacer clic en el icono de cerrar
  closeMusica.addEventListener('click', function () {
    musicaForm.classList.remove('active');
    overlayMusica.classList.remove('active');
  });

  // Cerrar la ventana emergente al hacer clic en el overlay
  overlayMusica.addEventListener('click', function () {
    musicaForm.classList.remove('active');
    overlayMusica.classList.remove('active');
  });
});



/*-----------regalo----------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  const btnRegalo = document.querySelector('.btnRegalo');
  const regaloModal = document.querySelector('.regaloModal');
  const closeModal = document.querySelector('.closeModal');

  // Mostrar el modal al hacer clic en "VER DATOS"
  btnRegalo.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del enlace
    regaloModal.style.display = 'flex'; // Mostrar el modal
  });

  // Cerrar el modal al hacer clic en el botón de cerrar
  closeModal.addEventListener('click', function () {
    regaloModal.style.display = 'none'; // Ocultar el modal
  });

  // Cerrar el modal al hacer clic fuera del contenido
  regaloModal.addEventListener('click', function (event) {
    if (event.target === regaloModal) { // Verifica si se hizo clic en el fondo
      regaloModal.style.display = 'none'; // Ocultar el modal
    }
  });
});