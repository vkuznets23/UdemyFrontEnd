import { useGlobalContext } from '../context'
import sublinks from '../data'
import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
  FaTimes,
} from 'react-icons/fa'

const iconMap = {
  Fa500Px: <Fa500Px />,
  FaAccusoft: <FaAccusoft />,
  FaAdversal: <FaAdversal />,
  FaAvianex: <FaAvianex />,
  FaBitcoin: <FaBitcoin />,
  FaBtc: <FaBtc />,
  FaCodiepie: <FaCodiepie />,
  FaDocker: <FaDocker />,
  FaGithubSquare: <FaGithubSquare />,
}

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ pageId, page, links, icon }) => {
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map(({ id, url, label }) => {
                    return (
                      <a key={id} href={url}>
                        {iconMap[icon]}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
