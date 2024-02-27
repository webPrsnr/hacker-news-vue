import { ofetch } from 'ofetch'

const BASE_URL = import.meta.env.VITE_URL

const http = {
  async get<DataInterface>(url: string) {
    try {
      return await ofetch<DataInterface>(url, { baseURL: BASE_URL })
    }
    catch (error) {
      console.error(error)
    }
  },
}

export default http
