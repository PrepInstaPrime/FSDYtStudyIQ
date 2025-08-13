import { createSelector, createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}, // id -> { product, quantity }
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const id = product.id
      if (!state.items[id]) {
        state.items[id] = { product, quantity: 1 }
      } else {
        state.items[id].quantity += 1
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      delete state.items[id]
    },
    incrementQty: (state, action) => {
      const id = action.payload
      if (state.items[id]) state.items[id].quantity += 1
    },
    decrementQty: (state, action) => {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].quantity -= 1
        if (state.items[id].quantity <= 0) delete state.items[id]
      }
    },
    clearCart: (state) => {
      state.items = {}
    },
  },
})

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } = cartSlice.actions
export default cartSlice.reducer

export const selectCartState = (state) => state.cart
export const selectCartItemsArray = createSelector([selectCartState], (cart) =>
  Object.values(cart.items)
)
export const selectCartTotalQty = createSelector([selectCartItemsArray], (items) =>
  items.reduce((sum, it) => sum + it.quantity, 0)
)
export const selectCartTotalPrice = createSelector([selectCartItemsArray], (items) =>
  items.reduce((sum, it) => sum + it.quantity * (it.product.price || 0), 0)
)


