import Card from "../../components/card/Card"
import Footer from "../../components/footer/Footer"


function NewEnergySeries() {

    const newEnergy = [
        {
            img: "/assets/newEnergy01.png",
            title: "ASM Series",
            menuLink: "#"
        },
        {
            img: "/assets/newEnergy02.jpg",
            title: "Outdoor Liquid Cooling Cabinet",
            menuLink: "#"
        },
        {
            img: "/assets/newEnergy03.jpg",
            title: "Solar+Storage+Diesel Generator system",
            menuLink: "/solarStorageDiesel"
        },
        {
            img: "/assets/newEnergy04.jpg",
            title: "Dual Power Genset of Solar and Fuel",
            menuLink: "#"
        },
    ]

  return <>
    <div>
        <div className="lg:h-[480px] h-full">
            <img src="/assets/product.jpg" alt="" />
        </div>
        <div className="container m-auto md:mt-0 mt-5">
            <div>
                <button className="bg-basered py-3 px-4 text-basewhite text-[14px]">
                    <span>New Energy Series</span>
                </button>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-[5rem]">
                {
                  newEnergy.map((items, i)=> (
                    <div className="flex md:justify-normal justify-center" key={i}>
                        <Card proCardImg={items.img} proCardTitle={items.title} proCardBtn={items.title} menuLink={items.menuLink}/>
                    </div>
                  ))  
                }
            </div>
        </div>
        <Footer/>
    </div>
  </>
}

export default NewEnergySeries