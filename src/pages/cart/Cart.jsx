import { Bag, ShoppingCart } from 'phosphor-react'
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
    <div className="max-w-4xl mx-auto bg-slate-200 p-5">
      {totalAmount > 0 ? (
        <div className="flex flex-col gap-4 w-96 mx-auto mr-0">
          <button
            className="btn btn-primary flex items-center gap-3"
            onClick={() => navigate('/')}>
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

      <h1 className="text-3xl my-7 capitalize">Your cart items</h1>

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
