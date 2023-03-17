import React from "react";
import Cardis from "../Originss/Cardis"
import Navi from "../Navi/Navi";
import { useState } from "react";
import style from "./Origin.module.css";
import { Route,Routes } from "react-router-dom";
import About from "../About/About";
import Detail from "../Detail/Detail"
import {Link} from "react-router-dom"
import AppO from "../App/AppO"
import Form from "../Form/Form";

function Origin() {
  const [characters, setCharacters] = useState([]);//esto es un estado local

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

    if(characters.find((char)=>char.id === id)){
      return alert("personaje repetido")
     }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
       
        if (data.name) {
          setCharacters([...characters, data]);
          
         
        } else {
          alert("Algo salió mal");
        }
      }, );
  } ;

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>

 <div id={style.Navi}>
        <Navi onSearch={onSearch} />
      </div>
      <Cardis characters={characters} onClose={onClose} /> 

        <div>
      <Form/>
          <br/>
          <div id={style.Bloque}>
          <Link id={style.About} to="/About" >Credito</Link>
          <Link id={style.AppO} to="/AppO">App</Link>
        
          </div>
          


      <Routes>
        
      
      <Route path="/About" element={<About/>}/>
      <Route path="/AppO" element={<AppO/>}/>
      
      </Routes>
        </div>
    </div>
   
  );
}
        
         
    
     

export default Origin;
