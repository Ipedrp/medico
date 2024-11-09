import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./router/medico/login/Login.jsx"
import Initial from './router/medico/Initial/Initial.jsx'
import Classificacao from './router/medico/Classificacao/Classificacao.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Login/>,
      },
      {
        path: '/home',
        element: <Initial/>,
      },
      {
        path: '/classificacao',
        element: <Classificacao/>,
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)