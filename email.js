const envio = document.querySelector(".input");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  fetch("https://express-email-project.vercel.app/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: envio.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Sucesso:", data))
    .catch((error) => console.error("Erro:", error));
});
