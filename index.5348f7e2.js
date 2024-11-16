var e=globalThis,t={},r={},o=e.parcelRequireb11a;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequireb11a=o),o.register;var i=o("8yWVa"),a=o("joAEj");const l=document.querySelector("game-buttons"),n=l?.shadowRoot,c=n?.querySelectorAll("img"),d=document.getElementById("root"),s=document.createElement("style"),m=e=>{c?.forEach(t=>{t!==e&&(t.style="display:none"),p()})},p=()=>{for(;d.firstChild;)d.removeChild(d.firstChild);let e=document.createElement("img");for(let t of(s.textContent=`
    .pcChoiceSelect{
    width:80px;
    transform: rotate(180deg);
    margin: 0 auto;
    text-align:center;
    align-items:center;
    

    }
    `,e.classList.add("pcChoiceSelect"),d.appendChild(s),i.images))if(a.state.pcChoice===t.id){e.src=t[t.id];break}d.appendChild(e)};c?.forEach(e=>{e.addEventListener("click",t=>{a.state.selectChoice(t.target.id),console.log(e),m(e)})});
//# sourceMappingURL=index.5348f7e2.js.map
