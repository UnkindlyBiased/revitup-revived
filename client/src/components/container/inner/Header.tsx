import { FaGripLines } from "react-icons/fa"

const Header = () => {
    return (
        <header className="bg-red-600 flex items-center px-5 sm:px-8 h-16 justify-between">
            <span className="text-white text-xl">REVITUP</span>
            <FaGripLines size={24} color="white" />
        </header>
    )
}

export default Header