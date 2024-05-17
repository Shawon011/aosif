import ContactCard from "./ContactCard"
import ContactFrom from "./ContactFrom"
import "./contact.css"

function ContactUs() {
  return <>
        <div className="mt-[10rem] relative">
            <div className="container m-auto">
                <div className="text-center">
                    <h1 className="lg:text-[32px] text-[26px] text-baselightblack font-bold">Contact Us</h1>
                </div>
                <div className="mt-[3rem] flex md:justify-normal justify-center gap-[2rem]">
                    <div className="w-[55%] md:block hidden">
                        <ContactCard/>
                    </div>
                    <div className="fromArea md:w-[45%] w-[80%]">
                        <div className="flex justify-center pt-[30px]">
                            <ContactFrom/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
  </>
}

export default ContactUs