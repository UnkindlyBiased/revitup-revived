import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [isFinished, setIsFinished] = useState(false)
    const { i18n } = useTranslation()

    useEffect(() => {
        const langCode = localStorage.getItem('langCode')
        if (langCode) {
            i18n.changeLanguage(langCode, () => {
                setIsFinished(true)
            })
        } else {
            setIsFinished(true)
        }
    }, [i18n])

    if (isFinished) return children
}

export default LanguageProvider