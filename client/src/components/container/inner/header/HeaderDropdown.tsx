import { FaUser } from "react-icons/fa6"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuLabel } from "../../../ui/dropdown-menu"
import { useTranslation } from "react-i18next"

const HeaderDropdown = () => {
    const { t } = useTranslation()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="bg-transparent">
                <FaUser size={24} color="white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-3">
                <DropdownMenuLabel>{t('authorization.title')}</DropdownMenuLabel>
                <DropdownMenuItem>{t('authorization.reg')}</DropdownMenuItem>
                <DropdownMenuItem>{t('authorization.login')}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HeaderDropdown