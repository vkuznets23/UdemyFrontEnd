import Button from './Button'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = ({ user, reviews, setIndex }) => {
  const randomUser = () => {
    const random = Math.floor(Math.random() * reviews.length)
    setIndex(random)
  }

  const nextUser = () => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevUser = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }
  return (
    <>
      <div className="img-container">
        <img src={user.image} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{user.name}</h4>
      <p className="job">{user.job}</p>
      <p className="info">{user.text}</p>
      <div className="btn-container">
        <Button className="prev-btn" onClick={prevUser}>
          <FaChevronLeft />
        </Button>
        <Button className="next-btn" onClick={nextUser}>
          <FaChevronRight />
        </Button>
      </div>
      <Button className="btn btn-hipster" onClick={randomUser}>
        surprise me
      </Button>
    </>
  )
}

export default Review
