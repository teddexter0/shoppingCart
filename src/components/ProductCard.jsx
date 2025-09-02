import { useState } from 'react'
import { useCart } from "../hooks/useCart"

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const handleAddToCart = () => {
  addToCart(product, quantity)
  alert(`Added ${quantity} ${product.title} to cart! 🛒`) // ← ADD THIS LINE
  setQuantity(1) // Reset quantity after adding
}
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }
  
  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1))
  }
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1
    setQuantity(Math.max(1, value))
  }
  
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        <div className="quantity-controls">
          <button 
            onClick={decrementQuantity}
            className="quantity-btn"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
            min="1"
          />
          <button 
            onClick={incrementQuantity}
            className="quantity-btn"
          >
            +
          </button>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard