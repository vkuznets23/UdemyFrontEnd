import Slide from './Slide'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

const SlickCarousel = ({ randomMovies }) => {
  const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        'custom-arrow next' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <MdNavigateNext size={40} />
    </button>
  )

  // eslint-disable-next-line no-unused-vars
  const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        'custom-arrow prev' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <MdNavigateBefore size={40} />
    </button>
  )

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
          <Slide
            key={movie.id}
            title={movie.title}
            backdrop_path={movie.backdrop_path}
            poster_path={movie.poster_path}
          />
        ))}
      </Slider>
    </div>
  )
}

export default SlickCarousel
