import React from "react";
import style from "./Form.module.css"
import { useState } from "react";

 export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Iniciando sesión con el email: ${email} y la contraseña: ${password}`);
    // Aquí puedes agregar lógica adicional para enviar el formulario a un servidor o manejar la sesión del usuario
  };
    return (
      <div id={style.tabla}>

        <h1 id={style.titul}>Formulario de contacto</h1>

        <form id={style.Formulario} onSubmit={handleSubmit}>

          <div id={style.EmailB}>

          <label id={style.email} htmlFor="email">Email:</label>
          <br />
          <input id={style.input1}type="email" onChange={handleEmailChange} name="email" />
          </div>

          <div id={style.PasswordB}>

          <label htmlFor="password">Password:</label>
          <br />
          <input id={style.input2}htmlFor="password" onChange={handlePasswordChange}  name="password"  />
          </div>

          <div id={style.BotonB}>

          <button type="submit">Iniciar Con Brandon</button>
          </div>
        </form>
      </div>
    );
  }
  