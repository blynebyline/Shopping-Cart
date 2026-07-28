import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ShoppingPage from './pages/Shopping/Shopping.jsx'
import NotFoundPage from './error/Notfoundpage.jsx'

const router = createBrowserRouter([
    {
      path: "/", 
      element: <App />},
    {
      path: "/Shopping",
      element: <ShoppingPage />
    },
    {
      path: "*",
      element: <NotFoundPage />
    },
    
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
