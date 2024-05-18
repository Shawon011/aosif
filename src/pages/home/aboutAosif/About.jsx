import { useState } from "react"
import "./aboutAosif.css"
import HomeFacility from "./homeFacility/HomeFacility"
import HomeProfile from "./homeProfile/HomeProfile"
import HomeCulture from "./homeCulture/HomeCulture"
import HomeCertificates from "./homeCertificates/HomeCertificates"
import HomeRecruitment from "./homeRecruitment/HomeRecruitment"

function About() {

    const [ homeAbouttDetail, setHomeAbouttDetail ] = useState(<HomeProfile/>)

  return <>
    <div className="about mt-10 h-[100vh]">
        <div className="container m-auto py-10 relative z-10">
            <h1 className="text-center text-[32px] font-bold text-white">About Aosif</h1>

            <div className="company mt-10">
                <ul className="grid sm:grid-cols-5 grid-cols-2 justify-between lg:text-[16px] text-[12px] font-bold text-white sm:place-items-center sm:gap-0 gap-5">
                    <li>
                        <span className="truncate cursor-pointer"
                        onMouseEnter={()=> (setHomeAbouttDetail(<HomeProfile/>))}>Company Profile</span>
                    </li>
                    <li>
                        <span className="truncate cursor-pointer"
                        onMouseEnter={()=> (setHomeAbouttDetail(<HomeCulture/>))}>Company Culture</span>
                    </li>
                    <li>
                        <span className="truncate cursor-pointer"
                        onMouseEnter={() => (setHomeAbouttDetail(<HomeCertificates/>))}>Certificates</span>
                    </li>
                    <li>
                        <span className="truncate cursor-pointer"
                            onMouseEnter={()=> (setHomeAbouttDetail(<HomeFacility/>))}>
                            Production Facility
                        </span>
                    </li>
                    <li>
                        <span className="truncate cursor-pointer"
                        onMouseEnter={()=> (setHomeAbouttDetail(<HomeRecruitment/>))}>Talent recruitment</span>
                    </li>
                </ul>
            </div>
           <div className="flex justify-center">
           <div className="hContent lg:mt-8 mt-5 w-[950px] lg:h-[380px] h-full">
                {homeAbouttDetail}
            </div>
           </div>
            <div className="flex justify-center mt-[2rem]">
                <a className="text-basewhite text-[18px] border-basewhite border py-2 px-10" href="#">
                    <button>
                        More
                    </button>
                </a>
            </div>
        </div>
    </div>
  </>
}

export default About