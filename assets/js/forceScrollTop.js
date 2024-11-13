    // Garante que a página carregue no topo em todos os dispositivos
    window.addEventListener('load', function() {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 0); // Atraso mínimo para garantir que o scroll é aplicado após o carregamento
    });

    // Força a rolagem para o topo ao recarregar a página
    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0);
    });

