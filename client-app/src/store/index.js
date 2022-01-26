import { configureStore } from '@reduxjs/toolkit'
import browseReducer from '../components/Browse/slice';
import cartReducer from '../components/Cart/slice'
export default configureStore({
  reducer: {
    browse: browseReducer,
    cart: cartReducer
  },
  
})