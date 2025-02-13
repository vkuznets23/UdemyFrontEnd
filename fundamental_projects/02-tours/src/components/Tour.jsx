import { useState } from 'react'
import Button from './Button'

const TEXT_LIMIT = 200

const Tour = ({ tour, deleteTour }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="single-tour">
      <img src={tour.image} alt={tour.name} className="img" />
      <p className="tour-price">${tour.price}</p>
      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p className="tour-info">
          {isExpanded ? tour.info : `${tour.info.slice(0, TEXT_LIMIT)}... `}
          <Button
            className="info-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            text={`\u00A0\u00A0${isExpanded ? 'Show Less' : 'Read More'}`}
          />
        </p>
        <Button
          className="delete-btn btn-block btn"
          onClick={() => deleteTour(tour.id)}
          text="not interested"
        />
      </div>
    </div>
  )
}

export default Tour
