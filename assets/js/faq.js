class FaqAccordion {
    constructor(faqSelector) {
        this.faqQuestions = document.querySelectorAll(faqSelector);
        this.init();
    }

    // Inicializa os eventos de clique para cada pergunta
    init() {
        this.faqQuestions.forEach(button => {
            button.addEventListener('click', () => this.toggleAnswer(button));
        });
    }

    // Lida com a alternância da resposta e ícone
    toggleAnswer(button) {
        // Encontra o item FAQ mais próximo do botão clicado
        const faqItem = button.closest('.faq-item');
        // Verifica se o item FAQ está ativo (expandido)
        const isActive = faqItem.classList.contains('active');
        // Alterna a classe 'active' do item FAQ
        faqItem.classList.toggle('active', !isActive);
        // Alterna o ícone entre "+" e "-"
        button.querySelector('.faq-icon').textContent = isActive ? '+' : '-';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Instanciando a classe para controlar o comportamento das perguntas e respostas
    new FaqAccordion('.faq-question');
});
