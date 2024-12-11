const displayElement = document.getElementById("minhaDiv");
const apresentação = document.getElementById("div2");

const cont = document.getElementById("container");

function typeText(text, elementId, delay = 1000) {
  const element = document.getElementById(elementId); // Seleciona o elemento pelo ID
  element.textContent = ""; // Garante que o conteúdo inicial esteja vazio
  let index = 0;

  // Configura o intervalo
  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text[index]; // Adiciona uma letra por vez
      index++;
    } else {
      clearInterval(interval); // Interrompe o intervalo ao fim do texto
    }
  }, delay);
}

const lista = `Python, JavaScript, Power BI, SQL HTML e CSS`;
const texto = `Olá, meu nome é Matheus, tenho 27 anos e sou natural de São Paulo. Atualmente, sou Analista de Processos e estou cursando Análise e Desenvolvimento de Sistemas. Minha paixão por tecnologia começou em 2022, e desde então, venho me dedicando e evoluindo cada vez mais na área. Ao longo dessa jornada, consegui adquirir e aprimorar algumas habilidades que considero fundamentais para a minha formação profissional, tais como: ${lista}. Estou sempre em busca de novos conhecimentos e desafios, com o objetivo de me tornar um profissional cada vez mais capacitado e atualizado nas tecnologias que moldam o futuro.`;

typeText("Matheus Dev.", "minhaDiv", 100);
// typeText(texto, "div2", 30);

window.addEventListener("DOMContentLoaded", () => {
  const textoAnimado = document.getElementById("div2");
  textoAnimado.style.opacity = "1"; // Garantir visibilidade
});

window.onload = typeText;
