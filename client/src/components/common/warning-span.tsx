import { ComponentPropsWithoutRef } from "react"
import { cn } from "../../lib/utils"

const WarningSpan = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => {
    return <span {...props} role="alert" className={cn('text-red-600', className)} />
}

export default WarningSpan