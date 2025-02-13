import Tour from './Tour'

const Tours = ({ tours, setTours }) => {
  const deleteTour = (id) => {
    const updatedTours = tours.filter((tour) => {
      return tour.id !== id
    })
    setTours(updatedTours)
  }
  return (
    <div className="tours">
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />
      })}
    </div>
  )
}

export default Tours
