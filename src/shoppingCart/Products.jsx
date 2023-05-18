import React from 'react'
import Product from './Product'
import { PRODUCTS } from './ProductsItems'

const Products = () => {
  return (
    <>
      <section className='max-w-5xl mx-auto px-5 py-5'>
        <div>
          <h1>All Products</h1>
        </div>
        <div className='flex flex-wrap gap-5'>
          {PRODUCTS.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </div>
      </section>
    </>
  )
}

export default Products
