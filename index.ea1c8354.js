function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t=globalThis,o={},n={},r=t.parcelRequireb11a;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequireb11a=r);var a=r.register;a("kOHZq",function(t,o){e(t.exports,"goTo",()=>n);let n=(0,r("a5GLL").initRouter)(document.querySelector("#root")).goTo}),a("a5GLL",function(t,o){e(t.exports,"initRouter",()=>a);let n="/ppt";function r(){return location.host.includes("github.io")}function a(e){function t(e){console.log("El handleRoute recibió una nueva ruta",e);let t=r()?e.replace(n,""):e,o=!1;for(let e of[{route:"/howTo",handle:()=>{i()}},{route:"/",handle:()=>{l()}},{route:"/play",handle:()=>{c()}},{route:"/result",handle:()=>{d()}}])if(e.route===t){e.handle(),o=!0;break}o||console.log("Ruta no encontrada:",t)}return window.onpopstate=()=>{t(location.pathname)},t(location.pathname),{goTo:function(e){let o=r()?n+e:e;history.pushState({},"",o),t(o)}}}let l=()=>{let e=document.getElementById("root");e.innerHTML="";let t=document.createElement("start-cont");e.appendChild(t)},i=()=>{let e=document.getElementById("root");e.innerHTML="",document.querySelector("game-buttons").shadowRoot.querySelector("div").style="display:flex";let t=document.querySelector("game-buttons"),o=t.shadowRoot?.querySelector("div");o?.classList.add("disabled"),o?.classList.add("selected");let n=document.createElement("instructive-cont");console.log(n),e.appendChild(n)},c=()=>{let e=document.getElementById("root");e.innerHTML="";let t=document.createElement("play-content");e.appendChild(t),console.log(t)},d=()=>{let e=document.getElementById("root");e.innerHTML="";let t=document.createElement("start-conts");e.appendChild(t)}});var l=r("kOHZq");class i extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),o=document.createElement("h1"),n=document.createElement("button"),r=document.createElement("style");o.textContent="Piedra Papel Tijeras",n.textContent="Empezar",n.id="0",n.setAttribute("aria-label","Empezar juego"),r.textContent=`
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
    `,t.classList.add("start__cont"),n.classList.add("start__btn"),o.classList.add("start__h1"),n.addEventListener("click",e=>{(0,l.goTo)("/howTo")}),e.appendChild(r),t.appendChild(o),t.appendChild(n),e.appendChild(t)}}customElements.define("start-cont",i);
//# sourceMappingURL=index.ea1c8354.js.map
