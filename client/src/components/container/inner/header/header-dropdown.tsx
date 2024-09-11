import { FaUser } from "react-icons/fa6"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuLabel } from "../../../ui/dropdown-menu"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

const HeaderDropdown = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <FaUser size={24} color="white" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-3">
                <DropdownMenuLabel className="font-bold">{t('authorization.title')}</DropdownMenuLabel>
                <DropdownMenuItem className="font-medium" onClick={() => navigate('/register')}>
                    {t('authorization.reg')}
                </DropdownMenuItem>
                <DropdownMenuItem className="font-medium" onClick={() => navigate('/login')}>
                    {t('authorization.login')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HeaderDropdown