import React from "react";           
//import style from './Cards.modules.css';

 function Cards({caracteristicas}) {
   
   
   return(
       <div> 
      {
      caracteristicas.map(({id, name, species, gender, image})=> {
         return <Cards
         key={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         onClose={() => alert('Emulamos que se cierra la card')}
         />
      })
 }
   </div>
   )
};
export default Cards 