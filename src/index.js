import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Origin from "./Origin/Origin"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(

  <BrowserRouter>
  <Origin />
  </BrowserRouter>,
 
  document.getElementById('origin')
)
