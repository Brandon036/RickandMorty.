import style from "./Cardi.module.css";
import { Link } from "react-router-dom";
import {connect } from "react-redux"
import { addFavorite, deleteFavorite } from "../Redux/action";
import { useState } from "react";
import { useEffect } from "react";
function Cardi({ id,onClose, name, species, gender, image } ) {    {/* addFavorite, deleteFavorite, myFavorites */}

 /* const [isFav, setIsfav] = useState(false)

  const handleFavorite = ( ) => {
    if (isFav){
      setIsfav(false)
      deleteFavorite(id)
  }else{
    setIsfav(true)
    addFavorite( id,onClose, name, species, gender, image )
  }
}
useEffect(() => {                       //useEffect es igual que el componentdidmount y componentdidupdate se ejecuta cuando se monta, ademas
  myFavorites.forEach((fav) => {       
     if (fav.id === id) {
        setIsfav(true);
     }
  });
}, [myFavorites]); */

  return (
    <div id={style.CardT}>
      <button onClick={() => onClose(id)} id={style.Button}>
       DELETE
      </button>
      <img src={image} alt="" />
      
      <Link to={`/detail/${id}`} >
      <h2 id={style.letras}>{name}</h2>
      </Link>

      <h2 id={style.letras}>{species}</h2>
      <h2 id={style.letras}>{gender}</h2>
      <div>
        
       {/* <button onClick={handleFavorite}>FAVORITE</button>
        <button onClick={handleFavorite}>X</button> */}
        
      </div>
    </div>
  );
}
/*
const mapDispatchToProps = (dispatch) =>{// RECIVE EL DISPATH POR DEFECTO
  return{
    addFavorite: (character) => {  // Y ASI ES COMO HACEMOS DISPATCH 
     dispatch (addFavorite(character))
    },
    deleteFavorite: (id) =>{
      dispatch(deleteFavorite(id))
    }
  }
};
const mapStateToProps = (state )=>{
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cardi);*/
export default Cardi



