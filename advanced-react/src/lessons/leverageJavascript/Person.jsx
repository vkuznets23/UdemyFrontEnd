const defaultimg =
  'https://plus.unsplash.com/premium_photo-1739297898186-502d6a675616?q=80&w=3067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export function Person({ name, nickName = 'shake and bake', images }) {
  //   const img = images && images[0] && images[0].small && images[0].small.url
  const img = images?.[0]?.small?.url || defaultimg
  return (
    <div>
      <h4>name: {name}</h4>
      <p>nickname: {nickName}</p>
      <img style={{ width: 50 }} src={img} />
    </div>
  )
}
