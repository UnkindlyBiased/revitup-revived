import { useMutation } from '@tanstack/react-query'

import AuthService from '../../services/AuthService'
import useAuthStore from '../../stores/AuthStore'

const useCheckAuth = () => {
    const setData = useAuthStore(state => state.setData)
    const setIsAuthed = useAuthStore(state => state.setIsAuthed)

    return useMutation({
        mutationKey: ['refresh'],
        mutationFn: AuthService.refresh,
        onSuccess: (data) => {
            setIsAuthed(true)
            setData(data)
            
            localStorage.setItem('accessToken', data.tokens.accessToken)
        },
        onError: () => {
            setData(null)
            setIsAuthed(false)
        }
    })
}

export default useCheckAuth