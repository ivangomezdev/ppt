var e=globalThis,t={},o={},a=e.parcelRequireb11a;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequireb11a=a),a.register;var n=a("a5GLL"),r=a("joAEj");class l extends HTMLElement{constructor(){let e;super();let t=this.attachShadow({mode:"open"}),o=document.querySelector("game-buttons");(o?.shadowRoot).querySelector("div").style=`display: flex;
       position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
     `;let a=document.createElement("div"),l=document.createElement("style");l.textContent=`
        .play-content{
        display:flex;
        justify-content:center
        }
 p {
      position: relative;
      font-size: 60px; /* Tama\xf1o del texto */
      line-height: 1; /* Ajustar el espacio vertical */
      color: #333;
      padding: 20px; /* Espacio interno para no tocar el c\xedrculo */
      text-align: center; /* Asegurar centrado del texto */
    }

    /* C\xedrculo alrededor */
    p::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 150px;
      border: 10px solid black;
      border-top: 5px solid #999;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    /* Animaci\xf3n */
    @keyframes spin {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }

        `,a.appendChild(l),a.id="playGame",console.log(a),a.classList.add("play-content");let s=document.createElement("p"),i=4,d=()=>{e&&(clearInterval(e),d()),e||(e=setInterval(()=>{p(),i--,s.textContent=`${i}`,a?.appendChild(s),t.appendChild(a),0==i&&(s.style.display="none",clearInterval(e)),0==i&&""==r.state.pcChoice&&(0,n.goTo)("/again")},1e3))},p=()=>{if(o?.shadowRoot){let e=document.createElement("style"),t=o.shadowRoot.querySelector("div");o.style.display="flex",t?.classList.remove("disabled"),e.textContent=`
            .selected{
           display:none;  
            }
            `,o.shadowRoot.appendChild(e),t?.classList.add("display")}};d()}}customElements.define("play-content",l);
//# sourceMappingURL=index.c562e1c0.js.map
