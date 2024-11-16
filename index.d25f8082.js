function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n=globalThis,a={},r={},i=n.parcelRequireb11a;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequireb11a=i);var o=i.register;o("27Lyk",function(t,n){e(t.exports,"register",()=>a,e=>a=e);var a,r=new Map;a=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),o("8yWVa",function(n,a){e(n.exports,"images",()=>l),e(n.exports,"resultado",()=>s);var r=i("gQvBo"),o=i("bsOtf"),p=i("jtu1A"),c=i("epm6C"),d=i("cm6Wb");let l=[{piedra:/*@__PURE__*/t(r),id:"piedra"},{papel:/*@__PURE__*/t(o),id:"papel"},{tijera:/*@__PURE__*/t(p),id:"tijera"}],s={victoria:/*@__PURE__*/t(c),derrota:/*@__PURE__*/t(d)};class m extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("style");for(let e of(n.textContent=`
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
  pointer-events: none; /* Bloquea la interacci\xf3n con la imagen */
  opacity: 0.5; /* Opcional: Cambia la opacidad para dar la sensaci\xf3n de inhabilitada

`,l)){let n=Object.values(e).toString(),a=document.createElement("img");a.src=n,a.id=e.id,t.appendChild(a)}t.classList.add("img__content"),t.classList.add("disabled"),e.appendChild(t),e.appendChild(n)}}customElements.define("game-buttons",m)}),o("gQvBo",function(e,t){e.exports=new URL("piedra.083177db.png",import.meta.url).toString()}),o("bsOtf",function(e,t){e.exports=new URL("papel.a18e2c61.png",import.meta.url).toString()}),o("jtu1A",function(e,t){e.exports=new URL("tijera.a063bb16.png",import.meta.url).toString()}),o("epm6C",function(e,t){e.exports=new URL("victoria.ab8c5652.png",import.meta.url).toString()}),o("cm6Wb",function(e,t){e.exports=new URL("derrota.dcc11aeb.png",import.meta.url).toString()}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["429Nj","index.d25f8082.js","24qkM","piedra.083177db.png","56dIy","papel.a18e2c61.png","3BKn4","tijera.a063bb16.png","gjfMx","victoria.ab8c5652.png","lRmME","derrota.dcc11aeb.png"]')),i("8yWVa");
//# sourceMappingURL=index.d25f8082.js.map
