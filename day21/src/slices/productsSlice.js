import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=12')
  if (!res.ok) throw new Error('Failed to fetch products')
  const data = await res.json()
  return data
})

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Unknown error'
      })
  },
})

export default productsSlice.reducer

export const selectProductsState = (state) => state.products
export const selectAllProducts = (state) => state.products.items
export const selectProductsStatus = (state) => state.products.status
export const selectProductsError = (state) => state.products.error

export const selectCategories = createSelector([selectAllProducts], (items) => {
  const set = new Set(items.map((p) => p.category))
  return ['all', ...Array.from(set)]
})

export const makeSelectProductsByCategory = () =>
  createSelector(
    [selectAllProducts, (_, category) => category],
    (items, category) => {
      if (!category || category === 'all') return items
      return items.filter((p) => p.category === category)
    }
  )


