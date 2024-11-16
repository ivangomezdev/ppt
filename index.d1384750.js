function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=globalThis,n={},o={},a=t.parcelRequireb11a;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequireb11a=a);var r=a.register;r("a5GLL",function(t,n){e(t.exports,"goTo",()=>r);var o=a("ev9ns");let r=e=>{history.pushState({},"",e),l(e)},l=e=>{for(let t of[{route:"/howTo",handle:()=>{c()}},{route:"/",handle:()=>{d()}},{route:"/play",handle:()=>{s()}},{route:"/again",handle:()=>{u()}},{route:"/result",handle:()=>{i()}}])if(t.route==e){t.handle();return}else console.log("no se encontro la ruta")},d=()=>{let e=document.getElementById("root");e.innerHTML="";let t=document.createElement("start-cont");e.appendChild(t)},c=()=>{let e=document.getElementById("root");e.innerHTML="",document.querySelector("game-buttons").shadowRoot.querySelector("div").style="display:flex";let t=document.querySelector("game-buttons"),n=t.shadowRoot?.querySelector("div");n?.classList.add("disabled"),n?.classList.add("selected");let o=document.createElement("instructive-cont");console.log(o),e.appendChild(o)},s=()=>{let e=document.getElementById("root");e.innerHTML="";let t=document.createElement("play-content");e.appendChild(t),console.log(t)},i=()=>{let e=document.getElementById("root");e.innerHTML="";let t=document.createElement("start-conts");e.appendChild(t)},u=()=>{(0,o.againPages)()};document.addEventListener("DOMContentLoaded",()=>{l(window.location.pathname)})}),r("ev9ns",function(t,n){e(t.exports,"againPages",()=>d);var o=a("a5GLL");let r=document.querySelector("#root"),l=document.querySelector("game-buttons"),d=()=>{let e=document.createElement("div"),t=document.createElement("p"),n=document.createElement("button"),a=document.createElement("style");a.textContent=`
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
      },

  `,l.style.display="none",t.textContent="Debes seleccionar una opción",n.textContent="Jugar",n.classList.add("start__btn"),t.classList.add("start__text"),e.appendChild(a),e?.appendChild(t),e?.appendChild(n),n.addEventListener("click",e=>{(0,o.goTo)("/play")}),"/again"===window.location.pathname?r?.appendChild(e):console.log("No estás en la ruta /again")}});var l=a("a5GLL");class d extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("button"),a=document.createElement("style");n.textContent="Piedra Papel Tijeras",o.textContent="Empezar",o.id="0",o.setAttribute("aria-label","Empezar juego"),a.textContent=`
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
    `,t.classList.add("start__cont"),o.classList.add("start__btn"),n.classList.add("start__h1"),o.addEventListener("click",e=>{(0,l.goTo)("/howTo")}),e.appendChild(a),t.appendChild(n),t.appendChild(o),e.appendChild(t)}}customElements.define("start-cont",d);
//# sourceMappingURL=index.d1384750.js.map
