export const goTo = (path) => {
  history.pushState({}, "", path);
  handleRoutes(path);
};

const handleRoutes = (path) => {
  const routes = [
    {
      route: "/resultado",
      handle: () => {
        loadResultPage("/resultado");
      },
    },
    {
      route: "/",
      handle: () => {
        loadResultPage("/");
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

const loadResultPage = (path) => {
  // Obtener el contenedor donde se cargará el contenido // obtain content
  const contentContainer = document.querySelector("start-cont")
    ?.shadowRoot as ShadowRoot;
  const buttonsCont = document.querySelector("game-buttons")
    ?.shadowRoot as ShadowRoot;


    contentContainer.innerHTML = "";
    buttonsCont.innerHTML = "";
 
    if (path == "/resultado") {

    const resultContent = document.createElement("start-conts");
    contentContainer.appendChild(resultContent);
  } else {
    const resultContent = document.createElement("start-cont");
    const buttonsGame = document.createElement("game-buttons");
    contentContainer.appendChild(resultContent);
    contentContainer.appendChild(buttonsGame);
    
  }

  // Crear el nuevo contenido // createContent
};
