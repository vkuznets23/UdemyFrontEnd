import { BsBookmarkPlusFill } from 'react-icons/bs'

const AddToList = ({
  addToMyList,
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}) => {
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
