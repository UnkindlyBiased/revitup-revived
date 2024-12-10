import api from "../api";
import AuthResponse from "../../utils/types/auth/AuthResponse";
import AuthRegister from "../../utils/types/auth/AuthRegister";
import AuthLogin from "../../utils/types/auth/AuthLogin";

class AuthService {
    private static PREFIX = "/auth";

    static register = async (data: AuthRegister): Promise<AuthResponse> => {
        return (await api.post<AuthResponse>(this.PREFIX + "/register", data))
            .data;
    };
    static login = async (data: AuthLogin): Promise<AuthResponse> => {
        return (await api.post<AuthResponse>(this.PREFIX + "/login", data))
            .data;
    };
    static logout = async (): Promise<void> => {
        await api.post(this.PREFIX + "/logout");
    };
    static refresh = async (): Promise<AuthResponse> => {
        return (await api.get<AuthResponse>(this.PREFIX + "/refresh")).data;
    };
}

export default AuthService;
