import { useShallow } from "zustand/react/shallow"

import useAuthStore from "../stores/auth.store"
import Loading from "../components/common/loading"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const RequireNotAuth = ({ children }: { children: React.ReactNode }) => {
    const {
        isAuthed,
        isLoading,
        isFinishedLoading
    } = useAuthStore(useShallow(state => ({
        isAuthed: state.isAuthed,
        isLoading: state.isLoading,
        isFinishedLoading: state.isFinishedLoading
    })))
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthed && isFinishedLoading) {
            navigate('/')
        }
    }, [isAuthed, navigate, isFinishedLoading])

    if (isLoading) return <Loading />

    return children
}

export default RequireNotAuth