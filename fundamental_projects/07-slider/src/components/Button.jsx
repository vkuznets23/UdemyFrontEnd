const Button = ({ onClick, children, className }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
