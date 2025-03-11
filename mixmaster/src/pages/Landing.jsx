import { useLoaderData } from 'react-router-dom'
import CocktailList from '../components/CocktailList'
import Search from '../components/Search'
import axios from 'axios'

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const searchTerm = 'margarita'
  const resp = await axios.get(`${baseURL}${searchTerm}`)
  return { drinks: resp.data.drinks, searchTerm }
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData()

  return (
    <>
      <Search searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
