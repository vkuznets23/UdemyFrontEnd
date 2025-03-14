import { useInfiniteQuery } from '@tanstack/react-query'
import { getData } from '../axios'
import { useGlobalContext } from '../context'
import Loader from './Loading'
import { useEffect } from 'react'

const ErrorMessage = ({ message }) => (
  <section className="image-container">
    <p>Something went wrong: {message}</p>
  </section>
)

const NoResultsMessage = () => (
  <section className="image-container">
    <p>Can't find any results...</p>
  </section>
)

const fetchPages =
  (searchTerm) =>
  async ({ pageParam = 1 }) => {
    const { data } = await getData.get(
      `search/photos?per_page=15&order_by=popular&query=${searchTerm}&page=${pageParam}`
    )
    return data
  }

const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['photos', searchTerm],
    queryFn: fetchPages(searchTerm),
    staleTime: 1000 * 60 * 5,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.results?.length < 15 ? undefined : allPages.length + 1
    },
  })

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 100 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage()
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  if (isLoading) return <Loader />
  if (error) return <ErrorMessage message={error.message} />
  if (!data?.pages?.length) return <NoResultsMessage />

  return (
    <section className="image-container">
      {data.pages.map((page) =>
        page.results.map((photo) => (
          <img
            className="img"
            key={photo.id}
            src={photo?.urls?.regular}
            alt={photo.alt_description || 'Unsplash Image'}
          />
        ))
      )}
      {isFetchingNextPage && <Loader />}
    </section>
  )
}

export default Gallery
