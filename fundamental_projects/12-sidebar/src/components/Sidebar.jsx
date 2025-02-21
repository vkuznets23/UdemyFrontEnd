import { useGlobalContext } from '../context'
import { links } from '../data'
import { FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa'

const iconMap = {
  FaFacebook: <FaFacebook />,
  FaTwitter: <FaTwitter />,
  FaLinkedin: <FaLinkedin />,
  FaBehance: <FaBehance />,
  FaSketch: <FaSketch />,
  FaHome: <FaHome />,
  FaUserFriends: <FaUserFriends />,
  FaFolderOpen: <FaFolderOpen />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaWpforms: <FaWpforms />,
}

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext()

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, icon, text } = link
          return (
            <li
              key={id}
              style={{ display: 'flex', alignItems: 'center', gap: 15 }}
            >
              <a href={url}>
                {iconMap[icon]}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <button onClick={closeSidebar}></button>
    </aside>
  )
}

export default Sidebar
