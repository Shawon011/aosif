import { FaArrowRightLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
function MoreBtn({ className }) {
  return <>
        <button className={className}>
            <a className="flex items-center justify-center gap-3 w-[200px] h-[60px]" href="#">
                <span className="sm:text-[20px] text-[16px]">MORE</span>
                <FaArrowRightLong/>
            </a>
        </button>
        
  </>
}

export default MoreBtn