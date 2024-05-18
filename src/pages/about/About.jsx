import "./about.css"
import Footer from "../../components/footer/Footer"
import { FaAngleRight } from "react-icons/fa6";
import CompanyProfile from "./companyProfile/CompanyProfile";
import { useState } from "react";
import CompanyCulture from "./companyCulture/CompanyCulture";
import Certficates from "./certficates/Certficates";
import ProductionFacility from "./productionFacility/ProductionFacility";

function AboutUs() {

    const [aboutDetail, setAboutDetail] = useState(<CompanyProfile/>)

  return <>
    <div className="aboutSection">
        <div className="md:h-[380px] h-full">
            <img className="w-full h-full" src="/assets/about.jpg" alt="" />
        </div>
        <div className="container m-auto">
            <div className="md:mt-10 mt-[6rem] md:flex block justify-between relative">
                <div className="md:w-[70%] w-full">
                    <ul className="grid lg:grid-cols-5 grid-cols-3 aboutItems lg:gap-2 gap-5">
                        <li>
                            <button className="w-full" onClick={()=> (
                                setAboutDetail(<CompanyProfile/>)
                            )}>Company Profile</button>
                        </li>
                        <li>
                            <button className="w-full" onClick={()=> (
                                setAboutDetail(<CompanyCulture/>)
                            )}>Company Culture</button>
                        </li>
                        <li>
                            <button className="w-full" onClick={()=> (
                                setAboutDetail(<Certficates/>)
                            )}>Certficates</button>
                        </li>
                        <li>
                            <button className="w-full" onClick={()=> (
                                setAboutDetail(<ProductionFacility/>)
                            )}>Production Facility</button>
                        </li>
                        <li>
                            <button>Talent Recruitment</button>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center md:justify-end justify-start gap-1 text-[14px] 
                md:w-[30%] md:relative absolute lg:top-0 top-[-3rem]">
                    <span>Home</span>
                    <span><FaAngleRight className="text-[13px]"/></span>
                    <span>About us</span>
                    <span><FaAngleRight className="text-[13px]"/></span>
                </div>
            </div>

            <div className="content mt-10">
               {aboutDetail}
            </div>
        </div>
        <Footer/>
    </div>
  </>
}

export default AboutUs