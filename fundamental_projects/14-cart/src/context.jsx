import { useContext, useReducer, useEffect, createContext } from 'react'
import reducer from './reducer'
import { getTotals } from './components/utils'
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'

const url = 'https://www.course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

const initialState = {
  loading: true,
  cart: new Map(),
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { totalAmount, totalCost } = getTotals(state.cart)

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const increase = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } })
  }

  const decrease = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id } })
  }

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: LOADING })
      const response = await fetch(url)
      const cart = await response.json()
      console.log('Fetched Cart Data:', cart)
      dispatch({ type: DISPLAY_ITEMS, payload: { cart } })
    }
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext)
}
