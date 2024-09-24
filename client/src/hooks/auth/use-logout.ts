import { useShallow } from "zustand/react/shallow"
import { useMutation } from "@tanstack/react-query"

import useAuthStore from "../../stores/auth.store"
import AuthService from "../../services/auth.service"
import { REFRESH_TOKEN_VALID } from "../../../utils/constants/localstorage.constants"

const useLogout = () => {
    const {
        setUser,
        setIsAuthed,
        setAccessToken,
    } = useAuthStore(useShallow(state => ({
        setUser: state.setUser,
        setIsAuthed: state.setIsAuthed,
        setAccessToken: state.setAccessToken,
    })))

    return useMutation({
        mutationKey: ['logout'],
        mutationFn: AuthService.logout,
        onSuccess: () => {
            setUser(null)
            setIsAuthed(false)

            setAccessToken(null)
            localStorage.removeItem(REFRESH_TOKEN_VALID)
        }
    })
}

export default useLogout