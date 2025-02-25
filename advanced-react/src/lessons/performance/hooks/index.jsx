import { useCallback, useState, useMemo } from 'react'
import { data } from '../../../../data'
import List from './List'
import slowFunction from './slowFunction'

const LowerState = () => {
  const [count, setCount] = useState(0)
  const [people, setPeople] = useState(data)

  const value = useMemo(() => slowFunction(), [])
  console.log(value)

  // const removePerson = (id) => {
  //   const newPeople = people.filter((person) => person.id !== id)
  //   setPeople(newPeople)
  // }

  const removePerson = useCallback((id) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id))
  }, [])

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}
export default LowerState
