import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="p-10">
      <div className="flex items-center justify-center gap-10 bg-slate-300 p-2">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
