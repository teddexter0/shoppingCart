import { Link } from 'react-router-dom'
import { useCart } from "../hooks/useCart"

function Navbar() {
  const { getCartItemCount } = useCart()
  
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">ShopCart</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <Link to="/cart">
            Cart ({getCartItemCount()})
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar