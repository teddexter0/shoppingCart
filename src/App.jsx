import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider> {/* Global state provider */}
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  )
}

export default App