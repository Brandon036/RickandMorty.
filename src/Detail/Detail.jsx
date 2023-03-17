import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



function Detail(){
     const detailId = useParams()
     const  [character, setCharacter] = useState([]);

     useEffect(() => {
         const URL_BASE = "https://be-a-rym.up.railway.app/api";
         const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";
        fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              alert("No hay personajes con ese ID");
            }
          })
          .catch(() => {
            alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, []);

  return(
    <div>

    </div>
  )
}
export default Detail