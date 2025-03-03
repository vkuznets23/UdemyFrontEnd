import { useEffect, useState } from 'react'
import Slide from './Slide'

const Slider = ({ randomMovies }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentMovie = randomMovies[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === randomMovies.length - 1 ? 0 : prevIndex + 1
    )
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? randomMovies.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 10000)

    return () => clearInterval(interval)
  })

  return (
    <Slide
      title={currentMovie.title}
      backdrop_path={currentMovie.backdrop_path}
      poster_path={currentMovie.poster_path}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />
  )
}

export default Slider
