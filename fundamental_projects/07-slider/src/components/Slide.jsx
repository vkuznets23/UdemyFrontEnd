import Button from './Button'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Slide = ({ profile, setCurrentIndex, currentIndex, list }) => {
  const { image, name, title, quote } = profile
  return (
    <div className="slide">
      <img className="person-img" src={image} />
      <h4 className="name">{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <Button
        className="prev"
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + list.length) % list.length)
        }
      >
        <FaChevronLeft />
      </Button>
      <Button
        className="next"
        onClick={() => setCurrentIndex((currentIndex + 1) % list.length)}
      >
        <FaChevronRight />
      </Button>
      <FaQuoteRight className="icon" />
    </div>
  )
}

export default Slide
