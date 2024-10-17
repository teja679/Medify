import Footer from "../Footer/Footer"
import Blogs from "../components/Blogs/Blogs"
import FAQs from "../components/FAQs/FAQs"
import HeroSection from "../components/HeroSection/HeroSection"
import MiddleSection from "../components/MiddleSection/MiddleSection"
import Navbar from "../components/Navbar/Navbar"
import SwiperC from "../components/Swiper"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <MiddleSection />
            <SwiperC />
            <Blogs />
            <FAQs />
            <Footer />
        </div>
    )
}

export default HomePage

