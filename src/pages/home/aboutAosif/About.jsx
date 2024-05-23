import { useState } from "react";
import "./aboutAosif.css";
import HomeFacility from "./homeFacility/HomeFacility";
import HomeProfile from "./homeProfile/HomeProfile";
import HomeCulture from "./homeCulture/HomeCulture";
import HomeCertificates from "./homeCertificates/HomeCertificates";
import HomeRecruitment from "./homeRecruitment/HomeRecruitment";

const listArr = [
  {
    id: 0,
    component: <HomeProfile />,
    title: "Company Profile",
  },
  {
    id: 1,
    component: <HomeCulture />,
    title: "Company Culture",
  },
  {
    id: 2,
    component: <HomeCertificates />,
    title: "Certificates",
  },
  {
    id: 3,
    component: <HomeFacility />,
    title: "Production Facility",
  },
  {
    id: 4,
    component: <HomeRecruitment />,
    title: "Talent recruitment",
  },
];
function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [homeAbouttDetail, setHomeAbouttDetail] = useState(<HomeProfile />);
  return (
    <>
      <div className="about mt-10 h-[100vh]">
        <div className="container m-auto py-10 relative z-10">
          <h1 className="text-center text-[32px] font-bold text-white">
            About Aosif
          </h1>

          <div className="company mt-10">
            <ul className="grid sm:grid-cols-5 grid-cols-2  lg:text-xl text-lg font-bold text-white   ">
              {listArr?.map((list, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className={` py-2 text-center ${
                        index === activeIndex
                          ? "text-red-600 border-b-red-500  border-b-4"
                          : "border-b"
                      }`}>
                      <span
                        className={`truncate cursor-pointer `}
                        onMouseEnter={() => {
                          setHomeAbouttDetail(list.component);
                          setActiveIndex(index);
                        }}>
                        {list?.title}
                      </span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="hContent lg:mt-8 mt-5 w-[950px] lg:h-[380px] h-full">
              {homeAbouttDetail}
            </div>
          </div>
          <div className="flex justify-center mt-[2rem]">
            <a
              className="text-basewhite text-[18px] border-basewhite border py-2 px-10"
              href="#">
              <button>More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
