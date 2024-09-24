import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { Input } from "../../ui/input"
import { useNavigate } from "react-router-dom"
import { Label } from "../../ui/label"
import { Button } from "../../ui/button"
import { useToast } from "../../../hooks/use-toast"
import { AxiosError } from "axios"

import AuthRegister from "../../../../utils/types/auth/AuthRegister"
import useRegistrate from "../../../hooks/auth/use-registrate"
import { EMAIL_VALIDATION_PATTERN, PASSWORD_VALIDATION_PATTERN } from "../../../../utils/constants/project.constants"
import PasswordInput from "../../common/input-fields/password-input"
import useErrorCodeToast from "../../../hooks/toast/use-error-code.toast"
import TToastMessage from "../../../../utils/types/misc/TToastMessage"
import WarningSpan from "../../common/warning-span"

const RegistrateForm = () => {
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AuthRegister>()
    const { t } = useTranslation()
    const { mutateAsync, isPending } = useRegistrate()
    const { toast: successToast } = useToast()
    const [repeatPassword, setRepeatPassword] = useState<string>()
    const [isRepeatPasswordEmpty, setIsRepeatPasswordEmpty] = useState<boolean>()
    
    const navigate = useNavigate()
    const errorToast = useErrorCodeToast()

    const toastTrans = t('pages.registrate.success_toast', { returnObjects: true }) as TToastMessage
    const onSubmit: SubmitHandler<AuthRegister> = async data => {
        try {
            if (!repeatPassword || (repeatPassword && repeatPassword !== watch('password'))) {
                setIsRepeatPasswordEmpty(true)
                return
            }

            setIsRepeatPasswordEmpty(false)
            await mutateAsync(data)

            successToast({ ...toastTrans })
            navigate('/login')
        } catch(e) {
            errorToast((e as AxiosError).response?.status)
        }
    }

    return (
        <form className="flex flex-col space-y-2 w-[23rem]" onSubmit={handleSubmit(onSubmit)}>
            <>
                <Label className="font-bold" htmlFor="username">{t('pages.registrate.fields.username.placeholder')}</Label>
                <Input
                    type="text"
                    id="username"
                    placeholder={t('pages.registrate.fields.username.placeholder')}
                    aria-invalid={errors.username ? "true" : "false"}
                    {...register('username', {
                        required: true,
                        minLength: 3,
                        maxLength: 75
                })} />
                {errors.username && <WarningSpan>{t('pages.registrate.fields.username.wrong')}</WarningSpan>}
            </>
            <>
                <Label className="font-bold" htmlFor="email">{t('common.auth.fields.email.placeholder')}</Label>
                <Input
                    type="email"
                    id="email"
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
            <>
                <Label className="font-bold" htmlFor="repeatPassword">{t('pages.registrate.fields.repeat_password.placeholder')}</Label>
                <PasswordInput
                    id="repeatPassword"
                    placeholder={t('pages.registrate.fields.repeat_password.placeholder')}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {isRepeatPasswordEmpty && <WarningSpan>{t('pages.registrate.fields.repeat_password.wrong')}</WarningSpan>}
            </>
            <Button disabled={isPending} type="submit" className="font-bold select-none">
                {isPending ? <>
                    <Loader2 className="animate-spin mx-2 size-4" />
                    {t('common.wait_span')}
                </> : t('pages.registrate.button')}
            </Button>
        </form>
    )
}

export default RegistrateForm