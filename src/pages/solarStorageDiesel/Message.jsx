
function Message() {
  return <>
    <div className="messageSection">   
        <h1 className="messageTitle text-baselightblack text-[26px] font-[500]">
            Message
        </h1>
        <div className="mt-[3rem]">
            <form>
                <div>
                    <div className="md:flex block gap-5 text-[14px]">
                        <div className="md:w-[33%] w-full">
                            <input className="outline-none border-[#e5e5e5] border w-full px-5 h-[50px] text-basered" type="text" value="Product:Solar+Storage+Diesel Generator system" 
                            readOnly placeholder="标题" />
                        </div>
                        <div className="md:w-[33%] w-full md:my-0 my-5">
                            <input className="outline-none border-[#e5e5e5] border w-full px-5 h-[50px]" type="email" placeholder="Email*"/>
                        </div>
                        <div className="md:w-[33%] w-full">
                            <input className="outline-none border-[#e5e5e5] border w-full px-5 h-[50px]" type="text" placeholder="Phone/WhatsApp/WeChat ( Very important )*" />
                        </div>
                    </div>
                    <div className="mt-5 text-[14px]">
                        <textarea className="h-[140px] outline-none border-[#e5e5e5] border w-full p-8" placeholder="Your question *"></textarea>
                    </div>
                    <p className="text-baselightblack text-[14px] mt-3">We will reply you via email in 24 hours</p>
                    <button className="mt-5 text-basewhite text-[18px] bg-basered h-[50px] w-[200px] hover:bg-baselightred">Submit</button>
                </div>
            </form>
        </div>
    </div>
  </>
}

export default Message