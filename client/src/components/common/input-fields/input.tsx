import{ forwardRef, ReactNode } from "react";

import { InputProps } from "../../ui/input";

const Input = forwardRef<HTMLInputElement, InputProps & { suffix: ReactNode }>(
    ({ className, type, ...props }, ref) => {
        return (
            <div className="flex flex-col space-x-2">
                <Input
                    {...props} 
                    className={className}
                    ref={ref}
                    type={type} />
            </div>
        )
    }
)

export default Input