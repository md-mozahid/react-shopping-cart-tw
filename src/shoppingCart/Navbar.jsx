import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto ">
        <div>
          <nav className="bg-slate-300 px-5 py-2 flex justify-center gap-5">
            <Link to="/home">Home</Link>
            <Link to="/products">Product List</Link>
            <Link to="/cart-item">
              <ShoppingCart size={32} />
            </Link>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Navbar
