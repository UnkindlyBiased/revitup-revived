import header_logo from '../../../assets/logos/revitup_header_logo.svg'

const Footer = () => {
    return (
        <footer className="bg-black flex items-center h-16 px-5 sm:px-8">
            <span className="text-white">Hello</span>
            <img className='h-10' src={header_logo} />
        </footer>
    )
}

export default Footer