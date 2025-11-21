// Scroll suave para links com âncora (#)
document.addEventListener("DOMContentLoaded", () => {

  // Seleciona todos os links que contêm #
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Ignora links vazios ou apenas #
      if (href === "#" || href === "") {
        return;
      }

      // Encontra o elemento alvo
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();

        // Calcula a posição do elemento considerando o header fixo
        const headerOffset = 80; // Ajustado para o novo header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        // Scroll suave usando scrollTo com behavior smooth
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Fechar menu mobile se estiver aberto
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle && navToggle.checked) {
          navToggle.checked = false;
        }
      }
    });
  });
});
