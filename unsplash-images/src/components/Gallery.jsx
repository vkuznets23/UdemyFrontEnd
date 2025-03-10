import { useQuery } from '@tanstack/react-query'
import { getData } from '../axios'
import { useGlobalContext } from '../context'
import Loader from './Loading'

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const { data, isLoading, error } = useQuery({
    queryKey: ['photos', searchTerm],
    queryFn: async () => {
      const { data } = await getData.get(
        `search/photos?per_page=15&order_by=popular&query=${searchTerm}`
      )
      return data
    },
  })
  if (isLoading) return <Loader />
  if (error)
    return (
      <section className="image-container">
        <p>Something went wrong: {error.message}</p>
      </section>
    )
  if (data.results < 1)
    return (
      <section className="image-container">
        <p>Can't find any results...</p>
      </section>
    )
  return (
    <section className="image-container">
      {data.results.map((photo) => (
        <img
          className="img"
          key={photo.id}
          src={photo?.urls?.regular}
          alt={photo.alt_description || 'Unsplash Image'}
        />
      ))}
    </section>
  )
}

export default Gallery
