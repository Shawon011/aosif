import { FaArrowDownLong } from "react-icons/fa6";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

function Recruitment() {
  return (
    <>
      <div>
        <div>
          <div className="bg-baselightblack lg:py-5 lg:px-12 md:py-3 md:px-5 py-2 px-3">
            <ul
              className="flex justify-between text-white font-[500] lg:text-[16px]
                md:text-[14px] text-[12px]">
              <li>
                <span>Position</span>
              </li>
              <li>
                <span>Job type</span>
              </li>
              <li>
                <span>Work place</span>
              </li>
              <li>
                <span>Number</span>
              </li>
              <li>
                <span>Time</span>
              </li>
              <li>
                <span>Details</span>
              </li>
            </ul>
          </div>
          <div>
            <Accordion.Root defaultValue="item-1" collapsible>
              <ul className="listItem bg-[#e5e5e5] flex flex-col gap-2">
                <Accordion.Item className="AccordionItem" value="item-1">
                  <li className=" bg-basewhite py-4">
                    <AccordionTrigger className="w-full">
                      <div className="flex items-center justify-between">
                        <span>
                          <strong>Quality inspector</strong>
                        </span>
                        <span>Full-time</span>
                        <span></span>
                        <span></span>
                        <span>2022-03-30</span>
                        <span>
                          <FaArrowDownLong />
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <hr className="mt-4" />
                      <div className="mt-2 px-2">
                        <p className="text-sm">
                          Changtai Xingtai Industrial Park / working system: 6
                          days 8h / / Junior college or above mechanical related
                          major / age: 23-40 years old Reference monthly salary:
                          3.5k-5k/ month + overtime pay
                        </p>
                        <p className="text-sm mt-2">
                          Responsibilities: responsible for sheet metal incoming
                          inspection, sheet metal process inspection,
                          investigation and analysis of quality problems etc
                          Ability requirement: Junior college or above.
                          Understand sheet metal manufacturing knowledge,
                          familiar with work flow and process requirements
                        </p>

                        <h4 className="text-base mt-2 text-baselightblack">
                          <strong>Welfare benefits:</strong>
                        </h4>
                        <div className="mt-2 text-xs">
                          <p>1.Five insurances and one fund</p>
                          <p>2.Salary and promotion mechanism</p>
                          <p>3.Paid leave and special leave</p>
                          <p>
                            4.Holiday benefits, festival fees, year-end
                            bonus(except salesman)
                          </p>
                          <p>
                            5.Relaxed working atmosphere and beautiful working
                            environment
                          </p>
                          <p>
                            6.Convenient transportation to work (Subway No.
                            1/Shuttle)
                          </p>
                          <p>
                            7.Organize regular League building activities to
                            enrich your life
                          </p>
                          <p>
                            8.At Software Park Phase III ,we provides apartment
                            resources /At Changtai we provides accommodation and
                            canteen
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </li>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-2">
                  <li className=" bg-basewhite py-4">
                    <AccordionTrigger className="w-full">
                      <div className="flex items-center justify-between">
                        <span>
                          <strong>Foreign trade salesman</strong>
                        </span>
                        <span>Full-time</span>
                        <span></span>
                        <span>5</span>
                        <span>2022-04-13</span>
                        <span>
                          <FaArrowDownLong />
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <hr className="mt-4" />
                      <div className="mt-2 px-2">
                        <p className="text-sm">
                          Jimei Software Park Phase III / working system: 5 days
                          7.5h / /junior college or above, major in
                          international trade / age: 23-40 years old Reference
                          monthly salary: 5k-7k / month + commission + stage
                          incentive award
                        </p>
                        <p className="text-sm mt-2">
                          Responsibilities: responsible for overseas marketing,
                          development, maintenance, management and service, etc
                          Ability requirements: good communication skills,
                          familiar with the use of office software, good
                          pressure resistance, CET-4 or above, with listening,
                          speaking and writing skills
                        </p>

                        <h4 className="text-base mt-2 text-baselightblack">
                          <strong>Welfare benefits:</strong>
                        </h4>
                        <div className="mt-2 text-xs">
                          <p>1.Five insurances and one fund</p>
                          <p>2.Salary and promotion mechanism</p>
                          <p>3.Paid leave and special leave</p>
                          <p>
                            4.Holiday benefits, festival fees, year-end
                            bonus(except salesman)
                          </p>
                          <p>
                            5.Relaxed working atmosphere and beautiful working
                            environment
                          </p>
                          <p>
                            6.Convenient transportation to work (Subway No.
                            1/Shuttle)
                          </p>
                          <p>
                            7.Organize regular League building activities to
                            enrich your life
                          </p>
                          <p>
                            8.At Software Park Phase III ,we provides apartment
                            resources /At Changtai we provides accommodation and
                            canteen
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </li>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-3">
                  <li className=" bg-basewhite py-4">
                    <AccordionTrigger className="w-full">
                      <div className="flex items-center justify-between">
                        <span>
                          <strong>Domestic salesman</strong>
                        </span>
                        <span>Full-time</span>
                        <span>Xiamen</span>
                        <span>1</span>
                        <span>2022-03-30</span>
                        <span>
                          <FaArrowDownLong />
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <hr className="mt-4" />
                      <div className="mt-2 px-2">
                        <p className="text-sm">
                          Jimei Software Park Phase III / working system: 5
                          days, 7.5h/junior college or above, major unlimited /
                          age requirement: 23-35 years old Reference monthly
                          salary: 3k-6k / month + commission + stage incentive
                          award
                        </p>
                        <p className="text-sm mt-2">
                          Job responsibilities: assist sales manager, dealer
                          development, maintenance, management and service, etc
                          Ability requirements: good communication skills,
                          familiar with the use of office software, with good
                          pressure resistance, welcome fresh graduates
                        </p>

                        <h4 className="text-base mt-2 text-baselightblack">
                          <strong>Welfare benefits:</strong>
                        </h4>
                        <div className="mt-2 text-xs">
                          <p>1.Five insurances and one fund</p>
                          <p>2.Salary and promotion mechanism</p>
                          <p>3.Paid leave and special leave</p>
                          <p>
                            4.Holiday benefits, festival fees, year-end
                            bonus(except salesman)
                          </p>
                          <p>
                            5.Relaxed working atmosphere and beautiful working
                            environment
                          </p>
                          <p>
                            6.Convenient transportation to work (Subway No.
                            1/Shuttle)
                          </p>
                          <p>
                            7.Organize regular League building activities to
                            enrich your life
                          </p>
                          <p>
                            8.At Software Park Phase III ,we provides apartment
                            resources /At Changtai we provides accommodation and
                            canteen
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </li>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-4">
                  <li className=" bg-basewhite py-4">
                    <AccordionTrigger className="w-full">
                      <div className="flex items-center justify-between">
                        <span>
                          <strong>Technical support</strong>
                        </span>
                        <span>Full-time</span>
                        <span>Xiamen</span>
                        <span>1</span>
                        <span>2022-03-30</span>
                        <span>
                          <FaArrowDownLong />
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <hr className="mt-4" />
                      <div className="mt-2 px-2">
                        <p className="text-sm">
                          Jimei Software Park Phase III / working system: 5 days
                          7.5h/junior college or above major in electrical
                          engineering / age requirement: 23-40 years old
                          Reference monthly salary: 3.5k-7k / month + year end
                          bonus
                        </p>
                        <p className="text-sm mt-2">
                          Responsibilities: responsible for pre-sale and
                          after-sales technical support, including technical
                          scheme, design, technical selection quotation, etc
                          Ability requirements: good communication skills,
                          familiar with the use of office software, careful and
                          prudent work, strong sense of responsibility, welcome
                          fresh graduates
                        </p>

                        <h4 className="text-base mt-2 text-baselightblack">
                          <strong>Welfare benefits:</strong>
                        </h4>
                        <div className="mt-2 text-xs">
                          <p>1.Five insurances and one fund</p>
                          <p>2.Salary and promotion mechanism</p>
                          <p>3.Paid leave and special leave</p>
                          <p>
                            4.Holiday benefits, festival fees, year-end
                            bonus(except salesman)
                          </p>
                          <p>
                            5.Relaxed working atmosphere and beautiful working
                            environment
                          </p>
                          <p>
                            6.Convenient transportation to work (Subway No.
                            1/Shuttle)
                          </p>
                          <p>
                            7.Organize regular League building activities to
                            enrich your life
                          </p>
                          <p>
                            8.At Software Park Phase III ,we provides apartment
                            resources /At Changtai we provides accommodation and
                            canteen
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </li>
                </Accordion.Item>
              </ul>
            </Accordion.Root>
          </div>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react/display-name, no-undef, react/prop-types
const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger {...props} ref={forwardedRef}>
        {children}

        {/* eslint-disable-next-line react/jsx-no-undef */}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

// eslint-disable-next-line react/display-name, no-undef, react/prop-types
const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default Recruitment;
