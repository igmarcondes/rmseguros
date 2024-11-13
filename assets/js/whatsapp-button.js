document.addEventListener('DOMContentLoaded', function () {
  const whatsappBtn = document.getElementById('whatsapp-btn');

  // Aplica o efeito de fade-in após 1 segundo
  setTimeout(function () {
    whatsappBtn.style.opacity = '1';
  }, 1000);  // O delay de 1000ms (1 segundo) pode ser ajustado conforme necessário
});
