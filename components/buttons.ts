   // llamo a mis imgs //call to my imgs
   const piedra = require("url:../img/piedra.png");
   const papel = require("url:../img/papel.png");
   const tijera = require("url:../img/tijera.png");
   const victoria = require("url:../img/victoria.png");
   const derrota = require("url:../img/derrota.png");


 
   //llamo a las URL de mis IMG // call Img URL

   export  const images = [
    { piedra: piedra , id:"piedra" },
    { papel: papel , id:"papel" },
    { tijera: tijera , id:"tijera" },
  ];

  export const resultado = {victoria,derrota}

class Buttons extends HTMLElement {
  constructor() {
    super();

    //creo los contenedores-styles // create a container and styles
    const shadow = this.attachShadow({ mode: "open" });
    const content = document.createElement("div");
    const contentStyle = document.createElement("style");

      

    //Modifico su contenido // edit the content
    contentStyle.textContent = `
    .img__content{
    display:flex;
    gap:70px;
    justify-content:center;
    margin-top:30px
    }

    .img__content img{
    width:80px;
    gap:330px;
    margin-top:30px
    }

    .img__content img:hover{
    transform: scale(1.1);
    }

 
 
.disabled {
  pointer-events: none; /* Bloquea la interacción con la imagen */
  opacity: 0.5; /* Opcional: Cambia la opacidad para dar la sensación de inhabilitada

`;


  

    
   //Recorro las img con un forOf para obtener su content //  I go through the images with a forOf to obtain their content
    for (const option of images) {
      const url = Object.values(option).toString();
      const img = document.createElement("img");
      img.src = url;
      img.id = option.id
      content.appendChild(img);
    }

 

    //adhiero el style y le hago append a mi shadow // add my style and make append to my shadow
    content.classList.add("img__content");
    content.classList.add("disabled");
    shadow.appendChild(content);
    shadow.appendChild(contentStyle);
  }
}
customElements.define("game-buttons", Buttons);
