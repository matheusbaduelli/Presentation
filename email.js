const envio = document.querySelector(".terminal-input");
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
    .then(alert('Email enviado com sucesso'))
    .catch((error) => console.error("Erro:", error));
});
