import Persons from '../components/Persons'
import data from '../data'

function App() {
  return (
    <main>
      <div className="container">
        <h3>{data.length} birthdays today</h3>
        <Persons />
      </div>
    </main>
  )
}

export default App
