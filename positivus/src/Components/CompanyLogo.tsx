import { companyLogo } from '../data'
import '../App.css'

const CompanyLogo = () => {
  return (
    <div className="companyLogos">
      {companyLogo.map((companyLogo) => {
        console.log(companyLogo.img)

        return (
          <img
            key={companyLogo.id}
            src={companyLogo.img}
            alt={companyLogo.alt}
          />
        )
      })}
    </div>
  )
}

export default CompanyLogo
