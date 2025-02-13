// //create state value (boolean)
// return a button and a component/element
// when user clicks the button
// toggle state value
// conditionally render component/element

import { useState } from 'react'

const Component = () => {
  return <h4>Toggled</h4>
}

const ToggleChallenge = () => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div>
      <h1>toggle challenge</h1>
      {isToggled && <Component />}
      <button
        type="button"
        className="btn"
        onClick={() => setIsToggled(!isToggled)}
      >
        {isToggled ? 'close' : 'open'}
      </button>
    </div>
  )
}

export default ToggleChallenge
