function toggleMenu() {
    var menu = document.getElementById("menu");
    if (!menu) return;
    // Alterna a classe 'hidden' (em vez de style.display inline): assim o
    // 'md:block' do Tailwind volta a valer ao redimensionar para desktop.
    var isHidden = menu.classList.toggle("hidden");
    var btn = document.querySelector('[onclick="toggleMenu()"]');
    if (btn) btn.setAttribute("aria-expanded", String(!isHidden));
}

// Dropdown "Conheça a aMostra" no menu principal (clique, funciona igual no
// mobile e no desktop). Fecha os demais dropdowns e fecha ao clicar fora.
function toggleDropdown(btn) {
    var panel = btn.nextElementSibling;
    if (!panel) return;
    var isOpen = !panel.classList.contains("hidden");
    document.querySelectorAll(".dropdown-panel").forEach(function (p) {
        if (p !== panel) p.classList.add("hidden");
    });
    document.querySelectorAll(".dropdown-btn").forEach(function (b) {
        if (b !== btn) { b.setAttribute("aria-expanded", "false"); b.classList.remove("dropdown-open"); }
    });
    panel.classList.toggle("hidden", isOpen);
    btn.setAttribute("aria-expanded", String(!isOpen));
    btn.classList.toggle("dropdown-open", !isOpen);
}
document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown-wrap")) {
        document.querySelectorAll(".dropdown-panel").forEach(function (p) { p.classList.add("hidden"); });
        document.querySelectorAll(".dropdown-btn").forEach(function (b) {
            b.setAttribute("aria-expanded", "false");
            b.classList.remove("dropdown-open");
        });
    }
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        document.querySelectorAll(".dropdown-panel").forEach(function (p) { p.classList.add("hidden"); });
        document.querySelectorAll(".dropdown-btn").forEach(function (b) {
            b.setAttribute("aria-expanded", "false");
            b.classList.remove("dropdown-open");
        });
    }
});

// Atualizando a data para 28 de setembro de 2026, às 08:00
const targetDate = new Date("September 28, 2026 08:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const countdownFunction = setInterval(() => {
    // O contador só existe na tela inicial. Nas demais páginas (loja, galeria,
    // blog...) os elementos não estão no DOM — sai sem erro em vez de estourar
    // uma exceção a cada segundo.
    const elDays = document.getElementById("days");
    if (!elDays) return;

    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calcula os dias, horas, minutos e segundos
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Exibe os valores no HTML
    elDays.innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Se a contagem regressiva acabar, troca os cartões por uma chamada para o cronograma.
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);

        const eyebrow = document.getElementById("countdown-eyebrow");
        if (eyebrow) eyebrow.textContent = "Em andamento";

        const titulo = document.getElementById("countdown-titulo");
        if (titulo) titulo.textContent = "A aMostra chegou!";

        document.getElementById("countdown").innerHTML = `
            <div class="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-red-800 to-red-600 px-8 py-10 text-center shadow-xl shadow-red-900/20">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>
              <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 blur-3xl rounded-full pointer-events-none"></div>
              <div class="relative z-10">
                <p class="text-3xl mb-2">🎉</p>
                <h3 class="font-spartan text-2xl font-black text-white mb-2">Estamos na XIX edição!</h3>
                <p class="text-white/85 max-w-md mx-auto mb-6">Confira a programação completa e não perca nenhuma atividade.</p>
                <a href="#cronograma" class="font-montserrat inline-flex items-center gap-2.5 bg-gold hover:bg-white text-red-900 font-black text-sm px-6 py-3 rounded-lg shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5">
                  <i class="fa fa-calendar"></i> Ver Cronograma
                </a>
              </div>
            </div>`;
    }
}, 1000);

// Carousel splide.js

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona TODOS os elementos com a classe .splide
    var splides = document.querySelectorAll('.splide');

    // Loop para criar uma instância para cada um
    splides.forEach(function(splideElement) {
        var splide = new Splide(splideElement, {
            type : 'loop',
            focus : 'center',
            perPage : 1,
            perMove : 1,
            rewind : true,
            autoplay : true,
            interval : 8000,
            pauseOnHover : true,
            breakpoints: {
                640: {
                    padding : "0rem"
                }
            },
            padding : '5rem',
            gap : '1rem'
        });

        // Se você tiver a barra de progresso para cada um, descomente as linhas abaixo
        
        // var bar = splideElement.querySelector('.my-slider-progress-bar');
        
        // splide.on('mounted move', function () {
        // var end = splide.Components.Controller.getEnd() + 1;
        // var rate = Math.min((splide.index + 1) / end, 1);
        // bar.style.width = String(100 * rate) + '%';
        // });

        splide.mount();
    });
});
  
