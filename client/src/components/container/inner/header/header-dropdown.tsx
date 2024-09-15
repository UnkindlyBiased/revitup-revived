import { FaUser } from "react-icons/fa6"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuLabel } from "../../../ui/dropdown-menu"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useToast } from "../../../../hooks/use-toast"

import useAuthStore from "../../../../stores/auth.store"
import useLogout from "../../../../hooks/auth/use-logout"
import useErrorCodeToast from "../../../../hooks/toast/use-error-code.toast"
import TToastMessage from "../../../../../utils/types/misc/TToastMessage"

const HeaderDropdown = () => {
    const { t } = useTranslation()
    const { mutateAsync } = useLogout()
    const { toast: successToast } = useToast()

    const isAuthed = useAuthStore(state => state.isAuthed)
    const navigate = useNavigate()
    const errorToast = useErrorCodeToast()

    const transObj = t('dropdown.authed_actions.logout.success_toast', { returnObjects: true }) as TToastMessage
    const onLogout = async () => {
        try {
            await mutateAsync()

            successToast({
                ...transObj,
                variant: 'destructive'
            })
        } catch {
            errorToast()
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <FaUser size={24} color="white" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-3">
                {!isAuthed ? <>
                    <DropdownMenuLabel className="font-bold">{t('dropdown.unauthed_actions.title')}</DropdownMenuLabel>
                    <DropdownMenuItem className="font-medium" onClick={() => navigate('/registrate')}>
                        {t('dropdown.unauthed_actions.reg')}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-medium" onClick={() => navigate('/login')}>
                        {t('dropdown.unauthed_actions.login')}
                    </DropdownMenuItem>
                </> : <>
                    <DropdownMenuItem className="font-black" onClick={onLogout}>
                        {t('dropdown.authed_actions.logout.title')}
                    </DropdownMenuItem>
                </>}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HeaderDropdown