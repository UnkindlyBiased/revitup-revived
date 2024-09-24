import { useMutation } from '@tanstack/react-query'
import { useShallow } from 'zustand/react/shallow'

import AuthService from '../../services/auth.service'
import useAuthStore from '../../stores/auth.store'

const useCheckAuth = () => {
    const {
        setUser,
        setIsAuthed,
        setIsLoading,
        setAccessToken
    } = useAuthStore(useShallow(state => ({
        setUser: state.setUser,
        setIsAuthed: state.setIsAuthed,
        setIsLoading: state.setIsLoading,
        setAccessToken: state.setAccessToken,
    })))

    return useMutation({
        mutationKey: ['refresh'],
        mutationFn: AuthService.refresh,
        onMutate: () => {
            setIsLoading(true)
        },
        onSuccess: (data) => {
            setIsAuthed(true)
            setUser(data.user)
            
            setAccessToken(data.tokens.accessToken)
        },
        onError: () => {
            setIsAuthed(false)
        },
        onSettled: () => {
            setIsLoading(false)
        }
    })
}

export default useCheckAuth