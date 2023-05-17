import { createContext, useState } from 'react'
import { PRODUCTS } from '../products/ProductList'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

// eslint-disable-next-line react/prop-types
export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }))
  }
  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
  }
  const updateCartItemAmount = (newAmount, id) => {
    setCartItems((prev) => ({ ...prev, [id]: newAmount }))
  }
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemAmount,
    getTotalCartAmount,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
