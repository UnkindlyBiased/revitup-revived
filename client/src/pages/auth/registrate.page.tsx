import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import RegistrateForm from "../../components/pages/registrate-page/registrate-form"
import RequireNotAuth from "../../hoc/require-not-auth"

const RegistratePage = () => {
    const { t } = useTranslation()
    const [first, last] = (t('pages.registrate.to_login', { returnObjects: true }) as Array<string>)

    return (
        <RequireNotAuth>
            <div className="flex flex-col justify-center items-center space-y-2 md:h-full">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-2xl">{t('pages.registrate.title')}</h2>
                    {t('pages.registrate.sub_sentence')}
                </div>
                <RegistrateForm />
                <span className="text-center pt-2">
                    {first} <Link className="font-bold" to={'/register'}>{last}</Link>
                </span>
            </div>
        </RequireNotAuth>
    )
}

export default RegistratePage