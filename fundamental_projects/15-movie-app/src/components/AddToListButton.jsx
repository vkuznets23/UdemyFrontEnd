import { BsBookmarkPlusFill } from 'react-icons/bs'
import { useGlobalContext } from '../context'

const AddToList = ({ movie }) => {
  const { addToMyList } = useGlobalContext()
  const { id, title, poster_path, vote_average, release_date } = movie
  return (
    <button
      className="add-list-btn"
      onClick={() =>
        addToMyList({
          id,
          title,
          poster_path,
          vote_average,
          release_date,
        })
      }
    >
      <BsBookmarkPlusFill size={40} />
    </button>
  )
}

export default AddToList
