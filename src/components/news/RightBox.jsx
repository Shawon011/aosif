import { FaArrowRightLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function RightBox({ title, subTitle, Rightdate, img }) {
  return <>
    <div className="rightBox">
        <a className="flex gap-4" href="#">
            <div className='lg:h-[170px] h-[120px] w-[50%]'>
                <img className='h-full w-full' src={img} alt="" />
            </div>
            <div className="leftArea flex flex-col justify-between w-[50%]">
                <div>
                    <h2 className="lg:text-[20px] text-[16px] text-baselightblack line-clamp-1">
                        {/* eslint-disable-next-line react/prop-types */}
                        <b>{title}</b>
                    </h2>
                    {
                        subTitle &&
                        <p className="mt-2 font-normal text-baselightblack line-clamp-2 lg:text-[16px] text-[14px]">{subTitle}</p>
                    }
                   
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-basered">{Rightdate}</span>
                    <FaArrowRightLong/>
                </div>
            </div>
        </a>
    </div>
  </>
}

export default RightBox