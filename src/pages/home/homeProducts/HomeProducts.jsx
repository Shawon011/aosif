import "./homeProduct.css"
import ProductItem from "./productsItem/ProductItem"
import { FaCarBattery } from "react-icons/fa6";
import { FaBox } from "react-icons/fa6";
import { FaSquarePollVertical } from "react-icons/fa6";
import RightProductItem from "./rightProductItem/RightProductItem";


function HomeProducts() {
  return <>
    <div className="mt-5 ">
        <div className="container m-auto relative">
            <h1 className="text-baselightblack text-[32px] font-bold text-center">Products</h1>

            <div className="mt-[5rem] allItem">

                <div className="ml-[300px] lg:block hidden topProductItem">
                    <ProductItem 
                    productIcon=<FaCarBattery className="text-baseblack group-hover:text-basewhite"/> productTitle="Mobile Power Station" 
                    produtDes1="Trailer type Power station" produtDes2="Emergency Power Supply Vehicle" />
                </div>

               <div className="md:flex block justify-between">
               <div className="leftproductItem md:block flex flex-col items-center">
                <div className="lg:ml-[120px] ml-0">
                    <ProductItem 
                    productIcon=<FaCarBattery className="text-baseblack group-hover:text-basewhite"/> productTitle="Mobile Power Station" 
                    produtDes1="Trailer type Power station" produtDes2="Emergency Power Supply Vehicle" />
                </div>

                <div className="lg:ml-[50px] ml-0">
                    <ProductItem 
                    productIcon=<FaBox className="text-baseblack group-hover:text-basewhite"/> productTitle="Silent GenSet" 
                    produtDes1="Standard type" produtDes2="Standard Container Type" produtDes3="Super Silent Type" produtDes4="Economic type"/>
                </div>

                <div>
                    <ProductItem 
                    productIcon=<FaSquarePollVertical className="text-baseblack group-hover:text-basewhite"/> productTitle="Open Genset" 
                    produtDes1="Cummins series genset" produtDes2="Perkins series genset" produtDes3="Doosan series genset" produtDes4="SME series genset" produtDes5="MTU series genset"/>
                </div>
                </div>

                <div className="rightproductItem md:block flex flex-col items-center">
                <div className="lg:ml-[-120px] ml-0">
                    <RightProductItem 
                    productIcon=<FaCarBattery className="text-baseblack group-hover:text-basewhite"/> productTitle="Mobile Power Station" 
                    produtDes1="Trailer type Power station" produtDes2="Emergency Power Supply Vehicle" />
                </div>

                <div className="lg:ml-[-50px] ml-00">
                    <RightProductItem 
                    productIcon=<FaBox className="text-baseblack group-hover:text-basewhite"/> productTitle="Silent GenSet" 
                    produtDes1="Standard type" produtDes2="Standard Container Type" produtDes3="Super Silent Type" produtDes4="Economic type"/>
                </div>

                <div>
                    <RightProductItem 
                    productIcon=<FaSquarePollVertical className="text-baseblack group-hover:text-basewhite"/> productTitle="Open Genset" 
                    produtDes1="Cummins series genset" produtDes2="Perkins series genset" produtDes3="Doosan series genset" produtDes4="SME series genset" produtDes5="MTU series genset"/>
                </div>
                </div>
               </div>
                
            </div>
            <div className="productimgBox lg:block hidden">
                <div className="img w-[300px] h-auto">
                    <img className="w-full h-full" src="/assets/pro06.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  </>
}

export default HomeProducts