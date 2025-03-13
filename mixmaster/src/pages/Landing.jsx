import { useLoaderData } from 'react-router-dom'
import CocktailList from '../components/CocktailList'
import Search from '../components/Search'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const resp = await axios.get(`${baseURL}${searchTerm}`)
      return resp.data.drinks
    },
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get('search') || ''

    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
    return { searchTerm }
  }

const Landing = () => {
  const { searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))

  return (
    <>
      <Search searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
