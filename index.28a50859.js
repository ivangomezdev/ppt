function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t=globalThis,a={},n={},r=t.parcelRequireb11a;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequireb11a=r);var i=r.register;i("27Lyk",function(t,a){e(t.exports,"register",()=>n,e=>n=e);var n,r=new Map;n=function(e,t){for(var a=0;a<t.length-1;a+=2)r.set(t[a],{baseUrl:e,path:t[a+1]})}}),i("8yWVa",function(t,a){e(t.exports,"images",()=>c),e(t.exports,"resultado",()=>l);var n=r("7kCDf"),i=r("kYCkh"),o=r("g4MWs"),p=r("bczGJ"),d=r("hvdb3");let c=[{piedra:n,id:"piedra"},{papel:i,id:"papel"},{tijera:o,id:"tijera"}],l={victoria:p,derrota:d};class s extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),a=document.createElement("style");for(let e of(a.textContent=`
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

`,c)){let a=Object.values(e).toString(),n=document.createElement("img");n.src=a,n.id=e.id,t.appendChild(n)}t.classList.add("img__content"),t.classList.add("disabled"),e.appendChild(t),e.appendChild(a)}}customElements.define("game-buttons",s)}),i("7kCDf",function(e,t){e.exports=new URL("piedra.083177db.png",import.meta.url).toString()}),i("kYCkh",function(e,t){e.exports=new URL("papel.a18e2c61.png",import.meta.url).toString()}),i("g4MWs",function(e,t){e.exports=new URL("tijera.a063bb16.png",import.meta.url).toString()}),i("bczGJ",function(e,t){e.exports=new URL("victoria.ab8c5652.png",import.meta.url).toString()}),i("hvdb3",function(e,t){e.exports=new URL("derrota.dcc11aeb.png",import.meta.url).toString()}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["429Nj","index.28a50859.js","dUsoY","piedra.083177db.png","3VkPz","papel.a18e2c61.png","1G19l","tijera.a063bb16.png","6i9Py","victoria.ab8c5652.png","hhYb2","derrota.dcc11aeb.png"]')),r("8yWVa");
//# sourceMappingURL=index.28a50859.js.map
