import React from 'react'
import ReactDOM from 'react-dom/client'

import './app.css'

import { Sidebar } from './components/Sidebar'

import { LayoutStyle } from './styles/LayoutStyle'

import { RouterProvider } from 'react-router-dom';
import { Router } from './Routes'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
