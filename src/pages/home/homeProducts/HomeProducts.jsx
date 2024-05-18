import "./homeProduct.css"
import ProductItem from "./productsItem/ProductItem"
import { FaCarBattery } from "react-icons/fa6";
import { FaBox } from "react-icons/fa6";
import { FaSquarePollVertical } from "react-icons/fa6";
import RightProductItem from "./rightProductItem/RightProductItem";


function HomeProducts() {
  return <>
    <div className="mt-5 h-[100vh]">
        <div className="container m-auto">
            <h1 className="text-baselightblack text-[32px] font-bold text-center">Products</h1>

            <div className="mt-[5rem]">

                <div className="ml-[300px] topProductItem">
                    <ProductItem 
                    productIcon=<FaCarBattery className="text-baseblack group-hover:text-basewhite"/> productTitle="Mobile Power Station" 
                    produtDes1="Trailer type Power station" produtDes2="Emergency Power Supply Vehicle" />
                </div>

               <div className="flex justify-between">
               <div className="leftproductItem">
                <div className="ml-[120px]">
                    <ProductItem 
                    productIcon=<FaCarBattery className="text-baseblack group-hover:text-basewhite"/> productTitle="Mobile Power Station" 
                    produtDes1="Trailer type Power station" produtDes2="Emergency Power Supply Vehicle" />
                </div>

                <div className="ml-[50px]">
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

                <div className="rightproductItem">
                <div className="ml-[-120px]">
                    <RightProductItem 
                    productIcon=<FaCarBattery className="text-baseblack group-hover:text-basewhite"/> productTitle="Mobile Power Station" 
                    produtDes1="Trailer type Power station" produtDes2="Emergency Power Supply Vehicle" />
                </div>

                <div className="ml-[-50px]">
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
        </div>
    </div>
  </>
}

export default HomeProducts