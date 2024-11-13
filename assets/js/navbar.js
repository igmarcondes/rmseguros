// Função para ajustar o tamanho da logo ao rolar a página
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const navbar = document.querySelector('.navbar');

    // Se o scroll da página for maior que 100px (ajuste conforme necessário)
    if (window.scrollY > 40) {
        logo.style.height = '50px'; // Reduz o tamanho da logo
    } else {
        logo.style.height = '80px'; // Retorna o tamanho original quando estiver no topo
    }
});

// Lógica para esconder a logo ao abrir a navbar
document.getElementById("menu-icon").addEventListener("click", function(event) {
    event.stopPropagation();  // Evita que o clique no menu icon propague para o document
    const navLinks = document.querySelector(".nav-links");
    const logo = document.getElementById("logo");

    navLinks.classList.toggle("active");
    this.classList.toggle("active");

    // Adiciona ou remove a classe hide-logo para esconder ou mostrar a logo
    if (navLinks.classList.contains("active")) {
        logo.classList.add("hide-logo");  // Esconde a logo ao abrir o menu
    } else {
        logo.classList.remove("hide-logo");  // Mostra a logo ao fechar o menu
    }
});

// Fechar o menu ao clicar em uma opção do menu
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".nav-links").classList.remove("active");
        document.getElementById("menu-icon").classList.remove("active");
        document.getElementById("logo").classList.remove("hide-logo"); // Garante que a logo apareça ao clicar no link
    });
});

// Fechar o menu ao clicar fora dele
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".nav-links");
    const menuIcon = document.getElementById("menu-icon");
    const logo = document.getElementById("logo");

    // Verifica se o clique foi fora do menu e do ícone de hambúrguer
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("active");
        menuIcon.classList.remove("active");
        logo.classList.remove("hide-logo"); // Garante que a logo apareça se clicar fora
    }
});

// Função para ajustar o tamanho da logo ao rolar a página
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');

    // Se o scroll da página for maior que 70px
    if (window.scrollY > 90) {
        logo.style.height = '30px'; // Reduz o tamanho da logo suavemente
    } else {
        logo.style.height = '80px'; // Retorna ao tamanho original
    }
});
