import { MdNavigateNext } from 'react-icons/md'
import { PiLineVerticalBold } from 'react-icons/pi'

const Header = ({ title }) => {
  return (
    <div className="header">
      <PiLineVerticalBold size={30} color="#f6c700" />
      <h2>{title}</h2>
      <MdNavigateNext className="header-icon" size={35} />
    </div>
  )
}

export default Header
