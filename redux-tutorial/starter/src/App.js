import { useEffect } from 'react'
import { CartContainer, NavBar, Modal } from './components/'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [dispatch, cartItems])
  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  )
}
export default App
