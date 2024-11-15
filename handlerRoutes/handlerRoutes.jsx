//startGameRoute

const { goTo } = require("../src/router");

// Esperar a que el custom element esté en el DOM
document.addEventListener("DOMContentLoaded", () => {
  //llamo al cc // call to customComponent

  const startGame = document.querySelector("game-buttons");
  const root = startGame.shadowRoot;
  const rootDiv = root.querySelector("div");
  const customElement = document.querySelector("game-buttons");
  const shadowElement = customElement?.shadowRoot;
  const imgButton = shadowElement?.querySelectorAll("img");

  root.addEventListener("click", () => {
    const intervalId = setInterval(() => {
      goTo("/result");
      rootDiv.style = "display:none";
    }, 2000);

    setTimeout(() => {
      clearInterval(intervalId); // Detenemos el intervalo
      imgButton?.forEach((button) => {
        button.style = "display:block";
      });
    }, 3000);
  });
});
