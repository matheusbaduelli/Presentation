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

window.addEventListener("DOMContentLoaded", () => {
  const textoAnimado = document.getElementById("div2");
  textoAnimado.style.opacity = "1"; 
});

typeText("Matheus Dev", "minhaDiv", 100);

window.onload = typeText;
