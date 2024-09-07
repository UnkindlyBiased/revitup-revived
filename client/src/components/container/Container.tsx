import { Outlet } from "react-router-dom"

import ContentBox from "../../hoc/ContentBox"
import Footer from "./inner/footer/Footer"
import Header from "./inner/header/Header"

const Container = () => {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="flex-grow">
                <ContentBox>
                    <Outlet />
                </ContentBox>
            </div>
            <Footer />
        </div>
    )
}

export default Container