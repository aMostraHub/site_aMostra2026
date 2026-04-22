function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        
    }
}

// Definindo a data-alvo para 28 de etembro de 2026, às 08:00
const targetDate = new Date("September 28, 2026 08:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calcula os dias, horas, minutos e segundos
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Exibe os valores no HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Se a contagem regressiva acabar, exibe uma mensagem
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Chegou a data!";
    }
}, 1000);

// Carousel splide.js

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type    : 'loop',      
      focus: 'center',       
      perPage : 1,
      perMove : 1,
      rewind  : true,
      autoplay: true,         
      interval: 8000,         // tempo entre slides (em ms), coloquei 8 segundos. 
      pauseOnHover: true,     // pausa se passar o mouse em cima
      breakpoints:{
        640:{
            padding : "0rem"
        }
    },
    padding: '5rem',
    gap: '1rem'
    });
    
    var bar = document.querySelector('.my-slider-progress-bar');
  
    splide.on('mounted move', function () {
      var end  = splide.Components.Controller.getEnd() + 1;
      var rate = Math.min((splide.index + 1) / end, 1);
      bar.style.width = String(100 * rate) + '%';
    });
  
    splide.mount();
  });
  
