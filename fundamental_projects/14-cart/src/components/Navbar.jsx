import { FaCartPlus } from 'react-icons/fa'
import cartItems from '../data'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{cartItems.length}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
