import { useShallow } from 'zustand/react/shallow'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import useAuthStore from "../stores/auth.store"
import Loading from '../components/common/loading'

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const {
        isAuthed,
        isLoading,
        isFinishedLoading,
        isCheckingAuthFinished
    } = useAuthStore(useShallow(state => ({
        isAuthed: state.isAuthed,
        isLoading: state.isLoading,
        isFinishedLoading: state.isFinishedLoading,
        isCheckingAuthFinished: state.isCheckingAuthFinished,
    })))
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthed && isFinishedLoading && isCheckingAuthFinished) {
          navigate('/login?unauth=true');
        }
    }, [isAuthed, navigate, isFinishedLoading, isCheckingAuthFinished]);
    
    if (isLoading || !isCheckingAuthFinished) return <Loading />;
    
    return isAuthed ? children : null;
}

export default RequireAuth