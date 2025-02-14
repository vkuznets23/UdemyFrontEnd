import Card from './Card'

const MenuCards = ({ showMenu }) => {
  return (
    <div className="section-center">
      {showMenu.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  )
}

export default MenuCards
