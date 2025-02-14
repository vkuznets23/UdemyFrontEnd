import CategoryButton from './CategoryButton'

const Categories = ({ setShowMenu, menu }) => {
  const showAll = () => {
    setShowMenu(menu)
  }

  const showBreakfast = () => {
    const Breakfast = menu.filter((card) => card.category === 'breakfast')
    setShowMenu(Breakfast)
  }

  const showLunch = () => {
    const Lunch = menu.filter((card) => card.category === 'lunch')
    setShowMenu(Lunch)
  }

  const showShakes = () => {
    const Shake = menu.filter((card) => card.category === 'shakes')
    setShowMenu(Shake)
  }
  return (
    <div className="btn-container">
      <CategoryButton onClick={showAll} text="all" />
      <CategoryButton onClick={showBreakfast} text="breakfast" />
      <CategoryButton onClick={showLunch} text="lunch" />
      <CategoryButton onClick={showShakes} text="shakes" />
    </div>
  )
}

export default Categories
