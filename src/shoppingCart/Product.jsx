import React from 'react'

const Product = ({ product }) => {
  const { id, name, category, price, image, stock } = product
  return (
    <>
      <section className='max-w-5xl mx-auto'>
        <div className="w-56 mx-auto bg-slate-300 py-4 rounded-md text-center">
          <div>
            <img className="w-48 mx-auto" src={image} alt="Product image" />
          </div>
          <div>
            <p>{category}</p>
            <h2>{name}</h2>
            <p>${price}</p>
          </div>
          <button className="btn">Add To Cart</button>
        </div>
      </section>
    </>
  )
}

export default Product
