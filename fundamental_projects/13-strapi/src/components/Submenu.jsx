import { useRef } from 'react'
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

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext()
  const currentPage = sublinks.find((item) => item.pageId === pageId)

  const submenuContainer = useRef(null)

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current
    const { left, right, bottom } = submenu.getBoundingClientRect()
    const { clientX, clientY } = e

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null)
    }
  }
  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link
          return (
            <a key={id} href={url}>
              {iconMap[icon]}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Submenu
