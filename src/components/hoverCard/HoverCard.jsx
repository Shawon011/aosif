import "./hoverCard.css"

// eslint-disable-next-line react/prop-types
function HoverCard({ img, text, icon, className, href, textClassName, imgClassName }) {
  return <>
    
    <div  className={className}>
      <a href={href}>
        <div className="hoverCard">
                <div className="content">
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
                        <p className="text-center mt-1 text-[18px] z-10">{text}</p>
                      </div>
                    }
                </div>
        </div>
      </a>
    </div>
  </>
}

export default HoverCard