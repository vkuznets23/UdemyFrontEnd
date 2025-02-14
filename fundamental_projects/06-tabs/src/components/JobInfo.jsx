import JobDuties from './JobDuties'

const JobInfo = ({ data, currentItem }) => {
  const { company, dates, duties, title } = data[currentItem]
  return (
    <div>
      <h3>{title}</h3>
      <p className="job-company">{company}</p>
      <p className="job-date">{dates}</p>
      <JobDuties duties={duties} />
    </div>
  )
}

export default JobInfo
