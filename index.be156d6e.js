var t=globalThis,e={},r={},n=t.parcelRequireb11a;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in r){var n=r[t];delete r[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequireb11a=n),n.register;var a=n("8yWVa"),o=n("a5GLL"),d=n("joAEj");class s extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"open"}),e=document.createElement("div"),r=document.createElement("img"),n=document.createElement("button"),s=document.createElement("style"),l=document.createElement("style"),i=document.createElement("style"),c=document.createElement("scoring-table");s.textContent=`
          .start__cont{
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:"center";
          background-color:red;
          width:100%;
          padding-bottom:190px;
          gap:60px
          }
          `,l.textContent=`
          .start__btn{
          width:320px;
          height:84px;
          background-color:#006CFC;
          border:solid 5px #001997;
          font-family: "Odibee Sans";
          color:#D8FCFC   ;
          border-radius:10px;
          font-size:45px
          }`,i.textContent=`
          .start__h1{
          width:280px;
          margin:0 auto;
          color:#009048;
         font-size:90px;
         text-align:start;
         font-weight:700;
         line-height: 1.1; 
         padding:60px
          }`,(0,d.state).results.includes("Victoria")?(r.src=a.resultado.victoria,e.style.backgroundColor="green"):(0,d.state).results.includes("Derrota")?r.src=a.resultado.derrota:e.style.backgroundColor="orange",n.textContent="Volvé a jugar",n.id="0",e.classList.add("start__cont"),n.classList.add("start__btn"),r.classList.add("start__h1"),t.appendChild(i),t.appendChild(e),e.appendChild(r),e.appendChild(c),t.appendChild(l),e.appendChild(n),t.appendChild(s),n.addEventListener("click",t=>{(0,d.state).resetState(),(0,o.goTo)("/howTo")})}}customElements.define("start-conts",s);
//# sourceMappingURL=index.be156d6e.js.map
