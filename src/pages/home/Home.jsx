
import About from "./aboutAosif/About"
import ContactUs from "../../components/contactUs/ContactUs"
import ContactIcon from "../../components/fixedContactIcon/ContactIcon"
import News from "../../components/news/News"
import Hero from "./heroSection/Hero"
import LiveRoome from "./liveRoom/LiveRoome"
import Footer from "../../components/footer/Footer"
import HomeProducts from "./homeProducts/HomeProducts"


function Home() {
  return <>
    <Hero/>
    <HomeProducts/>
    <About/>
    <LiveRoome/>
    <News/>
    <ContactUs/>
    <Footer/>
    <ContactIcon/>
  </>
}

export default Home