import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query'

const singleCocktailURL =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailURL}${id}`)
      return data
    },
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    return { id }
  }

const Cocktail = () => {
  // const { id, data } = useLoaderData()
  const { id } = useLoaderData()
  const { data } = useQuery(singleCocktailQuery(id))

  // if (!data) return <h3>Something went wrong...</h3>
  if (!data) return <Navigate to="/" />

  const singleDrink = data.drinks[0]
  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key])

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} atl={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((ingredient, index) => {
              return (
                <span className="ing" key={ingredient}>
                  {ingredient}
                  {index < validIngredients.length - 1 ? ',' : ''}
                </span>
              )
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`

export default Cocktail
