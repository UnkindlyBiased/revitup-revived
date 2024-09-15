import { ComponentPropsWithoutRef } from "react"
import { cn } from "../../lib/utils"

const WarningSpan = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
    return <span {...props} role="alert" className={cn('text-red-600 text-sm', className)} />
}

export default WarningSpan