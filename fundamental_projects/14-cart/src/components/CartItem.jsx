import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const CartItem = ({
  id,
  img,
  title,
  price,
  amount,
  handleRemove,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => handleRemove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => handleIncrease(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => handleDecrease(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  )
}

export default CartItem
