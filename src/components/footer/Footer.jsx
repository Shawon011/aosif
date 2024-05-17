import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './footer.css'

function Footer() {

    const leftData = [
        {
            icon: <FaLocationDot/>,
            text: "Unit 1001,No.1 of Cheng Yi North Street, Software Park Phase III ,Xiamen ,China"
        },
        {
            icon: <FaPhoneAlt/>,
            text: "0086-592-2620128 0086-18250813595"
        },
        {
            icon: <MdEmail/>,
            text: "AOSIF@AOSIF.COM.CN"
        },
    ]

    const productsData = [
        { href: "#", leabel: "Open Genst", },
        { href: "#", leabel: "Silent Genset", },
        { href: "#", leabel: "Mobile Power Station", },
        { href: "#", leabel: "Gas Generator Set", },
        { href: "#", leabel: "light Towers Series", },
        { href: "#", leabel: "New Energy Series", },
        { href: "#", leabel: "Control System", },
        { href: "#", leabel: "Alternator", },
    ]

    const aboutUsData = [
        { href: "#", leabel: "Company Profile" },
        { href: "#", leabel: "Company Culture" },
        { href: "#", leabel: "Certificates" },
        { href: "#", leabel: "Production Facility" },
        { href: "#", leabel: "Talent recruitment" },
    ]

    const newsData = [
        { href: "#", leabel: "Company News" },
        { href: "#", leabel: "Industry News" },
        { href: "#", leabel: "Live Room" },
    ] 

  return <>
    <div className="mt-[5rem] bg-[#2a2c2e] pb-3">
        <div className="container m-auto py-10">
            <div className="flex lg:gap-[2rem] gap-[1rem]">
                <div className="footerLeftArea md:w-[33%] w-full">
                    <h2 className="text-[18px] font-bold text-white">Sales Dept. Contact</h2>
                    <div className="mt-5">
                    {
                      leftData.map((obj, i)=> (
                        <div className="flex mt-1 items-center gap-2" key={i}>
                            <div className="text-[#e60012]">{obj.icon}</div>
                            <p className="text-[#ffffff66] text-[14px]">{obj.text}</p>
                        </div>
                      ))  
                    }
                    </div>
                </div>
                <div className="footerFeedArea md:flex hidden gap-[1rem] w-[41%]">
                    <div>
                        <a className="lg:text-[18px] text-[16px] font-bold text-white" href="#">Products</a>
                        <ul className="mt-5">
                            {
                                productsData.map((item, i)=> (
                                    <li className="my-2 text-[#ffffff66] 
                                    lg:text-[14px] text-[12px]" key={i}>
                                        <a className="hover:text-white" href={item.href}>{item.leabel}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <a className="lg:text-[18px] text-[16px] font-bold text-white" href="#">About Us</a>
                        <ul className="mt-5">
                            {
                                aboutUsData.map((item, i)=> (
                                    <li className="my-2 text-[#ffffff66] text-[14px]" key={i}>
                                        <a className="hover:text-white" href={item.href}>{item.leabel}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <a className="lg:text-[18px] text-[16px] font-bold text-white" href="#">News</a>
                        <ul className="mt-5">
                            {
                                newsData.map((item, i)=> (
                                    <li className="my-2 text-[#ffffff66] text-[14px]" key={i}>
                                        <a className="hover:text-white" href={item.href}>{item.leabel}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="footerRightArea w-[25%] md:block hidden">
                    <a className="footerBtn bg-basered text-white lg:text-[16px]
                    text-[14px]" href="#">
                        Danos un mensaje
                    </a>
                </div>
            </div>
        </div>
        <hr/>
            <div className="container m-auto pt-2">
                <p className="flex gap-2 items-center justify-center sm:text-[12px]  text-[10px] text-[#ffffff66]">
                    copyright © 2001-2024 Xiamen Aosif Engineering Ltd.
                    <a className="w-[20px] h-auto" href="#">
                        <img className="w-full h-full" src="/assets/fb.png" alt="" />
                    </a>
                    <a className="w-[20px] h-auto" href="#">
                        <img className="w-full h-full" src="/assets/tw.png" alt="" />
                    </a>
                    <a className="w-[20px] h-auto" href="#">
                        <img className="w-full h-full" src="/assets/yout.png" alt="" />
                    </a>
                    <a className="w-[20px] h-auto" href="#">
                        <img className="w-full h-full" src="/assets/in.png" alt="" />
                    </a>
                    <a className="hover:text-white" href="#"><span>闽ICP备18021334号</span></a>
                </p>
                <p className="text-[#ffffff66] text-center mt-2 text-[12px]">闽公网安备35018102000452号</p>
            </div>
    </div>
  </>
}

export default Footer