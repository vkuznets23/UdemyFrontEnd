import { data } from '../../../data'
import { useState } from 'react'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button onClick={() => handleRemove(person.id)}>remove</button>
          </div>
        )
      })}
      <button
        onClick={() => {
          setPeople([])
        }}
      >
        remove all
      </button>
    </div>
  )
}

export default UseStateArray
