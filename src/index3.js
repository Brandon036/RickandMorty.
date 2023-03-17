import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import About from './About/About'
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
    <BrowserRouter>
    <About/>
    </BrowserRouter>,
    document.getElementById('about')
  )
  