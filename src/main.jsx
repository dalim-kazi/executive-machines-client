import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes/Router'
import {QueryClient, QueryClientProvider} from 'react-query'
import AuthProvider from './provider/AuthProvider'
 
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
          <div>
      <RouterProvider router={Router}></RouterProvider>
        </div>
    </QueryClientProvider>
     </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
