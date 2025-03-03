import { useState } from 'react'

const SingleQuestion = ({ question, answer }) => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div>
      <div>
        {question}
        <button onClick={() => setIsToggled(!isToggled)}>
          {isToggled ? 'less' : 'more'}
        </button>
      </div>
      {isToggled && <p>{answer}</p>}
    </div>
  )
}

export default SingleQuestion
