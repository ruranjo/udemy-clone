import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {SidebarProvider} from './context/sidebar_context.jsx'
import { CoursesProvider } from './context/courses_context.jsx'
import { CartProvider } from './context/cart_context'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <SidebarProvider>
        <CoursesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CoursesProvider>
      </SidebarProvider>
    
  </React.StrictMode>,
)

