import { useShallow } from "zustand/react/shallow"
import { useMutation } from "@tanstack/react-query"

import useAuthStore from "../../stores/auth.store"
import AuthService from "../../services/auth.service"

const useLogout = () => {
    const {
        setUser,
        setIsAuthed
    } = useAuthStore(useShallow(state => ({
        setUser: state.setUser,
        setIsAuthed: state.setIsAuthed
    })))

    return useMutation({
        mutationKey: ['logout'],
        mutationFn: AuthService.logout,
        onSuccess: () => {
            setUser(null)
            setIsAuthed(false)

            localStorage.removeItem('accessToken')
        }
    })
}

export default useLogout