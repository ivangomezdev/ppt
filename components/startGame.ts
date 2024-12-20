import { goTo } from "../src/router";

class StartGame extends HTMLElement {
  constructor() {
    super();



    

    // Crear shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Crear los elementos

    const cont = document.createElement("div");
    const title = document.createElement("h1");
    const btn = document.createElement("button");

    // Crear estilo único y consolidado
    const style = document.createElement("style");

    // Agregar contenido
    title.textContent = "Piedra Papel Tijeras";
    btn.textContent = "Empezar";
    btn.id = "0"; // Cambié el id para ser más descriptivo
    btn.setAttribute("aria-label", "Empezar juego"); // Atributo de accesibilidad para el botón


    

    // Estilos CSS en un solo bloque
    style.textContent = `
      .start__cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        
      }

      .start__btn {
        width: 320px;
        height: 84px;
        background-color: #006cfc;
        border: solid 5px #001997;
        font-family: "Odibee Sans", sans-serif;
        color: #d8fcfc;
        border-radius: 10px;
        font-size: 45px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .start__btn:hover {
        background-color: #005bb5;
      }

      .start__h1 {
        width: 280px;
        margin: 0 auto;
        color: #009048;
        font-size: 90px;
        text-align: center;
        font-weight: 700;
        line-height: 1.1;
        padding: 60px;
      }
    `;

    // Agregar clases y elementos al contenedor
    cont.classList.add("start__cont");
    btn.classList.add("start__btn");
    title.classList.add("start__h1");

    btn.addEventListener("click",(e)=>{
     goTo("/howTo")
    })

    // Append al shadow DOM
    shadow.appendChild(style);
    cont.appendChild(title);
    cont.appendChild(btn);
    shadow.appendChild(cont);


  }
}

// Definir el componente
customElements.define("start-cont", StartGame);