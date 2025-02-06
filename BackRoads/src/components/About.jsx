import aboutImage from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title s1="about" s2="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImage} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            We are passionate explorers dedicated to helping you experience the
            world in the best way possible. Whether you seek adventure,
            relaxation, or a mix of both, we provide the tips, guides, and
            inspiration you need to make every journey unforgettable.
          </p>
          <p>
            Travel is more than just a destination; it’s an experience. Step off
            the beaten path, immerse yourself in new cultures, and embrace the
            unexpected. Let every journey be a story worth telling.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
