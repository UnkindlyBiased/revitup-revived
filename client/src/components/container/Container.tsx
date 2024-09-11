import { Outlet } from "react-router-dom"
import { Toaster } from "../ui/toaster"

import ContentBox from "../../hoc/content-box"
import Footer from "./inner/footer/Footer"
import Header from "./inner/header/Header"

const Container = () => {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="flex-grow">
                <ContentBox>
                    <Outlet />
                    <Toaster />
                </ContentBox>
            </main>
            <Footer />
        </div>
    )
}

export default Container