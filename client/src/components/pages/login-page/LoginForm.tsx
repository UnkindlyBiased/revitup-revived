import { useTranslation } from "react-i18next"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom"

import AuthLogin from "../../../../utils/types/auth/AuthLogin"
import WarningSpan from "../../common/WarningSpan"
import useLogin from "../../../hooks/auth/useLogin"
import { Loader2 } from "lucide-react"

const LoginForm = () => {
    const { t } = useTranslation()
    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<AuthLogin>()
    const {
        mutateAsync,
        isPending,
        isSuccess,
        isError,
        error
    } = useLogin()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<AuthLogin> = async data => {
        console.log(data)

        await mutateAsync(data)
        navigate('/')
    }

    return (
        <form className="flex flex-col space-y-2 w-[23rem]" onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                placeholder={t('common.auth.email_placeholder')}
                aria-invalid={errors.emailAddress ? "true" : "false"}
                {...register('emailAddress', {
                    required: true,
                    pattern: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
            })} />
            {errors.emailAddress && <WarningSpan className="text-red-600">{t('common.auth.email_wrong_message')}</WarningSpan>}
            <Input
                type="password"
                placeholder={t('common.auth.pw_placeholder')}
                aria-invalid={errors.password ? "true" : "false"}
                {...register('password', {
                    minLength: 6,
                    required: true,
                    pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*_])/
            })} />
            {errors.password && <WarningSpan>{t('common.auth.pw_wrong_message')}</WarningSpan>}
            <Button type="submit" className="font-bold">{t('pages.login.button_title_normal')}
                {isPending && <Loader2 className="animate-spin ml-2 h-4" />}
                {isError && <p>tf bro</p>}
            </Button>
            {isSuccess && <p>test</p>}
            {error && <span>{error.stack}</span>}
        </form>
    )
}

export default LoginForm