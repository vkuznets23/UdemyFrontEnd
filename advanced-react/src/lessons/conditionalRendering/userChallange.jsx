// create state value
// user - default value null
// create two functions
// login - set's user equal to object with name property
// logout - set's user equal to null
// in jsx use ? to display two different setups
// h4 with "hello there, user name" and logout button
// h4 with "please login " and login button

import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  const loginFunc = () => {
    const user = {
      name: 'Emma',
      surname: 'Blabla',
    }

    setUser(user)
  }
  return (
    <div>
      <h1>user challenge</h1>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button type="button" onClick={() => setUser(null)}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login </h4>
          <button type="button" onClick={loginFunc}>
            login
          </button>
        </div>
      )}
    </div>
  )
}

export default UserChallenge
