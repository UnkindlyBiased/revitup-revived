import { useMutation } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";

import AuthService from "../../services/AuthService";
import useAuthStore from "../../stores/AuthStore";
import { terminal } from "virtual:terminal";

const useLogin = () => {
    const {
        setData,
        setIsAuthed
    } = useAuthStore(useShallow(state => ({
        setData: state.setData,
        setIsAuthed: state.setIsAuthed
    })))

    return useMutation({
        mutationKey: ['login'],
        mutationFn: AuthService.login,
        onSuccess: async (data) => {
            setIsAuthed(true)
            setData(data)

            localStorage.setItem('accessToken', data.tokens.accessToken)
        },
        onError: (error) => {
            setIsAuthed(false)
            terminal.log(error)
        }
    })
}

export default useLogin