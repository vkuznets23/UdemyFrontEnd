const Card = ({ card }) => {
  return (
    <article className="menu-item">
      <img className="img" src={card.img} alt={card.title} />
      <div className="item-info">
        <header>
          <h5>{card.title}</h5>
          <span className="item-price"> ${card.price}</span>
        </header>
        <p className="item-text">{card.desc}</p>
      </div>
    </article>
  )
}
export default Card
