import { useTranslation } from "react-i18next"
import { Link, useSearchParams } from "react-router-dom"

import LoginForm from "../../components/pages/login-page/login-form"
import { stringToBoolean } from '../../../utils/funcs/HelperFunctions'
import UnauthorizedSign from "../../components/pages/login-page/unauthorized-sign"
import RequireNotAuth from "../../hoc/require-not-auth"

const Line = () => {
    return <div className="hidden md:block md:w-[1px] md:h-52 bg-red-500" />
}

const LoginPage = () => {
    const [searchParams] = useSearchParams()
    const { t } = useTranslation()

    const unauth = stringToBoolean(searchParams.get('unauth'))
    const [first, last] = (t('pages.login.to_registrate', { returnObjects: true }) as Array<string>)

    return (
        <RequireNotAuth>
            <div className="flex flex-col justify-center items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0 md:h-full">
                {unauth && <>
                    <UnauthorizedSign />
                    <Line />
                </>}
                <div className="flex flex-col space-y-1">
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-2xl">{t('pages.login.title')}</h2>
                        {t('pages.login.sub_sentence')}
                    </div>
                    <LoginForm />
                    <span className="text-center pt-2">
                        {first} <Link className="font-bold" to={'/register'}>{last}</Link>
                    </span>
                </div>
            </div>
        </RequireNotAuth>
    )
}

export default LoginPage