import axios from 'axios'

import AuthService from '../services/AuthService'

const api = axios.create({
    baseURL: String(process.env.API_URL),
    withCredentials: true
})

api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem('accessToken')
    config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

api.interceptors.response.use((config) => config, async (err) => {
    const originalRequest = err.config
    if (err.config && err.response.status === 401) {
        try {
            const response = await AuthService.refresh()
            localStorage.setItem('accessToken', response.tokens.accessToken)

            return api.request(originalRequest)
        } catch (e) {
            console.log(e)
        }
    }
})

export default api