import  "./contactIcon.css"
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsAirplaneEnginesFill } from "react-icons/bs";

function ContactIcon() {

    const contactData = [
        {
            text: "0086-592-2620159",
            icon: <FaPhone className="text-[24px] w-[48px] text-white"/>
        },
        {
            text: "0086-592-2620159",
            icon: <MdEmail className="text-[24px] w-[48px] text-white"/>
        },
        {
            icon: <BsAirplaneEnginesFill className="text-[24px] w-[48px] text-white"/>
        },
    ]

  return <>
    <div className="">
        <div className="fixed z-40 top-[50%] right-[40px] mt-[-120px]">
            <div className="flex flex-col gap-4">
            {
               contactData.map((item , i)=> (
                    <div key={i} className="iconItem flex items-center gap-5">
                        {
                            item.text &&
                            <div className="contactText">
                                <span>{item.text}</span>
                            </div>
                        }
                        <div className="iconBox bg-[#222] py-3 rounded-[5px]">
                            {item.icon}
                        </div>
                    </div>
               )) 
            }
            </div>
        </div>
    </div>
  </>
}

export default ContactIcon