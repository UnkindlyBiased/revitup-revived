import { useEffect } from "react"

import useCheckAuth from "../hooks/auth/useRefresh"
import useAuthStore from "../stores/AuthStore"

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { mutateAsync: checkAuth } = useCheckAuth()
    const setIsFinishedLoading = useAuthStore(state => state.setIsFinishedLoading)
    const setIsCheckingAuthFinished = useAuthStore(state => state.setIsCheckingAuthFinished)
    const setIsAuthed = useAuthStore(state => state.setIsAuthed)

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            checkAuth()
        }

        setIsFinishedLoading(true)
        setIsCheckingAuthFinished(true)
    }, [checkAuth, setIsFinishedLoading, setIsCheckingAuthFinished, setIsAuthed])

    return children
}

export default AuthProvider