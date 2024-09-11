import { useMutation } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";

import AuthService from "../../services/auth.service";
import useAuthStore from "../../stores/auth.store";

const useLogin = () => {
    const {
        setUser,
        setIsAuthed
    } = useAuthStore(useShallow(state => ({
        setUser: state.setUser,
        setIsAuthed: state.setIsAuthed
    })))

    return useMutation({
        mutationKey: ['login'],
        mutationFn: AuthService.login,
        onSuccess: (data) => {
            console.log(data)
            setIsAuthed(true)
            setUser(data.user)

            localStorage.setItem('accessToken', data.tokens.accessToken)
        },
        onError: () => {
            setIsAuthed(false)
        }
    })
}

export default useLogin