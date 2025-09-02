import { useCart } from '../hooks/useCart'

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()
  
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }
  
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)} each</p>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button 
            onClick={() => handleQuantityChange(item.quantity - 1)}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
      <div className="cart-item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  )
}

export default CartItem