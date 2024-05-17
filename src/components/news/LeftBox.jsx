import { FaArrowRightLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function LeftBox({ leftImg, leftTitle, leftDate1, leftDate2 }) {
  return <>
    <div>
    <div className='leftArea relative '>
        <a href="#">
            <div className="lg:h-[360px] h-full">
                <img className='w-full h-full' src={leftImg} alt="" />
             </div>
            <div className="bottomText">
                <span className="truncate px-8 md:text-[18px] text-[16px]">{leftTitle}</span>
                <span className="absolute right-[10px]"><FaArrowRightLong/></span>
            </div>
            <div className="date bg-basered text-basewhite">
                <span>{leftDate1}</span>
                <hr className="w-[65px]"/>
                <span>{leftDate2}</span>
            </div>
            </a>
        </div>
    </div>
  </>
}

export default LeftBox