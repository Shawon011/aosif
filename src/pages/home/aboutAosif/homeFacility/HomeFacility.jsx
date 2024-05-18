import HoverCard from "../../../../components/hoverCard/HoverCard"

function HomeFacility() {

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
    ]

  return <>
    <div>
        <div className="grid lg:grid-cols-4  grid-cols-2 gap-2">
            {
                facilityCardData.map((items, i)=> (
                    <div key={i} className="facilityCard w-full group">
                    <HoverCard img={items.img} href={items.href}
                    imgClassName="w-full h-full" textClassName="btn bg-basewhite" 
                    textpClassName="mt-0" text={items.text}/>
                    </div>
                ))
            }
        </div>
    </div>
  </>
}

export default HomeFacility