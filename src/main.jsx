import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider.jsx'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={client}>
        <HelmetProvider>
          <RouterProvider router={routers}></RouterProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
