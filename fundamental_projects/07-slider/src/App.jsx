import { useState, useEffect } from 'react'
import { list } from './data'
import Slide from './components/Slide'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((currentIndex + 1) % list.length),
      10000
    )
    return () => clearInterval(interval)
  }, [currentIndex])

  const profile = list[currentIndex]
  return (
    <main className="slider-container">
      <Slide
        profile={profile}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        list={list}
      />
    </main>
  )
}

export default App
