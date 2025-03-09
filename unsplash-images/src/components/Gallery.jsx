import { useQuery } from '@tanstack/react-query'
import { getData } from '../axios'

const fetchPhotos = async () => {
  const { data } = await getData.get('/photos?page=1')
  return data
}

const Gallery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['photos'],
    queryFn: fetchPhotos,
  })
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong: {error.message}</p>
  return (
    <section className="image-container">
      {data?.map((photo) => (
        <img
          className="img"
          key={photo.id}
          src={photo.urls.small}
          alt={photo.alt_description}
        />
      ))}
    </section>
  )
}

export default Gallery
