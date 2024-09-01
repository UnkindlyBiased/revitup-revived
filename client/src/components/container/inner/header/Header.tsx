import { FaGripLines } from "react-icons/fa"

import HeaderLogo from "./HeaderLogo"

const Header = () => {
    return (
        <header className='bg-red-600 flex items-center px-5 sm:px-8 h-16 justify-between sticky top-0 z-50'>
            <HeaderLogo />
            <FaGripLines className="sm:hidden" size={24} color='white' />
        </header>
    )
}

export default Header