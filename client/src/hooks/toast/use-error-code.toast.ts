import { useTranslation } from "react-i18next"
import { useToast } from "../use-toast"

import TToastMessage from "../../../utils/types/misc/TToastMessage"

const useErrorCodeToast = () => {
    const { toast } = useToast()
    const { t } = useTranslation()

    return () => {
        const errorStatus = localStorage.getItem('errorStatus')
        const transObj = t(`common.errors.${errorStatus}_auth`, { returnObjects: true }) as TToastMessage

        toast({
            ...transObj,
            variant: 'destructive'
        })
    }
}

export default useErrorCodeToast