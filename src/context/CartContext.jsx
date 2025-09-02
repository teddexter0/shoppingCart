// src/context/CartContext.jsx - Just add one comment line at the top
/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from 'react'

export const CartContext = createContext()

// Actions (like your API endpoints)
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.find(item => item.id === action.payload.id)
      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      }
      return [...state, action.payload]
    }
    
    case 'UPDATE_QUANTITY': {
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0)
    }
    
    case 'REMOVE_FROM_CART': {
      return state.filter(item => item.id !== action.payload.id)
    }
    
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [])
  
  const addToCart = (product, quantity) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } })
  }
  
  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }
  
  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })
  }
  
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
  
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }
  
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      getCartTotal,
      getCartItemCount
    }}>
      {children}
    </CartContext.Provider>
  )
}