// src/pages/Cart.jsx - FIXED VERSION
import { Link } from 'react-router-dom'  // ← ADD THIS IMPORT
import { useCart } from '../hooks/useCart'
import CartItem from '../components/CartItem'

function Cart() {
  const { cart, getCartTotal } = useCart()
  
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is empty!</p>
        <Link to="/shop" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    )
  }
  
  const handleCheckout = () => {
    alert('Thanks for shopping! 🛒\n(This is just a demo - no real payment processed)')
  }
  
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${getCartTotal().toFixed(2)}</h2>
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart