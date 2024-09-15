import { useTranslation } from "react-i18next"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { Loader2 } from "lucide-react"
import { useToast } from "../../../hooks/use-toast"

import AuthLogin from "../../../../utils/types/auth/AuthLogin"
import useLogin from "../../../hooks/auth/use-login"
import {
    EMAIL_VALIDATION_PATTERN,
    PASSWORD_VALIDATION_PATTERN
} from "../../../../utils/constants/proj-constants"
import PasswordInput from "../../common/input-fields/password-input"
import useErrorCodeToast from "../../../hooks/toast/use-error-code.toast"
import TToastMessage from "../../../../utils/types/misc/TToastMessage"
import WarningSpan from "../../common/warning-span"

const LoginForm = () => {
    const { t } = useTranslation()
    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<AuthLogin>()
    const { mutateAsync, isPending } = useLogin()
    const { toast: successToast } = useToast()

    const navigate = useNavigate()
    const errorToast = useErrorCodeToast()

    const toastTrans = t('pages.login.success_toast', { returnObjects: true }) as TToastMessage
    const onSubmit: SubmitHandler<AuthLogin> = async data => {
        try {
            await mutateAsync(data)

            successToast({ ...toastTrans })
            navigate('/')
        } catch {
            errorToast()
        }
    }

    return (
        <form className="flex flex-col space-y-2 w-[23rem]" onSubmit={handleSubmit(onSubmit)}>
            <>
                <Label className="font-bold" htmlFor="email">{t('common.auth.fields.email.placeholder')}</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder={t('common.auth.fields.email.placeholder')}
                    aria-invalid={errors.emailAddress ? "true" : "false"}
                    {...register('emailAddress', {
                        required: true,
                        pattern: EMAIL_VALIDATION_PATTERN
                })} />
                {errors.emailAddress && <WarningSpan>{t('common.auth.fields.email.wrong')}</WarningSpan>}
            </>
            <>
                <Label className="font-bold" htmlFor="password">{t('common.auth.fields.password.placeholder')}</Label>
                <PasswordInput
                    placeholder={t('common.auth.fields.password.placeholder')}
                    aria-invalid={errors.password ? "true" : "false"}
                    {...register('password', {
                        minLength: 6,
                        required: true,
                        pattern: PASSWORD_VALIDATION_PATTERN
                })} />
                {errors.password && <WarningSpan>{t('common.auth.fields.password.wrong')}</WarningSpan>}
            </>
            <Button disabled={isPending} type="submit" className="font-bold select-none">
                {isPending ? <>
                    <Loader2 className="animate-spin mx-2 size-4" />
                    {t('common.wait_span')}
                </> : t('pages.login.button')}
            </Button>
        </form>
    )
}

export default LoginForm