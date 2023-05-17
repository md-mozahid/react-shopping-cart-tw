import { useContext } from 'react'
import { ShopContext } from '../../context/Shop.Context'
import { PRODUCTS } from '../../products/ProductList'
import CartItem from './CartItem'

const Cart = () => {
  const { cartItems } = useContext(ShopContext)
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
    </div>
  )
}

export default Cart
