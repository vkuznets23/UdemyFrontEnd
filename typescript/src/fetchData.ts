const url = 'https://www.course-api.com/react-tours-project'

async function fetchData(url: string) {
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`)
    }
    const data = await resp.json()
    console.log(data)

    return data
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : 'there was an error ...'
    console.log(errMsg)
    return []
  }
}

fetchData(url)
