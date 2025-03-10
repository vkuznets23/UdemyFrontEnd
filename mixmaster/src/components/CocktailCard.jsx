import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CocktailCard = ({ drink }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={drink.image} alt={drink.name} className="img" />
      </div>
      <div className="footer">
        <h4>{drink.name}</h4>
        <h5>{drink.glass}</h5>
        <p>{drink.info}</p>
        <Link to={`/cocktail/${drink.id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`

export default CocktailCard
