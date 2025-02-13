// create state value
// in jsx return button which toggles state value
// based on condition return second component (simple return)
// inside second component create useEffect and run it only on initial render

import { useEffect, useState } from 'react'
const Component = () => {
  useEffect(() => {
    const intID = setInterval(() => {
      console.log('hello from interval')
    }, 1000)
    // every time we render component new interval gets created
    return () => clearInterval(intID)
  }, [])

  return <h1>hello there</h1>
}

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <h1>cleanup function</h1>
      {toggle && <Component />}
      <button type="button" className="btn" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
    </div>
  )
}

export default CleanupFunction
