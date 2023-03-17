import React from "react";
import Search from "../Searchh/Searchh.jsx"


function Navi({onSearch}){
  
    return (
      <div>
        <Search onSearch={onSearch} />
      </div>
    );

}

export default Navi;
