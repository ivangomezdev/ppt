import { goTo } from "../src/router.ts";
import { state } from "../state/state.ts";
class PlayPage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const gameButtons = document.querySelector("game-buttons");
    const buttonRoot = gameButtons?.shadowRoot as ShadowRoot;
    const buttonDivs = buttonRoot.querySelector("div") as HTMLElement;
    buttonDivs.style = `display: flex;
       position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
     `;

    // Asegúrate de que el custom element y su shadow DOM estén disponibles

    const playRoot = document.createElement("div");
    const style = document.createElement("style");
    style.textContent = `
        .play-content{
        display:flex;
        justify-content:center
        }
 p {
      position: relative;
      font-size: 60px; /* Tamaño del texto */
      line-height: 1; /* Ajustar el espacio vertical */
      color: #333;
      padding: 20px; /* Espacio interno para no tocar el círculo */
      text-align: center; /* Asegurar centrado del texto */
    }

    /* Círculo alrededor */
    p::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      border: 10px solid black;
      border-top: 5px solid #999;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    /* Animación */
    @keyframes spin {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }

        `;
    playRoot.appendChild(style);
    playRoot.id = "playGame";
    console.log(playRoot);

    playRoot.classList.add("play-content");
    const timerCont = document.createElement("p");



    let timer = 4;
    let interval: ReturnType<typeof setInterval>;

    const handleCounter = () => {
      if (interval) {
        clearInterval(interval);

        handleCounter();
      }

      if (!interval) {
        interval = setInterval(() => {
          // Elimina la clase 'disabled' // delete a disabled class
          classManager();

          timer--;

          // Actualizar el contenido del título con el valor del timer // title w a timer value
          timerCont.textContent = `${timer}`;
          playRoot?.appendChild(timerCont);
          shadow.appendChild(playRoot);
          if (timer == 0 ) {
            timerCont.style.display = "none"
            clearInterval(interval);
           
            
          }
          if (timer == 0 && state.pcChoice == "") {
            goTo("/again")
             
           
          }
        }, 1000);
      }
    };

    const classManager = () => {
      if (gameButtons?.shadowRoot) {
        const style = document.createElement("style");
        const content = gameButtons.shadowRoot.querySelector("div");
        gameButtons.style.display = "flex"
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

    handleCounter();
  }
}
customElements.define("play-content", PlayPage);
