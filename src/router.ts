import { againPages } from "../pages/again";

export const goTo = (path) => {
  history.pushState({}, "", path);
  handleRoutes(path);
};

const handleRoutes = (path) => {
  const routes = [
    {
      route: "/howTo",
      handle: () => {
        howToPage();
      },
    },
    {
      route: "/",
      handle: () => {
        loadHomePage();
      },
    },
    {
      route: "/play",
      handle: () => {
        playPage();
      },
    },
    {
      route: "/again",
      handle: () => {
        againPage();
      },
    },
    {
      route: "/result",
      handle: () => {
        ResultPage();
      },
    },
  ];
  for (const r of routes) {
    if (r.route == path) {
      r.handle();
      return;
    } else {
      console.log("no se encontro la ruta");
    }
  }
};

const loadHomePage = () => {
  const root = document.getElementById("root") as HTMLElement;

  root.innerHTML = ""; // Limpiar cualquier contenido previo

  // Insertar el componente <start-cont> en el contenedor
  const startGameComponent = document.createElement("start-cont");
  root.appendChild(startGameComponent); // Añadir el componente al DOM
};

const howToPage = () => {
  const root = document.getElementById("root") as HTMLElement;

  root.innerHTML = ""; // Limpiar cualquier contenido previo

  const startGame = document.querySelector("game-buttons") as HTMLElement;
  const startGameroot = startGame.shadowRoot as ShadowRoot;
  const startGamerootDiv = startGameroot.querySelector("div") as HTMLElement;
  startGamerootDiv.style = "display:flex";

  const gameButtons = document.querySelector("game-buttons") as HTMLElement;
  const content = gameButtons.shadowRoot?.querySelector("div");

  content?.classList.add("disabled");
  content?.classList.add("selected");
  // Insertar el componente <start-cont> en el contenedor
  const startGameComponent = document.createElement("instructive-cont");

  console.log(startGameComponent);
  root.appendChild(startGameComponent); // Añadir el componente al DOM
};

const playPage = () => {
  const root = document.getElementById("root") as HTMLElement;
  root.innerHTML = "";
  const playCont = document.createElement("play-content");
  root.appendChild(playCont);
  console.log(playCont);
};

const ResultPage = () => {
  const root = document.getElementById("root") as HTMLElement;
  root.innerHTML = "";
  const results = document.createElement("start-conts");
  root.appendChild(results);
};

const againPage = () =>{
  againPages()

}

// Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  handleRoutes(window.location.pathname); // Maneja la ruta inicial
});
