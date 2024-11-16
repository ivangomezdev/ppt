var e=globalThis,t={},n={},r=e.parcelRequireb11a;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequireb11a=r),r.register;var a=r("a5GLL");class o extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("h1"),r=document.createElement("button"),o=document.createElement("style");n.textContent=`Presion\xe1 jugar
y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.`,r.textContent="Jugar",r.id="0",r.setAttribute("aria-label","Empezar juego"),o.textContent=`
      .start__cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top:25px;
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
        width: 400px;
        margin: 0 auto;
        color: black;
        font-size: 60px;
        text-align: center;
        font-weight: 700;
        line-height: 1.1;
        padding: 60px;
      }
    `,t.classList.add("start__cont"),r.classList.add("start__btn"),n.classList.add("start__h1"),r.addEventListener("click",e=>{(0,a.goTo)("/play")}),e.appendChild(o),t.appendChild(n),t.appendChild(r),e.appendChild(t)}}customElements.define("instructive-cont",o);
//# sourceMappingURL=index.57f0a6a4.js.map
