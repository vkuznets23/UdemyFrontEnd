import { ImCross } from 'react-icons/im'
import { TiMinus } from 'react-icons/ti'
import { useState } from 'react'

const Question = ({ question }) => {
  const [isToggle, setIsToggle] = useState(false)
  return (
    <div className="question">
      <header>
        <h5>{question.title}</h5>
        <button className="question-btn" onClick={() => setIsToggle(!isToggle)}>
          {isToggle ? <TiMinus /> : <ImCross />}
        </button>
      </header>
      {isToggle && <p>{question.info}</p>}
    </div>
  )
}
export default Question
