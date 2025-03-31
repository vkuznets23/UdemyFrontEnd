type basicPerson = {
  type: 'basic'
  name: string
}
type advancedPerson = {
  type: 'advanced'
  name: string
  email: string
}

type profilePerson = basicPerson | advancedPerson
const Component = (props: profilePerson) => {
  const { type, name } = props
  if (type === 'basic')
    return (
      <article className="alert alert-success">
        <h2>User: {name}</h2>
      </article>
    )
  return (
    <article className="alert alert-danger">
      <h2>User: {name}</h2>
      <h2>email: {props.email}</h2>
    </article>
  )
}

export default Component
