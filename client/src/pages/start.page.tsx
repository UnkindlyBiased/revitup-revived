import { useTranslation } from "react-i18next"

import useAuthStore from "../stores/auth.store"
import RequireAuth from "../hoc/require-auth"
import { useShallow } from "zustand/react/shallow"

const StartPage = () => {
    const { i18n, t } = useTranslation()
    const {
        user,
        isAuthed,
        isCheckingAuthFinished
    } = useAuthStore(useShallow(state => ({
        user: state.user,
        isAuthed: state.isAuthed,
        isCheckingAuthFinished: state.isCheckingAuthFinished
    })))

	const changeLanguage = () => {
		i18n.changeLanguage('ua')
		localStorage.setItem('langCode', 'ua')
	}

    return (
        <RequireAuth>
            <div className="flex flex-col">
                <span>{t('hello')}</span>
                <button className="size-fit" onClick={changeLanguage}>Change</button>
                { (isAuthed && isCheckingAuthFinished) && <span>Користувач: {user?.username || 'відсутній'}</span> }
            </div>
        </RequireAuth>
    )
}

export default StartPage