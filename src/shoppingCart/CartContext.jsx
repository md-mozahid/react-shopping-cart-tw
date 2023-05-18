import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState('')
  
  const ContextValue = {}
  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  )
}
