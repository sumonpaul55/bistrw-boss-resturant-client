import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './AuthProvider.jsx'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={routers}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
