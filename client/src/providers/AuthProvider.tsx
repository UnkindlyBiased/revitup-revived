import { useEffect } from "react"
import { useShallow } from "zustand/react/shallow"

import useCheckAuth from "../hooks/auth/useRefresh"
import useAuthStore from "../stores/AuthStore"

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
        setIsLoading(true)
        if (localStorage.getItem('accessToken')) {
            checkAuth()
        }

        setIsFinishedLoading(true)
        setIsCheckingAuthFinished(true)
        setIsLoading(false)
    }, [checkAuth, setIsLoading, setIsFinishedLoading, setIsCheckingAuthFinished])

    return children
}

export default AuthProvider