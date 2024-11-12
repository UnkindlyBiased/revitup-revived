import api from "../api"
import AuthResponse from "../../utils/types/auth/AuthResponse"
import AuthRegister from '../../utils/types/auth/AuthRegister'
import AuthLogin from "../../utils/types/auth/AuthLogin"

class AuthService {
    private static ROUTE_PREFIX = '/auth'

    static register = async (data: AuthRegister): Promise<AuthResponse> => {
        return (await api.post<AuthResponse>(this.ROUTE_PREFIX + '/register', data)).data
    }
    static login = async (data: AuthLogin): Promise<AuthResponse> => {
        return (await api.post<AuthResponse>(this.ROUTE_PREFIX + '/login', data)).data
    }
    static logout = async (): Promise<void> => {
        await api.post(this.ROUTE_PREFIX + '/logout')
    }
    static refresh = async (): Promise<AuthResponse> => {
        return (await api.get<AuthResponse>(this.ROUTE_PREFIX + '/refresh')).data
    }
}

export default AuthService