import "./hcertificates.css"

// eslint-disable-next-line react/prop-types
function Hcertificates({ img, text, className, href, textClassName }) {
  return <>
    
    <div  className={className}>
      <a href={href}>
        <div className="hoverCard">
                <div className="content bg-basewhite">
                    <div className="imgBox">
                        <div className="h-[150px] flex justify-center">
                            <img className="h-full" src={img} alt="" />
                        </div>
                    </div>
                    <hr />
                    {
                      text && 
                      <div className={textClassName}>
                        <p className="text-center text-[16px] z-10 text-baseblack">{text}</p>
                      </div>
                    }
                </div>
        </div>
      </a>
    </div>
  </>
}

export default Hcertificates