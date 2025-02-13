import { questions } from './data'
import Questions from './components/Questions'

function App() {
  return (
    <main>
      <Questions questions={questions} />
    </main>
  )
}

export default App
