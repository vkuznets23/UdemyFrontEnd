import axios from 'axios'

const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export const getData = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
})
