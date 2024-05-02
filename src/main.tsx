import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScreenShot from './pages/ScreenShot'
import './index.css'
import './styles/app.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={ <ScreenShot /> }></Route>
    </Routes>
  </BrowserRouter>
)
