import "./card.css"

// eslint-disable-next-line react/prop-types
function Card({ proCardTitle, proCardBtn, proCardImg, menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, link1, link2, link3, link4, link5, link6, link7, link8, menuLink}) {

  return <>
    <div className="relative proCardBox w-[300px]">
        <div>
            <a href={menuLink}>
                <div>
                    <div>
                        <img src={proCardImg} alt="" />
                    </div>
                    <div className="procardBtn h-[50px] bg-[#e5e5e5] flex justify-center items-center">
                        <h2 className="truncate">{proCardBtn}</h2>
                    </div>
                </div>
            </a>
        </div>
        <a className="hoverPart bg-baselightred absolute w-full h-full 
        pt-[3rem] px-[2rem] text-basewhite" href={menuLink}>
        <div>
            <h1 className="text-[18px] font-bold card-title">{proCardTitle}</h1>
            <ul className="flex flex-col gap-1 mt-8 text-[14px]">
                { menu1 &&
                    <li>
                        <a href={link1}>{menu1}</a>
                    </li>
                }
                { menu2 && 
                    <li>
                        <a href={link2}>{menu2}</a>
                    </li>
                }
                { menu3 && 
                    <li>
                        <a className="truncate" href={link3}>{menu3}</a>
                    </li>
                }
                { menu4 &&
                    <li>
                        <a href={link4}>{menu4}</a>
                    </li>
                }
                { menu5 &&
                    <li>
                        <a href={link5}>{menu5}</a>
                    </li>
                }
                { menu6 && 
                    <li>
                        <a href={link6}>{menu6}</a>
                    </li>
                }
                { menu7 && 
                    <li>
                        <a href={link7}>{menu7}</a>
                    </li> 
                }
                { menu8 &&
                    <li>
                        <a href={link8}>{menu8}</a>
                    </li>
                }
            </ul>
        </div>
        </a>
    </div>
  </>
}

export default Card