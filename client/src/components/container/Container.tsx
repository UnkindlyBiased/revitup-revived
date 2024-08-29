import ContentBox from "../../hoc/ContentBox"
import Footer from "./inner/Footer"
import Header from "./inner/Header"

const Container = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-grow">
                <ContentBox>
                    <span className="text-xl">Now I can tell you about thos</span>
                </ContentBox>
            </div>
            <Footer />
        </div>
    )
}

export default Container