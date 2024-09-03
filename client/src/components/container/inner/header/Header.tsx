import HeaderDropdown from "./HeaderDropdown"
import HeaderLogo from "./HeaderLogo"
import HeaderSheet from "./HeaderSheet"

const Header = () => {
    return (
        <header className='bg-red-600 flex items-center px-5 sm:px-8 h-16 justify-between sticky top-0'>
            <div className="flex space-y-5">
                <HeaderLogo />
                <div className='hidden md:flex'></div>
            </div>
            <div className="flex space-x-5">
                <HeaderDropdown />
                <HeaderSheet className="md:hidden" />
            </div>
        </header>
    )
}

export default Header