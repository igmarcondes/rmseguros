class HamburgerMenu {
    constructor() {
        this.menuIcon = document.getElementById("menu-icon");
        this.navLinks = document.querySelector(".nav-links");
        this.logo = document.getElementById("logo");
        this.logoMobile = document.getElementById("logo-mobile");
        this.init();
    }

    // Inicializa todos os eventos necessários
    init() {
        this.addEventListeners();
    }

    // Adiciona os eventos de clique
    addEventListeners() {
        // Evento de clique no ícone de hambúrguer
        this.menuIcon.addEventListener("click", (event) => this.toggleMenu(event));

        // Evento de clique em qualquer link do menu
        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.addEventListener("click", () => this.closeMenu());
        });

        // Evento de clique fora do menu para fechá-lo
        document.addEventListener("click", (event) => this.closeMenuOutsideClick(event));
    }

    // Alterna a visibilidade do menu e a animação do ícone de hambúrguer
    toggleMenu(event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento

        // Alterna a visibilidade do menu e do ícone de hambúrguer
        this.navLinks.classList.toggle("active");
        this.menuIcon.classList.toggle("active");

        // Alterna a visibilidade dos logos
        this.toggleLogos();
    }

    // Fecha o menu
    closeMenu() {
        this.navLinks.classList.remove("active");
        this.menuIcon.classList.remove("active");
        this.showLogos();
    }

    // Verifica se o clique foi fora do menu e fecha o menu se necessário
    closeMenuOutsideClick(event) {
        if (!this.navLinks.contains(event.target) && !this.menuIcon.contains(event.target)) {
            this.closeMenu();
        }
    }

    // Alterna a visibilidade dos logos
    toggleLogos() {
        if (this.navLinks.classList.contains("active")) {
            this.hideLogos();
        } else {
            this.showLogos();
        }
    }

    // Esconde os logos quando o menu é aberto
    hideLogos() {
        this.logo.classList.add("hide-logo");
        this.logoMobile.classList.add("hide-logo");
    }

    // Mostra os logos quando o menu é fechado
    showLogos() {
        this.logo.classList.remove("hide-logo");
        this.logoMobile.classList.remove("hide-logo");
    }
}

// Instancia a classe HamburgerMenu após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    new HamburgerMenu();
});
