import HoverCard from "../../../components/hoverCard/HoverCard"

function Certficates() {
  return <>
    <div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[2rem] justify-center">
             <HoverCard className="border hoverCard pt-5" img="/assets/aboutCertificate01.jpg" text="OEM" href="#" 
             imgClassName="h-[300px] px-5"
             textClassName="bg-[#e7e7e7] py-3 mt-2"/>
            <div> 
             <HoverCard className="border hoverCard pt-5" img="/assets/aboutCertificate02.jpg" text="Product Certificate" href="#"
             imgClassName="h-[300px] px-5" 
             textClassName="bg-[#e7e7e7] py-3 mt-2"/>
            </div>
            <div> 
             <HoverCard className="border hoverCard pt-5" img="/assets/aboutCertificate03.jpg" text="Patent Certificate" href="#" 
             imgClassName="h-[300px] px-5"
             textClassName="bg-[#e7e7e7] py-3 mt-2"/>
            </div>
        </div>
    </div>
  </>
}

export default Certficates