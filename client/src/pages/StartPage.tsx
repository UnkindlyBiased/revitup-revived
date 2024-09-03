import { useTranslation } from "react-i18next"

import useAuthStore from "../stores/AuthStore"
import RequireAuth from "../hoc/RequireAuth"

const StartPage = () => {
    const { i18n, t } = useTranslation()
    const data = useAuthStore(state => state.data)
    const isAuthed = useAuthStore(state => state.isAuthed)
    const isCheckingAuthFinished = useAuthStore(state => state.isCheckingAuthFinished)

	const changeLanguage = () => {
		i18n.changeLanguage('ua')
		localStorage.setItem('langCode', 'ua')
	}

    return (
        <RequireAuth>
            <div className="flex flex-col">
                <span>{t('hello')}</span>
                <button className="size-fit" onClick={changeLanguage}>Change</button>
                { (isAuthed && isCheckingAuthFinished) && <span>Користувач: {data?.user.username || 'відсутній'}</span> }
            </div>
        </RequireAuth>
    )
}

export default StartPage