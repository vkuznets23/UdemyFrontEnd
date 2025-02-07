import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 26,
    hobby: 'Playing computer games',
  })
  // Option 1
  //   const [name, setName] = useState('peter')
  //   const [age, setage] = useState(26)
  //   const [hobby, setHobby] = useState('Playing computer games')

  const handleClick = () => {
    // Option 1
    // setName('John')
    // setage(30)
    // setHobby('screaming at the computer')

    // Option 2
    // setPerson({
    //   name: 'John',
    //   age: 30,
    //   hobby: 'screaming at the computer',
    // })

    // setPerson({ ...person, name: 'Susan' })

    setPerson({
      ...person,
      name: 'John',
      age: 30,
      hobby: 'screaming at the computer',
    })
  }
  return (
    <div>
      <h2>UseStateObject</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button type="button" onClick={handleClick}>
        show john
      </button>
    </div>
  )
}

export default UseStateObject
