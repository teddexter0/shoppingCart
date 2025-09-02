import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to ShopCart!</h1>
        <p>Your one-stop shop for amazing products</p>
        <Link to="/shop" className="cta-button">
          Start Shopping
        </Link>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <h3>🛒 Easy Shopping</h3>
          <p>Browse our curated collection of products</p>
        </div>
        <div className="feature-card">
          <h3>💳 Secure Cart</h3>
          <p>Add items and manage your cart with ease</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Fast Delivery</h3>
          <p>Quick and reliable shipping worldwide</p>
        </div>
      </div>
      
      <div className="stats">
        <div className="stat">
          <h4>1000+</h4>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h4>500+</h4>
          <p>Products</p>
        </div>
        <div className="stat">
          <h4>24/7</h4>
          <p>Support</p>
        </div>
      </div>
    </div>
  )
}

export default Home