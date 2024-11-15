import { images } from "../components/buttons";
import { state } from "../state/state";

// llamo a customElement de buttons // call customElements of buttons
const customElement = document.querySelector("game-buttons");
const shadowElement = customElement?.shadowRoot;
const imgButton = shadowElement?.querySelectorAll("img");

//llamo a Root // call root

const root = document.getElementById("root") as HTMLElement;


//creo styles // build styles
const style = document.createElement("style");

//encargado de  manejar las opciones // Responsibility for managing options.

const handleButtons = () => {
  imgButton?.forEach((e) => {
    e.addEventListener("click", (event: any) => {
      state.selectChoice(event.target.id);
      console.log(e);
      
      disableOtherButtons(e);
    });
  });
};


const disableOtherButtons = (selectedButton) => {
 
  imgButton?.forEach((button) => {
    if (button !== selectedButton) {
      button.style = "display:none"
    }
    showPcButton();
  });
};


const showPcButton = () => {
  while (root.firstChild) {
    root.removeChild(root.firstChild);
  }

  const addPcImage = document.createElement("img");
  style.textContent = `
    .pcChoiceSelect{
    width:80px;
    transform: rotate(180deg);
    margin: 0 auto;
    text-align:center;
    align-items:center;
    

    }
    `;
  addPcImage.classList.add("pcChoiceSelect");
  root.appendChild(style);

  for (const element of images) {
    // Comparo la opción seleccionada por la PC con el id de las imágenes
    if (state.pcChoice === element.id) {
      // Si encontramos la opción correcta, asignamos la fuente de la imagen correspondiente
      addPcImage.src = element[element.id]; // usa el nombre dinámico de la propiedad
      break; // Salir del ciclo una vez que encontramos la imagen correcta
    }
  }


  root.appendChild(addPcImage);
};
handleButtons();
