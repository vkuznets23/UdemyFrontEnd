import axios from 'axios'

const authFetch = axios.create({
  baseURL: 'https://www.course-api.com',
  headers: {
    Accept: 'application/json',
  },
})

export default authFetch

//if for global we need to add import to the App.jsx
// here we need to import authFetch from ./... to the working directory
