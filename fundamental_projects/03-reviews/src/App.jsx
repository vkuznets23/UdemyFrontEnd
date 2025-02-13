import { useState } from 'react'
import { reviews } from './data'
import Review from './components/Review'

function App() {
  const [index, setIndex] = useState(1)

  const user = reviews[index]
  return (
    <main>
      <div className="review">
        <Review user={user} setIndex={setIndex} reviews={reviews} />
      </div>
    </main>
  )
}

export default App
