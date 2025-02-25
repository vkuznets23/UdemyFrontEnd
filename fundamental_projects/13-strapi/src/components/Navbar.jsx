import { useGlobalContext } from '../context'
import NavLinks from './NavLinks'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext()
  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }
  }
  return (
    <nav className="nav-center" onMouseLeave={handleSubmenu}>
      <h3 className="logo">Strapi</h3>
      <button className="toggle-btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <NavLinks />
    </nav>
  )
}

export default Navbar
