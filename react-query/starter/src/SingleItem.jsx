import { useDeleteTask, useEditTask } from './reactQueryCustomHooks'

const SingleItem = ({ item }) => {
  const { editTask } = useEditTask()
  const { deleteTask, deleteTaskLoading } = useDeleteTask()

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ id: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(item.id)}
        disabled={deleteTaskLoading}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem
