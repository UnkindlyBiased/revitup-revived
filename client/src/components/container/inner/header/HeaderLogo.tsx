import { Link } from 'react-router-dom'

import header_logo from '../../../../assets/logos/revitup_header_logo.svg'

const HeaderLogo = () => {
    return (
        <Link to={'/'}>
            <img className='h-5 sm:h-7 transition-all' src={header_logo} />
        </Link>
    )
}

export default HeaderLogo