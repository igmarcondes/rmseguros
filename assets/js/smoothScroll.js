document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Obtém o ID da seção de destino
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calcula a posição da seção de destino em relação ao topo do documento
                const targetPosition = targetSection.offsetTop;
                
                // Obtém a posição atual de rolagem
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 500; // Duração da animação em ms (ajuste aqui para ser mais rápida)
                let start = null;

                // Função de animação de rolagem
                function smoothScroll(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;

                    // Calcula a posição de rolagem com uma função de easing
                    const ease = Math.min(progress / duration, 1);
                    window.scrollTo(0, startPosition + distance * ease);

                    // Continua a animação enquanto o tempo for menor que a duração
                    if (progress < duration) {
                        window.requestAnimationFrame(smoothScroll);
                    }
                }

                // Inicia a animação
                window.requestAnimationFrame(smoothScroll);
            }
        });
    });
});
