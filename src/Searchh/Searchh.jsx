import { useState } from "react";
import style from "./Searchh.module.css";

 function Search({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div id={style.bar}>
      <input
        type="search"
        id={style.Input}
        onChange={handleChange}
        placeholder="Buscar"
      />
      <button id={style.ButtonA} onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
export default Search