class SmoothScroll {
    constructor() {
        // Referências para os links de navegação e os logos
        this.navLinks = document.querySelectorAll('.nav-links a');
        this.logo = document.getElementById('logo');
        this.logoMobile = document.getElementById('logo-mobile');
        this.init();
    }

    // Inicializa os eventos de clique
    init() {
        this.addEventListeners();
    }

    // Adiciona os eventos de clique nos elementos
    addEventListeners() {
        // Evento de clique no logo para rolar até a seção 'inicio'
        this.logo.addEventListener('click', (event) => this.smoothScrollTo('#inicio', event));

        // Evento de clique no logo mobile para rolar até a seção 'inicio'
        this.logoMobile.addEventListener('click', (event) => this.smoothScrollTo('#inicio', event));

        // Evento de clique nos links da navbar
        this.navLinks.forEach(link => {
            link.addEventListener('click', (event) => this.handleLinkClick(event, link));
        });
    }

    // Função para rolar suavemente até a seção desejada
    smoothScrollTo(targetId, event) {
        event.preventDefault();  // Impede o comportamento padrão de redirecionamento de link
        const targetSection = document.querySelector(targetId);  // Encontra a seção de destino

        if (targetSection) {
            const targetPosition = targetSection.offsetTop;  // Posição da seção de destino
            const startPosition = window.pageYOffset;  // Posição atual da rolagem
            const distance = targetPosition - startPosition;  // Distância a ser percorrida
            const duration = 500;  // Duração da animação em milissegundos
            let start = null;

            // Função de animação para a rolagem suave
            function animateScroll(timestamp) {
                if (!start) start = timestamp;  // Marca o tempo inicial
                const progress = timestamp - start;  // Calcula o progresso da animação

                // Função de easing (aceleração/desaceleração) para suavizar a rolagem
                const ease = Math.min(progress / duration, 1);
                window.scrollTo(0, startPosition + distance * ease);  // Aplica a rolagem suavemente

                // Continua a animação enquanto o tempo não atingir a duração total
                if (progress < duration) {
                    window.requestAnimationFrame(animateScroll);  // Solicita o próximo quadro de animação
                }
            }

            window.requestAnimationFrame(animateScroll);  // Inicia a animação da rolagem suave
        }
    }

    // Função para lidar com o clique nos links da navbar
    handleLinkClick(event, link) {
        event.preventDefault();  // Impede o comportamento de rolagem padrão (teleporte)
        const targetId = link.getAttribute('href');  // Obtém o ID da seção de destino
        this.smoothScrollTo(targetId, event);  // Chama a função de rolagem suave
    }
}

// Instancia a classe SmoothScroll após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    new SmoothScroll();
});
