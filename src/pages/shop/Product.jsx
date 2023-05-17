import { useContext } from 'react'
import { ShopContext } from '../../context/Shop.Context'

// eslint-disable-next-line react/prop-types
const Product = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { id, productName, category, price, productImage } = product

  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemAmount = cartItems[id]
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="bg-slate-300 rounded-md px-2 py-2">
          <a className="block relative h-auto rounded overflow-hidden">
            <img
              className="object-cover object-center w-full block"
              src={productImage}
              alt="product image"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {productName}
            </h2>
            <p className="mt-1">{price}</p>
          </div>
          <button
            className="btn btn-primary mt-4"
            onClick={() => addToCart(id)}>
            Add to cart {cartItemAmount > 0 && <>{cartItemAmount}</>}
          </button>
        </div>
      </div>
    </>
  )
}

export default Product
