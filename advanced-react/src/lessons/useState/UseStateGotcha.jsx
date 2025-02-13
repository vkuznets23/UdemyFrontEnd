import { useState } from 'react'

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)

  //this one doesnt updates immidiately
  //   const handleClick = () => {
  //     setCount(count + 1)
  //     console.log(count)
  //   }

  //iF U WANT TO UPDATE NEXT STATE BASED ON THE PREVIOUS STATE
  const handleClick = () => {
    setTimeout(() => {
      //   setCount(count + 1)
      setCount((currentState) => {
        return currentState + 1
      })
    }, 3000)
  }
  return (
    <div>
      <h2>useState</h2>
      <h3>You click {count} times</h3>
      <button type="button" onClick={handleClick}>
        click
      </button>
    </div>
  )
}

export default UseStateGotcha
