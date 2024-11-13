// Lógica para abrir e fechar o menu ao clicar no ícone de hambúrguer
document.getElementById("menu-icon").addEventListener("click", function(event) {
    event.stopPropagation();  // Impede que o clique se propague para o documento

    const navLinks = document.querySelector(".nav-links");
    const logo = document.getElementById("logo");
    const logoMobile = document.getElementById("logo-mobile"); // Referência ao logo mobile

    // Alterna a visibilidade do menu e ícone de hambúrguer
    navLinks.classList.toggle("active");
    this.classList.toggle("active");

    // Adiciona ou remove a classe hide-logo para esconder ou mostrar a logo
    if (navLinks.classList.contains("active")) {
        logo.classList.add("hide-logo");  // Esconde o logo desktop ao abrir o menu
        logoMobile.classList.add("hide-logo");  // Esconde o logo mobile ao abrir o menu
    } else {
        logo.classList.remove("hide-logo");  // Mostra o logo desktop ao fechar o menu
        logoMobile.classList.remove("hide-logo");  // Mostra o logo mobile ao fechar o menu
    }
});

// Fechar o menu ao clicar em uma opção do menu
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        const navLinks = document.querySelector(".nav-links");
        const menuIcon = document.getElementById("menu-icon");
        const logo = document.getElementById("logo");
        const logoMobile = document.getElementById("logo-mobile");

        // Remove as classes para esconder o menu e mostrar as logos
        navLinks.classList.remove("active");
        menuIcon.classList.remove("active");
        logo.classList.remove("hide-logo"); // Garante que a logo desktop apareça
        logoMobile.classList.remove("hide-logo"); // Garante que a logo mobile apareça
    });
});

// Fechar o menu ao clicar fora dele
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".nav-links");
    const menuIcon = document.getElementById("menu-icon");
    const logo = document.getElementById("logo");
    const logoMobile = document.getElementById("logo-mobile");

    // Verifica se o clique foi fora do menu e do ícone de hambúrguer
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("active");
        menuIcon.classList.remove("active");
        logo.classList.remove("hide-logo"); // Garante que a logo apareça se clicar fora
        logoMobile.classList.remove("hide-logo"); // Garante que a logo mobile apareça se clicar fora
    }
});
