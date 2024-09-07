import { useMutation } from '@tanstack/react-query'
import { useShallow } from 'zustand/react/shallow'

import AuthService from '../../services/AuthService'
import useAuthStore from '../../stores/AuthStore'

const useCheckAuth = () => {
    const {
        setData,
        setIsAuthed,
        setIsLoading
    } = useAuthStore(useShallow(state => ({
        setData: state.setData,
        setIsAuthed: state.setIsAuthed,
        setIsLoading: state.setIsLoading,
    })))

    return useMutation({
        mutationKey: ['refresh'],
        mutationFn: AuthService.refresh,
        onMutate: () => {
            setIsLoading(true)
        },
        onSuccess: (data) => {
            setIsAuthed(true)
            setData(data)
            
            localStorage.setItem('accessToken', data.tokens.accessToken)
        },
        onError: () => {
            setData(null)
            setIsAuthed(false)
        },
        onSettled: () => {
            setIsLoading(false)
        }
    })
}

export default useCheckAuth