import { createContext, useState } from 'react'
import { PRODUCTS } from './ProductsItems'

export const CartContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export const CartContextProvider = ({ children }) => {
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

  // add to cart
  const addItemToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }))
  }

  // add to cart ++

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
  }
  const updateCartItemAmount = (newAmount, id) => {
    setCartItems((prev) => ({ ...prev, [id]: newAmount }))
  }

  const ContextValue = {
    cartItems,
    addItemToCart,
    removeFromCart,
    updateCartItemAmount,
    getTotalCartAmount,
  }

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  )
}
