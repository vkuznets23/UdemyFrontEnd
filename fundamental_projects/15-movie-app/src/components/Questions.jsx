import Header from './Header'
import SingleQuestion from './SingleQuestion'

const Questions = ({ questions }) => {
  return (
    <div>
      <Header title="FAQ:" />
      {questions.map(({ id, question, answer }) => {
        return <SingleQuestion key={id} question={question} answer={answer} />
      })}
    </div>
  )
}

export default Questions
