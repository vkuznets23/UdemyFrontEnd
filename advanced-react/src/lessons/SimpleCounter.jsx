import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h4>You clicked {count} times </h4>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click
      </button>
    </>
  )
}

export default Counter
