import { BsBagDashFill } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineMailOpen } from "react-icons/hi";

function ContactCard() {

    const contactCardData = [
        {
            icon: <BsBagDashFill className="lg:w-[50px] lg:h-[50px]
            w-[30px] h-[30px] text-basered"/>,
            contactTitle: "Sales Dept. Contact",
            phone1: "The phone: 0086-18250813595",
            email: "Email：aosif@aosif.com.cn",
            address: "address：Unit 1001,No.1 of Cheng Yi North Street,Software Park Phase III ,Xiamen ,China",
        },
        {
            icon: <TfiHeadphoneAlt className="lg:w-[50px] lg:h-[50px]
            w-[30px] h-[30px] text-basered"/>,
            contactTitle: "Service Dept. Contact",
            phone1: "Service hotline : 0086-592-2620159",
            phone2: "Service network : 0086-592-2620128",
        },
        {
            icon: <HiOutlineMailOpen className="lg:w-[50px] lg:h-[50px]
            w-[30px] h-[30px] text-basered"/>,
            contactTitle: "Contact on line",
            email: "E-mail : aosif@aosif.com.cn"
        },
    ]

  return <>
        <div className="flex flex-col gap-5">
            {
                contactCardData.map((item, i)=> (
                    <div key={i} className="w-full border border-[#2222]">
                    <div className="flex lg:gap-[3rem] gap-[1rem] lg:h-[190px] h-full items-center px-[1rem] py-5">
                        <div className="ContactIcon lg:py-7 lg:px-7 py-4 px-4 
                        rounded-[50%] border border-solid">
                            {item.icon}
                        </div>
                        <div>
                            <h1 className="lg:text-[20px] text-[16px] font-bold">
                                {item.contactTitle}
                            </h1>
                            <div className="mt-3 text-baselightblack lg:text-[16]
                            text-[14px]">
                                {
                                    item.phone1 && <p>{item.phone1}</p>
                                }
                                {
                                    item.phone2 && <p>{item.phone2}</p>
                                }
                                {
                                    item.email && <p>{item.email}</p>
                                }
                                {
                                    item.address && <p>{item.address}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
  </>
}

export default ContactCard