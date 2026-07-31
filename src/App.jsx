import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import ShoppingPage from './pages/Shopping/Shopping'
import CartPage from './pages/Cart/Cart'
import NotFoundPage from './error/NotFoundPage'
import { CartProvider } from './context/cartContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shopping", element: <ShoppingPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App