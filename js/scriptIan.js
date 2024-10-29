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
/*
    const playPauseButton = document.getElementById('playPauseButton');
    const musica = document.getElementById('musica');

    playPauseButton.addEventListener('click', () => {
        if (musica.paused) {
            musica.play();
            playPauseButton.textContent = '❚❚';  // Cambia a pausa
        } else {
            musica.pause();
            playPauseButton.textContent = '►';  // Cambia a play
        }
    });
*/
/*
const playPauseButton = document.getElementById('playPauseButton');
    const musica = document.getElementById('musica');

    // Detectar el primer clic o toque en cualquier parte de la página
    document.body.addEventListener('click', () => {
        if (musica.paused) {
            musica.play();
            playPauseButton.textContent = '<img src="../assets/music/pausa.png" id="playPauseImage" alt="pausa">';  // Cambia a pausa
        }
    }, { once: true });  // Se ejecuta una sola vez

    playPauseButton.addEventListener('click', () => {
        if (musica.paused) {
            musica.play();
            playPauseButton.textContent = '<img src="../assets/music/pausa.png" id="playPauseImage" alt="pausa">';  // Cambia a pausa
        } else {
            musica.pause();
            playPauseButton.textContent = '<img src="../assets/music/reproductor-de-musica.png" id="playPauseImage" alt="play">';  // Cambia a play
        }
    });


*/
window.addEventListener('load', () => {
    musica.volume = 0.1; // Volumen inicial al 10%
});

const playPauseButton = document.getElementById('playPauseButton');
const playPauseImage = document.getElementById('playPauseImage');
const musica = document.getElementById('musica');

/*
// Detectar el primer clic o toque en cualquier parte de la página
document.body.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        playPauseImage.src = '../assets/img/boton play/pausa.png'; // Cambia la imagen a pausa
    }
}, {
    once: true
}); // Se ejecuta una sola vez
*/

playPauseButton.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        playPauseImage.src = '../assets/img/boton play/pausa.png'; // Cambia la imagen a pausa
    } else {
        musica.pause();
        playPauseImage.src = '../assets/img/boton play/boton-de-play.png'; // Cambia la imagen a play
    }
});