import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/Shop.Context'
import { PRODUCTS } from '../../products/ProductList'
import CartItem from './CartItem'

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const navigate = useNavigate()
  let totalAmount = getTotalCartAmount()
  return (
    <div>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} product={product} />
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <p>SubTotal: ${totalAmount}</p>
          <button className="btn" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
          <button className="btn">Checkout</button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
      
    </div>
  )
}

export default Cart
