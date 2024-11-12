document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');

            // Alterna a classe 'active' para expandir/colapsar a resposta
            faqItem.classList.toggle('active', !isActive);

            // Alterna o ícone entre "+" e "-"
            button.querySelector('.faq-icon').textContent = isActive ? '+' : '-';
        });
    });
});
