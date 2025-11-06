const displayElement = document.getElementById("minhaDiv");
const apresentação = document.getElementById("div2");

const cont = document.getElementById("container");

function typeText(text, elementId, delay = 1000) {
  const element = document.getElementById(elementId);
  element.textContent = "";
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, delay);
}

// Scroll suave para links com âncora (#)
document.addEventListener("DOMContentLoaded", () => {
  // Animação de opacidade para div2
  const textoAnimado = document.getElementById("div2");
  if (textoAnimado) {
    textoAnimado.style.opacity = "1";
  }

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
        const headerOffset = 100; // Ajuste conforme necessário
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        // Scroll suave usando scrollTo com behavior smooth
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});

typeText("Matheus", "animatedTitle", 100);
