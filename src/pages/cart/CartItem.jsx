import { useContext } from 'react'
import { ShopContext } from '../../context/Shop.Context'


const CartItem = ({ product }) => {
  const { id, productName, category, price, productImage } = product
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount } =
    useContext(ShopContext)
  return (
    <>
      <section className='border-red-500 px-6 py-3'>
        <div className="container p-10 border-blue-400 bg-slate-300 rounded-md flex">
          <div className='col-span-4'>
            <h2 className='text-2xl'>{productName}</h2>
            <img className="w-40" src={productImage} alt="" />
          </div>

          <div className='space-x-2 flex items-center justify-center col-span-4'>
            <button className="btn text-2xl" onClick={() => removeFromCart(id)}>
              -
            </button>
            <input
            className='inputText w-20 text-center'
              value={cartItems[id]}
              onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}
            />
            <button className="btn text-2xl" onClick={() => addToCart(id)}>
              +
            </button>
          </div>
          <div className='flex col-span-4'>
            <p>Price: ${price}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartItem
