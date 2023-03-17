import React from "react";
import style from './Card2.module.css';

function Card2({onClose,name,species,gender,image}) {
   return (
      <div id={style.target}>
         <button id={style.boton} onClick={onClose}>X</button>
         <h2 id={style.nombre}>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img id={style.imagen} src= {image} alt='' /> 
         
      </div>
   );
}

export default Card2;