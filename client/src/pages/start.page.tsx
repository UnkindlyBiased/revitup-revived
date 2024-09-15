import { useTranslation } from "react-i18next"
import { useShallow } from "zustand/react/shallow"

import useAuthStore from "../stores/auth.store"

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
        <div className="flex flex-col">
            <span>{t('hello')}</span>
            <button className="size-fit" onClick={changeLanguage}>Change</button>
            { (isAuthed && isCheckingAuthFinished) && <span>Користувач: {user?.username || 'відсутній'}</span> }
        </div>
    )
}

export default StartPage