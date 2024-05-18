import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import AboutUs from "./pages/about/About"
import Products from "./pages/products/Products"
import NewEnergySeries from "./pages/newEnergySeries/NewEnergySeries"
import SolarStorageDiesel from "./pages/solarStorageDiesel/SolarStorageDiesel"
import HomeFacility from "./pages/home/aboutAosif/homeFacility/HomeFacility"
import HomeProfile from "./pages/home/aboutAosif/homeProfile/HomeProfile"
import HomeCulture from "./pages/home/aboutAosif/homeCulture/HomeCulture"
import HomeCertificates from "./pages/home/aboutAosif/homeCertificates/HomeCertificates"
import HomeRecruitment from "./pages/home/aboutAosif/homeRecruitment/HomeRecruitment"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/homeFacility",
        element: <HomeFacility />
    },
    {
        path: "/homeProfile",
        element: <HomeProfile />
    },
    {
        path: "/homeCulture",
        element: <HomeCulture />
    },
    {
        path: "/homeCertificates",
        element: <HomeCertificates />
    },
    {
        path: "/homeRecruitment",
        element: <HomeRecruitment />
    },
    {
        path: "/about",
        element: <AboutUs />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/newEnergySeries",
        element: <NewEnergySeries />
    },
    {
        path: "/solarStorageDiesel",
        element: <SolarStorageDiesel />
    },

])

export default Router