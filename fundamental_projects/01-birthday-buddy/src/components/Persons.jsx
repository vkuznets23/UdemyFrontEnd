import { useState } from 'react'
import data from '../../data'

const Persons = () => {
  const [person, setPerson] = useState(data)
  const clearAll = () => {
    setPerson([])
  }

  return (
    <div>
      {person.map((person) => {
        return (
          <div key={person.id} className="person">
            <img src={person.image} alt={person.name} className="img" />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </div>
        )
      })}
      <button type="button" className="btn btn-block" onClick={clearAll}>
        clear all
      </button>
    </div>
  )
}

export default Persons
