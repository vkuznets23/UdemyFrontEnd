import banner from '../assets/banner.png'
import '../App.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerText">
        <h1>
          Navigating the <br /> digital landscape <br />
          for success
        </h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="btn">Book a consultation</button>
      </div>
      <img src={banner} alt="banner" className="bannerImg" />
    </div>
  )
}

export default Banner
