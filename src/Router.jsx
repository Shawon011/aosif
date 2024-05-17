import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import AboutUs from "./pages/about/About"
import Products from "./pages/products/Products"
import NewEnergySeries from "./pages/newEnergySeries/NewEnergySeries"
import SolarStorageDiesel from "./pages/solarStorageDiesel/SolarStorageDiesel"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
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