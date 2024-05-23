import "./about.css";
import Footer from "../../components/footer/Footer";
import { FaAngleRight } from "react-icons/fa6";
import CompanyProfile from "./companyProfile/CompanyProfile";
import CompanyCulture from "./companyCulture/CompanyCulture";
import Certficates from "./certficates/Certficates";
import ProductionFacility from "./productionFacility/ProductionFacility";
import Recruitment from "./recruitment";
import * as Tabs from "@radix-ui/react-tabs";

function AboutUs() {
  const aboutProjectNav = [
    {
      id: 1,
      title: "Company Profile",
      value: "tab1",
    },
    {
      id: 2,
      title: "Company Culture",
      value: "tab2",
    },
    {
      id: 3,
      title: "Certficates",
      value: "tab3",
    },
    {
      id: 4,
      title: "Production Facility",
      value: "tab4",
    },
    {
      id: 5,
      title: "Talent Recruitment",
      value: "tab5",
    },
  ];

  return (
    <>
      <div className="aboutSection">
        <div className="md:h-[380px] h-full">
          <img className="w-full h-full" src="/assets/about.jpg" alt="" />
        </div>
        <div className="container m-auto">
          <div className="md:mt-10 mt-[6rem] md:flex block justify-between relative">
            <div className="w-full">
              <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List
                  className="TabsList"
                  aria-label="Manage your account">
                  <div className="flex">
                    <ul className="grid lg:grid-cols-5 grid-cols-3 aboutItems lg:gap-2 gap-5">
                      {aboutProjectNav.map((item, i) => (
                        <Tabs.Trigger
                          className="TabsTrigger"
                          key={i}
                          value={item.value}>
                          <li>
                            <button className="w-full">{item.title}</button>
                          </li>
                        </Tabs.Trigger>
                      ))}
                    </ul>

                    <div
                      className="flex items-center md:justify-end justify-start gap-1 text-[14px] 
                            md:w-[30%] md:relative absolute lg:top-0 top-[-3rem]">
                      <span>Home</span>
                      <span>
                        <FaAngleRight className="text-[13px]" />
                      </span>
                      <span>About us</span>
                      <span>
                        <FaAngleRight className="text-[13px]" />
                      </span>
                    </div>
                  </div>
                </Tabs.List>

                <div className="mt-5">
                  <Tabs.Content className="TabsContent" value="tab1">
                    <CompanyProfile />
                  </Tabs.Content>

                  <Tabs.Content className="TabsContent" value="tab2">
                    <CompanyCulture />
                  </Tabs.Content>

                  <Tabs.Content className="TabsContent" value="tab3">
                    <Certficates />
                  </Tabs.Content>

                  <Tabs.Content className="TabsContent" value="tab4">
                    <ProductionFacility />
                  </Tabs.Content>

                  <Tabs.Content className="TabsContent" value="tab5">
                    <Recruitment />
                  </Tabs.Content>
                </div>
              </Tabs.Root>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
