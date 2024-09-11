import { useTranslation } from "react-i18next"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import { Loader2 } from "lucide-react"
import { useToast } from "../../../hooks/use-toast"

import AuthLogin from "../../../../utils/types/auth/AuthLogin"
import WarningSpan from "../../common/warning-span"
import useLogin from "../../../hooks/auth/use-login"
import {
    EMAIL_VALIDATION_PATTERN,
    PASSWORD_VALIDATION_PATTERN
} from "../../../../utils/constants/proj-constants"
import PasswordInput from "../../common/input-fields/password-input"

const LoginForm = () => {
    const { t } = useTranslation()
    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm<AuthLogin>()
    const { mutateAsync, isPending } = useLogin()
    const navigate = useNavigate()
    const { toast } = useToast()

    const onSubmit: SubmitHandler<AuthLogin> = async data => {
        console.log(data)

        try {
            await mutateAsync(data)
            navigate('/')
        } catch {
            toast({
                title: 'Something went wrong',
                description: localStorage.getItem('errorStatus'),
                variant: 'destructive'
            })
        }
    }

    return (
        <form className="flex flex-col space-y-2 w-[23rem]" onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="email"
                placeholder={t('common.auth.email_placeholder')}
                aria-invalid={errors.emailAddress ? "true" : "false"}
                {...register('emailAddress', {
                    required: true,
                    pattern: EMAIL_VALIDATION_PATTERN
            })} />
            {errors.emailAddress && <WarningSpan className="text-red-600">{t('common.auth.email_wrong_message')}</WarningSpan>}
            <PasswordInput
                placeholder={t('common.auth.pw_placeholder')}
                aria-invalid={errors.password ? "true" : "false"}
                {...register('password', {
                    minLength: 6,
                    required: true,
                    pattern: PASSWORD_VALIDATION_PATTERN
            })} />
            {errors.password && <WarningSpan>{t('common.auth.pw_wrong_message')}</WarningSpan>}
            <Button type="submit" className="font-bold select-none">
                {isPending ? <Loader2 className="animate-spin ml-2 size-4" /> : t('pages.login.button_title_normal')}
            </Button>
        </form>
    )
}

export default LoginForm