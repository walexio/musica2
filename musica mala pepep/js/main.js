var audio = document.getElementById("mi-audio");
var boton = document.getElementById("play_and_pause");

function toggleReproduccion() {
    if (audio.paused) {
      audio.play();
      boton.innerHTML = '<img src="img/pausa.png" alt="Botón de pausar">'
    } else {
      audio.pause();
      play.innerHTML = '<img src="img/boton-de-play.png" alt=""></button>'
    }
  }
  
  audio.addEventListener("play", function() {
    boton.innerHTML = '<img src="img/pausa.png" alt="Botón de pausar">'
  });
  
  audio.addEventListener("pause", function() {
    boton.innerHTML = '<img src="img/boton-de-play.png" alt=""></button>'
  });