import { images } from "../components/buttons";
import { state } from "../state/state";

// llamo a customElement de buttons // call customElements of buttons
const customElement = document.querySelector("game-buttons");
const shadowElement = customElement?.shadowRoot;
const imgButton = shadowElement?.querySelectorAll("img");

//llamo a customElement de StartText // call customElements of StartText
const startGame = document.querySelector("start-cont");
const shadow = startGame?.shadowRoot;
const container = shadow?.querySelector("div") as HTMLElement;

//creo styles // build styles
const style = document.createElement("style");

//encargado de  manejar las opciones // Responsibility for managing options.

const handleButtons = () => {
  imgButton?.forEach((e) => {
    e.addEventListener("click", (event: any) => {
      state.selectChoice(event.target.id);

      disableOtherButtons(e);
    });
  });
};

const disableOtherButtons = (selectedButton) => {
  imgButton?.forEach((button) => {
    if (button !== selectedButton) {
      button.classList.add("disabled"); // Añadir la clase 'disabled' al contenedor// add disabled class to container
    }
    showPcButton();
  });
};

const showPcButton = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const addPcImage = document.createElement("img");
  style.textContent = `
    .pcChoiceSelect{
    width:80px;
    transform: rotate(180deg);
    margin-bottom:300px

    }
    `;
  addPcImage.classList.add("pcChoiceSelect");
  container.appendChild(style);

  for (const element of images) {
    // Comparo la opción seleccionada por la PC con el id de las imágenes
    if (state.pcChoice === element.id) {
      // Si encontramos la opción correcta, asignamos la fuente de la imagen correspondiente
      addPcImage.src = element[element.id]; // usa el nombre dinámico de la propiedad
      break; // Salir del ciclo una vez que encontramos la imagen correcta
    }
  }
  
  container.appendChild(addPcImage);
};
handleButtons();
