import React from "react";
import style from './Card1.module.css';

function Card1({onClose,name,species,gender,image}) {
   return (
      <div id={style.Card1} >
         <button id={style.boton} onClick={onClose}>X</button>
         <h2 id={style.nombre} >{name}</h2>
         <h2 >{species}</h2>
         <h2 >{gender}</h2>
         <img id={style.imagen} src= {image} alt='' /> 
         
      </div>
   );
}

export default Card1;