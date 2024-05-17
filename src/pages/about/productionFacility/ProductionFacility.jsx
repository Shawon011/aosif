import HoverCard from "../../../components/hoverCard/HoverCard"

function ProductionFacility() {

    const facilityCardData = [
        {
            img: "/assets/facility01.jpg",
            href: "#",
            text: "workshop interior"
        },
        {
            img: "/assets/facility02.png",
            href: "#",
            text: "Batch orders"
        },
        {
            img: "/assets/facility03.jpg",
            href: "#",
            text: "Testing Center"
        },
        {
            img: "/assets/facility04.jpg",
            href: "#",
            text: "Spraying operation"
        },
        {
            img: "/assets/facility05.jpg",
            href: "#",
            text: "Spraying Pretreatment"
        },
        {
            img: "/assets/facility06.jpg",
            href: "#",
            text: "Polished cleanup"
        },
        {
            img: "/assets/facility07.jpg",
            href: "#",
            text: "Sand blasting"
        },
        {
            img: "/assets/facility08.jpg",
            href: "#",
            text: "Electric welding"
        },
        {
            img: "/assets/facility09.jpg",
            href: "#",
            text: "Sheet metal workshop"
        },
        {
            img: "/assets/facility10.jpg",
            href: "#",
            text: "Workshop Location"
        },
        {
            img: "/assets/facility11.jpg",
            href: "#",
            text: "Office"
        },
        {
            img: "/assets/facility12.jpg",
            href: "#",
            text: "Overview"
        },
    ]

  return <>
    <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {
                facilityCardData.map((items, i)=> (
                    <div key={i} className="facilityCard group">
                    <HoverCard img={items.img} href={items.href}
                    textClassName="btn mt-[1rem] py-2 group-hover:bg-basered
                    group-hover:text-basewhite" text={items.text}/>
                    </div>
                ))
            }
        </div>
    </div>
  </>
}

export default ProductionFacility