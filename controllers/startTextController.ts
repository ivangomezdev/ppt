import { state } from "../state/state";
const gameButtons = document.querySelector("game-buttons");

// Asegúrate de que el custom element y su shadow DOM estén disponibles

const startGame = document.querySelector("start-cont") as HTMLElement;
const shadow = startGame?.shadowRoot as ShadowRoot;
const btn = shadow?.querySelector(".start__btn") as HTMLElement;
const title = shadow?.querySelector("h1") as HTMLElement;
console.log(btn);

let timer = 4;
let interval: ReturnType<typeof setInterval>;


// encargado de cambiar los textos de el boton y title // responsible for changing the texts of the button and title
const handleContent = () => {
  //escucho eventos de BTN con click // heard button events from click

  btn?.addEventListener("click", (e) => {
    //cambiando el content // changing the content
    
  
    title.textContent = `Presioná jugar
    y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.`;

    btn.textContent = "Jugar";

    title.style.cssText = `font-size:50px;
    color:black;`;
    btn.id = (parseInt(btn.id) + 1).toString();
    console.log(btn.id);

    handleCounter();
  });
}; // <- Cierre de handleContent

const handleCounter = () => {
  if (!interval && btn.id == "2") {
    interval = setInterval(() => {
      if (gameButtons?.shadowRoot) {
        // Accede al contenido del shadow DOM // access to shadowo DOM content
        const content = gameButtons.shadowRoot.querySelector("div");
        const deleteBtn = shadow?.querySelector("div");
        const button = deleteBtn?.querySelector("start__btn");
        if (
          title?.textContent !==
          `Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.`
        ) {
          btn?.remove();
        }

        // Elimina la clase 'disabled' // delete a disabled class
        classManager();
      }
      timer--;

      // Actualizar el contenido del título con el valor del timer // title w a timer value
      title.textContent = `${timer}`;
      if (state.pcChoice == "" && timer >= 0) {
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
};

const classManager = () => {
  if (gameButtons?.shadowRoot) {
    const style = document.createElement("style");
    const content = gameButtons.shadowRoot.querySelector("div");
    content?.classList.remove("disabled");
    style.textContent = `
    .selected{
   display:none;  
    }
    `;

    gameButtons.shadowRoot.appendChild(style);
    content?.classList.add("display");
  }
};

handleContent();
