import React from 'react'
import Image from '../assets/products/shopping-cart2.png'

const Home = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto bg-sky-300 p-5 h-screen">
        <div className="flex justify-around items-center">
          <div className="">
            <h1 className='text-3xl'>Shopping Cart</h1>
            <p>
              Enjoy shopping and <br /> get anything you want
            </p>
            <button className='btn mt-5'>Learn More</button>
          </div>

          <img className="w-96" src={Image} alt="" />
        </div>
      </section>
    </>
  )
}

export default Home
