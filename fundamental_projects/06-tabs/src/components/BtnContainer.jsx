const BtnContainer = ({ data, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {data.map((job, index) => {
        return (
          <button
            className="job-btn"
            key={index}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
