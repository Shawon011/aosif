import NewsSlider from "./NewsSlider"
import MoreBtn from "../moreBtn/MoreBtn"

function News() {
  return <>
        <div className="mt-[8rem]"> 
            <div className="bg-[#f4f4f4]  py-[5rem]">
                <div className="container m-auto">
                    <h1 className="text-center text-[32px] font-bold text-[#222]">News</h1>
                    <div className="mt-5">
                        <NewsSlider/>
                    </div>
                    <div className="flex justify-center mt-[5rem]">
                        <MoreBtn className="bg-[#fff] text-[#1a1a1a] flex items-center border border-solid"/>
                    </div>
                </div>
            </div>
            <hr />
        </div>
  </>
}

export default News