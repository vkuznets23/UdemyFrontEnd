import Title from './Title'
import { servicesCards } from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title s1="our" s2="services" />

      <div className="section-center services-center">
        {servicesCards.map((card) => {
          return (
            <article className="service" key={card.id}>
              <span className="service-icon">
                <i className={card.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{card.title}</h4>
                <p className="service-text">{card.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
