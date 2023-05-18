import { Bag, ShoppingCart } from 'phosphor-react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import CartItem from './CartItem'
import { PRODUCTS } from './ProductsItems'

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(CartContext)
  const navigate = useNavigate()
  let totalAmount = getTotalCartAmount()
  return (
    <>
      <section className="max-w-5xl mx-auto">
        {/* <table className="table-auto">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
        </table> */}
        {totalAmount > 0 ? (
          <div className="flex flex-col gap-4 w-96 mx-auto mr-0">
            <button
              className="btn btn-primary flex items-center gap-3"
              onClick={() => navigate('/products')}>
              <i>
                <ShoppingCart size={32} />
              </i>
              Continue Shopping
            </button>
            <button className="btn bg-sky-500 flex items-center gap-3 ">
              <i>
                <Bag size={25} />
              </i>{' '}
              Checkout (<span>SubTotal: ${totalAmount}</span>)
            </button>
          </div>
        ) : (
          <h1 className="text-5xl text-center text-rose-600 capitalize">
            Your cart is empty
          </h1>
        )}
        <div>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} product={product} />
            }
          })}
        </div>
      </section>
    </>
  )
}

export default Cart
