import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        const data = await resp.json()
        setUser(data)
        console.log(data)
      } catch (err) {
        setIsError(true)
        console.log(err)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  // if (!user) return <h2>No user data found</h2>
  const { avatar_url, name, company, bio } = user
  return (
    <div>
      <h2>Fetch Data </h2>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h3>{name}</h3>
      <p>Works at {company}</p>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
