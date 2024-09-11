import { create } from 'zustand'

import UserAuthResponse from '../../utils/types/user/UserAuthResponse'

type AuthState = {
    user: UserAuthResponse | null

    isLoading: boolean
    isAuthed: boolean
    isFinishedLoading: boolean
    isCheckingAuthFinished: boolean

    setUser: (data: UserAuthResponse | null) => void
    setIsLoading: (value: boolean) => void
    setIsAuthed: (value: boolean) => void
    setIsFinishedLoading: (value: boolean) => void
    setIsCheckingAuthFinished: (value: boolean) => void
}

const useAuthStore = create<AuthState>(set => ({
    user: null,

    isLoading: false,
    isAuthed: false,
    isFinishedLoading: false,
    isCheckingAuthFinished: false,

    setUser: user => {
        set({ user })
    },
    setIsLoading: isLoading => {
        set({ isLoading })
    },
    setIsAuthed: isAuthed => {
        set({ isAuthed })
    },
    setIsFinishedLoading: isFinishedLoading => {
        set({ isFinishedLoading })
    },
    setIsCheckingAuthFinished: isCheckingAuthFinished => {
        set({ isCheckingAuthFinished })
    }
}))

export default useAuthStore