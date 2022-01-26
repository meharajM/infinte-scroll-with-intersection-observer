import { createSlice } from '@reduxjs/toolkit'

export const browseSlice = createSlice({
  name: 'browse',
  initialState: {
    data: [],
    currentData: [],
    loading: true,
  },
  reducers: {
    getData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    state.data = action.payload.products;
    state.currentData = state.data.slice(0, 10)
    state.currentDataPointer = state.currentData.length;
      state.loading = false;
      
    },
    updateCurrentData: (state) => {
      const currentPointer = state.currentDataPointer;
      const diff = state.data.length - state.currentDataPointer;
      if (diff > 0) {
        const nextPointer =  diff > 10 ? state.currentDataPointer + 10 : state.currentDataPointer + diff; 
        state.currentDataPointer = nextPointer;
        state.currentData = [...state.currentData, ...state.data.slice(currentPointer, nextPointer )]
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { getData, updateCurrentData } = browseSlice.actions

export default browseSlice.reducer