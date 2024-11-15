import { goTo } from "../src/router.ts";
import { state } from "../state/state.ts";
class PlayPage extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode:"open"})
        const gameButtons = document.querySelector("game-buttons");
        console.log(gameButtons);
        
        // Asegúrate de que el custom element y su shadow DOM estén disponibles
        
        const playRoot = document.createElement("div")
        const style = document.createElement("style")
        style.textContent =  `
        .play-content{
        display:flex;
        }
        ` 
        playRoot.appendChild(style)
        playRoot.id = "playGame"
        console.log(playRoot);
        
        playRoot.classList.add("play-content")
        const timerCont = document.createElement("p");
        
        let timer = 4;
        let interval: ReturnType<typeof setInterval>;
        
         const handleCounter = () => {
          if (!interval) {
            interval = setInterval(() => {
             
        
        
                // Elimina la clase 'disabled' // delete a disabled class
                classManager();
        
              timer--;
        
              // Actualizar el contenido del título con el valor del timer // title w a timer value
              timerCont.textContent = `${timer}`;
              playRoot?.appendChild(timerCont);
              shadow.appendChild(playRoot)
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
        

        handleCounter();
    }
}
customElements.define("play-content",PlayPage)

