import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useGlobalContext } from './context'

function App() {
  const { loading } = useGlobalContext()

  if (loading)
    return (
      <div>
        <div className="loading" style={{ marginTop: '6rem' }}></div>
      </div>
    )
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
