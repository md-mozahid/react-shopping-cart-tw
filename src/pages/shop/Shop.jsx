import { PRODUCTS } from '../../products/ProductList'
import Product from './Product'

const Shop = () => {
  return (
    <div>
      <div>
        <h1 className='text-4xl text-center uppercase'>Shopping list </h1>
      </div>
      <div className='flex flex-wrap mt-4 '>
        {PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop
