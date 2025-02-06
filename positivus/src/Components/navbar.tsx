import { useState } from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../data'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="positivus" />
      </div>

      {/* Desktop Navigation */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className="menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
