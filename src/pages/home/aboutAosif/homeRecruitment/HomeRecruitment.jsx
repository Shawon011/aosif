import { FaArrowDownLong } from "react-icons/fa6";
import "./homeRecruit.css"


function HomeRecruitment() {
  return <>
    <div>
        <div>
            <div className="bg-baselightblack lg:py-5 lg:px-12 md:py-3 md:px-5 py-2 px-3">
                <ul className="flex justify-between text-white font-[500] lg:text-[16px]
                md:text-[14px] text-[12px]">
                    <li><span>Recruitment</span></li>
                    <li><span>Job type</span></li>
                    <li><span>Work place</span></li>
                    <li><span>Number of recruits</span></li>
                    <li><span>Release time</span></li>
                    <li><span>Details</span></li>
                </ul>
            </div>
            <div className="bg-[#e5e5e5] ">
              <ul className="listItem">
                <li className="flex items-center justify-between bg-basewhite py-4">
                  <span>Quality inspector</span>
                  <span>Full-time</span>
                  <span></span>
                  <span></span>
                  <span>2022-03-30</span>
                  <span><FaArrowDownLong/></span>
                </li>
                <hr />
                <li className="flex items-center justify-between bg-basewhite py-4 mt-2">
                  <span>Foreign trade salesman</span>
                  <span>Full-time</span>
                  <span></span>
                  <span>5</span>
                  <span>2022-04-13</span>
                  <span><FaArrowDownLong/></span>
                </li>
                <hr />
                <li className="flex items-center justify-between bg-basewhite py-4 mt-2">
                  <span>Domestic salesman</span>
                  <span>Full-time</span>
                  <span>Xiamen</span>
                  <span>1</span>
                  <span>2022-03-30</span>
                  <span><FaArrowDownLong/></span>
                </li>
                <li className="flex items-center justify-between bg-basewhite py-4 mt-2">
                  <span>Technical support</span>
                  <span>Full-time</span>
                  <span>Xiamen</span>
                  <span>1</span>
                  <span>2022-03-30</span>
                  <span><FaArrowDownLong/></span>
                </li>
              </ul>
            </div>
        </div>
    </div>
  </>
}

export default HomeRecruitment