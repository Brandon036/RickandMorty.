import React from "react";

import {Link} from "react-router-dom"
import style from "./About.module.css"
function About() {

    return(
        <div id={style.espacio}>
            <h1 id={style.creador}>Creador: <strong>Brandon Barrera.</strong></h1>


      
      <Link to="/Home">Home</Link>

        </div>
    )
}
export default About