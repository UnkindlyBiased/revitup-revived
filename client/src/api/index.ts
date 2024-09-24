import axios from 'axios'

import AuthResponse from '../../utils/types/auth/AuthResponse'
import useAuthStore from '../stores/auth.store'

const api = axios.create({
    baseURL: String(process.env.API_URL),
    withCredentials: true
})

api.interceptors.request.use(config => {
    const accessToken = useAuthStore.getState().accessToken

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

api.interceptors.response.use((response) => response, async (err) => {
    const originalRequest = err.config
    const setAccessToken = useAuthStore.getState().setAccessToken
    
    if (originalRequest && err.response.status === 403) {
        try {
            const accessToken = await axios.post<AuthResponse>(String(process.env.API_URL), {}, {
                withCredentials: true
            }).then(data => data.data.tokens.accessToken)

            setAccessToken(accessToken)

            return api.request(originalRequest)
        } catch (e) {
            console.error("Error refreshing tokens", e)
        }
    }

    throw err
})

export default api