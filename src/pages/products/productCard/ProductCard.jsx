import Card from "../../../components/card/Card"

function ProductCard() {

    const cardData = [
        {
            img: "/assets/pro01.jpg",
            title: "Open Genst",
            menuLink: "#",
            menu1:{
                href: "#",
                leabel: "Cummins Series",
            },
            menu2:{
                href: "#",
                leabel: "Perkins Series",
            },
            menu3:{
                href: "#",
                leabel: "Doosan Series",
            },
            menu4:{
                href: "#",
                leabel: "SME Series",
            },
            menu5:{
                href: "#",
                leabel: "MTU Series",
            },
            menu6:{
                href: "#",
                leabel: "Shangchai Series",
            },
            menu7:{
                href: "#",
                leabel: "Weichai Series",
            },
            menu8:{
                href: "#",
                leabel: "Yuchai Series",
            },
            menu9:{
                href: "#",
                leabel: "Baudouin Series",
            },
        },
        {
            img: "/assets/pro02.jpg",
            title: "Silent Genset",
            menuLink: "#",
            menu1:{
                href: "#",
                leabel: "Standard type",
            },
            menu2:{
                href: "#",
                leabel: "Standard Container Type",
            },
            menu3:{
                href: "#",
                leabel: "Super Silent Type",
            },
            menu4:{
                href: "#",
                leabel: "Economic type",
            },
        },
        {
            img: "/assets/pro03.jpg",
            title: "Mobile Power Station",
            menuLink: "#",
            menu1:{
                href: "#",
                leabel: "Trailer Type Power Station",
            },
            menu2:{
                href: "#",
                leabel: "Emergency Power Supply Vehicle",
            },
        },
        {
            img: "/assets/pro04.jpg",
            title: "Gas Generator Set",
            menuLink: "#",
            menu1:{
                href: "#",
                leabel: "Perkins series",
            },
            menu2:{
                href: "#",
                leabel: "Doosan series",
            },
            menu3:{
                href: "#",
                leabel: "AOSIF series",
            },
        },
        {
            img: "/assets/pro05.jpg",
            title: "light Towers Series",
            menuLink: "#",
            menu1:{
                href: "#",
                leabel: "light Towers Series",
            },
        },
        {
            img: "/assets/pro06.jpg",
            title: "New Energy Series",
            menuLink: "/newEnergySeries",
            menu1:{
                href: "#",
                leabel: "ASM Series",
            },
            menu2:{
                href: "#",
                leabel: "Outdoor Liquid Cooling Cabinet",
            },
            menu3:{
                href: "/solarStorageDiesel",
                leabel: "Solar+Storage+Diesel Generator system",
            },
            menu4:{
                href: "#",
                leabel: "Dual Power Genset of Solar and Fuel",
            },
        },
        {
            img: "/assets/pro07.jpg",
            title: "Control System",
            menuLink: "#",
            menu1:{
                href: "#",
                leabel: "Synchronization",
            },
            menu2:{
                href: "#",
                leabel: "Automative Transfer Switch",
            },
            menu3:{
                href: "#",
                leabel: "Automatic Control",
            },
        },
        {
            img: "/assets/pro08.jpg",
            title: "Alternator",
            menuLink: "#",
        },
    ]

  return <>
    <div className="mt-[2rem]">
       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {
            cardData.map((items, i)=> (
                <div className="flex justify-center" key={i}>
                    <Card proCardImg={items.img} proCardBtn={items.title}
                    proCardTitle={items.title}
                    menuLink={items.menuLink}
                    link1={items.menu1?.href} menu1={items.menu1?.leabel}
                    link2={items.menu2?.href} menu2={items.menu2?.leabel}
                    link3={items.menu3?.href} menu3={items.menu3?.leabel}
                    link4={items.menu4?.href} menu4={items.menu4?.leabel}
                    link5={items.menu5?.href} menu5={items.menu5?.leabel}
                    link6={items.menu6?.href} menu6={items.menu6?.leabel}
                    link7={items.menu7?.href} menu7={items.menu7?.leabel}
                    link8={items.menu8?.href} menu8={items.menu8?.leabel}
                    />
                </div>
            ))
            }
       </div>
    </div>
  </>
}

export default ProductCard