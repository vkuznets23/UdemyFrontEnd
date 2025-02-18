import text from './data'
import { useState } from 'react'

function App() {
  const [paragraphs, setParagraphs] = useState([])
  const [count, setCount] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setParagraphs(text.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h2>Tired of bored Lorem Ipsum?</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </article>
    </section>
  )
}

export default App
