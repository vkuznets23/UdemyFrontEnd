import { useState } from 'react'
import { menu } from './data'
import Title from './components/Title'
import Categories from './components/Categories'
import MenuCards from './components/MenuCards'

function App() {
  const [showMenu, setShowMenu] = useState(menu)

  return (
    <main>
      <Title text="Our menu" />
      <Categories setShowMenu={setShowMenu} menu={menu} />
      <MenuCards showMenu={showMenu} />
    </main>
  )
}

export default App
