import { v4 as uuidv4 } from 'uuid'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { useMemo } from 'react'

const JobDuties = ({ duties }) => {
  const dutiesWithIds = useMemo(
    () => duties.map((duty) => ({ id: uuidv4(), text: duty })),
    [duties]
  )
  return (
    <div>
      {dutiesWithIds.map((duty) => {
        return (
          <p className="job-desc" key={duty.id}>
            <FaAngleDoubleRight className="job-icon" /> {duty.text}
          </p>
        )
      })}
    </div>
  )
}

export default JobDuties
