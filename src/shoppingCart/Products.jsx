import React from 'react'
import Product from './Product'
import { PRODUCTS } from './ProductsItems'

const Products = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-5 py-5">
        <h1 className="text-3xl text-center my-5">All Products</h1>

        <div className="flex flex-wrap gap-5">
          {PRODUCTS.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </div>
      </section>
    </>
  )
}

export default Products
