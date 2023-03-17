import React from "react";
import style from './Card.module.css';

function Card({onClose,name,species,gender,image}) {
   return (
      <div id={style.target}>
         <button id={style.x} onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img id={style.imagen} src= {image} alt='' /> 
         
      </div>
   );
}

export default Card;