import Question from './Question'

const Questions = ({ questions }) => {
  return (
    <div className="container">
      <h1 className="title">Questions</h1>
      {questions.map((question) => {
        return <Question key={question.id} question={question} />
      })}
    </div>
  )
}

export default Questions
