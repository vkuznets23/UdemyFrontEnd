import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
  const error = useRouteError()
  console.log(error)
  return <p>{error.message}</p>
}

export default SinglePageError
