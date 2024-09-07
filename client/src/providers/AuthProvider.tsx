import { useEffect } from "react"
import { useShallow } from "zustand/react/shallow"

import useCheckAuth from "../hooks/auth/useCheckAuth"
import useAuthStore from "../stores/AuthStore"

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { mutateAsync: checkAuth } = useCheckAuth()
    const {
        setIsFinishedLoading,
        setIsCheckingAuthFinished
    } = useAuthStore(useShallow(state => ({
        setIsFinishedLoading: state.setIsFinishedLoading,
        setIsCheckingAuthFinished: state.setIsCheckingAuthFinished
    })))

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            checkAuth()
        }

        setIsFinishedLoading(true)
        setIsCheckingAuthFinished(true)
    }, [checkAuth, setIsFinishedLoading, setIsCheckingAuthFinished])

    return children
}

export default AuthProvider