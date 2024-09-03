import { create } from 'zustand'

import AuthResponse from '../../utils/types/auth/AuthResponse'

type AuthState = {
    data: AuthResponse | null

    isLoading: boolean
    isAuthed: boolean
    isFinishedLoading: boolean
    isCheckingAuthFinished: boolean

    setData: (data: AuthResponse | null) => void
    setIsLoading: (isLoading: boolean) => void
    setIsAuthed: (isAuthed: boolean) => void
    setIsFinishedLoading: (isFinishedLoading: boolean) => void
    setIsCheckingAuthFinished: (isCheckingAuthFinished: boolean) => void
}

const useAuthStore = create<AuthState>(set => ({
    data: null,

    isLoading: false,
    isAuthed: false,
    isFinishedLoading: false,
    isCheckingAuthFinished: false,

    setData: data => {
        set({ data })
    },
    setIsLoading: value => {
        set({ isLoading: value })
    },
    setIsAuthed: value => {
        set({ isAuthed: value })
    },
    setIsFinishedLoading: value => {
        set({ isFinishedLoading: value })
    },
    setIsCheckingAuthFinished: value => {
        set({ isCheckingAuthFinished: value })
    }
}))

export default useAuthStore