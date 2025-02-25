import { useGlobalContext } from './context'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'

const App = () => {
  const { isSidebarOpen } = useGlobalContext()
  return (
    <main className="main-container">
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      <Hero />
      <Submenu />
    </main>
  )
}
export default App
