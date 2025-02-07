import { servicesCards } from '../data'

const Services = () => {
  return (
    <div>
      <div className="serviceHeader" id="services">
        <h2>Services</h2>
        <span className="additionalText">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </span>
      </div>
      <div className="cardsContainer">
        {servicesCards.map((card) => {
          return (
            <div key={card.id} className="serviceCard">
              <div className="textBtn">
                <div>
                  <h3>{card.title1}</h3>
                  <h3>{card.title2}</h3>
                </div>
                <button className="cardBtn" type="button">
                  Learn more
                </button>
              </div>
              <img src={card.img} alt={card.title1} className="imgService" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
