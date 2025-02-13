import { useState } from 'react'

const ShortCircuitOverview = () => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState('text')

  return (
    <div>
      <h2>short circuit overview</h2>
      <p> FALSY OR: {name || 'anonim'}</p>
      <p> FALSY AND: {name && 'anonim'}</p>
      <p> TRUE OR: {text || 'no text'}</p>
      <p> TRUE AND: {text && 'no text'}</p>
    </div>
  )
}
export default ShortCircuitOverview
