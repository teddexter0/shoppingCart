// This is like your backend API calls
export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// You could add more API calls here:
// export const fetchCategories = async () => { ... }
// export const fetchProductById = async (id) => { ... }