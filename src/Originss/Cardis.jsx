import Cardi from "../Origins/Cardi"
import style from "./Cardis.module.css"
function Cardis({characters, onClose}) {
   
   
    return(
        <div id={style.cardii}> 
       {
       characters.map(({id, name, species, gender, image })=> {
          return (
          <Cardi
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => onClose(id)}
          />
          )
       })
  }
    </div>
    )
 };
 export default Cardis 