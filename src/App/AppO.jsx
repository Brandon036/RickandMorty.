import React from "react";

import {Link} from "react-router-dom"
import App from "./App";
function AppO(){

    return (
        <div>
        
            <Link to="/Home">Home</Link>
            <div>
                {<App/>}
            </div>
            
            
        </div>
    )
}
export default AppO