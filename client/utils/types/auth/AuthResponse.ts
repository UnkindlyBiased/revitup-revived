import TokenAuthResponse from "../misc/TokenAuthResponse"
import UserAuthResponse from "../user/UserAuthResponse"

type AuthResponse = {
    user: UserAuthResponse
    tokens: TokenAuthResponse
}

export default AuthResponse