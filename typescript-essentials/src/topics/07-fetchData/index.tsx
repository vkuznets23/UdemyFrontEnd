// import { useState, useEffect } from 'react'
// import { type Tour, tourSchema } from './types'
// const url = 'https://www.course-api.com/react-tours-project'

// function Component() {
//   const [tours, setTours] = useState<Tour[]>([])
//   const [isLoading, setIsLoading] = useState<boolean>(false)
//   const [isError, setIsError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true)
//       try {
//         const response = await fetch(url)
//         if (!response.ok) throw new Error(`Failed to fetch tours...`)
//         const rawData: Tour[] = await response.json()
//         const result = tourSchema.array().safeParse(rawData)
//         if (!result.success) {
//           console.log(result.error.message)
//           throw new Error(`Failed to parse tours`)
//         }

//         setTours(result.data)
//       } catch (err) {
//         const msg = err instanceof Error ? err.message : 'smth went wrong'
//         setIsError(msg)
//         console.log(msg)
//       } finally {
//         setIsLoading(false)
//       }
//     }
//     fetchData()
//   }, [])

//   if (isLoading) return <h1>Loading...</h1>
//   if (isError) return <h1>Sorry, {isError}</h1>
//   return (
//     <div>
//       <h2 className="mb-1">Tours</h2>
//       {tours.map((tour) => {
//         return (
//           <p key={tour.id} className="mb-1">
//             {tour.name}
//           </p>
//         )
//       })}
//     </div>
//   )
// }
// export default Component

import { fetchTours } from './types'
import { useQuery } from '@tanstack/react-query'

function Component() {
  const {
    isPending,
    error,
    isError,
    data: tours,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,
  })

  if (isPending) return <h1>Loading...</h1>
  if (isError) return <h1>Error: {error.message}</h1>
  return (
    <div>
      <h2 className="mb-1">Tours </h2>
      {tours.map((tour) => {
        return (
          <p className="mb-1" key={tour.id}>
            {tour.name}
          </p>
        )
      })}
    </div>
  )
}

export default Component
