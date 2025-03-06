import { Slide } from '../components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CustomNextArrow, CustomPrevArrow } from './SliderArrows'

const SlickCarousel = ({ randomMovies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  }

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {randomMovies.map((movie) => (
          <Slide key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  )
}

export default SlickCarousel
