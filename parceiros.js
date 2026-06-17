const botoesAbrir = document.querySelectorAll('[data-popup]');
const botoesFechar = document.querySelectorAll('.fechar-btn');

botoesAbrir.forEach(botao => {
  botao.addEventListener('click', () => {
    const popupId = botao.getAttribute('data-popup'); 
    const popupAlvo = document.getElementById(popupId);
    if (popupAlvo) popupAlvo.classList.add('active');
  });
});

botoesFechar.forEach(botao => {
  botao.addEventListener('click', () => {
    const popupPai = botao.closest('.popup-overlay');
    if (popupPai) popupPai.classList.remove('active');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup-overlay')) {
    event.target.classList.remove('active');
  }
});