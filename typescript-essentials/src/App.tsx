import './App.css'
import Component from './topics/01-fundamentals'

function App() {
  return (
    <main>
      <Component name="peter" id={1}>
        <h1>hello</h1>
      </Component>
      <Component name="peter" id={1}></Component>
    </main>
  )
}

export default App
