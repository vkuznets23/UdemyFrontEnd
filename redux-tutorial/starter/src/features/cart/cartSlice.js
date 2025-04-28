import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [] //mutate state cos of Immer library
    },
    removeItem: (state, action) => {
      //action.payload — это те данные, которые ты передал в dispatch(actionCreator(data))
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },
    increaseAmount: (state, action) => {
      const itemId = action.payload
      const item = state.cartItems.find((item) => item.id === itemId)
      item.amount = item.amount + 1
    },
    decreaseAmount: (state, action) => {
      const itemId = action.payload
      const item = state.cartItems.find((item) => item.id === itemId)
      if (item.amount > 0) item.amount = item.amount - 1
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

// console.log(cartSlice)

export default cartSlice.reducer
export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  calculateTotals,
} = cartSlice.actions
