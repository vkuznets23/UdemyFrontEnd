import { useQuery } from '@tanstack/react-query'
import { getData } from '../axios'
import { useGlobalContext } from '../context'

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const { data, isLoading, error } = useQuery({
    queryKey: ['photos', searchTerm],
    queryFn: async () => {
      const { data } = await getData.get(`search/photos?query=${searchTerm}`)
      return data
    },
  })
  if (isLoading)
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  if (error)
    return (
      <section className="image-container">
        <h4>Something went wrong: {error.message}</h4>
      </section>
    )
  if (data.results < 1)
    return (
      <section className="image-container">
        <h4>can't find any results...</h4>
      </section>
    )
  return (
    <section className="image-container">
      {data.results.map((photo) => (
        <img
          className="img"
          key={photo.id}
          src={photo?.urls?.regular}
          alt={photo.alt_description}
        />
      ))}
    </section>
  )
}

export default Gallery
