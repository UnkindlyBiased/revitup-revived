import { useMutation } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";

import AuthService from "../../services/auth.service";
import useAuthStore from "../../stores/auth.store";

const useLogin = () => {
    const {
        setUser,
        setIsAuthed,
        setAccessToken
    } = useAuthStore(useShallow(state => ({
        setUser: state.setUser,
        setIsAuthed: state.setIsAuthed,
        setAccessToken: state.setAccessToken
    })))

    return useMutation({
        mutationKey: ['login'],
        mutationFn: AuthService.login,
        onSuccess: (data) => {
            setIsAuthed(true)
            setUser(data.user)

            setAccessToken(data.tokens.accessToken)
        },
        onError: () => {
            setIsAuthed(false)
        }
    })
}

export default useLogin