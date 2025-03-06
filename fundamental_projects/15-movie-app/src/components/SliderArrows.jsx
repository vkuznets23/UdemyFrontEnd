import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

export const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
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
export const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
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
