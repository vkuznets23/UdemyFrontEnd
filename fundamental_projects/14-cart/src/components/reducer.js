import {
  REMOVE_ITEM,
  CLEAR_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      }
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      }
    case INCREASE_AMOUNT: {
      const updatedCart = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 }
        }
        return item
      })

      const newTotal = parseFloat(
        updatedCart
          .reduce((acc, item) => acc + item.price * item.amount, 0)
          .toFixed(2)
      )

      return {
        ...state,
        total: newTotal,
        cartItems: updatedCart,
      }
    }
    case DECREASE_AMOUNT: {
      //update the number (aka amount in the db)
      const updatedCart = state.cartItems.map((item) => {
        if (item.id === action.payload.id && item.amount > 0) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      })

      // recalculate total
      const newTotal = updatedCart.reduce((acc, item) => {
        if (item.id === action.payload.id && item.amount > 0) {
          return acc - item.price
        }
        return acc
      }, state.total)

      return {
        ...state,
        cartItems: updatedCart,
        total: newTotal,
      }
    }
    default:
      throw new Error(`No matching ${action.type} — action type`)
  }
}
