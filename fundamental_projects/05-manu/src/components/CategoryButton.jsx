const CategoryButton = ({ onClick, text }) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  )
}

export default CategoryButton
