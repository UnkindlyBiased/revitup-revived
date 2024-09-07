import { useTranslation } from "react-i18next"

import useAuthStore from "../stores/AuthStore"
import RequireAuth from "../hoc/RequireAuth"
import { useEffect, useState } from "react"
import api from "../api"

const StartPage = () => {
    const { i18n, t } = useTranslation()
    const data = useAuthStore(state => state.data)
    const isAuthed = useAuthStore(state => state.isAuthed)
    const isCheckingAuthFinished = useAuthStore(state => state.isCheckingAuthFinished)
    const [string, setString] = useState<string | null>(null)

    const fetchData = async () => {
        const response = await fetch('http://localhost:5704')
        if (!response.ok) {
            throw new Error('Something is wrong')
        }

        const data = await response.text()
        setString(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

	const changeLanguage = () => {
		i18n.changeLanguage('ua')
		localStorage.setItem('langCode', 'ua')
	}

    return (
        <>
            <RequireAuth>
                <div className="flex flex-col">
                    <span>{t('hello')}</span>
                    <button className="size-fit" onClick={changeLanguage}>Change</button>
                    { (isAuthed && isCheckingAuthFinished) && <span>Користувач: {data?.user.username || 'відсутній'}</span> }
                </div>
            </RequireAuth>
            <span>{string}</span>
        </>
    )
}

export default StartPage