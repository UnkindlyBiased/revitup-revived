import { useTranslation } from 'react-i18next'
import sign from '../../../assets/logos/unauthorized_hazard_sign.svg'

const UnauthorizedSign = () => {
    const { t } = useTranslation()

    return (
        <div className='flex md:flex-col w-full space-x-4 items-center sm:justify-center md:w-fit md:space-x-0 md:space-y-2'>
            <div className='bg-red-600 p-2 rounded-md md:rounded-lg md:p-4'>
                <img className='h-14 md:h-48' src={sign} />
            </div>
            <div className='flex flex-col'>
                <span className='font-bold text-xl md:text-center'>
                    {t('pages.login.unauthorized.title')}
                </span>
                <span className='md:text-center'>{t('pages.login.unauthorized.sub')}</span>
            </div>
        </div>
    )
}

export default UnauthorizedSign