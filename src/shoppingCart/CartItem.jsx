import React from 'react'
import { useContext } from 'react'
import { CartContext } from './CartContext'

const CartItem = ({ product }) => {
  const { cartItems, addItemToCart, removeFromCart, updateCartItemAmount } =
    useContext(CartContext)
  const {id, name, price, image } = product
  return (
    <>
      <section className="border-red-500 px-6 py-3">
        <div className="container p-10 border-blue-400 bg-slate-300 rounded-md flex">
          <div className="">
            <h2 className="text-2xl">{name}</h2>
            <img className="w-28" src={image} alt="" />
          </div>

          <div className="space-x-2 flex items-center justify-center">
            <button className="btn text-xl" onClick={() => removeFromCart(id)}>
              -
            </button>
            <input
              className="inputText w-20 text-center text-xl"
              value={cartItems[id]}
              onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}
            />
            <button className="btn text-xl" onClick={() => addItemToCart(id)}>
              +
            </button>
          </div>
          <div className="flex">
            <p>Price: ${price}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartItem
