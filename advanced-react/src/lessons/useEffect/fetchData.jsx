import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [value, setValue] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        const data = await resp.json()
        setValue(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <h3>fetch data example</h3>
      <ul className="users">
        {value.map(({ id, avatar_url, login, html_url }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
