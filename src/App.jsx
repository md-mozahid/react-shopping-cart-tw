import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Cart from './shoppingCart/Cart'
import { CartContextProvider } from './shoppingCart/CartContext'
import Home from './shoppingCart/Home'
import Navbar from './shoppingCart/Navbar'
import Products from './shoppingCart/Products'

function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="cart-item" element={<Cart />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </>
  )
}

export default App
