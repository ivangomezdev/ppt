var e=globalThis,t={},n={},r=e.parcelRequireb11a;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequireb11a=r),r.register;var a=r("joAEj");class l extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("h1"),r=document.createElement("p"),l=document.createElement("p"),s=document.createElement("style");s.textContent=`
      .cont__table{
      display:flex;
      flex-direction:column;
      aling-items:center;
      border:solid 5px black;
      border-radius:10px;
      background-color:white;
      padding:2px 5px 5px 10px;
      width:250px;
      heigth:100px
      }
    
      .results__text{
      font-size:40px;
      font-weight: bold;
      text-align:end
      }

      .results__title{
      font-size:45px
      }
      
      `,t.classList.add("cont__table"),l.classList.add("results__text"),r.classList.add("results__text"),n.classList.add("results__title"),n.textContent="Score",l.textContent=`Vos: ${a.state.matchCounter.me}`,r.textContent=`M\xe1quina: ${a.state.matchCounter.pc}`,t.appendChild(s),t.appendChild(n),t.appendChild(l),t.appendChild(r),e.appendChild(t)}}customElements.define("scoring-table",l);
//# sourceMappingURL=index.2aef39c7.js.map
