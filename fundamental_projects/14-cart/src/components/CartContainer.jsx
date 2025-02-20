import CartItem from './CartItem'
import cartItems from '../data'
import { useReducer } from 'react'
import { reducer } from '../components/reducer'
import {
  CLEAR_CART,
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_ITEM,
} from './actions'

const defaultState = {
  cartItems: cartItems,
  total: cartItems.reduce((acc, curVal) => acc + Number(curVal.price), 0),
}

const CartContainer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const handleClearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const handleIncrease = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } })
  }

  const handleDecrease = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id } })
  }

  if (state.cartItems.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {state.cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              {...cartItem}
              handleRemove={handleRemove}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          )
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total
            <span>{`${state.total}$`}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={handleClearCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
