import HoverCard from "../../../components/hoverCard/HoverCard"
import MoreBtn from "../../../components/moreBtn/MoreBtn"


function LiveRoome() {
  return <>
    <div className="mt-10">
        <div className="container m-auto">
            <div className="text-center">
                <h1 className="text-[32px] font-bold text-[#222]">Live room</h1>
                <p className="text-[#222222ce] mt-1 z-10">Through the video, you will know us better</p>
            </div>
            <div className="cardBox sm:flex block gap-10 mt-[3rem]">
                <div>
                  <HoverCard img="/assets/hoverCard1.jpg" text="Factory Live"
                 icon="/assets/player.png" href="#"/>
                </div>
                <div className="sm:mt-0 mt-5">
                  <HoverCard img="/assets/hoverCard2.jpg" text="Products Show"
                  icon="/assets/player.png" href="#"/>
                </div>
            </div>
            <div className="flex justify-center mt-[5rem]">
              <MoreBtn className="bg-basered text-white flex items-center"/>
            </div>
        </div>
    </div>
  </>
}

export default LiveRoome