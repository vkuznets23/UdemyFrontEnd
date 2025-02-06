import Title from './Title'
import { toursCards } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title s1="featured" s2="tours" />

      <div className="section-center featured-center">
        {toursCards.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.data}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p> {tour.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {tour.country}
                  </p>
                  <p>{`${tour.duration} days`}</p>
                  <p>{`From $${tour.price}`}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
