const slowFunction = () => {
  let value = 0
  for (let i = 0; i < 100000000; i++) {
    value += i
  }
  return value
}

export default slowFunction
