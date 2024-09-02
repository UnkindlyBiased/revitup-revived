import { FaGripLines } from "react-icons/fa"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../../../ui/sheet"
import { useTranslation } from "react-i18next"

type HeaderSheetProps = {
    className?: string
}

const HeaderSheet = ({ className }: HeaderSheetProps) => {
    const { t } = useTranslation()
    
    return (
        <Sheet>
            <SheetTrigger className={className}>
                <FaGripLines className="bg-transparent" size={24} color='white' />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>{t('sections.title')}</SheetTitle>
            </SheetContent>
        </Sheet>
    )
}

export default HeaderSheet