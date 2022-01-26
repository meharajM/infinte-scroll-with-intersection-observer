import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    itemCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const product = action.payload;
      state.itemCount += 1;
      if(state.items[product.productId]) {
        state.items[product.productId].count += 1;
      } else {
        product.count = 1;
        state.items[product.productId] = product;
      }
    },
    removeFromCart: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer