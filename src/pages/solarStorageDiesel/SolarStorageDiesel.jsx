import Message from "./Message"
import Footer from "../../components/footer/Footer"
import "./solarStorage.css"

function SolarStorageDiesel() {
  return <>
    <div>
        <div className="lg:h-[480px] h-full">
            <img src="/assets/product.jpg" alt="" />
        </div>
        <div className="container m-auto flex flex-col items-center lg:mt-0 mt-[3rem]">
           <div className="w-[85%]">
                <div className="md:flex block gap-[3rem] items-center justify-center">
                    <div className="md:w-[40%] w-full">
                        <img src="/assets/newEnergy03.jpg" alt="" />
                    </div>
                    <div className="md:w-[50%] w-full">
                        <h1 className="text-baseblack text-[22px]
                        font-bold">
                            Solar+Storage+Diesel Generator system
                        </h1>
                        <hr className="mt-5"/>
                        <div className="mt-5 text-[14px]">
                            <p>Solar+Storage+Diesel Generator micro-grid energy storage system uses li-iron phosphate batteries with excellent performance,which is an intelligent platform product integrating energy storage system and charging pile.</p>

                            <p className="mt-5">Equipped with new energy such as PV,renewable energy,grid,and charging piles form a micro-grid system under the coordinated management and controller of the Energy Storage System(ESS),enabling the park to follow peak and valley electricity prices for energy consumption optimization and user-side response,while meeting the needs of new energy localization, energy demand in multiple scenarios such as consumption and electric vehicle charging.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[5rem]">
                    <img src="/assets/solar+storage.png" alt="" />
                </div>
                <div className="mt-[5rem]">
                    <Message/>
                </div>
           </div>
        </div>
        <Footer/>
    </div>
  </>
}

export default SolarStorageDiesel