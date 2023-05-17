import { useContext } from 'react'
import { ShopContext } from '../../context/Shop.Context'

const CartItem = ({ product }) => {
  const { id, productName, category, price, productImage } = product
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount } =
    useContext(ShopContext)
  return (
    <div className="p-10">
      <img src={productImage} alt="" />
      <div>
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <div>
        <button className="btn" onClick={() => removeFromCart(id)}>
          -
        </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}
        />
        <button className="btn" onClick={() => addToCart(id)}>
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem
