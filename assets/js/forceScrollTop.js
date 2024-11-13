class PageScrollManager {
    constructor() {
        this.init();
    }

    // Inicializa a lógica de rolagem e eventos
    init() {
        this.disableScrollRestoration(); // Desativa a restauração de rolagem
        this.setScrollToTopOnLoad();      // Garante que a página carregue no topo
        this.setScrollToTopOnUnload();    // Garante que a página role para o topo antes de sair
    }

    // Desativa a restauração automática de rolagem
    disableScrollRestoration() {
        window.history.scrollRestoration = 'manual';
        // Impede o navegador de restaurar a posição de rolagem ao voltar ou recarregar
    }

    // Força a rolagem para o topo da página após o carregamento
    setScrollToTopOnLoad() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                window.scrollTo(0, 0); // A rolagem para o topo é forçada após o carregamento
            }, 0);
        });
    }

    // Garante que a página role para o topo antes de recarregar ou sair
    setScrollToTopOnUnload() {
        window.addEventListener('beforeunload', () => {
            window.scrollTo(0, 0); // A rolagem é resetada para o topo antes de sair ou recarregar
        });
    }
}

// Instancia a classe PageScrollManager após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    new PageScrollManager();
});
