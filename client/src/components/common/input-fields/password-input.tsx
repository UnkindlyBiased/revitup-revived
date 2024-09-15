import { forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

import { Input, InputProps } from "../../ui/input";

type IconProps = { onClick: () => void }

const EnableEye = ({ onClick }: IconProps) => {
    return <FaEye size={24} onClick={onClick} />
}

const DisableEye = ({ onClick }: IconProps) => {
    return <FaEyeSlash size={24} onClick={onClick} />
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        const [open, setOpen] = useState(false)

        return (
            <Input
                id="password"
                className={className}
                type={open ? "text" : "password"}
                ref={ref}
                suffix={
                    open ? <DisableEye onClick={() => setOpen(false)} /> :
                        <EnableEye onClick={() => setOpen(true)} />
                }
                {...props} />
        )
    }
)

export default PasswordInput