var e=globalThis,t={},r={},o=e.parcelRequireb11a;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequireb11a=o),o.register;var l=o("kOHZq").goTo;document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("game-buttons").shadowRoot,t=e.querySelector("div"),r=document.querySelector("game-buttons"),o=r?.shadowRoot,n=o?.querySelectorAll("img");e.addEventListener("click",()=>{let e=setInterval(()=>{l("/result"),t.style="display:none"},2e3);setTimeout(()=>{clearInterval(e),n?.forEach(e=>{e.style="display:block"})},3e3)})});
//# sourceMappingURL=index.26d80dda.js.map
