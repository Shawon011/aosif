import { FaAngleRight } from "react-icons/fa6";
import ProductCard from "../productCard/ProductCard";

function ProductsItem() {
  return <>
    <div className="mt-[4rem]">
        <div className="container m-auto">
            <div className="flex justify-between">
                <h1 className="text-[24px] font-bold text-baselightblack">Products</h1>
                <div>
                    <a className="flex items-center underline hover:no-underline" href="#">
                     <span className="text-[#2222226c]">Home</span>
                    <span className="flex items-center"> 
                    <FaAngleRight className="text-[14px]"/> Products</span>
                    </a>
                </div>
            </div>
            <hr className="mt-5"/>
            <div>
                <ProductCard/>
            </div>
        </div>
    </div>
  </>
}

export default ProductsItem