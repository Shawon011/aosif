import "./hoverCard.css"

// eslint-disable-next-line react/prop-types
function HoverCard({ img, text, icon, className, href, textClassName, imgClassName, textpClassName, aClassName, contentCalass }) {
  return <>
    
    <div  className={className}>
      <a className={aClassName} href={href}>
        <div className="hoverCard">
                <div className={`content ${contentCalass}`}>
                    <div className={`imgBox ${imgClassName}`}>
                        <img className="w-full h-full" src={img} alt="" />
                    </div>
                    {
                      icon && 
                      <div className="icon">
                        <img src={icon} alt="" />
                    </div> 
                    }
                    {
                      text && 
                      <div className={textClassName}>
                        <p className={`text-center text-[16px] z-10 ${textpClassName}`}>{text}</p>
                      </div>
                    }
                </div>
        </div>
      </a>
    </div>
  </>
}

export default HoverCard