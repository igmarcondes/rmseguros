    // Garante que a página carregue no topo e desativa a restauração de rolagem
    window.history.scrollRestoration = 'manual'; // Desativa a restauração automática da rolagem

    // Força a rolagem para o topo no carregamento
    window.addEventListener('load', function() {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 0);
    });

    // Garante que a página role para o topo ao recarregar ou sair da página
    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0);
    });