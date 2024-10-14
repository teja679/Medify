import Footer from "../Footer/Footer"
import HeroSection from "../HeroSection/HeroSection"
import MiddleSection from "../MiddleSection/MiddleSection"
import Navbar from "../Navbar/Navbar"
import SwiperC from "../Swiper"

const HomePage = () => {
    return (
        <div>
            <Navbar />

            <HeroSection />
            <MiddleSection />
            <SwiperC />
            Blogs & News
            frequenlty asked questions
            <Footer />
        </div>
    )
}

export default HomePage

