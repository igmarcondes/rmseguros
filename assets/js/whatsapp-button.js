class WhatsAppButton {
  constructor() {
      // Referência ao botão do WhatsApp com o id 'whatsapp-btn'
      this.whatsappBtn = document.getElementById('whatsapp-btn');
      this.init();
  }

  // Inicializa os eventos
  init() {
      this.applyFadeInEffect();
  }

  // Aplica o efeito de fade-in ao botão após 1 segundo
  applyFadeInEffect() {
      setTimeout(() => {
          // Altera a opacidade do botão para 1 (totalmente visível) após 1 segundo
          this.whatsappBtn.style.opacity = '1';
      }, 1000);  // O delay de 1000ms (1 segundo) pode ser ajustado conforme necessário
  }
}

// Instancia a classe WhatsAppButton após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  new WhatsAppButton();
});
