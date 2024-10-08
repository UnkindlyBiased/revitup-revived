import { useEffect } from "react"
import { useShallow } from "zustand/react/shallow"

import useCheckAuth from "../hooks/auth/use-check-auth"
import useAuthStore from "../stores/auth.store"
import { REFRESH_TOKEN_VALID } from "../../utils/constants/localstorage.constants"

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { mutateAsync: checkAuth } = useCheckAuth()
    const {
        setIsLoading,
        setIsFinishedLoading,
        setIsCheckingAuthFinished
    } = useAuthStore(useShallow(state => ({
        setIsLoading: state.setIsLoading,
        setIsFinishedLoading: state.setIsFinishedLoading,
        setIsCheckingAuthFinished: state.setIsCheckingAuthFinished
    })))

    useEffect(() => {
        const func = async () => {
            setIsLoading(true)

            if (localStorage.getItem(REFRESH_TOKEN_VALID)) {
                await checkAuth()
            }

            setIsFinishedLoading(true)
            setIsCheckingAuthFinished(true)
            setIsLoading(false)
        }

        func()
    }, [checkAuth, setIsLoading, setIsFinishedLoading, setIsCheckingAuthFinished])

    return children
}

export default AuthProvider