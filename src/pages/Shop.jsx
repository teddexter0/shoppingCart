import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../services/api'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    // This runs when component mounts (like server-side data fetching)
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await fetchProducts()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    loadProducts()
  }, []) // Empty dependency array = run once on mount
  
  if (loading) return <div className="loading">Loading products...</div>
  if (error) return <div className="error">Error: {error}</div>
  
  return (
    <div className="shop-page">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop