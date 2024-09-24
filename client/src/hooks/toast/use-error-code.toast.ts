import { useTranslation } from "react-i18next"
import { useToast } from "../use-toast"

import TToastMessage from "../../../utils/types/misc/TToastMessage"

const useErrorCodeToast = () => {
    const { toast } = useToast()
    const { t } = useTranslation()

    return (status?: number) => {
        const transObj = t(`common.errors.${status}_auth`, { returnObjects: true }) as TToastMessage

        toast({
            ...transObj,
            variant: 'destructive'
        })
    }
}

export default useErrorCodeToast