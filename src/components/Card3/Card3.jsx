import React from "react";
import style from './Card3.module.css';

function Card3({onClose,name,species,gender,image}) {
   return (
      <div id={style.targget}>
         <button id={style.boton} onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2 id={style.genero}>{gender}</h2>
         <img id={style.imagen} src= {image} alt='' /> 
         
      </div>
   );
}

export default Card3;