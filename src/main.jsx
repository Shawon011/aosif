import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { RouterProvider } from 'react-router-dom'
import Router from './Router'
import Header from './components/header/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
