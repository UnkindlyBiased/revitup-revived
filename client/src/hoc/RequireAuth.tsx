import { useShallow } from 'zustand/react/shallow'

import useAuthStore from "../stores/AuthStore"
import Loading from '../components/common/Loading'

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const {
        isAuthed,
        isLoading,
        isCheckingAuthFinished
    } = useAuthStore(useShallow(state => ({
        isAuthed: state.isAuthed,
        isLoading: state.isLoading,
        isCheckingAuthFinished: state.isCheckingAuthFinished,
    })))

    if (isLoading || !isCheckingAuthFinished) return <Loading />

    if (!isAuthed && isCheckingAuthFinished) return <p>Unauthorized</p>

    return children
}

export default RequireAuth